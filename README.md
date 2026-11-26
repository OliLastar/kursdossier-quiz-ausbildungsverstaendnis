# Wissenscheck J+S-Leiterkurs Ski/Snowboard – Ausbildungsverständnis

Quiz zum Thema «Ausbildungsverständnis» des J+S-Leiterkurses Ski/Snowboard, in Deutsch, Französisch und Italienisch (React, Vite). Jedes Thema ist eine eigene Anwendung mit eigenem Repository.

## Verhalten

- Ein Quiz, Sprachwahl DE/FR/IT, Adresse je Sprache: `#/<sprache>` (z. B. `#/fr`)
- Bestanden nur, wenn alle Fragen richtig sind
- Richtige Antworten werden nie angezeigt; bei Nichtbestehen wird das Quiz wiederholt (Fragen und Antworten neu gemischt)
- Zertifikat mit Name, Datum und Uhrzeit nach bestandenem Quiz; es wird nichts gespeichert

## Aufbau

- `src/`: Oberfläche (`App.jsx`), Logik (`lib/quiz.js`), Texte (`lib/i18n.js`), Fragen (`data/quizzes.json`, richtige Antwort nur als Hash)
- `scripts/build-data.py`: erzeugt `src/data/quizzes.json` aus den Fragen-Dateien `data/<sprache>/<thema>.yaml`
- `scripts/validate.py`, `scripts/export_kahoot.py`: Prüfung und Kahoot-Export der Fragen-Dateien
- `tests/logic.test.mjs`: Logiktests (`npm test`)

Die Fragen-Dateien (`data/`) enthalten die richtigen Antworten im Klartext und sind nicht in diesem Repository.

## Befehle

```
npm install
npm run dev
npm run build
npm test
```
