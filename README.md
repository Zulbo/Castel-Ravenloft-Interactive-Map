# Castle Ravenloft — Interactive Map

[![it](https://img.shields.io/badge/lang-it-green.svg)](README.it.md)

Personal fork of the interactive map of **Castle Ravenloft** for the *Curse of Strahd* campaign (D&D 5e).

## Credits

The original idea of turning the castle map into a navigable, interactive application belongs to [**UnclePlants**](https://github.com/UnclePlants/Ravenloft-Interactive-Map) — this fork is derived from their work. All credit for the app structure, floor-by-floor navigation and interface goes to them.

Map and room content is based on *Curse of Strahd* © Wizards of the Coast. This project is intended solely as a personal reference tool for those who already own the original product.

## Structure

```
index.html          — entry page
walls.html          — outer walls plan
floor-2.html        — floor -2
floor-1.html        — floor -1
floor0.html         — ground floor
floor1.html         — floor 1
floor2.html         — floor 2
floor3,4,5,6,7.html — floors 3–7
rooms.js            — room data
sw.js               — service worker (offline cache)
*.webp              — floor map images
```

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
