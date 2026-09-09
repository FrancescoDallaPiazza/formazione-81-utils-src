/**
 * ============================================================================
 *  ALLEGATO IV – Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)
 *  "Individuazione macrocategorie di rischio e corrispondenze ATECO 2007"
 * ============================================================================
 *
 *  IMPORTANTE
 *  ----------
 *  L'Accordo Stato-Regioni del 17/04/2025 (entrato in vigore il 24/05/2025)
 *  ha sostituito l'Accordo del 21/12/2011, ma il suo Allegato IV mantiene
 *  esattamente la stessa tabella di classificazione del rischio, ancorata
 *  alla classificazione ATECO 2007 (aggiornamento 2022) e NON all'ATECO 2025.
 *
 *  Fonti incrociate utilizzate per ricostruire la tabella:
 *  - Allegato 2 Accordo SR 21/12/2011 (GU n.8 del 11/01/2012, p. 48)
 *    https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?
 *    art.codiceRedazionale=12A00059
 *    (qui era indicato 12A00058, che e un altro atto: verificato sulla
 *     Gazzetta il 9 settembre 2026)
 *  - Testo ufficiale ASR 17/04/2025 (Rep. Atti 59/CSR)
 *    https://www.asr2025.it/conferenza-stato-regioni-del-17-aprile-2025/
 *  - Interpello MLPS n.1/2025 (18/09/2025) che cita testualmente:
 *    "Allegato IV (Individuazione macrocategorie di rischio e corrispondenze
 *    ATECO 2007) ... settore Istruzione (sezione P, codice 85) come attivita'
 *    a rischio medio"
 *
 *  Struttura: l'Allegato IV classifica le attività in BASSO / MEDIO / ALTO
 *  utilizzando le SEZIONI (lettere) e le DIVISIONI (codice a 2 cifre) della
 *  classificazione ATECO 2007.
 *
 *  TRE DIVISIONI NON SI LEGGONO NEL TESTO VIGENTE: 30, 86 e 87
 *  -----------------------------------------------------------
 *  Nell'ASR 2025 quelle tre righe non ci sono. Non perche il legislatore le
 *  abbia tolte: l'ultima pagina di quella tabella e tipograficamente rotta —
 *  la 30 e stampata «33» (la sequenza e 29, 33, 31, 32: crescente ovunque
 *  tranne li), e la sezione Q ha l'intestazione stampata sopra il vuoto. Gli
 *  stessi refusi da OCR stanno nel testo della Conferenza e nella riedizione,
 *  quindi la seconda ristampa fedelmente il primo e non aggiunge niente.
 *
 *  Il valore ALTO su quelle tre viene dalla FONTE PRIMARIA del 2011 (GU n.8
 *  dell'11/01/2012, p. 48, atto 12A00059), che le classifica tutte e tre, PIU
 *  la deduzione che il vigente non abbia inteso declassarle. Le due cose sono
 *  marcate separatamente sulle tre voci: `fonte` dice da dove viene il valore,
 *  `dedotto: true` dice che una parte del ragionamento e nostra e non della
 *  norma. Chi consuma questa tabella deve poter mostrare la distinzione: se in
 *  ispezione la risposta e «l'ha messo il programma», non regge.
 *
 *  Decisione del 9 settembre 2026, scheda 5 di AppOverall/docs/decisioni/.
 *  Si riapre da sola se esce un chiarimento ufficiale: allora `dedotto` cade e
 *  al suo posto va la citazione nuova.
 * ============================================================================
 */

'use strict';

// Provenienza delle tre divisioni che il testo vigente non stampa (30, 86, 87).
// Sta accanto al valore, non al posto suo: il livello e ALTO, ma chi lo legge
// deve poter dire da dove viene e quanta deduzione c'e dentro.
const FONTE_2011 =
  'Allegato II Accordo 221/CSR del 21/12/2011, GU n.8 dell\'11/01/2012 p. 48, ' +
  'atto 12A00059 — il testo vigente tace per guasto tipografico, non per scelta';

// ──────────────────────────────────────────────────────────────────────────
//  ALLEGATO IV — Tabella ufficiale (chiave: divisione ATECO 2007 a 2 cifre)
// ──────────────────────────────────────────────────────────────────────────
const ALLEGATO_IV = {
  // ════════════════════════════════════════════════════════════════════════
  // RISCHIO BASSO — 4 ore formazione specifica
  // (Lavoratori RSPP DDL: 16 ore)
  // ════════════════════════════════════════════════════════════════════════

  // Sezione G — COMMERCIO ALL'INGROSSO E AL DETTAGLIO; RIPARAZIONE DI
  //             AUTOVEICOLI E MOTOCICLI
  '45': { sezione: 'G', livello: 'BASSO', desc: 'Commercio all\'ingrosso e al dettaglio e riparazione di autoveicoli e motocicli' },
  '46': { sezione: 'G', livello: 'BASSO', desc: 'Commercio all\'ingrosso, escluso quello di autoveicoli e motocicli' },
  '47': { sezione: 'G', livello: 'BASSO', desc: 'Commercio al dettaglio, escluso quello di autoveicoli e motocicli' },

  // Sezione I — ATTIVITÀ DEI SERVIZI DI ALLOGGIO E DI RISTORAZIONE
  '55': { sezione: 'I', livello: 'BASSO', desc: 'Alloggio' },
  '56': { sezione: 'I', livello: 'BASSO', desc: 'Attività dei servizi di ristorazione' },

  // Sezione J — SERVIZI DI INFORMAZIONE E COMUNICAZIONE
  '58': { sezione: 'J', livello: 'BASSO', desc: 'Attività editoriali' },
  '59': { sezione: 'J', livello: 'BASSO', desc: 'Attività di produzione cinematografica, video e programmi TV, registrazioni musicali e sonore' },
  '60': { sezione: 'J', livello: 'BASSO', desc: 'Attività di programmazione e trasmissione' },
  '61': { sezione: 'J', livello: 'BASSO', desc: 'Telecomunicazioni' },
  '62': { sezione: 'J', livello: 'BASSO', desc: 'Produzione di software, consulenza informatica e attività connesse' },
  '63': { sezione: 'J', livello: 'BASSO', desc: 'Attività dei servizi d\'informazione e altri servizi informatici' },

  // Sezione K — ATTIVITÀ FINANZIARIE E ASSICURATIVE
  '64': { sezione: 'K', livello: 'BASSO', desc: 'Attività di servizi finanziari (escluse assicurazioni e fondi pensione)' },
  '65': { sezione: 'K', livello: 'BASSO', desc: 'Assicurazioni, riassicurazioni e fondi pensione (escluse assicurazioni sociali obbligatorie)' },
  '66': { sezione: 'K', livello: 'BASSO', desc: 'Attività ausiliarie dei servizi finanziari e delle attività assicurative' },

  // Sezione L — ATTIVITÀ IMMOBILIARI
  '68': { sezione: 'L', livello: 'BASSO', desc: 'Attività immobiliari' },

  // Sezione M — ATTIVITÀ PROFESSIONALI, SCIENTIFICHE E TECNICHE
  '69': { sezione: 'M', livello: 'BASSO', desc: 'Attività legali e contabilità' },
  '70': { sezione: 'M', livello: 'BASSO', desc: 'Attività di direzione aziendale e di consulenza gestionale' },
  '71': { sezione: 'M', livello: 'BASSO', desc: 'Attività studi di architettura e d\'ingegneria; collaudi ed analisi tecniche' },
  '72': { sezione: 'M', livello: 'BASSO', desc: 'Ricerca scientifica e sviluppo' },
  '73': { sezione: 'M', livello: 'BASSO', desc: 'Pubblicità e ricerche di mercato' },
  '74': { sezione: 'M', livello: 'BASSO', desc: 'Altre attività professionali, scientifiche e tecniche' },
  '75': { sezione: 'M', livello: 'BASSO', desc: 'Servizi veterinari' },

  // Sezione N — NOLEGGIO, AGENZIE DI VIAGGIO, SERVIZI DI SUPPORTO ALLE IMPRESE
  '77': { sezione: 'N', livello: 'BASSO', desc: 'Attività di noleggio e leasing operativo' },
  '78': { sezione: 'N', livello: 'BASSO', desc: 'Attività di ricerca, selezione, fornitura di personale' },
  '79': { sezione: 'N', livello: 'BASSO', desc: 'Attività dei servizi delle agenzie di viaggio, dei tour operator e servizi di prenotazione e attività connesse' },
  '80': { sezione: 'N', livello: 'BASSO', desc: 'Servizi di vigilanza e investigazione' },
  '81': { sezione: 'N', livello: 'BASSO', desc: 'Attività di servizi per edifici e paesaggio' },
  '82': { sezione: 'N', livello: 'BASSO', desc: 'Attività di supporto per le funzioni d\'ufficio e altri servizi di supporto alle imprese' },

  // Sezione R — ATTIVITÀ ARTISTICHE, SPORTIVE, DI INTRATTENIMENTO E DIVERTIMENTO
  '90': { sezione: 'R', livello: 'BASSO', desc: 'Attività creative, artistiche e di intrattenimento' },
  '91': { sezione: 'R', livello: 'BASSO', desc: 'Attività di biblioteche, archivi, musei ed altre attività culturali' },
  '92': { sezione: 'R', livello: 'BASSO', desc: 'Attività riguardanti le lotterie, le scommesse, le case da gioco' },
  '93': { sezione: 'R', livello: 'BASSO', desc: 'Attività sportive, di intrattenimento e di divertimento' },

  // Sezione S — ALTRE ATTIVITÀ DI SERVIZI
  '94': { sezione: 'S', livello: 'BASSO', desc: 'Attività di organizzazioni associative' },
  '95': { sezione: 'S', livello: 'BASSO', desc: 'Riparazione di computer e di beni per uso personale e per la casa' },
  '96': { sezione: 'S', livello: 'BASSO', desc: 'Altre attività di servizi per la persona' },

  // Sezione T — ATTIVITÀ DI FAMIGLIE E CONVIVENZE
  '97': { sezione: 'T', livello: 'BASSO', desc: 'Attività di famiglie e convivenze come datori di lavoro per personale domestico' },
  '98': { sezione: 'T', livello: 'BASSO', desc: 'Produzione di beni e servizi indifferenziati per uso proprio da parte di famiglie e convivenze' },

  // Sezione U — ORGANIZZAZIONI ED ORGANISMI EXTRATERRITORIALI
  '99': { sezione: 'U', livello: 'BASSO', desc: 'Organizzazioni ed organismi extraterritoriali' },

  // ════════════════════════════════════════════════════════════════════════
  // RISCHIO MEDIO — 8 ore formazione specifica
  // (Datore di lavoro RSPP: 32 ore)
  // ════════════════════════════════════════════════════════════════════════

  // Sezione A — AGRICOLTURA, SILVICOLTURA E PESCA
  '01': { sezione: 'A', livello: 'MEDIO', desc: 'Coltivazioni agricole e produzione di prodotti animali, caccia e servizi connessi' },
  '02': { sezione: 'A', livello: 'MEDIO', desc: 'Silvicoltura ed utilizzo di aree forestali' },
  '03': { sezione: 'A', livello: 'MEDIO', desc: 'Pesca e acquacoltura' },

  // Sezione H — TRASPORTO E MAGAZZINAGGIO
  '49': { sezione: 'H', livello: 'MEDIO', desc: 'Trasporto terrestre e trasporto mediante condotte' },
  '50': { sezione: 'H', livello: 'MEDIO', desc: 'Trasporto marittimo e per vie d\'acqua' },
  '51': { sezione: 'H', livello: 'MEDIO', desc: 'Trasporto aereo' },
  '52': { sezione: 'H', livello: 'MEDIO', desc: 'Magazzinaggio e attività di supporto ai trasporti' },
  '53': { sezione: 'H', livello: 'MEDIO', desc: 'Servizi postali e attività di corriere' },

  // Sezione O — AMMINISTRAZIONE PUBBLICA E DIFESA
  '84': { sezione: 'O', livello: 'MEDIO', desc: 'Amministrazione pubblica e difesa; assicurazione sociale obbligatoria' },

  // Sezione P — ISTRUZIONE  (confermato da Interpello MLPS n.1/2025)
  '85': { sezione: 'P', livello: 'MEDIO', desc: 'Istruzione' },

  // Sezione Q — Solo ass. sociale NON residenziale
  '88': { sezione: 'Q', livello: 'MEDIO', desc: 'Assistenza sociale non residenziale' },

  // ════════════════════════════════════════════════════════════════════════
  // RISCHIO ALTO — 12 ore formazione specifica
  // (Datore di lavoro RSPP: 48 ore)
  // ════════════════════════════════════════════════════════════════════════

  // Sezione B — ESTRAZIONE DI MINERALI DA CAVE E MINIERE
  '05': { sezione: 'B', livello: 'ALTO', desc: 'Estrazione di carbone (esclusa torba)' },
  '06': { sezione: 'B', livello: 'ALTO', desc: 'Estrazione di petrolio greggio e di gas naturale' },
  '07': { sezione: 'B', livello: 'ALTO', desc: 'Estrazione di minerali metalliferi' },
  '08': { sezione: 'B', livello: 'ALTO', desc: 'Altre attività di estrazione di minerali da cave e miniere' },
  '09': { sezione: 'B', livello: 'ALTO', desc: 'Attività dei servizi di supporto all\'estrazione' },

  // Sezione C — ATTIVITÀ MANIFATTURIERE (TUTTE)
  '10': { sezione: 'C', livello: 'ALTO', desc: 'Industrie alimentari' },
  '11': { sezione: 'C', livello: 'ALTO', desc: 'Industria delle bevande' },
  '12': { sezione: 'C', livello: 'ALTO', desc: 'Industria del tabacco' },
  '13': { sezione: 'C', livello: 'ALTO', desc: 'Industrie tessili' },
  '14': { sezione: 'C', livello: 'ALTO', desc: 'Confezione di articoli di abbigliamento; confezione di articoli in pelle e pelliccia' },
  '15': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di articoli in pelle e simili' },
  '16': { sezione: 'C', livello: 'ALTO', desc: 'Industria del legno e dei prodotti in legno e sughero (esclusi i mobili)' },
  '17': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di carta e di prodotti di carta' },
  '18': { sezione: 'C', livello: 'ALTO', desc: 'Stampa e riproduzione di supporti registrati' },
  '19': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di coke e prodotti derivanti dalla raffinazione del petrolio' },
  '20': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di prodotti chimici' },
  '21': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di prodotti farmaceutici di base e di preparati farmaceutici' },
  '22': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di articoli in gomma e materie plastiche' },
  '23': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di altri prodotti della lavorazione di minerali non metalliferi' },
  '24': { sezione: 'C', livello: 'ALTO', desc: 'Metallurgia' },
  '25': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di prodotti di metallo (esclusi macchinari e attrezzature)' },
  '26': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di computer e prodotti di elettronica e ottica' },
  '27': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di apparecchiature elettriche e per uso domestico non elettriche' },
  '28': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di macchinari ed apparecchiature NCA' },
  '29': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di autoveicoli, rimorchi e semirimorchi' },
  // Nel testo vigente la 30 e stampata «33»: il valore viene dalla fonte del 2011
  '30': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di altri mezzi di trasporto',
          fonte: FONTE_2011, dedotto: true },
  '31': { sezione: 'C', livello: 'ALTO', desc: 'Fabbricazione di mobili' },
  '32': { sezione: 'C', livello: 'ALTO', desc: 'Altre industrie manifatturiere' },
  '33': { sezione: 'C', livello: 'ALTO', desc: 'Riparazione, manutenzione ed installazione di macchine ed apparecchiature' },

  // Sezione D — FORNITURA DI ENERGIA ELETTRICA, GAS, VAPORE E ARIA
  '35': { sezione: 'D', livello: 'ALTO', desc: 'Fornitura di energia elettrica, gas, vapore e aria condizionata' },

  // Sezione E — FORNITURA DI ACQUA; RETI FOGNARIE, RIFIUTI, RISANAMENTO
  '36': { sezione: 'E', livello: 'ALTO', desc: 'Raccolta, trattamento e fornitura di acqua' },
  '37': { sezione: 'E', livello: 'ALTO', desc: 'Gestione delle reti fognarie' },
  '38': { sezione: 'E', livello: 'ALTO', desc: 'Attività di raccolta, trattamento e smaltimento dei rifiuti; recupero dei materiali' },
  '39': { sezione: 'E', livello: 'ALTO', desc: 'Attività di risanamento e altri servizi di gestione dei rifiuti' },

  // Sezione F — COSTRUZIONI
  '41': { sezione: 'F', livello: 'ALTO', desc: 'Costruzione di edifici' },
  '42': { sezione: 'F', livello: 'ALTO', desc: 'Ingegneria civile' },
  '43': { sezione: 'F', livello: 'ALTO', desc: 'Lavori di costruzione specializzati' },

  // Sezione Q — Sanità (assistenza sanitaria + assistenza sociale residenziale)
  // Nel testo vigente l'intestazione Q e stampata sopra il vuoto, e li il documento
  // finisce: il valore delle due divisioni viene dalla fonte del 2011
  '86': { sezione: 'Q', livello: 'ALTO', desc: 'Assistenza sanitaria',
          fonte: FONTE_2011, dedotto: true },
  '87': { sezione: 'Q', livello: 'ALTO', desc: 'Servizi di assistenza sociale residenziale',
          fonte: FONTE_2011, dedotto: true },
};

// Tabella durate (Allegato A ASR 17/04/2025, Parte II, par. 2.1 Lavoratori)
const DURATE_FORMAZIONE = {
  BASSO: { generale: 4, specifica: 4,  totale: 8,  rspp_ddl: 16 },
  MEDIO: { generale: 4, specifica: 8,  totale: 12, rspp_ddl: 32 },
  ALTO:  { generale: 4, specifica: 12, totale: 16, rspp_ddl: 48 },
};

// ──────────────────────────────────────────────────────────────────────────
//  Funzione principale: dato un codice ATECO 2007 (in qualunque formato:
//  "56", "56.1", "56.10.20", "56.11.11" ecc.) restituisce il livello di
//  rischio formativo secondo l'Allegato IV.
// ──────────────────────────────────────────────────────────────────────────
function classificaAteco2007(codice) {
  if (!codice) return null;
  // Estrae le PRIME 2 cifre (= divisione ATECO)
  const m = String(codice).match(/^(\d{1,2})/);
  if (!m) return null;
  const div = m[1].padStart(2, '0');
  const r = ALLEGATO_IV[div];
  if (!r) return null;
  return {
    codiceInput:    codice,
    divisione:      div,
    sezione:        r.sezione,
    descrizione:    r.desc,
    livello:        r.livello,
    oreFormazione:  DURATE_FORMAZIONE[r.livello],
    // Il valore e la sua provenienza sono due cose e restano separate: per tre
    // divisioni la fonte non e l'accordo vigente, e `dedotto` lo dice.
    fonte:          r.fonte ||
                    'Allegato IV ASR 17/04/2025 (Rep. Atti 59/CSR) - ' +
                    'classificazione ancorata ad ATECO 2007 agg. 2022',
    dedotto:        r.dedotto === true,
  };
}

module.exports = {
  ALLEGATO_IV,
  DURATE_FORMAZIONE,
  classificaAteco2007,
};
