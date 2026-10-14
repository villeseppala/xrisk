# Extinction risk calculator

How small annual risks of human extinction add up over time: the chance of surviving, and what that means for
the expected population, lives, years and value of humanity's future. Every number in the table can be edited,
and the changes can be compared with a second scenario.

One self-contained page, no build step: open `index.html` in a browser, or see it live at
https://villeseppala.github.io/xrisk/. It is also shown in the article at
https://villeseppala.github.io/interests/articles/201.html.

## Author mode

In R (Positron or RStudio), from this folder:

```r
source("author.R")
```

It opens the page with its Author controls (http://127.0.0.1:7789/?author). From there, Save settings writes
`xriskb_settings.js` (what readers first see), and the Scenes group saves scenes and tours (`tours/`). Press Esc
in the console to stop it.

## Tours

A tour steps readers through prepared views of the page, each with its text:

- `?tour=<name>` opens a tour made in author mode (`tours/<name>.json`), e.g. `index.html?tour=intro`;
  `&step=3` starts at its third step.
- Readers can make their own (Controls → Make a tour) and share them as a link (`#tour=…`).

## Checks

`source("check_parity.R")` compares the page's model, number formatting and cell markup with the original R
version (`reference/app_xrisk/app.R`; needs the V8 package) and writes `parity_out.txt`.

## Files

| File | |
|---|---|
| `index.html` | the app |
| `xriskb_settings.js` | saved settings |
| `tours/` | published tours |
| `author.R` | local server for author mode |
| `check_parity.R` | parity check against the R reference |
| `reference/` | the Shiny versions the page came from, kept runnable |
