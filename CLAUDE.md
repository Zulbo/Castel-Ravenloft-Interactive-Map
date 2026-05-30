# CLAUDE.md

Contesto per Claude Code su questo progetto.

## Cos'è

Fork personale di [Ravenloft-Interactive-Map](https://github.com/UnclePlants/Ravenloft-Interactive-Map)
di UnclePlants — una web app statica (HTML + WebP) che funge da mappa interattiva
navigabile di Castel Ravenloft per la campagna *Curse of Strahd* (D&D 5e).

Usata localmente via Obsidian Custom Frames o direttamente nel browser.

## Struttura app

- `index.html` — landing page, link a `walls.html`
- `walls.html` + `floor*.html` — una pagina per piano, ognuna carica il `.webp` corrispondente
- `rooms.js` — dati delle stanze (descrizioni, link intra-pagina)
- `sw.js` — service worker PWA, gestisce la cache offline
- `manifest.json` — metadati PWA

Tutti i path sono relativi — l'app funziona da `file://` senza server.

## Upstream

```
upstream  https://github.com/UnclePlants/Ravenloft-Interactive-Map.git
origin    https://github.com/Jackson98Tomphson/Castel-Ravenloft-Interactive-Map.git
```

Per sincronizzare con l'originale: `git fetch upstream && git merge upstream/main`

## Obiettivi di questa fork

- Personalizzazioni italiane (testi, etichette stanze)
- Possibili miglioramenti UX (navigazione, ricerca stanze)
- Integrazione Obsidian tramite Custom Frames

## Convenzioni

- Conventional Commits
- Nessuna dipendenza esterna — l'app deve restare statica e funzionante da `file://`
- Non introdurre build step o bundler: plain HTML/JS/CSS
