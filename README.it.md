# Castel Ravenloft — Mappa Interattiva

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)

Fork personale della mappa interattiva di **Castel Ravenloft** per la campagna *Curse of Strahd* (D&D 5e).

## Crediti

L'idea originale di rendere la mappa navigabile e interattiva è di [**UnclePlants**](https://github.com/UnclePlants/Ravenloft-Interactive-Map) — il progetto sorgente da cui questa fork è derivata. Tutto il merito per la struttura dell'applicazione, la navigazione per piano e l'interfaccia è suo.

Il contenuto cartografico e testuale è basato su *Curse of Strahd* © Wizards of the Coast. Questo progetto è inteso esclusivamente come riferimento per uso personale da parte di chi possiede già il prodotto originale.

## Struttura

```
index.html          — pagina di ingresso
walls.html          — pianta delle mura esterne
floor-2.html        — piano -2
floor-1.html        — piano -1
floor0.html         — piano terra
floor1.html         — piano 1
floor2.html         — piano 2
floor3,4,5,6,7.html — piani 3–7
rooms.js            — dati stanze
sw.js               — service worker (cache offline)
*.webp              — mappe per piano
```

## Uso locale

```bash
git clone https://github.com/Jackson98Tomphson/Castel-Ravenloft-Interactive-Map.git
```

Apri `index.html` in un browser — nessun server necessario, tutti i path sono relativi.

## Integrazione con Obsidian (Custom Frames)

1. Installa il plugin **Custom Frames** nel vault Obsidian
2. Aggiungi un nuovo frame con URL:
   ```
   file:///C:/repos/Castel-Ravenloft-Interactive-Map/index.html
   ```
3. La mappa è accessibile direttamente dal pannello laterale, offline

## Aggiornamenti dall'upstream

```bash
git fetch upstream
git merge upstream/main
```

## Licenza

Il codice e la struttura dell'applicazione sono distribuiti sotto licenza [CC BY-NC-SA 4.0](LICENSE). Uso non commerciale, con attribuzione, share-alike.
