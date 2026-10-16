// The saved settings of the x-risk calculator (index.html): its Author controls and what readers first see.
// Written by the page's Save settings (source("author.R"), or open it as index.html?author); hand edits are
// fine. The page loads it from beside itself (the interests site's build inlines it). Anything left out
// keeps the page's default.
window.XRISKB_SETTINGS = {
  "author": {
    "--g-bg": "#1e2933",
    "--g-line-col": "#000000",
    "--row-line-w": "2px",
    "--row-line-col": "#030303",
    "--v-bg": "#152b3c",
    "--v-edit-bg": "#02111c",
    "--title-fs": "19px",
    "--formula-fs": "17.2px",
    "--ar-w": "1.6px",
    "--col-rate": "#c98678",
    "--col-surv": "#8ebecd",
    "--col-rate-c": "#bd5b47",
    "--col-surv-c": "#41b3d2",
    "--col-out": "#ca779f",
    "--col-cum": "#bc4980",
    "graphYears": true,
    "boxTextPx": 16.9
  },
  "view": {
    "start": 2026,
    "points": [
      1,
      2
    ],
    "scale": [
      10,
      100,
      1000,
      10000,
      100000,
      1000000
    ],
    "zoom": 0.837,
    "namesWidth": 353,
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
      "groupElements": true,
      "groupVariables": true,
      "groupTimeScale": true,
      "groupControls": true,
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
      "livesLy": false,
      "livesLoss": false
    },
    "relative": {}
  }
};
