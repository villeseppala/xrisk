// The saved settings of the x-risk calculator's third installment (v3/index.html): what readers first see.
// Written by the page's Save settings (source("v3/author.R")); hand edits are fine. The page loads it from beside
// itself. Anything left out keeps the page's default.
window.XRISK3_SETTINGS = {
  "view": {
    "start": 2027,
    "points": [
      1,
      2
    ],
    "ahead": [
      9,
      99,
      999,
      9999,
      99999,
      999999
    ],
    "show": {
      "graphs": true,
      "riskGraph": true,
      "survGraph": true,
      "cmp": false,
      "real": true,
      "time": true,
      "work": true,
      "scales": true,
      "lines": true,
      "braces": true,
      "spin": false
    },
    "formulas": true,
    "scale": {
      "r": "pow",
      "s": "per"
    },
    "groups": {
      "grpCtl": false,
      "grpOut": false,
      "grpCmp": true,
      "grpElements": false,
      "grpTime": true,
      "grpSim": true
    },
    "optionsWidth": 247,
    "namesWidth": 283,
    "heights": {
      "r": 166,
      "s": 317,
      "t": 370
    },
    "widths": {
      "1": 371,
      "2": 425,
      "3": 411
    },
    "outcome": "years",
    "flip": {
      "r": false,
      "s": false,
      "y": false
    }
  },
  "values": {
    "a": {
      "risk": {
        "0": 0.005783132530120482,
        "1": 0.00006708077082628883,
        "2": 0.0005,
        "3": 0.00035845920957367996
      },
      "surv": {
        "1": 0.9568667369810123,
        "2": 0.7705365526929188
      }
    },
    "b": {
      "risk": {
        "0": 0.01
      },
      "surv": {}
    },
    "rShape": {
      "1": {
        "kind": "exp",
        "h": 0.85
      },
      "2": {
        "kind": "flat",
        "h": 0.5
      },
      "3": {
        "kind": "flat",
        "h": 0.5
      }
    },
    "sShape": {
      "1": {
        "kind": "exp",
        "h": 0.5
      },
      "2": {
        "kind": "exp",
        "h": 0.85
      }
    },
    "drive": {
      "1": "s"
    },
    "pot": {
      "lives": {},
      "value": {}
    }
  },
  "colors": {
    "page": "#1b2b34",
    "names": "#1b2b34",
    "box": "#343d46",
    "label": "#4f5b66",
    "text": "#c0c5ce",
    "muted": "#a7adba",
    "faint": "#a7adba",
    "risk": "#ec5f67",
    "riskFill": "#79424b",
    "odds": "#f99157",
    "surv": "#5fb3b3",
    "years": "#77b4ee",
    "lost": "#c594c5",
    "line": "#c0c5ce",
    "title": "#fac863",
    "bad": "#ec5f67",
    "good": "#99c794",
    "btn": "#343d46",
    "btnLine": "#65737e",
    "lit": "#4f5b66",
    "litLine": "#5fb3b3",
    "border": "#65737e",
    "accent": "#5fb3b3",
    "well": "#1b2b34",
    "sel": "#c594c5",
    "dim": "#a7adba",
    "menu": "#a7adba",
    "ok": "#99c794",
    "faintD": "#a7adba",
    "periods": [
      "#353c4b",
      "#2a4152",
      "#29464d",
      "#344a47",
      "#3d4051",
      "#484a3d"
    ]
  }
};
