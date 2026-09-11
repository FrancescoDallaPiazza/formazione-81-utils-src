# Riferimenti normativi

Le fonti a cui il motore delle scadenze deve poter rispondere «questo lo dice
qui». Chi codifica una regola in una migrazione la cerca prima in questa
cartella, e se non c'e la porta qui insieme alla regola.

## La distinzione che regge tutto

Il progetto tiene separate due cose, ed e la ragione per cui questa cartella
esiste:

- **una regola che si legge si applica.** Ha una fonte citabile, quindi entra
  nelle tabelle applicative senza aspettare che qualcuno la confermi. Cosi sono
  entrate le due regole transitorie dei preposti (migrazione 0021) e la
  classificazione degli obblighi (0022).
- **una regola che si deduce aspetta.** E ricostruita dal comportamento del
  gestionale, quindi vive in `staging` con `confermata = false` finche qualcuno
  che conosce il catalogo non la guarda. Cosi stanno le 159 coppie corso ->
  aggiornamento.

Ogni riga di regola che entra nelle tabelle applicative deve avere la sua
citazione: parte, punto, pagina. Se la citazione non si trova, la regola va in
staging.

## Cosa c'e qui

| file | cosa contiene |
| --- | --- |
| [`asr-2025-crediti.md`](asr-2025-crediti.md) | Allegato III dell'ASR 2025: chi e esonerato da cosa, matrice per matrice |
| [`asr-2025-aggiornamenti.md`](asr-2025-aggiornamenti.md) | Parte III: periodicita e monte ore di aggiornamento, figura per figura |
| [`asr-2025-parte-vii.md`](asr-2025-parte-vii.md) | Parte VII: entrata in vigore, termini transitori, riconoscimento dei corsi gia erogati, abrogazioni |
| [`asr-2025-riconoscimento-pregresso.md`](asr-2025-riconoscimento-pregresso.md) | le due tabelle della Parte VII, pagine 113 e 114: quando l'attestato gia fatto vale ancora, per il datore di lavoro RSPP (art. 34) e per RSPP/ASPP (art. 32) — cella per cella, con i refusi lasciati dove stanno |
| [`asr-2025-attrezzature-nuove.md`](asr-2025-attrezzature-nuove.md) | Parte II punti 8.3.9, 8.3.10 e 8.3.11 e Allegato II: le ore delle tre abilitazioni nuove e cosa e un carroponte |
| [`asr-2025-allegato-iv-ateco.md`](asr-2025-allegato-iv-ateco.md) | Allegato IV: la classe di rischio di ogni divisione ATECO, i due errori di stampa e le tre divisioni che non classifica |
| [`ore-fuori-dall-asr.md`](ore-fuori-dall-asr.md) | antincendio, primo soccorso e segnaletica stradale: le ore che stanno nei decreti e non nell'accordo |
| [`livelli-antincendio-e-gruppi-primo-soccorso.md`](livelli-antincendio-e-gruppi-primo-soccorso.md) | l'altra meta delle stesse ore: chi decide il livello 1, 2 o 3 e il gruppo A, B o C, e quali fatti vanno chiesti per saperlo |
| [`faq-asr-2025.md`](faq-asr-2025.md) | le risposte delle FAQ su cui il motore si appoggia, e i due punti in cui le fonti non concordano |
| [`dlgs-81-2008-articoli-citati.md`](dlgs-81-2008-articoli-citati.md) | il decreto che il progetto citava quindici volte senza averlo mai letto: RLS, credito formativo, allegato XXI, e la delega di funzioni dell'art. 16 — che la formazione non la nomina mai, quindi l'obbligo del delegato dipende tutto da quale qualifica gli si riconosce |
| [`dpr-177-2011-ambienti-confinati.md`](dpr-177-2011-ambienti-confinati.md) | il DPR sugli ambienti confinati, che il progetto citava senza averlo letto: la formazione e di «tutto il personale, ivi compreso il datore di lavoro», il preposto e nominato solo per l'esperienza triennale, e le durate le rimanda all'accordo Stato-Regioni |
| [`interpello-1-2025-rischio-per-mansione.md`](interpello-1-2025-rischio-per-mansione.md) | Interpello MLPS 1/2025: la citazione ministeriale dell'ancoraggio ad ATECO 2007, e il rischio che si sposta per mansione nei due versi — sotto e sopra la classe dell'azienda |
| [`aggiornamento-fonti.md`](aggiornamento-fonti.md) | la regola del controllo mensile sull'81/2008, che si muove: dove si guarda, cosa si confronta, cosa si fa quando cambia |
| [`quadro-storico-ore-pregresse.md`](quadro-storico-ore-pregresse.md) | quante ore valevano prima dell'ASR 2025, figura per figura, per giudicare gli attestati gia in archivio: sette righe con il punto e la pagina, tre marcate perche non si leggono |
| [`assorbite-organigramma/`](assorbite-organigramma/README.md) | cosa e stato preso da Organigramma-sicurezza il 10 settembre 2026, cosa e stato lasciato fuori e perche, e i tre conflitti che l'assorbimento ha fatto emergere |

Le trascrizioni riportano il testo, non una parafrasi: servono a essere citate e
a essere confrontate con l'originale.

L'eccezione e `assorbite-organigramma/`, e per questo sta in una cartella sua:
li tre file su cinque sono **ricostruzioni** e non trascrizioni, e non si possono
citare. Ognuno lo dichiara in testa.

## Le fonti

In `fonti/`, copiate dalla cartella aziendale
`OneDrive - Overall Group srl\FormazioneASR` il 5 e il 6 settembre 2026.

**La norma vigente**

| file | cos'e | data |
| --- | --- | --- |
| `ASR-170425.pdf` | testo integrale dell'ASR 17 aprile 2025 (Rep. Atti n. 59/CSR), **139 pagine di file** numerate «a 136» | 17/04/2025 |
| `ASR-170425-Esoneri_crediti.pdf` | estratto: Allegato III, pagine 127-131 | 17/04/2025 |
| `D.M. 02_09_2021.pdf` | DM interno-lavoro 2 settembre 2021, antincendio: ore nell'allegato III | 02/09/2021 |
| `Decreto Min. Salute n. 388_2003.pdf` | DM 15 luglio 2003 n. 388, primo soccorso: ore negli allegati 3 e 4 | 15/07/2003 |
| `DI-22012019-segnaletica-stradale.pdf` | DI 22 gennaio 2019, segnaletica stradale: ore nell'allegato II | 22/01/2019 |
| `ASR2025_Ufficiale_PiuSicurezza.pdf` | seconda resa dell'ASR 2025, 136 pagine, con l'intestazione di terzi su ognuna | 06/06/2025 |

**L'indice di pagina non e il numero stampato.** `ASR-170425.pdf` ha tre pagine
in testa che non appartengono all'accordo — la 1 e il frontespizio «Copia diffusa
da AiFOS», la 2 e la 3 non danno un carattere — e sono le uniche tre scansionate.
Quindi **indice PDF = pagina stampata + 3**, costante da capo a fondo: la pagina
stampata 113 e la 116 del file, la 136 e la 139. `ASR2025_Ufficiale_PiuSicurezza.pdf`
non le ha, e li i due numeri coincidono. Verificato il 10 settembre 2026 sui
footer «Pag. N a 136»; prima di quel giorno questa riga diceva «136 pagine» per
tutti e due i file, ed era il conteggio stampato spacciato per quello del file.

`ASR2025_Ufficiale_PiuSicurezza.pdf` non e la fonte primaria: e una
ricomposizione fatta da terzi (footer «PiuSicurezza srl Rev 1 del 06/06/2025»),
e la fonte da citare resta `ASR-170425.pdf`. Serve a **rileggere una tabella per
una seconda volta con un'altra impaginazione**. Sull'Allegato IV le due letture
concordano, comprese le tre divisioni mancanti e il titolo sbagliato della riga 33.

**Ma non e una seconda strada, e va saputo.** `ASR-170425.pdf` non e una
scansione: fuori dalle tre pagine di testa e dalle figure dell'Allegato II non
contiene nessuna immagine, e il corpo del testo e digitale con font Calibri
incorporati — `pdftotext` ne cava 337.892 byte. Sulle pagine trascritte in
[`asr-2025-riconoscimento-pregresso.md`](asr-2025-riconoscimento-pregresso.md)
l'estratto dei due file e **identico byte per byte**, a meno dell'intestazione di
terzi. Le due rese sono quindi due impaginazioni dello stesso flusso di testo: la
loro concordanza dice che nessuna delle due ha introdotto un errore proprio, e
**non** dice che il testo sia quello sancito dalla Conferenza. Fino al 10 settembre
2026 questa cartella descriveva il file primario come una scansione senza livello
di testo, e non lo e.

**I codici ATECO**

Scaricate da [istat.it](https://www.istat.it/classificazione/ateco-2025/) il
6 settembre 2026. Servono perche l'Allegato IV dell'ASR 2025, che assegna la
classe di rischio, e scritto su ATECO 2007, mentre i clienti in visura hanno
ATECO 2025.

| file | cos'e | data |
| --- | --- | --- |
| `StrutturaATECO-2025-IT-EN-DE.xlsx` | struttura ufficiale di ATECO 2025: 3.257 codici da sezione a categoria | 02/2025 |
| `Aggiornamento-2026-Tavola-raccordo-bidirezionale-ATECO-2025-ATECO-2022-italiano.xlsx` | tavola di raccordo bidirezionale 2025 vs 2022, 6.745 righe con la copertura totale o parziale di ogni corrispondenza | 07/2026 |
| `Aggiornamento-2026-Tavola-raccordo-bidirezionale-ATECO-2025-ATECO-2022-Nota.pdf` | nota informativa e metodologica della tavola | 07/2026 |

ISTAT pubblica il raccordo verso **ATECO 2022**, che e l'aggiornamento 2022 di
ATECO 2007: e il ponte piu vicino che esista al 2007 dell'Allegato IV.

**Le FAQ**

| file | cos'e | data |
| --- | --- | --- |
| `250731_CommissioneSalute_RegioneEmiliaRomagna_FAQ.pdf` | FAQ interregionali, 63 domande, trasmesse dal Coordinamento Commissione Salute | 31/07/2025 |
| `FAQ-interregionali-27-03-2026.pdf` | FAQ interregionali riordinate per argomento, 44 quesiti | 27/03/2026 |
| `FAQ-Regione-Veneto.pdf` | FAQ della Regione del Veneto sull'ASR 2025 | 2026 |

**I cinque accordi che l'ASR 2025 ha abrogato**

Non sono la norma vigente. Servono perche sotto di loro e stata erogata la
formazione che oggi e in archivio: sono il metro con cui si giudica se un corso
gia frequentato sia conforme, e quindi riconosciuto.

| file | cos'e | rep. |
| --- | --- | --- |
| `Accordo_Formazione_Lavoratori_21-12-2011.pdf` | formazione lavoratori, dirigenti e preposti | 221/CSR |
| `Accordo_Formazione_Datori_lavoro_21-12-2011.pdf` | datore di lavoro che svolge i compiti di RSPP | 223/CSR |
| `Accordo-formazione-attrezzature-22-2-2012.pdf` | attrezzature che richiedono abilitazione | 53/CSR |
| `Accordo-Stato-Regioni-25-luglio-2012-att-Rep-153-CSR.pdf` | adeguamento e linee applicative | 153/CSR |
| `Accordo_Stato_Regioni_formazione_RSPP_7-7-16.pdf` | RSPP e ASPP | 128/CSR |

Gli ultimi due sono scansioni senza livello di testo: `pdftotext` non ne cava
niente e vanno letti a video. Verificato il 10 settembre 2026: **25 byte** dal
153/CSR e **37 byte** dal 128/CSR. Le copie che Organigramma-sicurezza aveva
degli stessi due accordi sono anch'esse scansioni e danno lo stesso nulla, quindi
**l'assorbimento di quel repo non ha chiuso questa lacuna.**

`Accordo-formazione-attrezzature-22-2-2012.pdf` va letto sapendo cos'e: porta il
footer «Vega Engineering S.r.l. - REV. 0» su tutte e 50 le pagine, cioe e una
**ristampa di terzi** come `ASR2025_Ufficiale_PiuSicurezza.pdf`, non la Gazzetta.
I punti e gli allegati sono quelli dell'accordo e si citano; i numeri di pagina
sono i suoi. Non era scritto qui fino al 10 settembre 2026.

## Una lacuna nota in `fonti/`

`Accordo_Formazione_Lavoratori_21-12-2011.pdf` contiene **solo l'Allegato A**, cioe
il testo dell'accordo. Non contiene l'**Allegato 2**, la tabella «Individuazione
delle macrocategorie di rischio e corrispondenze ATECO 2002-2007» — che e la tabella
che l'Allegato IV del 2025 riprende, e la sola fonte che dica cosa contenessero le
divisioni 30, 86 e 87 prima che la stampa del 2025 le perdesse.

Verificato il 9 settembre 2026: cercando `ALTRI MEZZI DI TRASPORTO`, `ASSISTENZA
SANITARIA` e la sezione `Q` nel nostro PDF non si trova niente. Quindi **quella
verifica qui non e ripetibile**, e chi la rifara deve procurarsi una copia che
comprenda l'allegato. Finche non c'e, la lettura di quella tabella resta su una resa
di terzi.

Precisazione del 10 settembre 2026, che cambia la diagnosi. **Le pagine ci sono:
sono vuote.** Il nostro PDF ha 19 pagine, e le ultime tre portano l'intestazione
della Gazzetta e i numeri **46, 47 e 48** — la 48 col codice `12A00059` — e sotto
non hanno nemmeno un carattere. Non e che l'allegato manchi dal file: e che quelle
pagine sono la **scansione ruotata di novanta gradi** descritta nella scheda 5 di
`AppOverall/docs/decisioni/`, e nessuna estrazione di testo la vede. La copia
`.txt` che Organigramma-sicurezza aveva dello stesso atto finisce **identica**,
con le stesse tre pagine vuote e lo stesso `12A00059`: e la stessa estrazione
dello stesso PDF, e conferma il silenzio invece di romperlo.

Cosa comporta: la pagina 48 si legge **rendendola in immagine**, ed e cosi che e
stata letta — vedi i due ritagli `GU-8-2012-allegato-II-*.png` qui in `fonti/`.
Un'estrazione vuota che si presenta come «la tabella non c'e» e il terzo esito di
R4 della decisione 7, **non verificabile**, comparso su una fonte invece che su un
controllo.

## Le fonti che il progetto nomina e non ha

Emerse il 10 settembre 2026 assorbendo Organigramma-sicurezza, e vale la pena
elencarle perche finora esistevano solo come ricostruzioni:

| fonte | serve a | dove sta la ricostruzione |
| --- | --- | --- |
| **DM 10 marzo 1998**, antincendio, abrogato | giudicare gli attestati antincendio anteriori al 4 ottobre 2022 | [`assorbite-organigramma/DM_10_03_1998_ANTINCENDIO_ABROGATO.txt`](assorbite-organigramma/DM_10_03_1998_ANTINCENDIO_ABROGATO.txt) |
| **DI 6 marzo 2013**, qualificazione del formatore | verificare l'idoneita del docente indicato sull'attestato | [`assorbite-organigramma/DI_06_03_2013_REQUISITI_FORMATORI.txt`](assorbite-organigramma/DI_06_03_2013_REQUISITI_FORMATORI.txt) |
| **Reg. (CE) 852/2004**, igiene alimentare | dire perche l'HACCP sta fuori dal motore | [`assorbite-organigramma/REG_CE_852_2004_HACCP.txt`](assorbite-organigramma/REG_CE_852_2004_HACCP.txt) |
| **statistiche INAIL** sull'inabilita permanente | la condizione II del gruppo A di primo soccorso | nessuna: il buco era gia dichiarato e resta |

Le prime tre sono atti pubblicati e si scaricano: il giorno in cui entrano in
`fonti/` le ricostruzioni si sostituiscono con trascrizioni citabili, e tre righe
smettono di essere dedotte.

## Come si estrae il testo

    pdftotext -layout fonti/NOME.pdf estratto.txt

Per le tabelle il testo estratto disallinea le colonne e non si puo usare per
codificare: vanno lette a video, pagina per pagina. La matrice dei crediti in
`asr-2025-crediti.md` e stata trascritta guardando la pagina, non il testo
estratto, e la differenza non era teorica.
