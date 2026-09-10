# Cosa e stato assorbito da Organigramma-sicurezza

`C:\Users\Francesco\Documents\GitHub\Organigramma-sicurezza` entra nel progetto
**per essere assorbito, non mantenuto**. Sotto la decisione 7 di
`AppOverall/docs/decisioni/`, `reference/` e cio che alimenta il generatore
unico: quello che di quel repo vale la pena tenere finisce qui, il resto non si
copia.

Il confronto fra i due depositi e stato fatto il **10 settembre 2026**, file per
file, con `wc -l` e `pdftotext -layout` sui PDF. Si rimisura rifacendo lo stesso
confronto fra `checkupformazione81/references/` e `fonti/`.

Regola che vale per ogni file di questa cartella: **porta in testa da dove
viene, cosa contiene, e se e citabile o no.** Non c'e nessuna copia cieca, e tre
dei cinque file sono ricostruzioni che **non possono essere citate**.

## Cosa e entrato

| file | materia | citabile |
| --- | --- | --- |
| [`ASR_59_2025_punto6_ATTESTAZIONI.txt`](ASR_59_2025_punto6_ATTESTAZIONI.txt) | elementi minimi dell'attestato, regime vigente | **si** — ASR 2025 parte I punto 6, pag. 9 a 136. Ma il punto 7 di questo file e sbagliato: vedi sotto |
| [`ASR_221_2011_punto7_ATTESTATI.txt`](ASR_221_2011_punto7_ATTESTATI.txt) | elementi minimi dell'attestato, regime abrogato | si, andando al punto 7 dell'accordo in `fonti/`: questo file e una sintesi con tre scarti |
| [`DI_06_03_2013_REQUISITI_FORMATORI.txt`](DI_06_03_2013_REQUISITI_FORMATORI.txt) | qualificazione del formatore | **no, dedotto**: il decreto non e in `fonti/` |
| [`DM_10_03_1998_ANTINCENDIO_ABROGATO.txt`](DM_10_03_1998_ANTINCENDIO_ABROGATO.txt) | antincendio prima del 4 ottobre 2022 | **no, dedotto**: il decreto non e in `fonti/` |
| [`REG_CE_852_2004_HACCP.txt`](REG_CE_852_2004_HACCP.txt) | formazione alimentaristi, e perche sta fuori | **no, dedotto**: il regolamento non e in `fonti/` |

La sesta cosa assorbita non sta qui perche non e un file di quel repo ma una
tabella: il quadro storico delle ore pre-2025, riscritto con le citazioni in
[`../quadro-storico-ore-pregresse.md`](../quadro-storico-ore-pregresse.md).

## Cosa e rimasto fuori, e perche

L'inventario diceva che `references/accordi/` conteneva trascrizioni RAW che
`fonti/` non ha. **Verificato, e non e cosi: nessuno dei sei documenti di
`accordi/` e un documento che `fonti/` non abbia gia.** Sono le stesse cinque
fonti abrogate piu l'accordo vigente, tutte gia in `fonti/` come PDF. La
differenza e la resa, non il documento.

| documento | in `fonti/` | in Organigramma | esito |
| --- | --- | --- | --- |
| ASR 221/CSR 2011, lavoratori | `Accordo_Formazione_Lavoratori_21-12-2011.pdf` | `accordi/ASR_221_2011_lavoratori_RAW.txt`, 750 righe | **stessa cosa.** Sono due estrazioni dello **stesso PDF di Gazzetta**: entrambe finiscono con le pagine 46, 47 e 48 vuote e col codice `12A00059`. 750 righe contro 736 della nostra estrazione, e la differenza e come `pdftotext` manda a capo |
| ASR 223/CSR 2011, DL-RSPP | `Accordo_Formazione_Datori_lavoro_21-12-2011.pdf` | `accordi/ASR_223_2011_DL_RSPP_RAW.txt`, 532 righe | stessa cosa, 532 contro 524 |
| ASR 53/CSR 2012, attrezzature | `Accordo-formazione-attrezzature-22-2-2012.pdf` | `accordi/ASR_53_2012_attrezzature_RAW.txt`, 1.745 righe | **stessa cosa, e vale la pena dirlo: sono la stessa ristampa di terzi.** Tutte e due portano il footer «Vega Engineering S.r.l. - REV. 0» fino a pagina 50, e tutte e due hanno gli stessi dieci allegati (I-X). 1.745 righe contro 1.506, ma nessun contenuto in piu. La resa di Organigramma e in UTF-8 pulito mentre la nostra estrazione ha le accentate rotte: e un difetto della nostra estrazione, non del PDF |
| ASR 153/CSR 2012, linee applicative | `Accordo-Stato-Regioni-25-luglio-2012-att-Rep-153-CSR.pdf` | `accordi/ASR_153_2012_linee_applicative_RAW.pdf` | **scansione da tutte e due le parti.** `pdftotext` cava 25 byte dal nostro e 25 dal loro. Portarlo qui non avrebbe aggiunto un carattere |
| ASR 128/CSR 2016, RSPP e ASPP | `Accordo_Stato_Regioni_formazione_RSPP_7-7-16.pdf` | `accordi/ASR_128_2016_RSPP_ASPP_RAW.pdf` | **scansione da tutte e due le parti**, 37 byte estratti dal loro. Il `README.md` di `reference/` dichiarava gia questa lacuna: **resta aperta**, e l'assorbimento non la chiude |
| ASR 59/CSR 2025 | `ASR-170425.pdf` | `accordi/ASR_59_2025_nuovo_accordo_RAW.txt`, 6.247 righe | **il nostro e piu completo.** 7.769 righe contro 6.247: il loro e una «Copia diffusa da AiFOS» del solo Allegato A, il nostro sono tutte e 136 le pagine, allegati compresi — che e dove stanno l'Allegato III dei crediti e l'Allegato IV degli ATECO |
| DM 02/09/2021, antincendio | `D.M. 02_09_2021.pdf` | `DM_02_09_2021_ANTINCENDIO.txt`, 2.850 righe | **il nostro e piu completo.** 3.558 righe contro 2.850, 59 pagine contro 48. Tutti e due hanno l'allegato III con le ore, quindi per le regole che il motore usa sono equivalenti |
| DM 388/2003, primo soccorso | `Decreto Min. Salute n. 388_2003.pdf` | `DM_388_2003_PRIMO_SOCCORSO.txt`, 600 righe | **stessa cosa in sostanza.** 848 righe contro 600, ma le nostre comprendono la barra di navigazione di un sito («Home», «Programmi Corsi»): il nostro PDF e la stampa di una pagina web. Tutti e due hanno gli allegati 1, 2, 3 e 4 |
| `ateco-rischio.md` | — | promemoria di sette esempi | gia valutato il 9 settembre (`docs/06-letture-allegato-iv.md`): rinvia alla fonte, non e una lettura indipendente |
| `template-output.md`, `accordi-storici.md` | — | formato di uscita e indice della skill | appartengono alla skill, non alla base normativa |

**La conseguenza da tenere:** dei nove documenti confrontati, **zero** erano
assenti. Quello che mancava davvero erano le cinque schede corte qui sopra, che
stanno in `references/`, **non** in `references/accordi/` — e tre delle cinque
non sono trascrizioni ma ricostruzioni.

## I conflitti dichiarati

Sotto G3 della decisione 7, un conflitto sciolto lascia una riga scritta.

**1. Il fascicolo del corso, e sono tre voci inventate.**
`ASR_59_2025_punto6_ATTESTAZIONI.txt` elenca fra il contenuto del fascicolo
«copia degli attestati; materiale didattico; questionario di gradimento».
Nell'accordo non ci sono. E manca «progetto formativo e programma del corso»,
che c'e. Verificato il 10/09/2026 su `fonti/ASR-170425.pdf`, pagina «Pag. 9 a
136». **Vince il testo dell'accordo.** Se quelle tre voci fossero passate in una
lista di controllo, avremmo chiesto a un ente formatore documenti che nessuno
gli chiede.

**2. Il 24 maggio contro il 19 maggio.**
`ASR_221_2011_punto7_ATTESTATI.txt`, `accordi-storici.md` e
`percorsi-formativi.md` datano tutti l'entrata in vigore dell'ASR 2025 al
**24/05/2025** e la fine del transitorio al 24/05/2026. Questo repo usa il **19
maggio** dal 6 settembre 2026: migrazione `0043_entrata_in_vigore_19_maggio.sql`
e `reference/asr-2025-parte-vii.md`. Il motivo e che le FAQ interregionali
invocano l'art. 32 della legge 69/2009, che e norma primaria e sta sopra
all'accordo — e quando si sbaglia, si sbaglia in anticipo. **Vince il 19
maggio**, e le date di quei file non si applicano.

**3. L'accordo attrezzature che citiamo e una ristampa di terzi.**
`fonti/Accordo-formazione-attrezzature-22-2-2012.pdf` porta il footer «Vega
Engineering S.r.l. - REV. 0» su tutte e 50 le pagine, e il `README.md` di
`reference/` non lo diceva — dice solo che gli ultimi due della lista sono
scansioni. Non e un conflitto sciolto, e un'etichetta da correggere: quel PDF va
letto come si legge la riedizione PiuSicurezza dell'ASR 2025, cioe come una resa
di terzi e non come la fonte. La copia di Organigramma **non aiuta**, perche e
la stessa ristampa.
