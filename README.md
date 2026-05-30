# Castle Ravenloft — Interactive Map

[![it](https://img.shields.io/badge/lang-it-green.svg)](README.it.md)

Personal fork of the interactive map of **Castle Ravenloft** for the *Curse of Strahd* campaign (D&D 5e).

## Credits

The original idea of turning the castle map into a navigable, interactive application belongs to [**UnclePlants**](https://github.com/UnclePlants/Ravenloft-Interactive-Map) — this fork is derived from their work. All credit for the app structure, floor-by-floor navigation and interface goes to them.

Map and room content is based on *Curse of Strahd* © Wizards of the Coast. This project is intended solely as a personal reference tool for those who already own the original product.

## Structure

```
index.html        — entry page + language selector
i18n.js           — locale loader (UI strings + room overrides)
rooms.js          — room data in English (canonical source)
sw.js             — service worker (offline cache)
floors/           — floor HTML pages + map images (.webp)
locales/          — i18n files
  en.json         — UI strings in English
  it.json         — UI strings in Italian
  rooms.it.json   — room content overrides in Italian (in progress)
  CONTRIBUTING.md — guide for adding or completing a translation
icons/            — PWA icons
```

## Localization

The UI language can be switched between **IT** and **EN** via the selector on the entry page and in each floor's info panel. The choice is saved in `localStorage`.

Room content defaults to English (`rooms.js`). Translated rooms are loaded from `locales/rooms.[lang].json` and overlay the English source — untranslated rooms fall back to English automatically.

To contribute a translation see [`locales/CONTRIBUTING.md`](locales/CONTRIBUTING.md).

## Local use

```bash
git clone https://github.com/Jackson98Tomphson/Castel-Ravenloft-Interactive-Map.git
```

Open `index.html` in any browser — no server required, all paths are relative.

## Obsidian integration (Custom Frames)

1. Install the **Custom Frames** plugin in your Obsidian vault
2. Add a new frame with URL:
   ```
   file:///C:/repos/Castel-Ravenloft-Interactive-Map/index.html
   ```
3. The map is accessible directly from the side panel, fully offline

## Syncing with upstream

```bash
git fetch upstream
git merge upstream/main
```

## License

Code and app structure are distributed under [CC BY-NC-SA 4.0](LICENSE). Non-commercial use, with attribution, share-alike.
