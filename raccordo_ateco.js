/**
 * ============================================================================
 *  RACCORDO ATECO 2025 → ATECO 2007 (per applicazione Allegato IV ASR 2025)
 * ============================================================================
 *
 *  L'Allegato IV dell'ASR 17/04/2025 è ancorato ad ATECO 2007 (agg. 2022).
 *  Le visure camerali dal 1° aprile 2025 riportano però codici ATECO 2025.
 *
 *  Nella stragrande maggioranza dei casi, le DIVISIONI ATECO (2 cifre)
 *  sono RIMASTE INVARIATE tra ATECO 2007/2022 e ATECO 2025: la riforma 2025
 *  ha ristrutturato soprattutto i livelli inferiori (gruppi/classi/categorie).
 *  Quindi per la classificazione di rischio (che opera a livello di SEZIONE
 *  e DIVISIONE) il raccordo è quasi sempre 1:1 alla radice.
 *
 *  ECCEZIONI NOTE rilevanti per la sicurezza (dalla Tavola di raccordo
 *  bidirezionale ISTAT):
 *  - Divisione 31 (Fabbricazione mobili) ATECO 2007 → confluita in 32
 *    in ATECO 2025? NO, conferma divisione 31 stabile.
 *  - Divisione 56 (Ristorazione) — INVARIATA
 *  - Divisione 47 (Commercio dettaglio) — INVARIATA
 *  - Divisione 85 (Istruzione) — INVARIATA
 *  - Le sezioni A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U sono tutte
 *    mantenute con stessa nomenclatura strutturale.
 *
 *  Quando il codice riportato in visura è ATECO 2025, applichiamo la stessa
 *  divisione (prime 2 cifre) all'Allegato IV. Se la divisione esiste in
 *  ALLEGATO_IV (ATECO 2007), la classificazione è valida.
 *  Se non esiste, viene segnalato e va verificato manualmente.
 *
 *  Per casi complessi (1:M) ISTAT mette a disposizione una tabella di
 *  raccordo bidirezionale completa. Se uno dei codici cliente non si
 *  risolve, va consultata: https://www.istat.it/classificazione/ateco-2025/
 * ============================================================================
 */

'use strict';

const { classificaAteco2007 } = require('./allegato_iv_asr2025');
const {
  ECCEZIONI_2025, AMBIGUI_2025, SENZA_RACCORDO_2025,
} = require('./raccordo_istat_2025');

// ──────────────────────────────────────────────────────────────────────────
//  Mappatura puntuale di codici ATECO 2025 che cambiano divisione rispetto ad
//  ATECO 2007. Non è più vuota: è calcolata sulle tavole ISTAT e sta in
//  raccordo_istat_2025.js, con la provenienza riga per riga.
//
//  Sono 9 casi su 1.290 codici foglia — l'assunzione che le divisioni siano
//  stabili è vera quasi sempre, ma «quasi» ha una direzione: 2 dei 9 danno una
//  classe PIÙ BASSA del vero, e quelli espongono.
// ──────────────────────────────────────────────────────────────────────────
const RACCORDO_PUNTUALE_2025_2007 = ECCEZIONI_2025;

// ──────────────────────────────────────────────────────────────────────────
//  Funzione: dato un codice ATECO (di qualsiasi versione: 2007, 2022, 2025),
//  applica l'Allegato IV ASR 17/04/2025 e restituisce il livello di rischio.
// ──────────────────────────────────────────────────────────────────────────
function classificaRischio(codiceAteco, opts = {}) {
  if (!codiceAteco) {
    return { errore: 'Codice ATECO mancante' };
  }

  const norm = String(codiceAteco).trim();

  // 1) Verifico se è nel raccordo puntuale (eccezioni note)
  if (RACCORDO_PUNTUALE_2025_2007[norm]) {
    const map = RACCORDO_PUNTUALE_2025_2007[norm];
    const r = classificaAteco2007(map.ateco2007);
    if (r) return { ...r, codiceInput: norm, ateco2007Equivalente: map.ateco2007, note: map.note };
  }

  // 2) Ambiguo: il raccordo ISTAT porta a divisioni con classi diverse.
  //    Non si sceglie in silenzio — si segnala. Scegliere qui sarebbe una
  //    deduzione spacciata per lettura.
  if (AMBIGUI_2025[norm]) {
    const a = AMBIGUI_2025[norm];
    const r = classificaAteco2007(norm);
    return {
      ...(r || {}),
      codiceInput: norm,
      ambiguo: true,
      classiPossibili: a.classi,
      sottostimaPossibile: Boolean(a.sottostimaPossibile),
      note: `Il raccordo ISTAT porta questo codice a più divisioni ATECO 2022 ` +
            `con classi diverse (${a.classi.join(', ')}). Le prime 2 cifre danno ` +
            `"${a.prime2cifre}". Va deciso sulla valutazione dei rischi, non qui.`,
    };
  }

  // 3) Senza corrispondenza nella tavola ISTAT: assente, non ambiguo.
  if (SENZA_RACCORDO_2025.includes(norm)) {
    return {
      errore: `Il codice ATECO 2025 "${norm}" non ha corrispondenza nella tavola ` +
              'di raccordo ISTAT 2025/2022: la classe non è deducibile.',
      codiceInput: norm,
    };
  }

  // 4) Caso standard: divisione (prime 2 cifre) invariata
  const r = classificaAteco2007(norm);
  if (r) return r;

  // 5) Codice non riconosciuto
  return {
    errore: `Codice ATECO "${norm}" non trovato nell'Allegato IV. ` +
            'Verificare la divisione (2 cifre iniziali) sulla tabella ISTAT ' +
            'di raccordo: https://www.istat.it/classificazione/ateco-2025/',
    codiceInput: norm,
  };
}

// ──────────────────────────────────────────────────────────────────────────
//  Funzione: classifica un cliente con potenzialmente PIÙ codici ATECO
//  (uno per unità produttiva). Restituisce il livello PIÙ ALTO presente,
//  perché ai sensi del DM 388/2003 (e prassi consolidata) il datore deve
//  riferirsi all'attività con indice più elevato quando l'azienda svolge
//  attività in gruppi diversi.
// ──────────────────────────────────────────────────────────────────────────
function classificaClienteMultiSede(codiciAteco) {
  const ranking = { BASSO: 1, MEDIO: 2, ALTO: 3 };
  const risultati = codiciAteco.map(c => classificaRischio(c));
  const validi = risultati.filter(r => r.livello);
  if (!validi.length) return { errore: 'Nessun codice classificabile', dettagli: risultati };
  const piuAlto = validi.reduce((a, b) =>
    ranking[b.livello] > ranking[a.livello] ? b : a
  );
  return {
    livelloAggregato: piuAlto.livello,
    motivazione: validi.length > 1
      ? `Tra ${validi.length} codici/sedi, il livello più alto è ${piuAlto.livello} (${piuAlto.divisione} - ${piuAlto.descrizione})`
      : `Unica attività: ${piuAlto.livello}`,
    oreFormazione: piuAlto.oreFormazione,
    dettaglioPerCodice: validi,
  };
}

module.exports = {
  classificaRischio,
  classificaClienteMultiSede,
  RACCORDO_PUNTUALE_2025_2007,
  AMBIGUI_2025,
  SENZA_RACCORDO_2025,
};
