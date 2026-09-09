/**
 * ============================================================================
 *  RACCORDO ISTAT ATECO 2025 -> 2022/2007 — le eccezioni misurate
 * ============================================================================
 *
 *  PROVENIENZA (regola R3: chi consuma dichiara la versione)
 *  --------------------------------------------------------
 *  Generato il 2026-09-09 da AppFormazione, commit 0cf8a5e,
 *  incrociando due tavole ufficiali ISTAT:
 *
 *    StrutturaATECO-2025-IT-EN-DE.xlsx
 *      foglio 'ATECO 2025 Struttura' — i 1.290 codici foglia della
 *      classificazione nuova. Foglia = nodo senza figli, non gerarchia 5:
 *      contando la gerarchia se ne perdono 370.
 *
 *    Aggiornamento-2026-Tavola-raccordo-bidirezionale-ATECO-2025-ATECO-2022-italiano.xlsx
 *      foglio 'ATECO 2025 vs ATECO 2022' — la corrispondenza ufficiale.
 *      ATECO 2022 e l'aggiornamento di ATECO 2007 e non ne cambia le
 *      divisioni: a livello di divisione — che e quello che l'Allegato IV
 *      usa — 2022 e 2007 coincidono.
 *
 *  PERCHE SERVE
 *  ------------
 *  Riempie RACCORDO_PUNTUALE_2025_2007, che era vuoto con la nota «sara
 *  popolata su necessita». L'assunzione che le divisioni siano stabili fra
 *  2007 e 2025 e vera quasi sempre: su 1.290 codici foglia, prendere le
 *  prime due cifre sbaglia in 9 casi.
 *
 *  La direzione conta piu del numero:
 *    - 2 di SOTTOFORMAZIONE: la classe risulta piu bassa del vero.
 *      Sono i casi che espongono.
 *    - 7 di sovraformazione: la classe risulta piu alta del vero.
 *      Costano ore, non conformita.
 *
 *  ATTENZIONE: l'elenco e calcolato contro la tabella ALLEGATO_IV di questa
 *  libreria, che classifica anche le divisioni 30, 86 e 87 — che l'Allegato IV
 *  non nomina. Se quelle tre righe cambiano, questo elenco va ricalcolato.
 * ============================================================================
 */

'use strict';

// ──────────────────────────────────────────────────────────────────────────
//  Le eccezioni: qui le prime due cifre danno la risposta sbagliata.
//  Ogni riga porta la sua corrispondenza ISTAT, non una nota generica.
// ──────────────────────────────────────────────────────────────────────────
const ECCEZIONI_2025 = {
  // SOTTOFORMAZIONE — divisione 68 dice basso, il raccordo ISTAT porta a alto
  "68.12.00": {
    ateco2007: "41.10.00",
    titolo2025: "Sviluppo di progetti immobiliari",
    divisioni2022: ["41", "42"],
    note: "ISTAT 2025->2022: 68.12.00 -> 41.10.00, 42.99.01. Divisione 68 (basso) contro divisione 41/42 (alto).",
  },
  // SOTTOFORMAZIONE — divisione 93 dice basso, il raccordo ISTAT porta a medio
  "93.13.01": {
    ateco2007: "85.51.00",
    titolo2025: "Attività di studi di yoga, pilates e Tai Chi",
    divisioni2022: ["85"],
    note: "ISTAT 2025->2022: 93.13.01 -> 85.51.00. Divisione 93 (basso) contro divisione 85 (medio).",
  },
  // sovraformazione — divisione 35 dice alto, il raccordo ISTAT porta a medio
  "35.24.00": {
    ateco2007: "52.10.10",
    titolo2025: "Stoccaggio di gas nell'ambito dei servizi di fornitura della rete",
    divisioni2022: ["52"],
    note: "ISTAT 2025->2022: 35.24.00 -> 52.10.10. Divisione 35 (alto) contro divisione 52 (medio).",
  },
  // sovraformazione — divisione 53 dice medio, il raccordo ISTAT porta a basso
  "53.30.00": {
    ateco2007: "47.99.10",
    titolo2025: "Attività di servizi di intermediazione per attività postali e di corriere",
    divisioni2022: ["47", "61", "62", "63", "82"],
    note: "ISTAT 2025->2022: 53.30.00 -> 47.99.10, 61.90.99, 62.09.09, 63.12.00, 63.99.00, 82.99.99. Divisione 53 (medio) contro divisione 47/61/62/63/82 (basso).",
  },
  // sovraformazione — divisione 84 dice medio, il raccordo ISTAT porta a basso
  "84.11.20": {
    ateco2007: "82.99.10",
    titolo2025: "Servizi di gestione esattoriale per conto terzi",
    divisioni2022: ["82"],
    note: "ISTAT 2025->2022: 84.11.20 -> 82.99.10. Divisione 84 (medio) contro divisione 82 (basso).",
  },
  // sovraformazione — divisione 85 dice medio, il raccordo ISTAT porta a basso
  "85.61.00": {
    ateco2007: "47.99.10",
    titolo2025: "Attività di servizi di intermediazione per corsi e tutor",
    divisioni2022: ["47", "61", "62", "63", "82"],
    note: "ISTAT 2025->2022: 85.61.00 -> 47.99.10, 61.90.99, 62.09.09, 63.12.00, 63.99.00, 82.99.99. Divisione 85 (medio) contro divisione 47/61/62/63/82 (basso).",
  },
  // sovraformazione — divisione 43 dice alto, il raccordo ISTAT porta a basso
  "43.60.00": {
    ateco2007: "47.99.10",
    titolo2025: "Attività di servizi di intermediazione per servizi di costruzione specializzati",
    divisioni2022: ["47", "61", "62", "63", "82"],
    note: "ISTAT 2025->2022: 43.60.00 -> 47.99.10, 61.90.99, 62.09.09, 63.12.00, 63.99.00, 82.99.99. Divisione 43 (alto) contro divisione 47/61/62/63/82 (basso).",
  },
  // sovraformazione — divisione 86 dice alto, il raccordo ISTAT porta a basso
  "86.97.00": {
    ateco2007: "47.99.10",
    titolo2025: "Attività di servizi di intermediazione per attività mediche, odontoiatriche e altri servizi per la salute umana",
    divisioni2022: ["47", "61", "62", "63", "82"],
    note: "ISTAT 2025->2022: 86.97.00 -> 47.99.10, 61.90.99, 62.09.09, 63.12.00, 63.99.00, 82.99.99. Divisione 86 (alto) contro divisione 47/61/62/63/82 (basso).",
  },
  // sovraformazione — divisione 87 dice alto, il raccordo ISTAT porta a basso
  "87.91.00": {
    ateco2007: "47.99.10",
    titolo2025: "Attività di servizi di intermediazione per attività di assistenza residenziale",
    divisioni2022: ["47", "61", "62", "63", "82"],
    note: "ISTAT 2025->2022: 87.91.00 -> 47.99.10, 61.90.99, 62.09.09, 63.12.00, 63.99.00, 82.99.99. Divisione 87 (alto) contro divisione 47/61/62/63/82 (basso).",
  },
};

// ──────────────────────────────────────────────────────────────────────────
//  Gli ambigui: il raccordo porta a piu divisioni con classi diverse.
//  Non si risolvono scegliendo: vanno SEGNALATI. Una scelta silenziosa qui
//  sarebbe una deduzione spacciata per lettura.
//  `sottostimaPossibile` marca quelli in cui le prime due cifre danno una
//  classe piu bassa di una delle strade del raccordo: li l'errore espone.
// ──────────────────────────────────────────────────────────────────────────
const AMBIGUI_2025 = {
  "03.30.00": { classi: ["alto", "medio"], prime2cifre: "medio", sottostimaPossibile: true },
  "18.12.00": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "35.40.00": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "46.18.91": { classi: ["alto", "basso"], prime2cifre: "basso", sottostimaPossibile: true },
  "49.34.00": { classi: ["alto", "medio"], prime2cifre: "medio", sottostimaPossibile: true },
  "52.31.00": { classi: ["basso", "medio"], prime2cifre: "medio" },
  "52.32.00": { classi: ["basso", "medio"], prime2cifre: "medio" },
  "53.20.00": { classi: ["basso", "medio"], prime2cifre: "medio" },
  "63.10.10": { classi: ["basso", "medio"], prime2cifre: "basso", sottostimaPossibile: true },
  "63.10.21": { classi: ["basso", "medio"], prime2cifre: "basso", sottostimaPossibile: true },
  "63.10.29": { classi: ["basso", "medio"], prime2cifre: "basso", sottostimaPossibile: true },
  "71.20.19": { classi: ["alto", "basso"], prime2cifre: "basso", sottostimaPossibile: true },
  "81.22.09": { classi: ["alto", "basso"], prime2cifre: "basso", sottostimaPossibile: true },
  "84.25.00": { classi: ["basso", "medio"], prime2cifre: "medio" },
  "86.22.03": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "86.99.01": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "86.99.02": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "86.99.03": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "86.99.09": { classi: ["alto", "basso"], prime2cifre: "alto" },
  "88.10.00": { classi: ["basso", "medio"], prime2cifre: "medio" },
  "91.30.01": { classi: ["alto", "basso"], prime2cifre: "basso", sottostimaPossibile: true },
};

//  Nessuna corrispondenza nella tavola ISTAT: non e ambiguo, e assente.
const SENZA_RACCORDO_2025 = ["46.89.00"];

module.exports = { ECCEZIONI_2025, AMBIGUI_2025, SENZA_RACCORDO_2025 };
