# ────────────────────────────────────────────────────────────────────────────
# Author mode for the third installment (v3/index.html) in any browser, Positron's own included: serves the v3
# folder on this machine only, lets the page's Save settings write v3/settings.js, and its Export to Krita write
# krita/app3.svg (1920 x 1200, the Krita document's size: link it once as a File Layer "app3" in krita/xrisk.kra and
# Krita shows each export). The old page's author.R (port 7789) and v2's (7790) are separate, so all can run at once.
# Run from the repository's root (where the old index.html is):
#   source("v3/author.R")
# It opens http://127.0.0.1:7791/?author (in Positron, in its Viewer; the address works in any browser while this
# runs). Press Esc in the console to stop it. Needs httpuv, which Shiny already installs.
# ────────────────────────────────────────────────────────────────────────────

local({
  root <- if (file.exists("v3/index.html")) "." else if (file.exists("index.html") && basename(getwd()) == "v3") ".." else
    stop("Run this from the xrisk folder (where v3/ is), or from v3/ itself.")
  ROOT  <- normalizePath(root, winslash = "/", mustWork = TRUE)
  DIR   <- file.path(ROOT, "v3")
  SAVE  <- file.path(DIR, "settings.js")
  KRITA <- file.path(ROOT, "krita", "app3.svg")
  TYPES <- c(html = "text/html; charset=utf-8", js = "text/javascript; charset=utf-8", css = "text/css; charset=utf-8",
             json = "application/json", svg = "image/svg+xml", png = "image/png")
  reply <- function(status, body, type = "text/plain; charset=utf-8")
    list(status = status, headers = list("Content-Type" = type, "Cache-Control" = "no-store"), body = body)
  # a POST from the page itself: the custom header can't be sent by another site's page without a preflight, which
  # is refused (405) as any other request this server doesn't know
  posted <- function(req) req$REQUEST_METHOD == "POST" && !is.null(req$HTTP_X_XRISK3_SAVE)

  app <- list(call = function(req) {
    path <- utils::URLdecode(req$PATH_INFO)
    if (path == "/save-settings") {
      if (!posted(req)) return(reply(405L, "not allowed"))
      body <- req$rook.input$read()
      txt  <- rawToChar(body); Encoding(txt) <- "UTF-8"
      if (!grepl("window.XRISK3_SETTINGS", txt, fixed = TRUE)) return(reply(400L, "not a settings file"))
      writeBin(body, SAVE)                         # the page's bytes as they are (UTF-8, LF)
      message(format(Sys.time(), "%H:%M:%S"), "  saved ", SAVE)
      return(reply(200L, "saved"))
    }
    if (path == "/save-krita") {
      if (!posted(req)) return(reply(405L, "not allowed"))
      body <- req$rook.input$read()
      head <- rawToChar(body[seq_len(min(length(body), 256L))])
      # Krita reads a linked SVG only if its svg tag starts in the first 256 bytes (directions.md)
      if (!startsWith(head, "<?xml") || !grepl("<svg", head, fixed = TRUE)) return(reply(400L, "not an SVG for Krita"))
      dir.create(dirname(KRITA), showWarnings = FALSE)
      writeBin(body, KRITA)                        # rewritten in place, so Krita's File Layer stays linked
      message(format(Sys.time(), "%H:%M:%S"), "  exported ", KRITA)
      return(reply(200L, "exported"))
    }
    if (req$REQUEST_METHOD != "GET") return(reply(405L, "not allowed"))
    if (path == "/") path <- "/index.html"
    if (grepl("(^|/)\\.", path)) return(reply(404L, "not found"))   # nothing hidden
    f <- normalizePath(file.path(DIR, sub("^/+", "", path)), winslash = "/", mustWork = FALSE)
    if (!startsWith(f, paste0(DIR, "/")) || !file.exists(f) || dir.exists(f)) return(reply(404L, "not found"))
    type <- TYPES[tolower(tools::file_ext(f))]
    reply(200L, readBin(f, "raw", file.info(f)$size), if (is.na(type)) "application/octet-stream" else unname(type))
  })

  port <- 7791L
  srv  <- tryCatch(httpuv::startServer("127.0.0.1", port, app), error = function(e) NULL)
  if (is.null(srv)) { port <- httpuv::randomPort(); srv <- httpuv::startServer("127.0.0.1", port, app) }   # 7791 taken
  url <- sprintf("http://127.0.0.1:%d/?author", port)
  message("Author mode (v3): ", url, "\nSave settings writes ", SAVE, "\nExport to Krita writes ", KRITA,
          "\nPress Esc to stop.")
  utils::browseURL(url)
  tryCatch(repeat httpuv::service(100),
           interrupt = function(e) message("Stopped."),
           finally = httpuv::stopServer(srv))
})
