# Tenere aggiornate le fonti

Quasi tutto quello che sta in `fonti/` e fermo: un accordo del 17 aprile 2025 e
tre decreti del 2003, del 2019 e del 2021 non cambiano da soli. **Il D.Lgs.
81/2008 no.** E un testo che viene modificato ogni pochi mesi, spesso da un
decreto-legge convertito a fine anno, e il progetto lo cita in quindici punti.

Un motore di scadenze che poggia su un testo che si muove ha bisogno di sapere
quando si e mosso. Questa e la regola.

## La fonte che si muove

| cosa | dove | come si vede la versione |
| --- | --- | --- |
| D.Lgs. 81/2008, testo coordinato | <https://www.8108amatodifiore.it/> | l'edizione e dichiarata in home e nella pagina di download («Edizione Gennaio 2026») |

E il testo curato da G. Amato (INAIL CTSS Venezia) e F. Di Fiore (ATS Pavia).
Non e la Gazzetta: e un coordinamento, e vale come fonte proprio per la ragione
per cui serve qui — **ogni comma modificato porta la nota con il provvedimento
che lo ha cambiato e la data di entrata in vigore**. E cosi che al primo
controllo si e visto che l'art. 37 c. 11 era cambiato il 31 dicembre 2025.

Le edizioni escono ogni pochi mesi: luglio 2025, poi gennaio 2026.

## Stato

| edizione in mano | letta il | dove sta il file |
| --- | --- | --- |
| **gennaio 2026** (20/01/2026, 1.466 pagine, 25 MB) | 8 settembre 2026 | `OneDrive - Overall Group srl\FormazioneASR\Normativa\81-08-AmatoDiFiore-gennaio-2026.pdf` |

**Il file non sta nel repo.** Sono 25 MB per edizione contro i 19 MB che oggi
pesa tutto `.git`, e il sito chiede di linkare la pagina invece di ridistribuire
il documento. Nel repo sta quello che si legge:
[`dlgs-81-2008-articoli-citati.md`](dlgs-81-2008-articoli-citati.md).

## Il controllo, ogni mese

1. **Leggere l'edizione dichiarata** su <https://www.8108amatodifiore.it/>.
2. **Confrontarla con la tabella «Stato» qui sopra.** Se e la stessa, il
   controllo finisce qui: e il caso normale, undici volte su dodici.
3. Se e diversa, **scaricare**. Il link e dietro un download manager: l'id sta
   nella pagina dell'edizione, come `wpdmdl=NNNN`, e il file si prende con

       curl -sL --retry 4 --retry-all-errors --speed-time 60 --speed-limit 1000 \
         -A "Mozilla/5.0" -e "https://www.8108amatodifiore.it/download/EDIZIONE/" \
         -o 81-08.pdf "https://www.8108amatodifiore.it/?wpdmdl=NNNN"

   La prima connessione cade quasi sempre dopo un paio di MB e il server non
   accetta il resume (`curl -C -` fallisce con 33): va ripetuta intera, non
   ripresa. A scaricamento finito, `pdfinfo` deve dire 1.400 pagine e passa; se
   dice «Couldn't read xref table» il file e troncato.
4. **Leggere solo la lista qui sotto**, non le 1.466 pagine, cercando le note di
   modifica con una data posteriore all'ultima lettura.
5. **Trascrivere quello che e cambiato** in `dlgs-81-2008-articoli-citati.md`,
   con la citazione. Poi vale la regola di sempre: se la regola si legge entra in
   una migrazione, se si deduce aspetta.
6. **Aggiornare la tabella «Stato»** con la nuova edizione e la data.

## Cosa si guarda

Gli articoli su cui il motore poggia davvero. La lista viene da quello che le
migrazioni e le trascrizioni citano, e va tenuta insieme a loro.

| articolo | cosa regge |
| --- | --- |
| art. 19 | il preposto e i suoi obblighi |
| art. 21 c. 1 | i percorsi per autonomi e imprese familiari |
| art. 32 | RSPP e ASPP: requisiti e formazione |
| art. 34 | il datore di lavoro che svolge i compiti di RSPP |
| **art. 37** | **l'articolo che regge tutto**: c. 1 lavoratori, c. 2 il rinvio all'accordo, c. 4 lett. a il termine dall'assunzione, c. 7 e 7-ter dirigenti e preposti, c. 9 le figure dell'emergenza, c. 10 e 11 l'RLS, c. 14-bis il credito formativo |
| art. 45 | primo soccorso, e il c. 2 che un giorno sostituira il DM 388/2003 |
| art. 46 | antincendio, e il rinvio al DM 2 settembre 2021 |
| art. 71 c. 7 | uso delle attrezzature riservato a incaricati formati |
| art. 73 c. 4 e c. 5 | attrezzature: il c. 4 regge il transpallet, il c. 5 le abilitazioni dell'accordo |
| art. 77 | DPI e addestramento periodico, di cui la norma non fissa la cadenza |
| art. 82 | lavori elettrici, PES PAV PEI |
| art. 97 c. 3-ter | il modulo cantieri del datore di lavoro dell'impresa affidataria |
| art. 98 | coordinatori per la sicurezza |
| art. 111 | lavori in quota |
| art. 136 e allegato XXI | ponteggi e lavori su funi |

Sul c. 2 dell'art. 45 c'e una cosa da guardare ogni volta con attenzione
particolare: **il giorno in cui esce il decreto attuativo che sostituisce il DM
388/2003**, le due righe di prassi sulle ore di aggiornamento del primo soccorso
— 6 e 4, decise da Overall e scritte in [`ore-fuori-dall-asr.md`](ore-fuori-dall-asr.md)
— smettono di essere una decisione aziendale e tornano a essere una lettura.

## Le altre fonti, e quando ricontrollarle

Non hanno bisogno di un controllo mensile, ma non sono ferme per sempre.

| fonte | quando ha senso ricontrollarla |
| --- | --- |
| FAQ interregionali sull'ASR 2025 | escono a ondate: l'ultima e del 27 marzo 2026. Vale un giro quando una regola discussa torna a galla |
| tavole ATECO ISTAT | ISTAT pubblica aggiornamenti del raccordo: quello in `fonti/` e del luglio 2026 |
| statistiche INAIL sull'indice di inabilita permanente | triennali, pubblicate in Gazzetta e aggiornate al 31 dicembre: servono alla condizione II del gruppo A di primo soccorso, e non sono ancora in `fonti/` |
