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

Tutti i path sono relativi — l'app funziona da `file://` in un browser normale.
Per Obsidian Custom Frames serve un server HTTP locale (il webview blocca `file://`).

## Avvio per Obsidian

```powershell
ravenloft   # funzione nel profilo PowerShell, avvia il server in background
```

Oppure manualmente:
```powershell
python -m http.server 8080 --directory "C:\repos\Castel-Ravenloft-Interactive-Map"
```

Custom Frames → URL: `http://localhost:8080/index.html`

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

## Traduzione stanze

Le traduzioni italiane sono in `locales/rooms.it.json`. Flusso per ogni stanza:

1. Jackson incolla l'OCR nella nota Obsidian (`*(da tradurre)*` → testo grezzo)
2. Pulisco gli errori OCR confrontando con `rooms.js` (ancora semantica)
3. Patcho la nota Obsidian con testo pulito:
   - sezioni narrative → `> [!narrazione]`
   - sottotitoli → `## TITOLO`
   - riferimenti ad altre aree → `[[KXX - Titolo|area KXX]]`
4. Aggiorno `rooms.it.json` con le sezioni complete

Se `sections: []`, la stanza mostra titolo IT + sezioni EN (fallback in `getRoom()`).
`linkify()` in `rooms.js` trasforma automaticamente `area KXX` in span cliccabili nel webapp.

### Vault Obsidian — struttura note

Path base: `Assets/05. Locations/Castel Ravenloft/` (vault LMdS)

| Cartella | Stanze |
|---|---|
| `Mura di Ravenloft/` | J, K1–K6 |
| `Piano Terra/` | K7–K24, K29, K64 |
| `Primo Piano/` | K25–K34, K83 |
| `Secondo Piano/` | K35–K46 |
| `Piani 3-7/` | K47–K60 |
| `Piano -1/` | K61–K72, K79 |
| `Piano -2/` | K73–K88 |

Nome file: `KXX - Titolo Italiano.md`
