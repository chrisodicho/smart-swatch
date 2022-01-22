# Smart Swatch CLI ![production](https://github.com/chrisodicho/smart-swatch/actions/workflows/prod.workflow.yml/badge.svg)

The purpose of this library is to implement the color palette generation used in [smart-swatch](https://smart-swatch.netlify.app/) as a node CLI tool.

---

# Installation

```bash
npm install -g smart-swatch
```

# Usage

```bash
npx smart-swatch "#C70833"

# Output
{
  "50": "#ffe2ec",
  "100": "#ffb3c5",
  "200": "#fc839f",
  "300": "#f95278",
  "400": "#f62252",
  "500": "#dd0939",
  "600": "#ad032c",
  "700": "#7c001e",
  "800": "#4d0012",
  "900": "#200005"
}
```

---

Inspired by [smart-swatch](https://github.com/ivan-dalmet/smart-swatch). Special thanks to [Ivan Dalmet](https://ivan.dalmet.fr/) ❤️
