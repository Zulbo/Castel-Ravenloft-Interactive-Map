# Come aggiungere o completare una localizzazione

## Stringhe UI

I file `en.json` e `it.json` contengono le stringhe dell'interfaccia (bottoni di navigazione, testi fissi). Per aggiungere una lingua copiare `en.json` e tradurre i valori.

## Contenuto stanze

Il file `rooms.js` alla radice del progetto è la fonte canonica in inglese (152 stanze).

Per aggiungere la traduzione di una o più stanze in una lingua, creare (o modificare) il file `rooms.[lang].json` in questa cartella. Il file è un oggetto JSON dove ogni chiave è il codice stanza (`"J"`, `"K1"`, `"K7"`, …) e il valore replica la struttura di `rooms.js`:

```json
{
  "J": {
    "title": "Porte di Ravenloft",
    "sections": [
      { "type": "dm",       "text": "Testo solo per il DM..." },
      { "type": "read",     "text": "Testo da leggere ai giocatori..." },
      { "type": "subtitle", "text": "Titolo di sottosezione" },
      { "type": "tombstone","text": "Testo stile lapide" }
    ]
  },
  "K1": {
    "title": "Cortile d'Ingresso",
    "sections": [...]
  }
}
```

Non è necessario tradurre tutte le stanze in una volta: le stanze non ancora tradotte visualizzano automaticamente il testo inglese originale da `rooms.js`.

## Tipi di sezione

| type | descrizione |
|------|-------------|
| `dm` | Nota per il Dungeon Master (sfondo scuro) |
| `read` | Testo da leggere ai giocatori (sfondo blu) |
| `subtitle` | Titolo di sottosezione |
| `tombstone` | Testo in stile lapide (per le cripte) |
