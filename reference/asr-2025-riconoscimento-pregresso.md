# Riconoscimento del pregresso per il datore di lavoro RSPP e per RSPP/ASPP — le due tabelle della Parte VII

Fonte: Accordo Stato-Regioni 17 aprile 2025 (Rep. Atti n. 59/CSR), Parte VII
«Altre disposizioni», in [`fonti/ASR-170425.pdf`](fonti/ASR-170425.pdf).

| tabella | pagina stampata | indice di pagina del PDF |
| --- | --- | --- |
| datore di lavoro che svolge i compiti di RSPP (art. 34) — accordo 21 dicembre 2011 n. 223 | Pag. **113** a 136 | pagina **116** di 139 |
| RSPP e ASPP (art. 32) — accordo 7 luglio 2016 n. 128, modulo B | Pag. **114** a 136 | pagina **117** di 139 |

**Lettura di controllo**: [`fonti/ASR2025_Ufficiale_PiuSicurezza.pdf`](fonti/ASR2025_Ufficiale_PiuSicurezza.pdf),
pagine **113** e **114** di 136 — che li portano lo stesso numero stampato,
perche quella resa non ha le tre pagine di testa. Esito nella sezione finale, e
va letto sapendo che le due rese **non sono indipendenti**: lo dice la stessa
sezione.

Trascritte il 10 settembre 2026. Fino a quel giorno
[`asr-2025-parte-vii.md`](asr-2025-parte-vii.md) le riassumeva in tre righe e
dichiarava che non erano trascritte cella per cella.

## Perche l'indice del PDF non e la pagina stampata

`ASR-170425.pdf` ha **139 pagine**, non 136. Le prime tre stanno prima del testo
dell'accordo: la pagina 1 porta la sola dicitura «Copia diffusa da AiFOS», le
pagine 2 e 3 non danno un carattere. Il testo comincia alla pagina 4 del PDF, che
e l'ALLEGATO A e porta il footer «Pag. 1 a 136».

Quindi **indice PDF = pagina stampata + 3**, e lo scarto e costante fino in fondo:
la coda dell'Allegato IV, che il repo cita come «pagina 136 di 136», e la pagina
139 del PDF. Le verifiche fatte: pagina 116 del PDF finisce con «Pag. 113 a 136»,
pagina 117 con «Pag. 114 a 136».

Il contesto conferma che sono le tabelle giuste. La pagina 115 del PDF (stampata
112) si chiude con il paragrafo che le annuncia — «RICONOSCIMENTO CORSO PER
DATORE DI LAVORO CHE SVOLGE DIRETTAMENTE I COMPITI DI PREVENZIONE E PROTEZIONE
DAI RISCHI ai sensi dell'art. 34 del d.lgs. n. 81/2008» — e la pagina 118 del PDF
(stampata 115) riprende con gli ambienti confinati e le attrezzature.

**Due numeri di pagina che il repo dava per buoni e che non tornano.** Il
`README.md` di questa cartella descrive `ASR-170425.pdf` come «136 pagine»: e il
conteggio stampato, non quello del file. E il commento della migrazione
`0055_le_tre_divisioni_valgono_alto.sql` parla di un testo della Conferenza
Stato-Regioni di **138 pagine**: quello e un altro file
(`p-9-csr-atto-rep-n-59-17apr2025.pdf`, che qui non c'e), e il suo conteggio non
si applica a questo.

## Una nota sugli accenti

In questa cartella la prosa si scrive senza accenti. **Le celle qui sotto no**:
sono trascrizioni verbatim e riportano i caratteri come stanno («Attivita» nel
testo dell'accordo e scritto `Attività`, `Sanità`, `già`). Alterare un carattere
in una trascrizione che serve a essere confrontata con l'originale toglierebbe
alla trascrizione la ragione di esistere.

---

## 1. Datore di lavoro che svolge i compiti di RSPP (art. 34) — pagina stampata 113

Il paragrafo che introduce la tabella, pagina stampata 112:

> RICONOSCIMENTO CORSO PER DATORE DI LAVORO CHE SVOLGE DIRETTAMENTE I COMPITI DI
> PREVENZIONE E PROTEZIONE DAI RISCHI ai sensi dell'art. 34 del d.lgs. n. 81/2008
>
> Sono fatti salvi i percorsi formativi effettuati in vigenza dell'accordo
> Stato-Regioni 21 dicembre 2011 n 223 per i quali sono riconosciuti i crediti
> formativi come riportato nella tabella sottoindicata e alle condizioni ivi
> indicate.

La tabella ha **due righe di intestazione e quattro righe di corpo**, in quattro
colonne. La prima riga di intestazione unisce le tre colonne di destra.

**Intestazione, riga 1**

- colonna 1: «Accordo Stato Regione 21 dicembre 2011 n 223» seguito, dopo una
  riga bianca, da «Corso Frequentato»
- colonne 2-3-4 (unite): «Credito riconosciuto sul presente Accordo Stato Regione»

**Intestazione, riga 2**

- colonna 1: **cella vuota**
- colonna 2: «Modulo comune»
- colonna 3: «Modulo integrativo»
- colonna 4: «Condizione»

### Riga 1 — `BASSO 16 ore`

| cella | contenuto verbatim |
| --- | --- |
| Modulo comune | Credito totale |
| Modulo integrativo | `----------------------` (ventidue trattini) |
| Condizione | **cella vuota** |

### Riga 2 — `MEDIO 32 ore`

| cella | contenuto verbatim |
| --- | --- |
| Modulo comune | Credito totale |
| Modulo integrativo | Credito totale<br>Modulo integrativo 1: Agricoltura, silvicoltura e zootecnia (16 ore) **Modulo integrativo 2: Pesca (12 ore)** |
| Condizione | Qualora l'attestato precedentemente rilasciato riporti l'indicazione del Codice Ateco 2007- A 01 02 -03 (agricoltura, silvicoltura e pesca) |

Nella colonna «Modulo integrativo» la parte «Modulo integrativo **2: Pesca (12
ore)**» e in grassetto nell'originale a partire dal `2:`; il resto no.

### Riga 3 — `ALTO 48 ore`

| cella | contenuto verbatim |
| --- | --- |
| Modulo comune | Credito totale |
| Modulo integrativo | Credito totale<br>&nbsp;Modulo integrative 3: **Costruzioni (16 ore)** |
| Condizione | Qualora l'attestato precedentemente rilasciato riporti l'indicazione del Codice Ateco 2007- F (costruzioni) |

### Riga 4 — `ALTO 48 ore` (la seconda volta)

| cella | contenuto verbatim |
| --- | --- |
| Modulo comune | Credito totale |
| Modulo integrativo | Modulo integrativo 4- **chimico Petrolchimico (16 ore)** |
| Condizione | Qualora l'attestato precedentemente rilasciato riporti l'indicazione del Codice Ateco 2007- C 19 (fabbricazione dl coke e prodotti derivanti dalla raffinazione del petrolio) e C20(fabbricazione di prodotti chimici |

### Cosa non torna, e non e stato corretto

Cinque cose. Nessuna e stata sistemata nella trascrizione.

1. **«fabbricazione dl coke».** Nel testo del PDF il carattere e una `l` minuscola
   (verificato a byte: `64 6c`, cioe `d` + `l`), dove il senso vuole `di`. E lo
   stesso difetto che il commento della migrazione 0055 elenca per la coda
   dell'Allegato IV — «FABBRICAZIONE Dl MOBILI» — ma con la minuscola invece che
   con la maiuscola. **Sospetto**: sostituzione `i` → `l`, per la ragione detta al
   punto 6 piu sotto.
2. **«Modulo integrative 3».** Inglese al posto di `integrativo`, e solo in quella
   riga: la riga 2 scrive «Modulo integrativo 1» e «Modulo integrativo 2», la riga
   4 scrive «Modulo integrativo 4». **Sospetto**: refuso di redazione. La cella ha
   anche uno spazio in testa, prima di `Modulo`.
3. **La cella si interrompe a meta.** L'ultima riga della tabella finisce con «C20
   (fabbricazione di prodotti chimici» — **senza la parentesi chiusa**. Non c'e
   continuazione: la pagina stampata 114 riprende con un titolo nuovo. **Il
   giudizio e sospeso**: non si sa se manchi solo la parentesi o anche del testo
   (la denominazione ATECO 2007 completa della divisione C 20 e «fabbricazione di
   prodotti chimici», quindi potrebbe mancare la sola parentesi, ma questo e un
   confronto con una fonte esterna, non una lettura di questa pagina).
4. **`ALTO 48 ore` compare due volte**, come prima cella di due righe distinte.
   Non e un errore di lettura: sono due righe separate da un bordo, con condizioni
   diverse (F costruzioni, C 19 e C 20 chimico-petrolchimico). Il livello ALTO
   dell'accordo 2011 apre quindi a **due** moduli integrativi diversi a seconda
   dell'ATECO sull'attestato.
5. **La riga 4 non scrive «Credito totale» nella colonna «Modulo integrativo».**
   Le righe 2 e 3 hanno «Credito totale» come prima riga di quella cella, e sotto
   il nome del modulo. La riga 4 ha **solo** il nome del modulo. **Il giudizio e
   sospeso**: la simmetria delle altre due righe fa pensare a un'omissione, ma
   quella parola in quella cella non c'e, e dedurla sarebbe scriverla.

E una sesta, che riguarda il file e non la tabella:

6. **Questi non sono errori di OCR.** Le pagine 116 e 117 di `ASR-170425.pdf` non
   contengono nessuna immagine (`pdfimages -list` non elenca niente) e portano
   font Calibri incorporati: sono **testo digitale**, non una scansione ripassata
   da un riconoscimento. Quindi `dl`, `integrative` e la cella troncata sono
   caratteri che stanno nel file, ereditati dal documento di partenza. Il repo
   descrive i difetti gemelli dell'Allegato IV come errori di stampa o di OCR:
   qui, in questo file, il difetto e a monte di ogni nostra lettura.

---

## 2. RSPP e ASPP (art. 32) — pagina stampata 114

Il paragrafo che introduce la tabella:

> RICONOSCIMENTO FORMAZIONE PER RSPP E ASPP
>
> Sono fatti salvi i percorsi formativi effettuati in vigenza dell'accordo
> Stato-Regioni del 7 luglio 2016[^3] per i moduli A e C, per il quali e
> riconosciuto credito formativo totale, nonche per il modulo B come riportato
> nella tabella sottoindicata.

[^3]: nota a pie di pagina, verbatim: «Al punto 8 dell'Accordo 2016 era stato
previsto il riconoscimento della formazione pregressa (ex accordo stato-regioni
del 26 gennaio 2006) rispetto all' articolazione del modulo B dell'accordo 7
luglio 2016.»

Tre colonne, **due righe di intestazione e cinque righe di corpo**.

**Intestazione, riga 1**

- colonna 1: «Accordo Stato Regione 128 del 7 luglio 20016» seguito, dopo una
  riga bianca, da «Corso Frequentato»
- colonne 2-3 (unite): «Credito riconosciuto sul presente Accordo Stato Regione»

**Intestazione, riga 2**

- colonna 1: **cella vuota**
- colonna 2: «Modulo B comune»
- colonna 3: «Modulo B specialistico»

### Le cinque righe

| corso frequentato (verbatim) | Modulo B comune | Modulo B specialistico |
| --- | --- | --- |
| Modulo B Comune | Credito totale | **cella vuota** |
| Modulo B-SP1: Agricoltura - Pesca (12 ore) già riconosciuto al Modulo B1 – Accordo 2006<br><br>già riconosciuto al Modulo B2 | `___________` (undici trattini bassi) | Credito totale per Modulo B-SP1: Agricoltura, silvicoltura e zootecnia (16 ore) Credito totale per Modulo B-SP2: Pesca (12 ore) |
| Modulo B-SP2: Attività Estrattive - Costruzioni (16 ore) già riconosciuto al Modulo B3 dell'accordo 2006 | `_____________` (tredici) | Credito totale per Modulo B-SP3: Costruzioni (16 ore) |
| Modulo B-SP3: Sanità residenziale (12 ore) già riconosciuto al Modulo B7 dell'accordo 2006 | `______________` (quattordici) | Credito totale per Modulo B-SP4: Sanità residenziale (12 ore |
| Modulo B-SP4: Chimico - Petrolchimico (16 ore) già riconosciuto al Modulo B5 dell'accordo 2006 | `__________________` (diciotto) | Credito totale per Modulo B-SP5: Chimico - Petrolchimico (16 ore) |

Il trattino lungo dopo «Modulo B1» nella seconda riga e un **en dash** (`–`), non
un trattino: e l'unico della tabella.

Subito sotto la tabella, sulla stessa pagina:

> RICONOSCIMENTO FORMAZIONE PREGRESSA PER I COORDINATORI PER LA PROGETTAZIONE E
> PER L' ESECUZIONE DEI LAVORI (ALLEGATO XIV DLGS 81/08)
>
> Per I coordinatori per la progettazione e per l'esecuzione dei lavori sono
> fatti salvi i percorsi formativi effettuati in vigenza allegato XIV Dlgs 81/08
> cosi come modificato dall'Accordo Stato Regione 7 luglio 2016 , per il quali e
> riconosciuto credito formativo totale.

### Cosa non torna, e non e stato corretto

1. **«del 7 luglio 20016».** Cinque cifre. Il corpo del paragrafo, tre righe
   sopra, scrive «7 luglio 2016». **Sospetto**: refuso, uno zero di troppo.
   L'intestazione della stessa cella dice «Accordo Stato Regione 128», e il
   repertorio 128/CSR e del 2016.
2. **«Sanità residenziale (12 ore» senza parentesi chiusa**, nella colonna
   «Modulo B specialistico» della quarta riga. Le altre tre righe la chiudono.
   **Sospetto**: refuso. Non e stato aggiunto niente.
3. **La seconda riga ha un frammento sospeso.** La prima cella e composta di due
   paragrafi: «Modulo B-SP1: Agricoltura - Pesca (12 ore) già riconosciuto al
   Modulo B1 – Accordo 2006» e, staccato, «già riconosciuto al Modulo B2». Il
   secondo non ha soggetto. **Il giudizio e sospeso**: si legge come se il B-SP1
   del 2016 corrispondesse a due moduli del 2006 (B1 e B2), ma la frase e monca e
   non lo dice.
4. **La colonna «Modulo B comune» delle ultime quattro righe non e vuota: porta
   una riga di trattini bassi**, di quattro lunghezze diverse (11, 13, 14, 18).
   E un riempitivo, come i ventidue trattini della tabella di pagina 113 — non e
   un segno con un significato dichiarato da nessuna parte dell'accordo.
5. **Manca una riga per il modulo B-SP5.** L'accordo 2016 aveva quattro moduli
   specialistici (B-SP1..B-SP4) e la tabella li elenca tutti e quattro; l'accordo
   2025 ne ha cinque, e la tabella li nomina in colonna 3 con i numeri spostati di
   uno. **Non c'e nessuna riga che dica cosa vale per il nuovo B-SP5 a chi non ha
   fatto il vecchio B-SP4**, oltre a quella che c'e.

---

## Cosa decidono davvero le due tabelle

**Art. 34 — il datore di lavoro RSPP.** Il modulo comune del percorso nuovo e
**sempre** riconosciuto per intero a chi ha frequentato il corso del 2011,
qualunque fosse il livello: BASSO 16, MEDIO 32 o ALTO 48 ore. La distinzione non
sta li, sta nei **moduli integrativi**: chi ha il livello MEDIO ha credito totale
sugli integrativi 1 (agricoltura, silvicoltura e zootecnia) e 2 (pesca), chi ha
il livello ALTO sull'integrativo 3 (costruzioni) oppure sul 4
(chimico-petrolchimico). Chi ha BASSO non ha nessun integrativo: la cella e una
riga di trattini e la condizione e vuota.

E qui sta la cosa che decide i casi veri: **il credito sugli integrativi e
condizionato**, e la condizione non riguarda la persona ne l'azienda di oggi,
riguarda **cosa c'e scritto sull'attestato gia rilasciato**. Serve che
l'attestato riporti l'indicazione del codice ATECO 2007 — A 01 02 -03, oppure F,
oppure C 19 e C 20. Un attestato del 2011 che dica solo «rischio alto» senza il
codice **non soddisfa la condizione scritta**.

**Art. 32 — RSPP e ASPP.** I moduli A e C sono credito totale, e lo dice il
paragrafo, non la tabella. La tabella riguarda il solo modulo B: il **B comune**
del 2016 vale come B comune del 2025, credito totale; e ogni **specialistico**
del 2016 vale come lo specialistico corrispondente del 2025, con la numerazione
spostata di uno (B-SP2 vecchio → B-SP3 nuovo, B-SP3 → B-SP4, B-SP4 → B-SP5) e con
il vecchio B-SP1 che ne copre due, il nuovo B-SP1 e il nuovo B-SP2. Nessun
credito incrociato: la colonna «Modulo B comune» delle righe specialistiche porta
solo un riempitivo, e la riga del B comune lascia vuota la colonna
«specialistico».

## Cosa le due tabelle non scrivono

Va detto perche l'assunzione A7 vale in tutte e due le direzioni: una regola non
scritta non entra nelle tabelle applicative nemmeno quando sembra ovvia.

- **Non c'e nessun termine.** Ne l'una ne l'altra tabella dice entro quando. Il
  termine dei 24 mesi della pagina stampata 112 riguarda il **corso per datore di
  lavoro** della parte II punto 3, non il riconoscimento di queste due tabelle.
- **Non c'e nessuna data limite di validita dell'attestato pregresso.** Le tabelle
  non dicono che un attestato del 2011 sia troppo vecchio, e non dicono il
  contrario.
- **Non c'e nessuna decorrenza dell'aggiornamento.** La frase «L'aggiornamento dei
  suddetti corsi parte dalla data di fine corso riportata nell'attestato» sta nel
  punto 2 della Parte VII per i corsi da datore di lavoro e, piu avanti, per gli
  ambienti confinati e le attrezzature. In queste due tabelle **non c'e**, e
  applicarla per analogia sarebbe una deduzione.
- **Non c'e nessuna verifica di conformita.** Per i corsi da datore di lavoro il
  punto 2 la richiede espressamente («i cui contenuti siano conformi al presente
  accordo sono riconosciuti»). Qui la formula e diversa: «sono fatti salvi i
  percorsi formativi effettuati in vigenza» dell'accordo, senza condizione di
  conformita. L'unica condizione scritta e quella del codice ATECO
  sull'attestato, e vale solo per i moduli integrativi dell'art. 34.
- **Non c'e nessuna regola per chi ha un attestato del 2011 senza codice ATECO.**
  La condizione dice quando il credito c'e; non dice cosa accade quando manca.

## La lettura di controllo, e perche vale meno di quanto sembri

Le stesse due tabelle sono state rilette in
[`fonti/ASR2025_Ufficiale_PiuSicurezza.pdf`](fonti/ASR2025_Ufficiale_PiuSicurezza.pdf),
pagine 113 e 114 di 136, rendendo le pagine in immagine come si e fatto per il
PDF primario.

**Divergenze: nessuna.** Non una cella, non una parola, non un carattere. Le due
rese portano lo stesso `dl` in «fabbricazione dl coke», lo stesso «Modulo
integrative 3», lo stesso «20016», le stesse due parentesi non chiuse, le stesse
quattro lunghezze di trattini bassi, le stesse quattro righe con `ALTO 48 ore`
ripetuto. L'estratto testuale delle due pagine e **identico byte per byte**, a
meno della riga di intestazione «PiùSicurezza srl Rev 1 del 06/06/2025
www.campoprove.it» che quella resa aggiunge in cima a ogni pagina.

**Ed e proprio questo che va dichiarato.** Sull'Allegato IV le due rese erano due
strade diverse verso lo stesso testo, e la concordanza voleva dire qualcosa. Qui
no: le pagine 116-117 di `ASR-170425.pdf` sono testo digitale con font Calibri
incorporati e **zero immagini**, e `ASR2025_Ufficiale_PiuSicurezza.pdf` porta
sulle stesse pagine gli stessi font e lo stesso identico flusso di testo. Non sono
due letture indipendenti dello stesso documento: sono **due impaginazioni dello
stesso file di partenza**. La concordanza conferma che nessuna delle due rese ha
introdotto un errore proprio; **non** conferma che il testo sia quello sancito
dalla Conferenza.

Per rompere davvero questo silenzio servirebbe il testo della Conferenza
Stato-Regioni (`p-9-csr-atto-rep-n-59-17apr2025.pdf`, quello di 138 pagine citato
dalla migrazione 0055), che in [`fonti/`](fonti/) **non c'e**. E la stessa lacuna
gia descritta nel `README.md` per l'Allegato 2 dell'accordo 2011: una fonte che il
progetto nomina e non ha.

## Cosa cambia per il motore, e cosa no

Niente entra nelle tabelle applicative con questa trascrizione: qui c'e la
lettura, non la regola. Ma tre cose vanno segnate per chi codifichera.

**Il codice ATECO sull'attestato e un fatto che il progetto non registra.** La
condizione dei moduli integrativi dell'art. 34 si verifica guardando l'attestato
gia rilasciato, non l'azienda di oggi. Il rischio della persona e dell'azienda il
progetto lo sa; **cosa sia stampato su un attestato del 2011 no**, e nessun campo
lo tiene. Finche non c'e quel campo, il credito sui moduli integrativi non e
calcolabile — e dichiararlo e piu onesto che dedurlo dal codice ATECO attuale del
cliente, che e un'altra cosa.

**Queste tabelle non sono l'Allegato III.** Le righe di `crediti_formativi` che
citano «Allegato III, pag. 129» — quelle delle migrazioni 0040 e 0042 su
`datore_lavoro_rspp` e `rspp_aspp` — rispondono a un'altra domanda: quanto vale
una figura verso un'altra, oggi. Queste due tabelle rispondono a «vale ancora
l'attestato che questa persona ha gia», cioe pregresso contro nuovo accordo. Le
due cose non si sovrappongono e non si contraddicono.

**Il riscontro che `quadro-storico-ore-pregresse.md` cita regge.** Quel file dice
che l'ASR 2025 «riconosce quelle tre durate per nome — credito totale sul modulo
comune per BASSO 16 ore, MEDIO 32 ore e ALTO 48 ore, pagina 113». La tabella
trascritta qui lo conferma alla lettera. Va solo aggiunto cio che quel riassunto
non poteva dire: che il credito totale sul modulo comune e incondizionato, mentre
quello sugli integrativi non lo e.
