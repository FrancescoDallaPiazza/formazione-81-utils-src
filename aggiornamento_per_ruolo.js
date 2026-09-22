/**
 * Monte ore di AGGIORNAMENTO per RUOLO — Parte III dell'ASR 17/04/2025
 * (Rep. Atti n. 59/CSR), pagine stampate 81-82 (indice PDF 84-85).
 *
 * Perche esiste, e perche e keyed sul RUOLO e non sul corso.
 * L'accordo fissa il monte ore «in base al ruolo svolto»: lo stesso percorso
 * Modulo A + Modulo B vale 20 ore di aggiornamento per un ASPP e 40 per un
 * RSPP. Un catalogo che tiene le ore sul corso fa ereditare all'ASPP le 40
 * ore dell'RSPP, che e il difetto che questa tabella corregge alla sorgente.
 *
 * Fonte trascritta in reference/asr-2025-aggiornamenti.md.
 * Vedi decisione 7 (base normativa): questa riga si rigenera, non si copia.
 */

'use strict';

const P3 = 'ASR 17/04/2025 (Rep. Atti 59/CSR), Parte III';

// ore = monte ore minimo; periodicita_mesi = cadenza; decorrenza = da cosa parte.
const AGGIORNAMENTO_PER_RUOLO = {
  lavoratore:      { ore: 6,  periodicita_mesi: 60, decorrenza: 'fine_corso',
                     fonte: `${P3} punto 1.1, pag. 81` },
  preposto:        { ore: 6,  periodicita_mesi: 24, decorrenza: 'fine_corso',
                     fonte: `${P3} punto 1.2, pag. 81` },
  dirigente:       { ore: 6,  periodicita_mesi: 60, decorrenza: 'fine_corso',
                     fonte: `${P3} punto 1.3, pag. 81` },
  datore_lavoro:   { ore: 6,  periodicita_mesi: 60, decorrenza: 'fine_corso',
                     fonte: `${P3} punto 1.4, pag. 82` },
  dl_rspp:         { ore: 8,  periodicita_mesi: 60, decorrenza: 'fine_modulo_comune',
                     fonte: `${P3} punto 2, pag. 82` },
  // Le due righe per cui questo file esiste: stesso corso, ruoli diversi.
  aspp:            { ore: 20, periodicita_mesi: 60, decorrenza: 'fine_modulo_b_comune',
                     monte_ore: true,
                     fonte: `${P3} punto 3, pag. 82 ("ASPP: 20 ore")` },
  rspp:            { ore: 40, periodicita_mesi: 60, decorrenza: 'fine_modulo_b_comune',
                     monte_ore: true,
                     fonte: `${P3} punto 3, pag. 82 ("RSPP: 40 ore")` },
  coordinatore:    { ore: 40, periodicita_mesi: 60, decorrenza: 'fine_modulo_b_comune',
                     monte_ore: true,
                     fonte: `${P3} punto 4, pag. 82` },
  ambienti_confinati: { ore: 4, periodicita_mesi: 60, decorrenza: 'fine_corso',
                     solo_pratica: true,
                     fonte: `${P3} punto 5, pag. 82` },
  attrezzature_73c5:  { ore: 4, periodicita_mesi: 60, decorrenza: 'fine_corso',
                     solo_pratica: true,
                     fonte: `${P3} punto 6, pag. 82` },
};

/**
 * Ore di aggiornamento dovute da un ruolo. Ritorna null per un ruolo che
 * l'ASR non disciplina (antincendio e primo soccorso stanno nei loro decreti,
 * vedi reference/ore-fuori-dall-asr.md).
 */
function aggiornamentoPerRuolo(ruolo) {
  const r = AGGIORNAMENTO_PER_RUOLO[String(ruolo || '').toLowerCase()];
  return r ? { ruolo, ...r } : null;
}

module.exports = { AGGIORNAMENTO_PER_RUOLO, aggiornamentoPerRuolo };
