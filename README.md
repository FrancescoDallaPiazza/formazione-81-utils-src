# formazione-81-utils-src

Utility riutilizzabili per la **formazione sulla sicurezza sul lavoro** ai sensi del D.Lgs. 81/08 e dell'**Accordo Stato-Regioni 17/04/2025** (Rep. Atti n. 59/CSR).

Pensato per essere clonato dalle skill di Claude di Overall Group (`kitformasubito`, `verifica-rischio-ateco`, `checkupformazione81`, ecc.) e fornire una **base normativa unica e versionata** condivisa fra tutte.

---

## 📦 Contenuto

| File | Descrizione |
|------|-------------|
| `allegato_iv_asr2025.js` | Tabella **Allegato IV** ASR 17/04/2025 — 88 divisioni ATECO 2007 classificate in BASSO/MEDIO/ALTO + tabella durate formazione |
| `raccordo_ateco.js` | Funzione `classificaRischio(codice)` — accetta ATECO 2007/2022/2025 e risolve il livello di rischio. Funzione `classificaClienteMultiSede(codici)` — aggrega più codici prendendo il più alto |
| `raccordo_istat_2025.js` | Le **eccezioni misurate** del raccordo ATECO 2025 -> 2022/2007: i 9 codici su 1.290 dove prendere le prime due cifre da la classe sbagliata, i 21 ambigui da segnalare e 1 senza corrispondenza. Generato dalle tavole ISTAT, con la provenienza in testa e la citazione riga per riga |
| `tests/smoke_test.js` | Smoke test rapido sui casi normativi noti (Istruzione=MEDIO da Interpello MLPS 1/2025, Costruzioni=ALTO, Ristorazione=BASSO, ecc.) |

---

## 🎯 Uso (Node.js)

```javascript
const { classificaRischio, classificaClienteMultiSede } = require('./raccordo_ateco');

// Esempio singolo
const r = classificaRischio('56.10.20');
console.log(r.livello);              // 'BASSO'
console.log(r.oreFormazione.totale); // 8 (4 generale + 4 specifica)

// Esempio multi-sede / multi-attività
const agg = classificaClienteMultiSede(['56.11.11', '47.11.10']);
console.log(agg.livelloAggregato);   // 'BASSO' (entrambi sono basso)
```

---

## ⚖️ Fonti normative

1. **Accordo Stato-Regioni 17/04/2025** (Rep. Atti 59/CSR) — vigente, sostituisce ASR 21/12/2011 (Rep. 221/CSR)
2. **Interpello MLPS n. 1/2025** del 18/09/2025 — conferma classificazione "Istruzione (sezione P, codice 85) come attività a rischio medio"
3. **Allegato IV** dell'ASR 17/04/2025 — "Individuazione macrocategorie di rischio e corrispondenze ATECO 2007"
4. ATECO 2007 aggiornamento 2022 (ISTAT)

> ⚠️ **L'Allegato IV resta ancorato ad ATECO 2007 (agg. 2022) e NON ad ATECO 2025**. I codici delle visure camerali in formato ATECO 2025 (obbligatorio dal 1°/04/2025) vanno raccordati alla divisione (2 cifre) ATECO 2007. Nella stragrande maggioranza dei casi la divisione è invariata. Per casi 1:M consultare la tavola di raccordo ISTAT bidirezionale: https://www.istat.it/classificazione/ateco-2025/

---

## 🚦 Principio di flessibilità (Interpello MLPS 11/2013 + 1/2025)

La classificazione ATECO è un **riferimento**, NON un vincolo rigido:
- Lavoratori d'ufficio in azienda manifatturiera → possono frequentare il corso BASSO
- Lavoratori con rischi specifici in azienda BASSO → possono dover frequentare MEDIO/ALTO

Resta facoltà del **datore di lavoro** classificare le mansioni in base alla **valutazione effettiva dei rischi**.

---

## 📋 Changelog

### v1.0 (2026-05-06)
- Prima versione
- Tabella Allegato IV completa (88 divisioni)
- Funzioni `classificaRischio()`, `classificaClienteMultiSede()`
- Smoke test su 7 casi normativi noti


## Il ruolo di questa libreria

Dal 9 settembre 2026 questa libreria non e una raccolta di utilita: e la **base
normativa** del gruppo, a monte di AppOverall e di AppSopralluoghi. La decisione e
scritta in `AppOverall/docs/decisioni/7-base-normativa.md`, con le tre regole che
comporta:

- **R1** — le fonti stanno accanto al generatore, cioe qui.
- **R2** — ogni riga generata deve poter dire da dove viene, con la citazione **per
  riga** e non per tabella. `raccordo_istat_2025.js` e il primo file che la rispetta.
  Le divisioni 30, 86 e 87 in `allegato_iv_asr2025.js` **non** la rispettano: sono
  classificate `ALTO` senza citazione, e l'Allegato IV non le nomina.
- **R3** — chi consuma dichiara la versione. `src/formazione/ateco.ts` di
  AppSopralluoghi dice da dove e generato ma non da quando: manca il commit.

Corollario per chi usa la libreria: **i file generati non si modificano a valle.**
Un difetto nella tabella ATECO si ripara qui e si rigenera.
