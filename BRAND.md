# Tiny Sports - Brand Specification

**Source of truth: `TinySports_Visual_Identity_v3.md` (Rev 3, August 2026)**, in the brand package at Drive: `SAROGraphics/02_Projects/000002_Our Logos/03_Brand Package/TinySports/`. This repo APPLIES that identity (`src/app/layout.tsx`, `src/app/globals.css`); it no longer defines it. Where this file and the guide disagree, the guide wins.

## Fonts
- Logo: **Baloo 2 ExtraBold** - reserved to the mark, never typeset. The delivered SVGs are outlined, so no font install is needed.
- Headings: **Nunito** (Google Fonts, free)
- Body: **Inter** (Google Fonts, free)

## Colours (v3 anchors)
| Role | Hex |
|---|---|
| Forest (primary) | `#24503F` |
| Teal (accent) | `#3D8E93` |
| Mint (light ground) | `#D8EEE1` |
| Ink (body text) | `#14130F` |
| Bone (warm neutral surfaces) | `#F7F5EE` |
| Status open / closed | `#3A9742` / `#C53637` |

Exact ramp, CMYK values and measured deltas: `tokens/colours.json` and `tokens/tokens.css` in the brand package. Amber accents are retired; amber remains only as a status colour in charts.

## Print application rule
- **White page background** on every page.
- **Body text in dark ink** (`#14130F`).
- **Accent colours (forest, teal) are for logos, headers/header bars and borders/rules only.** No accent or dark page/panel floods.

## Logo
Rev 3 crescent-o lockup, from the brand package `logos-svg/` folder:
- `ts-horizontal-transparent.svg` - site header (in this repo as `public/logo.svg`)
- `ts-reversed-horizontal` (rect stripped) - dark grounds (in this repo as `public/logo-white.svg`)
- `ts-icon-transparent.svg` - favicons and avatars (in this repo as `src/app/icon.svg` and the favicon set)

The older TinySports_LOGO_A (Drive folder `1EiEuhIVDsvSu93DidQRP7B1Wu_Ruc9VI`) is superseded. Do not use it in new work.

The moon orientation (mass on the left, waxing moon as seen from the southern hemisphere) is the Rev 3 default and is what this site ships. Flipping it regenerates the package; the site then needs a two-file logo swap plus favicon set.
