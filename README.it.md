# Castel Ravenloft — Mappa Interattiva

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)

Fork personale della mappa interattiva di **Castel Ravenloft** per la campagna *Curse of Strahd* (D&D 5e).

## Crediti

L'idea originale di rendere la mappa navigabile e interattiva è di [**UnclePlants**](https://github.com/UnclePlants/Ravenloft-Interactive-Map) — il progetto sorgente da cui questa fork è derivata. Tutto il merito per la struttura dell'applicazione, la navigazione per piano e l'interfaccia è suo.

Il contenuto cartografico e testuale è basato su *Curse of Strahd* © Wizards of the Coast. Questo progetto è inteso esclusivamente come riferimento per uso personale da parte di chi possiede già il prodotto originale.

## Struttura

```
index.html        — pagina di ingresso + selettore lingua
i18n.js           — loader locale (UI e contenuto stanze)
rooms.js          — dati stanze in inglese (fonte canonica)
sw.js             — service worker (cache offline)
floors/           — pagine HTML per piano + mappe (.webp)
locales/          — file di localizzazione
  en.json         — stringhe UI in inglese
  it.json         — stringhe UI in italiano
  rooms.it.json   — traduzioni stanze in italiano (in corso)
  CONTRIBUTING.md — guida per aggiungere o completare una lingua
icons/            — icone PWA
```

## Localizzazione

La lingua dell'interfaccia si cambia con i bottoni **IT** e **EN** presenti nella pagina di ingresso e nel pannello info di ogni piano. La scelta viene salvata in `localStorage`.

Il contenuto delle stanze è in inglese per default (`rooms.js`). Le traduzioni si trovano in `locales/rooms.[lang].json` e sovrascrivono la fonte inglese — le stanze non ancora tradotte mostrano automaticamente il testo originale.

Per contribuire una traduzione consulta [`locales/CONTRIBUTING.md`](locales/CONTRIBUTING.md).

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
