// The saved settings of the x-risk calculator (index.html): its Author controls and what readers first see.
// Written by the page's Save settings (source("author.R"), or open it as index.html?author); hand edits are
// fine. The page loads it from beside itself (the interests site's build inlines it). Anything left out
// keeps the page's default.
window.XRISKB_SETTINGS = {
  "author": {
    "--page-bg": "#182630",
    "--g-bg": "#1d3c59",
    "--g-line-col": "#000000",
    "--row-line-w": "2px",
    "--row-line-col": "#2b4b5e",
    "--v-bg": "#0e405d",
    "--v-edit-bg": "#0e273a",
    "--area-op": "0.5",
    "--title-fs": "19px",
    "--formula-fs": "17.2px",
    "--ar-w": "1.6px",
    "--col-rate": "#c98678",
    "--col-surv": "#7bb9cc",
    "--col-rate-c": "#bd5b47",
    "--col-surv-c": "#41b3d2",
    "--col-out": "#ca779f",
    "--col-cum": "#c2b456",
    "graphYears": true,
    "boxTextPx": 16.9
  },
  "view": {
    "start": 2026,
    "points": [
      2,
      3
    ],
    "scale": [
      10,
      100,
      1000,
      10000,
      100000,
      1000000
    ],
    "zoom": 0.9,
    "namesWidth": 412,
    "variables": [
      "rate",
      "surv",
      "outann",
      "outcum"
    ],
    "show": {
      "graphs": true,
      "arrows": true,
      "spin": false,
      "formulas": true,
      "change": true,
      "b": true,
      "names": false,
      "note": false,
      "groupElements": false,
      "groupVariables": false,
      "groupTimeScale": true,
      "groupControls": false,
      "comparison": true
    },
    "comparePrevious": false,
    "excludePopulation": true,
    "excludeValue": true,
    "graphScale": {
      "rate": "cum",
      "surv": "full",
      "yrexp": "full",
      "years": "potall",
      "popexp": "pot",
      "lives": "potall",
      "valexp": "pot",
      "valcum": "potall",
      "pop": "all"
    },
    "outcome": "years",
    "lang": "en",
    "views": {
      "rateComp": true,
      "survComp": false,
      "yearsComp": false,
      "yrexpComp": false,
      "livesLy": false,
      "livesLoss": false,
      "popexpLoss": false,
      "valexpLoss": false,
      "valcumLoss": false
    },
    "relative": {}
  }
};
