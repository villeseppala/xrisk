// Ready-made palettes to try on v3 (its Palette group: "palettes" in index.html says which colour does which job). The
// values as published, nothing chosen or changed here:
//   Catppuccin, https://github.com/catppuccin/palette (palette.json): each colour named for its job.
//     MIT License, Copyright (c) 2021 Catppuccin.
//   Radix Colors, https://www.radix-ui.com/colors (@radix-ui/colors 3.0.0, the plain hex values): twelve steps to a
//     scale, each step a job (https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale).
//     MIT License, Copyright (c) Modulz (2021-2022) and WorkOS (2022-present).
//   Base16 schemes, https://github.com/tinted-theming/schemes (spec-0.11, base16/): sixteen slots, base00 the
//     background to base07 the lightest foreground, then eight accents (the slots' jobs: its styling.md). Each scheme
//     with its author, its colours in lower case. MIT License, Copyright (c) 2022 Tinted Theming.
//   Tailwind CSS's colours, https://tailwindcss.com (tailwindcss 3.4.17, lib/public/colors.js): light to dark scales.
//     MIT License, Copyright (c) Tailwind Labs, Inc.
//   Flexoki, https://stephango.com/flexoki (css/flexoki.css): the scales; its roles are in index.html (PAL_STEPS).
//     MIT License, Copyright (c) 2023 Steph Ango.
//   Open Color, https://yeun.github.io/open-color/ (open-color 1.9.1): light to dark scales, steps 0 to 9.
//     MIT License, Copyright (c) 2016 heeyeun.
// Those are the licences' notices; the MIT permission text: https://opensource.org/license/mit
window.XRISK3_PALETTES = {
  base16: {
    'gruvbox-dark': {label: 'Gruvbox', author: 'morhetz, Tinted Theming', dark: true, b: ['#282828', '#3c3836', '#504945', '#665c54', '#928374', '#ebdbb2', '#fbf1c7', '#f9f5d7', '#cc241d', '#d65d0e', '#d79921', '#98971a', '#689d6a', '#458588', '#b16286', '#9d0006']},
    'solarized-dark': {label: 'Solarized', author: 'Ethan Schoonover, modified by aramisgithub', dark: true, b: ['#002b36', '#073642', '#586e75', '#657b83', '#839496', '#93a1a1', '#eee8d5', '#fdf6e3', '#dc322f', '#cb4b16', '#b58900', '#859900', '#2aa198', '#268bd2', '#6c71c4', '#d33682']},
    'rose-pine': {label: 'Rosé Pine', author: 'Emilia Dunfelt', dark: true, b: ['#191724', '#1f1d2e', '#26233a', '#6e6a86', '#908caa', '#e0def4', '#e0def4', '#524f67', '#eb6f92', '#f6c177', '#ebbcba', '#31748f', '#9ccfd8', '#c4a7e7', '#f6c177', '#524f67']},
    'rose-pine-moon': {label: 'Rosé Pine Moon', author: 'Emilia Dunfelt', dark: true, b: ['#232136', '#2a273f', '#393552', '#6e6a86', '#908caa', '#e0def4', '#e0def4', '#56526e', '#eb6f92', '#f6c177', '#ea9a97', '#3e8fb0', '#9ccfd8', '#c4a7e7', '#f6c177', '#56526e']},
    everforest: {label: 'Everforest', author: 'Sainnhe Park', dark: true, b: ['#2d353b', '#343f44', '#475258', '#859289', '#9da9a0', '#d3c6aa', '#e6e2cc', '#fdf6e3', '#e67e80', '#e69875', '#dbbc7f', '#a7c080', '#83c092', '#7fbbb3', '#d699b6', '#9da9a0']},
    kanagawa: {label: 'Kanagawa', author: 'Tommaso Laurenzi', dark: true, b: ['#1f1f28', '#16161d', '#223249', '#54546d', '#727169', '#dcd7ba', '#c8c093', '#717c7c', '#c34043', '#ffa066', '#c0a36e', '#76946a', '#6a9589', '#7e9cd8', '#957fb8', '#d27e99']},
    'tokyo-night-dark': {label: 'Tokyo Night', author: 'Michaël Ball', dark: true, b: ['#1a1b26', '#16161e', '#2f3549', '#444b6a', '#787c99', '#a9b1d6', '#cbccd1', '#d5d6db', '#c0caf5', '#a9b1d6', '#0db9d7', '#9ece6a', '#b4f9f8', '#2ac3de', '#bb9af7', '#f7768e']},
    dracula: {label: 'Dracula', author: 'clach04', dark: true, b: ['#282a36', '#21222c', '#44475a', '#6272a4', '#9ea8c7', '#f8f8f2', '#f8f8f2', '#ffffff', '#ff5555', '#ffb86c', '#f1fa8c', '#50fa7b', '#8be9fd', '#bd93f9', '#ff79c6', '#993333']},
    nord: {label: 'Nord', author: 'arcticicestudio', dark: true, b: ['#2e3440', '#3b4252', '#434c5e', '#4c566a', '#d8dee9', '#e5e9f0', '#eceff4', '#8fbcbb', '#bf616a', '#d08770', '#ebcb8b', '#a3be8c', '#88c0d0', '#81a1c1', '#b48ead', '#5e81ac']},
    'ayu-dark': {label: 'Ayu Dark', author: 'Ayu Theme, Tinted Theming', dark: true, b: ['#0b0e14', '#131721', '#202229', '#3e4b59', '#bfbdb6', '#e6e1cf', '#ece8db', '#f2f0e7', '#f07178', '#ff8f40', '#ffb454', '#aad94c', '#95e6cb', '#59c2ff', '#d2a6ff', '#e6b450']},
    'ayu-mirage': {label: 'Ayu Mirage', author: 'Ayu Theme, Tinted Theming', dark: true, b: ['#1f2430', '#242936', '#323844', '#4a5059', '#707a8c', '#cccac2', '#d9d7ce', '#f3f4f5', '#f28779', '#ffad66', '#ffd173', '#d5ff80', '#95e6cb', '#73d0ff', '#d4bfff', '#f27983']},
    monokai: {label: 'Monokai', author: 'Wimer Hazenberg', dark: true, b: ['#272822', '#383830', '#49483e', '#75715e', '#a59f85', '#f8f8f2', '#f5f4f1', '#f9f8f5', '#f92672', '#fd971f', '#f4bf75', '#a6e22e', '#a1efe4', '#66d9ef', '#ae81ff', '#cc6633']},
    onedark: {label: 'OneDark', author: 'Lalit Magant', dark: true, b: ['#282c34', '#353b45', '#3e4451', '#545862', '#565c64', '#abb2bf', '#b6bdca', '#c8ccd4', '#e06c75', '#d19a66', '#e5c07b', '#98c379', '#56b6c2', '#61afef', '#c678dd', '#be5046']},
    oceanicnext: {label: 'OceanicNext', author: 'voronianski', dark: true, b: ['#1b2b34', '#343d46', '#4f5b66', '#65737e', '#a7adba', '#c0c5ce', '#cdd3de', '#d8dee9', '#ec5f67', '#f99157', '#fac863', '#99c794', '#5fb3b3', '#6699cc', '#c594c5', '#ab7967']},
    'tomorrow-night': {label: 'Tomorrow Night', author: 'Chris Kempson', dark: true, b: ['#1d1f21', '#282a2e', '#373b41', '#969896', '#b4b7b4', '#c5c8c6', '#e0e0e0', '#ffffff', '#cc6666', '#de935f', '#f0c674', '#b5bd68', '#8abeb7', '#81a2be', '#b294bb', '#a3685a']},
    'horizon-dark': {label: 'Horizon', author: 'Michaël Ball', dark: true, b: ['#1c1e26', '#232530', '#2e303e', '#6f6f70', '#9da0a2', '#cbced0', '#dcdfe4', '#e3e6ee', '#e93c58', '#e58d7d', '#efb993', '#efaf8e', '#24a8b4', '#df5273', '#b072d1', '#e4a382']},
    gotham: {label: 'Gotham', author: 'Andrea Leopardi, arranged by Brett Jones', dark: true, b: ['#0c1014', '#11151c', '#091f2e', '#0a3749', '#245361', '#599cab', '#99d1ce', '#d3ebe9', '#c23127', '#d26937', '#edb443', '#33859e', '#2aa889', '#195466', '#888ca6', '#4e5166']},
    danqing: {label: 'DanQing', author: 'Wenhan Zhu (Cosmos)', dark: true, b: ['#2d302f', '#434846', '#5a605d', '#9da8a3', '#cad8d2', '#e0f0ef', '#ecf6f2', '#fcfefd', '#f9906f', '#b38a61', '#f0c239', '#8ab361', '#30dff3', '#b0a4e3', '#cca4e3', '#ca6924']},
    eighties: {label: 'Eighties', author: 'Chris Kempson', dark: true, b: ['#2d2d2d', '#393939', '#515151', '#747369', '#a09f93', '#d3d0c8', '#e8e6df', '#f2f0ec', '#f2777a', '#f99157', '#ffcc66', '#99cc99', '#66cccc', '#6699cc', '#cc99cc', '#d27b53']},
    darktooth: {label: 'Darktooth', author: 'Jason Milkins', dark: true, b: ['#1d2021', '#32302f', '#504945', '#665c54', '#928374', '#a89984', '#d5c4a1', '#fdf4c1', '#fb543f', '#fe8625', '#fac03b', '#95c085', '#8ba59b', '#0d6678', '#8f4673', '#a87322']},
    'atelier-savanna': {label: 'Atelier Savanna', author: 'Bram de Haan', dark: true, b: ['#171c19', '#232a25', '#526057', '#5f6d64', '#78877d', '#87928a', '#dfe7e2', '#ecf4ee', '#b16139', '#9f713c', '#a07e3b', '#489963', '#1c9aa0', '#478c90', '#55859b', '#867469']},
    'gruvbox-light': {label: 'Gruvbox', author: 'morhetz, Tinted Theming', dark: false, b: ['#fbf1c7', '#ebdbb2', '#d5c4a1', '#bdae93', '#7c6f64', '#3c3836', '#282828', '#1d2021', '#cc241d', '#d65d0e', '#d79921', '#98971a', '#689d6a', '#458588', '#b16286', '#9d0006']},
    'solarized-light': {label: 'Solarized', author: 'Ethan Schoonover, modified by aramisgithub', dark: false, b: ['#fdf6e3', '#eee8d5', '#93a1a1', '#839496', '#657b83', '#586e75', '#073642', '#002b36', '#dc322f', '#cb4b16', '#b58900', '#859900', '#2aa198', '#268bd2', '#6c71c4', '#d33682']},
    'rose-pine-dawn': {label: 'Rosé Pine Dawn', author: 'Emilia Dunfelt', dark: false, b: ['#faf4ed', '#fffaf3', '#f2e9de', '#9893a5', '#797593', '#575279', '#575279', '#cecacd', '#b4637a', '#ea9d34', '#d7827e', '#286983', '#56949f', '#907aa9', '#ea9d34', '#cecacd']},
    'ayu-light': {label: 'Ayu', author: 'Ayu Theme, Tinted Theming', dark: false, b: ['#f8f9fa', '#edeff1', '#d2d4d8', '#a0a6ac', '#8a9199', '#5c6166', '#4e5257', '#404447', '#f07171', '#fa8d3e', '#f2ae49', '#6cbf49', '#4cbf99', '#399ee6', '#a37acc', '#e6ba7e']},
    tomorrow: {label: 'Tomorrow', author: 'Chris Kempson', dark: false, b: ['#ffffff', '#e0e0e0', '#c5c8c6', '#b4b7b4', '#969896', '#373b41', '#282a2e', '#1d1f21', '#c82829', '#f5871f', '#eab700', '#718c00', '#3e999f', '#4271ae', '#8959a8', '#a3685a']},
    'danqing-light': {label: 'DanQing', author: 'Wenhan Zhu (Cosmos)', dark: false, b: ['#fcfefd', '#ecf6f2', '#e0f0ef', '#cad8d2', '#9da8a3', '#5a605d', '#434846', '#2d302f', '#f9906f', '#b38a61', '#f0c239', '#8ab361', '#30dff3', '#b0a4e3', '#cca4e3', '#ca6924']},
    'atelier-dune-light': {label: 'Atelier Dune', author: 'Bram de Haan', dark: false, b: ['#fefbec', '#e8e4cf', '#a6a28c', '#999580', '#7d7a68', '#6e6b5e', '#292824', '#20201d', '#d73737', '#b65611', '#ae9513', '#60ac39', '#1fad83', '#6684e1', '#b854d4', '#d43552']},
    'edge-light': {label: 'Edge', author: 'cjayross, Tinted Theming', dark: false, b: ['#fafafa', '#e3e5e8', '#acb1b9', '#9197a1', '#5e646f', '#474752', '#3a3a46', '#2e2e38', '#db7070', '#eba31a', '#ebcc1a', '#7c9f4b', '#509c93', '#6587bf', '#b870ce', '#509c93']},
    github: {label: 'GitHub', author: 'Tinted Theming', dark: false, b: ['#ffffff', '#f6f8fa', '#d1d9e0', '#818b98', '#59636e', '#454c54', '#25292e', '#1f2328', '#cf222e', '#953800', '#9a6700', '#116329', '#1b7c83', '#0969da', '#8250df', '#a40e26']},
    cupcake: {label: 'Cupcake', author: 'Chris Kempson', dark: false, b: ['#fbf1f2', '#f2f1f4', '#d8d5dd', '#bfb9c6', '#a59daf', '#8b8198', '#72677e', '#585062', '#d57e85', '#ebb790', '#dcb16c', '#a3b367', '#69a9a7', '#7297b9', '#bb99b4', '#baa58c']}
  },
  tailwind: {
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    slate:   ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617'],
    gray:    ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#030712'],
    zinc:    ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b'],
    neutral: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0a0a0a'],
    stone:   ['#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917', '#0c0a09'],
    red:     ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a'],
    orange:  ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'],
    amber:   ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03'],
    yellow:  ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006'],
    lime:    ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05'],
    green:   ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16'],
    emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'],
    teal:    ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'],
    cyan:    ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'],
    sky:     ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49'],
    blue:    ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'],
    indigo:  ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b'],
    violet:  ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'],
    purple:  ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764'],
    fuchsia: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e'],
    pink:    ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724'],
    rose:    ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519']
  },
  flexoki: {
    steps: [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950],
    paper: '#fffcf0', black: '#100f0f',
    base:    ['#f2f0e5', '#e6e4d9', '#dad8ce', '#cecdc3', '#b7b5ac', '#9f9d96', '#878580', '#6f6e69', '#575653', '#403e3c', '#343331', '#282726', '#1c1b1a'],
    red:     ['#ffe1d5', '#ffcabb', '#fdb2a2', '#f89a8a', '#e8705f', '#d14d41', '#c03e35', '#af3029', '#942822', '#6c201c', '#551b18', '#3e1715', '#261312'],
    orange:  ['#ffe7ce', '#fed3af', '#fcc192', '#f9ae77', '#ec8b49', '#da702c', '#cb6120', '#bc5215', '#9d4310', '#71320d', '#59290d', '#40200d', '#27180e'],
    yellow:  ['#faeec6', '#f6e2a0', '#f1d67e', '#eccb60', '#dfb431', '#d0a215', '#be9207', '#ad8301', '#8e6b01', '#664d01', '#503d02', '#3a2d04', '#241e08'],
    green:   ['#edeecf', '#dde2b2', '#cdd597', '#bec97e', '#a0af54', '#879a39', '#768d21', '#66800b', '#536907', '#3d4c07', '#313d07', '#252d09', '#1a1e0c'],
    cyan:    ['#ddf1e4', '#bfe8d9', '#a2dece', '#87d3c3', '#5abdac', '#3aa99f', '#2f968d', '#24837b', '#1c6c66', '#164f4a', '#143f3c', '#122f2c', '#101f1d'],
    blue:    ['#e1eceb', '#c6dde8', '#abcfe2', '#92bfdb', '#66a0c8', '#4385be', '#3171b2', '#205ea6', '#1a4f8c', '#163b66', '#133051', '#12253b', '#101a24'],
    purple:  ['#f0eaec', '#e2d9e9', '#d3cae6', '#c4b9e0', '#a699d0', '#8b7ec8', '#735eb5', '#5e409d', '#4f3685', '#3c2a62', '#31234e', '#261c39', '#1a1623'],
    magenta: ['#fee4e5', '#fccfda', '#f9b9cf', '#f4a4c2', '#e47da8', '#ce5d97', '#b74583', '#a02f6f', '#87285e', '#641f46', '#4f1b39', '#39172b', '#24131d']
  },
  opencolor: {
    steps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    white: '#ffffff',
    gray:   ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
    red:    ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
    pink:   ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
    grape:  ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
    violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
    indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
    blue:   ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'],
    cyan:   ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
    teal:   ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
    green:  ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
    lime:   ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
    yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
    orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
  },
  catppuccin: {
    latte: {dark: false, rosewater: '#dc8a78', flamingo: '#dd7878', pink: '#ea76cb', mauve: '#8839ef', red: '#d20f39', maroon: '#e64553',
            peach: '#fe640b', yellow: '#df8e1d', green: '#40a02b', teal: '#179299', sky: '#04a5e5', sapphire: '#209fb5', blue: '#1e66f5',
            lavender: '#7287fd', text: '#4c4f69', subtext1: '#5c5f77', subtext0: '#6c6f85', overlay2: '#7c7f93', overlay1: '#8c8fa1',
            overlay0: '#9ca0b0', surface2: '#acb0be', surface1: '#bcc0cc', surface0: '#ccd0da', base: '#eff1f5', mantle: '#e6e9ef', crust: '#dce0e8'},
    frappe: {dark: true, rosewater: '#f2d5cf', flamingo: '#eebebe', pink: '#f4b8e4', mauve: '#ca9ee6', red: '#e78284', maroon: '#ea999c',
             peach: '#ef9f76', yellow: '#e5c890', green: '#a6d189', teal: '#81c8be', sky: '#99d1db', sapphire: '#85c1dc', blue: '#8caaee',
             lavender: '#babbf1', text: '#c6d0f5', subtext1: '#b5bfe2', subtext0: '#a5adce', overlay2: '#949cbb', overlay1: '#838ba7',
             overlay0: '#737994', surface2: '#626880', surface1: '#51576d', surface0: '#414559', base: '#303446', mantle: '#292c3c', crust: '#232634'},
    macchiato: {dark: true, rosewater: '#f4dbd6', flamingo: '#f0c6c6', pink: '#f5bde6', mauve: '#c6a0f6', red: '#ed8796', maroon: '#ee99a0',
                peach: '#f5a97f', yellow: '#eed49f', green: '#a6da95', teal: '#8bd5ca', sky: '#91d7e3', sapphire: '#7dc4e4', blue: '#8aadf4',
                lavender: '#b7bdf8', text: '#cad3f5', subtext1: '#b8c0e0', subtext0: '#a5adcb', overlay2: '#939ab7', overlay1: '#8087a2',
                overlay0: '#6e738d', surface2: '#5b6078', surface1: '#494d64', surface0: '#363a4f', base: '#24273a', mantle: '#1e2030', crust: '#181926'},
    mocha: {dark: true, rosewater: '#f5e0dc', flamingo: '#f2cdcd', pink: '#f5c2e7', mauve: '#cba6f7', red: '#f38ba8', maroon: '#eba0ac',
            peach: '#fab387', yellow: '#f9e2af', green: '#a6e3a1', teal: '#94e2d5', sky: '#89dceb', sapphire: '#74c7ec', blue: '#89b4fa',
            lavender: '#b4befe', text: '#cdd6f4', subtext1: '#bac2de', subtext0: '#a6adc8', overlay2: '#9399b2', overlay1: '#7f849c',
            overlay0: '#6c7086', surface2: '#585b70', surface1: '#45475a', surface0: '#313244', base: '#1e1e2e', mantle: '#181825', crust: '#11111b'}
  },
  radix: {
    dark: {
      dark: true,
      slate:  ['#111113', '#18191b', '#212225', '#272a2d', '#2e3135', '#363a3f', '#43484e', '#5a6169', '#696e77', '#777b84', '#b0b4ba', '#edeef0'],
      mauve:  ['#121113', '#1a191b', '#232225', '#2b292d', '#323035', '#3c393f', '#49474e', '#625f69', '#6f6d78', '#7c7a85', '#b5b2bc', '#eeeef0'],
      sage:   ['#101211', '#171918', '#202221', '#272a29', '#2e3130', '#373b39', '#444947', '#5b625f', '#63706b', '#717d79', '#adb5b2', '#eceeed'],
      olive:  ['#111210', '#181917', '#212220', '#282a27', '#2f312e', '#383a36', '#454843', '#5c625b', '#687066', '#767d74', '#afb5ad', '#eceeec'],
      sand:   ['#111110', '#191918', '#222221', '#2a2a28', '#31312e', '#3b3a37', '#494844', '#62605b', '#6f6d66', '#7c7b74', '#b5b3ad', '#eeeeec'],
      tomato: ['#181111', '#1f1513', '#391714', '#4e1511', '#5e1c16', '#6e2920', '#853a2d', '#ac4d39', '#e54d2e', '#ec6142', '#ff977d', '#fbd3cb'],
      blue:   ['#0d1520', '#111927', '#0d2847', '#003362', '#004074', '#104d87', '#205d9e', '#2870bd', '#0090ff', '#3b9eff', '#70b8ff', '#c2e6ff'],
      amber:  ['#16120c', '#1d180f', '#302008', '#3f2700', '#4d3000', '#5c3d05', '#714f19', '#8f6424', '#ffc53d', '#ffd60a', '#ffca16', '#ffe7b3'],
      grass:  ['#0e1511', '#141a15', '#1b2a1e', '#1d3a24', '#25482d', '#2d5736', '#366740', '#3e7949', '#46a758', '#53b365', '#71d083', '#c2f0c2'],
      violet: ['#14121f', '#1b1525', '#291f43', '#33255b', '#3c2e69', '#473876', '#56468b', '#6958ad', '#6e56cf', '#7d66d9', '#baa7ff', '#e2ddfe'],
      teal:   ['#0d1514', '#111c1b', '#0d2d2a', '#023b37', '#084843', '#145750', '#1c6961', '#207e73', '#12a594', '#0eb39e', '#0bd8b6', '#adf0dd'],
      indigo: ['#11131f', '#141726', '#182449', '#1d2e62', '#253974', '#304384', '#3a4f97', '#435db1', '#3e63dd', '#5472e4', '#9eb1ff', '#d6e1ff'],
      orange: ['#17120e', '#1e160f', '#331e0b', '#462100', '#562800', '#66350c', '#7e451d', '#a35829', '#f76b15', '#ff801f', '#ffa057', '#ffe0c2'],
      plum:   ['#181118', '#201320', '#351a35', '#451d47', '#512454', '#5e3061', '#734079', '#92549c', '#ab4aba', '#b658c4', '#e796f3', '#f4d4f4']
    },
    light: {
      dark: false,
      slate:  ['#fcfcfd', '#f9f9fb', '#f0f0f3', '#e8e8ec', '#e0e1e6', '#d9d9e0', '#cdced6', '#b9bbc6', '#8b8d98', '#80838d', '#60646c', '#1c2024'],
      mauve:  ['#fdfcfd', '#faf9fb', '#f2eff3', '#eae7ec', '#e3dfe6', '#dbd8e0', '#d0cdd7', '#bcbac7', '#8e8c99', '#84828e', '#65636d', '#211f26'],
      sage:   ['#fbfdfc', '#f7f9f8', '#eef1f0', '#e6e9e8', '#dfe2e0', '#d7dad9', '#cbcfcd', '#b8bcba', '#868e8b', '#7c8481', '#5f6563', '#1a211e'],
      olive:  ['#fcfdfc', '#f8faf8', '#eff1ef', '#e7e9e7', '#dfe2df', '#d7dad7', '#cccfcc', '#b9bcb8', '#898e87', '#7f847d', '#60655f', '#1d211c'],
      sand:   ['#fdfdfc', '#f9f9f8', '#f1f0ef', '#e9e8e6', '#e2e1de', '#dad9d6', '#cfceca', '#bcbbb5', '#8d8d86', '#82827c', '#63635e', '#21201c'],
      tomato: ['#fffcfc', '#fff8f7', '#feebe7', '#ffdcd3', '#ffcdc2', '#fdbdaf', '#f5a898', '#ec8e7b', '#e54d2e', '#dd4425', '#d13415', '#5c271f'],
      blue:   ['#fbfdff', '#f4faff', '#e6f4fe', '#d5efff', '#c2e5ff', '#acd8fc', '#8ec8f6', '#5eb1ef', '#0090ff', '#0588f0', '#0d74ce', '#113264'],
      amber:  ['#fefdfb', '#fefbe9', '#fff7c2', '#ffee9c', '#fbe577', '#f3d673', '#e9c162', '#e2a336', '#ffc53d', '#ffba18', '#ab6400', '#4f3422'],
      grass:  ['#fbfefb', '#f5fbf5', '#e9f6e9', '#daf1db', '#c9e8ca', '#b2ddb5', '#94ce9a', '#65ba74', '#46a758', '#3e9b4f', '#2a7e3b', '#203c25'],
      violet: ['#fdfcfe', '#faf8ff', '#f4f0fe', '#ebe4ff', '#e1d9ff', '#d4cafe', '#c2b5f5', '#aa99ec', '#6e56cf', '#654dc4', '#6550b9', '#2f265f'],
      teal:   ['#fafefd', '#f3fbf9', '#e0f8f3', '#ccf3ea', '#b8eae0', '#a1ded2', '#83cdc1', '#53b9ab', '#12a594', '#0d9b8a', '#008573', '#0d3d38'],
      indigo: ['#fdfdfe', '#f7f9ff', '#edf2fe', '#e1e9ff', '#d2deff', '#c1d0ff', '#abbdf9', '#8da4ef', '#3e63dd', '#3358d4', '#3a5bc7', '#1f2d5c'],
      orange: ['#fefcfb', '#fff7ed', '#ffefd6', '#ffdfb5', '#ffd19a', '#ffc182', '#f5ae73', '#ec9455', '#f76b15', '#ef5f00', '#cc4e00', '#582d1d'],
      plum:   ['#fefcff', '#fdf7fd', '#fbebfb', '#f7def8', '#f2d1f3', '#e9c2ec', '#deade3', '#cf91d8', '#ab4aba', '#a144af', '#953ea3', '#53195d']
    }
  }
};
