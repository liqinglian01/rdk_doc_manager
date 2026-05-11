# RDK DOC

English | [简体中文](./README.md)

A Docusaurus-based multilingual documentation center portal for RDK, focused on homepage aggregation only (no local docs hosting in this repository).

## Features

- 📝 **Multilingual Support**: Chinese (zh-Hans) and English (en) language switching
- 🧭 **Documentation Center First**: Home page works as a unified portal for all document sites
- 🗂️ **Single Source of Truth**: Categories and document entries are managed in `src/data/sites.js` for easy add/remove
- 🌐 **External Link Aggregation**: Every card can point to an external documentation site
- 🚀 **GitHub Pages**: Support for GitHub Pages deployment

## Quick Start

### Requirements

- Node.js >= 18.0

### Install Dependencies

```bash
npm install
```

### Development Mode

Start Chinese portal:
```bash
npm run start
```
Access URL: http://localhost:3000/rdk_doc_manage1/

Start English portal:
```bash
npm run start:en
```
Access URL: http://localhost:3000/rdk_doc_manage1/en/

Start Chinese documentation (without file watching):
```bash
npm run start:no-watch
```
Access URL: http://localhost:3000/rdk_doc_manage1/

Start English documentation (without file watching):
```bash
npm run start:no-watch:en
```
Access URL: http://localhost:3000/rdk_doc_manage1/en/

Start with specific port:
```bash
npm run start:port
```
Access URL: http://localhost:3001/rdk_doc_manage1/

## Build & Deploy

### Build Production Version

```bash
npm run build
```

### Preview Build Result Locally

```bash
npm run serve
```

Access URLs:
- Chinese portal: http://localhost:3000/rdk_doc_manage1/
- English portal: http://localhost:3000/rdk_doc_manage1/en/

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
.
├── i18n/                 # Multilingual translation files
├── src/
│   ├── components/       # React components
│   ├── data/             # Doc center category/card configuration
│   ├── pages/            # Page components
│   └── theme/            # Docusaurus theme components
├── static/               # Static resources
├── docusaurus.config.js  # Docusaurus configuration
└── package.json
```

## Core Features

### Unified Doc Center Maintenance

The home page category tree and site cards are now maintained from one place: `src/data/sites.js`.

- `DOC_CENTER_CONFIG.categories`: add/remove top-level categories
- `DOC_CENTER_CONFIG.entries`: add/remove documentation cards
- Chinese and English copy live in the same config object to avoid duplicated edits

### Portal-Only Mode

All local docs plugin routes are disabled in this repository.  
Documentation content should be hosted in dedicated doc sites and aggregated here via `src/data/sites.js`.

Local Chinese/English documentation content directories have been removed from this repository (including `docs/`, doc subsite folders, and docs-content translations under `i18n/en`).

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run clear` | Clear Docusaurus cache |
| `npm run swizzle` | Customize theme components |
| `npm run write-translations` | Extract translation content |

## Tech Stack

- **Docusaurus**: 3.7.0
- **React**: 18.x

