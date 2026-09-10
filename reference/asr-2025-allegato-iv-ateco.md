# La classe di rischio per settore — Allegato IV dell'ASR 2025

Fonte: Accordo Stato-Regioni 17 aprile 2025 (Rep. Atti n. 59/CSR), Allegato IV,
«Individuazione macrocategorie di rischio e corrispondenze ATECO 2007», pagine
132-136 di 136, in [`fonti/ASR-170425.pdf`](fonti/ASR-170425.pdf). Le cinque
pagine sono state lette a video: sono tabelle.

E la fonte da cui discendono le ore della formazione specifica dei lavoratori
(parte II punto 2.1):

> Durata Minima in base alla classificazione dei settori di cui all'Allegato IV
> (Individuazione macrocategorie di rischio e corrispondenze ATECO 2007):
> 4 ore per i settori della classe di rischio basso; 8 ore per i settori della
> classe di rischio medio; 12 ore per i settori della classe di rischio alto.

Con la generale fanno 8, 12 e 16 ore.

## La classe e un minimo

Nella stessa pagina, e va letto insieme alla tabella:

> I contenuti e la durata sono subordinati all'esito della valutazione dei rischi
> effettuata dal datore di lavoro, fatta salva la contrattazione collettiva e le
> procedure concordate a livello settoriale e/o aziendale e vanno pertanto intesi
> come minimi. Il percorso formativo e i relativi argomenti possono essere
> ampliati in base alla natura e all'entita dei rischi effettivamente presenti in
> azienda, aumentando di conseguenza il numero di ore di formazione necessario.

Il settore da il pavimento. Il datore di lavoro puo alzarlo, non abbassarlo: e
la ragione per cui `clienti.livello_rischio` resta scrivibile e la 0046 aggiunge
`livello_rischio_deciso_a_mano` per sapere quando il valore non viene dall'ATECO.

## E puo scendere per singola persona

Punto 2.1.1, «Condizioni particolari». Non e una nota di colore: cambia le ore
dovute a una persona reale.

> I lavoratori a prescindere dal settore di appartenenza, che non svolgano
> mansioni che comportino la loro presenza, anche saltuaria, nei reparti
> produttivi, possono frequentare i corsi individuati per il rischio basso con le
> relative modalita di erogazione.

L'impiegata amministrativa di una carpenteria in classe alta fa 4 + 4 ore, non
4 + 12. Il motore oggi non lo sa dire: `livello_rischio` sta su `clienti` e la
condizione e per mansione. Il posto dove agganciarla e
`rapporti_lavoro.mansione`, che gia esiste.

## Le tre liste

Trascritte nella migrazione 0046, tabella `ateco_rischio`, una riga per
divisione. In sintesi:

| classe | sezioni | divisioni |
| --- | --- | --- |
| **basso** | G, I, K, L, M, J, R, S, T, U | 45-47, 55-56, 58-63, 64-66, 68, 69-75, 77-82, 90-99 |
| **medio** | A, H, Q, O, P | 01-03, 49-53, 84, 85, 88 |
| **alto** | B, F, C, D, E | 05-09, 10-29, 31-33, 35, 36-39, 41-43 |

## Cosa l'allegato sbaglia, e cosa non dice

**Due errori di stampa.** Le divisioni da 77 a 82 sono elencate sotto «M -
Attivita professionali, scientifiche e tecniche», ma nella classificazione ISTAT
sono la sezione N. E la riga «33 - FABBRICAZIONE DI ALTRI MEZZI DI TRASPORTO»
accosta il codice 33 a un titolo che appartiene alla divisione 30. Nessuno dei
due cambia la classe: la 0046 trascrive il codice, corregge il titolo e lascia la
sezione com'e stampata, con la nota accanto.

**Tre divisioni non sono classificate**, e questo invece cambia qualcosa.

| divisione | | perche manca |
| --- | --- | --- |
| 30 | Fabbricazione di altri mezzi di trasporto | non compare in nessuna delle tre liste |
| 86 | Assistenza sanitaria | vedi sotto |
| 87 | Servizi di assistenza sociale residenziale | vedi sotto |

La lista del rischio ALTO si chiude con la riga **«Q - SANITA E ASSISTENZA
SOCIALE» e sotto non riporta nessun codice**: e l'ultima riga di pagina 136,
verificata a video. La divisione 88, assistenza sociale non residenziale, e
classificata media nella lista precedente; la 86 e la 87 non sono classificate da
nessuna parte. Che l'assistenza sanitaria sia ad alto rischio si capisce, ma non
e scritto, e una regola che si deduce aspetta: in `ateco_rischio` quelle tre
righe ci sono con `livello_rischio` nullo, perche il motore possa distinguere
«divisione che non esiste» da «divisione che la norma non classifica».

**Il buco e nel documento, non nella scansione.** L'8 settembre 2026 le stesse
cinque pagine sono state rilette su una seconda resa dell'accordo,
`fonti/ASR2025_Ufficiale_PiuSicurezza.pdf`, che ha il livello di testo e si
estrae con `pdftotext`. Dice esattamente le stesse cose: le divisioni 30, 86 e 87
non compaiono in nessuna delle tre liste, la lista del rischio ALTO si chiude con
la riga «Q - SANITA E ASSISTENZA SOCIALE» senza nessun codice sotto, e la riga
«33 - FABBRICAZIONE DI ALTRI MEZZI DI TRASPORTO» e riprodotta con lo stesso
titolo sbagliato. Le due letture sono indipendenti — una a video su una
scansione, una estratta da un testo — e concordano: il null di quelle tre righe
non e un artefatto di lettura, e cio che l'allegato non dice.

## ATECO 2007 contro ATECO 2025

L'allegato classifica ATECO 2007. Dal 1 aprile 2025 le visure riportano ATECO
2025, e non e un ritocco: **delle 88 divisioni di ATECO 2022 solo 46 restano se
stesse e sole nella classificazione nuova.** La 25 si spalma su 25, 28 e 31; la
28 su cinque divisioni; la 47 su ventuno. Leggere le prime due cifre del codice
nuovo e cercarle nell'allegato da la risposta sbagliata in mezzo catalogo.

Il ponte e la tavola di raccordo ISTAT, in `fonti/`, caricata in `staging` dalla
0047 e da `scripts/carica_ateco.py`. Si aggancia sul **codice intero**, non sulla
divisione, e la vista `ateco_2025_rischio` dice a cosa si arriva.

Sui 1.290 codici del livello piu fine, quello che si legge in visura:

| | codici |
| --- | --- |
| arrivano a una classe sola | 1.229 |
| una classe sola, ma con una strada che passa per una divisione non classificata | 13 |
| finiscono solo su divisioni non classificate | 32 |
| ambigui: si raccordano a divisioni di classi diverse | 15 |
| senza raccordo nella tavola ISTAT | 1 |

I 32 bloccati sono **14 codici di fabbricazione di altri mezzi di trasporto, 14
di assistenza sanitaria e 4 di assistenza sociale residenziale** — le tre
divisioni che l'allegato non nomina. Ognuno dei 32 tocca una sola divisione non
classificata: nessuno e bloccato da due.

> Una nota su questi numeri, ricontati l'8 settembre 2026. Qui prima si leggeva
> «24 di assistenza sanitaria, 22 di altri mezzi di trasporto e 4 di assistenza
> sociale residenziale», che fa 50 e non 32: erano le **strade** del raccordo,
> non i codici. Un codice 2025 che si raccorda a tre codici 2022 dentro la stessa
> divisione contava tre volte. ROADMAP e memoria portavano un terzo numero
> ancora, 58, che non corrisponde a niente di misurabile.

I 15 ambigui sono codici come «altra stampa», che si raccorda a quattro divisioni
del 2022 di classi diverse: li la vista non sceglie, e la scelta la fa la
valutazione dei rischi.

## Le tre divisioni non classificate: cosa dice la tabella del 2011

Verificato il 9 settembre 2026 su una **seconda resa indipendente**: il testo
coordinato del D.Lgs. 81/2008 (Amato-Di Fiore, gennaio 2026), che riporta per intero
gli accordi del 21 dicembre 2011 con il loro Allegato 2 — «Individuazione
macrocategorie di rischio e corrispondenze ATECO 2002_2007».

Il nostro `fonti/Accordo_Formazione_Lavoratori_21-12-2011.pdf` **non contiene quella
tabella** (solo l'Allegato A), e la copia in `OneDrive/FormazioneASR/Normativa/` e lo
stesso file, stesso MD5. La verifica e stata possibile solo dal testo coordinato.

L'esito e **diviso**, e le due meta vanno tenute separate.

### 86 e 87: erano classificate ALTO, e il 2025 le ha perse

Nel 2011, sotto `Rischio ALTO`:

    Q - SANITA' E ASSISTENZA SOCIALE
    86 - ASSISTENZA SANITARIA
    87 - SERVIZI DI ASSISTENZA SOCIALE RESIDENZIALE

e la `88 - ASSISTENZA SOCIALE NON RESIDENZIALE` sta sotto `Rischio MEDIO`, dove sta
anche nel 2025. Nel 2025 l'intestazione `Q` sopravvive nella lista ALTO **senza
niente sotto**, ultima riga di pagina 136.

Confermato su due blocchi distinti del testo coordinato — l'accordo lavoratori e
quello datori di lavoro portano entrambi la tabella — quindi **due rese indipendenti
dicono la stessa cosa**. Questa meta regge.

### 30: il numero sbagliato non e del 2025, e del 2011

Qui la ricostruzione che circolava **non regge**, ed e importante dirlo.

Nel 2011, sotto `Rischio ALTO`, la riga e gia:

    33 - FABBRICAZIONE DI ALTRI MEZZI DI TRASPORTO

con accanto gli **stessi refusi** che il 2025 riporta — `31 - FABBRICAZIONE Dì
MOBILI` e `32- ALTRI INDUSTRIE MANIFATTURIERE`. Il 2025 non ha perso il `30`:
**ha ricopiato il `33` dal 2011, refusi compresi.**

Quindi non esiste, fra le fonti che abbiamo, una che scriva `30` in quella
posizione. Resta vero che il titolo non appartiene al 33 — in ATECO 2007 la 33 e
*Riparazione, manutenzione e installazione di macchine e apparecchiature* — ma
l'errore ha quindici anni e nasce nel 2011.

Una resa di terzi (Regione Abruzzo, SPSAL) riporta invece `30`. Ipotesi, dichiarata
come tale: e un'edizione **ritrascritta**, in cui qualcuno ha normalizzato gli errori
evidenti — e chi normalizza «Dì MOBILI» normalizza anche un `33` che non torna. Non
e verificabile senza confrontare le due edizioni pagina per pagina.

### Cosa ne segue

- Per **86 e 87** c'e una base documentale citabile, su due rese: erano ALTO, e la
  loro assenza nel 2025 e un difetto di stampa dimostrabile.
- Per la **30** non c'e. C'e un titolo che non appartiene al suo numero, in tutte le
  edizioni che possediamo, da quindici anni.

Le tre divisioni restano `null` finche qualcuno non decide, ma **non sono lo stesso
caso** e non vanno decise insieme.

### La fonte primaria: recuperata, e non basta

La Gazzetta Ufficiale n. 8 dell'11 gennaio 2012 e scaricabile e l'ho letta il
9 settembre 2026:

    https://www.gazzettaufficiale.it/eli/gu/2012/01/11/8/sg/pdf

56 pagine. Tre cose, in ordine di quanto contano.

**Il codice redazionale del 221/CSR e `12A00059`.** L'indice della Gazzetta lo dice
a chiare lettere: «(Rep. Atti n. 221/CSR). (12A00059) . . Pag. 39». La libreria
normativa `formazione-81-utils-src` cita in intestazione `12A00058`, che e **un altro
atto della stessa Gazzetta** — verosimilmente l'accordo gemello sui datori di lavoro.
Chi seguisse quel link per verificare la tabella leggerebbe il documento sbagliato.

**L'accordo occupa le pagine stampate 39-48**, e in tutte quelle pagine compare una
sola intestazione di allegato: `ALLEGATO A`. Il testo dell'accordo rimanda pero a un
«Allegato **II** (Individuazione macrocategorie di rischio e corrispondenze ATECO
2002-2007)» — numerato in cifre romane, non «Allegato 2» come lo chiamano tutte le
rese secondarie.

**La tabella non e nel livello di testo di nessuna delle 56 pagine.** Cercata in
estrazione con layout, in estrazione grezza e pagina per pagina con PyMuPDF: `ALTRI
MEZZI DI TRASPORTO` e `ASSISTENZA SANITARIA` non compaiono mai. Le immagini presenti
sono uniformi su tutte le pagine (4-6 ciascuna, anche su pagine di solo testo) e
hanno l'aria di essere decorazioni di testata.

Quindi **la fonte primaria e in mano e la domanda resta aperta**. Non e piu «dove si
trova»: e se quella tabella, nella Gazzetta, sia stampata come grafica — e allora va
letta a video, come il CLAUDE.md prescrive per gli allegati — oppure non sia stata
pubblicata li affatto. La prima si verifica rendendo le pagine 39-48 in immagine, che
da questa macchina si puo fare con PyMuPDF.

Finche non e verificato, la 30 resta indecidibile: **non manca una riga, c'e una riga
sola in cui numero e titolo non corrispondono da quindici anni.** Se fa fede il
numero e alta la 33; se il titolo, la 30. La libreria risolve prendendo **entrambi** —
classifica `ALTO` sia la 30 sia la 33, e alla 33 assegna la sua descrizione ATECO
vera, che nell'accordo non compare. E la lettura massimamente prudente, non e
dichiarata, e sotto R2 nessuna delle due righe puo citare.

---

## La Gazzetta letta a video: erano ALTO tutte e tre

**Questa sezione corregge quella precedente**, scritta poche ore prima sulla base del
solo testo coordinato. La conclusione «il `33` e del 2011» era **sbagliata**, e va
detto prima del resto.

La tabella **c'e** in Gazzetta, ed e una **scansione ruotata di 90 gradi**: per questo
nessuna estrazione di testo la trovava, ne con layout, ne grezza, ne con PyMuPDF. Si
legge solo rendendo la pagina in immagine — che e esattamente cio che il CLAUDE.md
prescrive per gli allegati, e che qui era l'unica strada.

**Fonte.** Gazzetta Ufficiale, Serie generale n. 8 dell'11 gennaio 2012, **pagina 48**,
atto **12A00059**, Allegato II «Individuazione macrocategorie di rischio e
corrispondenze ATECO 2002-2007», elenco **Rischio ALTO**. Il PDF e in
[`fonti/GU-8-11012012-Accordo-221-CSR.pdf`](fonti/GU-8-11012012-Accordo-221-CSR.pdf),
e i due ritagli leggibili sono accanto.

Alla lettera, riga `DM` — Autoveicoli:

    29 - FABBRICAZIONE DI AUTOVEICOLI, RIMORCHI E SEMIRIMORCHI
    30 - FABBRICAZIONE DI ALTRI MEZZI DI TRASPORTO

riga `DN` — Mobili:

    31 - FABBRICAZIONE DI MOBILI
    32- ALTRE INDUSTRIE MANIFATTURIERE

riga `N` — Sanita:

    Q - SANITA' E ASSISTENZA SOCIALE
    86 - ASSISTENZA SANITARIA
    87 - SERVIZI DI ASSISTENZA SOCIALE RESIDENZIALE

**Tutte e tre le divisioni — 30, 86 e 87 — erano classificate ALTO nella fonte
primaria.** E la Gazzetta scrive «FABBRICAZIONE DI MOBILI» e «ALTRE INDUSTRIE
MANIFATTURIERE» **senza refusi**.

### Cosa cade, di quello che avevamo scritto

**Cade la ricostruzione del testo coordinato.** L'edizione Amato-Di Fiore riporta
`33` e i refusi «Dì MOBILI» / «ALTRI INDUSTRIE»: **non e fedele alla Gazzetta**. Non
ha ereditato quegli errori — li ha introdotti, o li ha presi da una catena di
riedizioni. Il fatto che li porti in due blocchi distinti dello stesso volume dice
solo che la stessa fonte sporca e stata usata due volte.

**Cade la regola «una copia piu pulita non e una copia migliore».** Era una buona
intuizione e qui e falsa: la resa piu pulita — quella della Regione Abruzzo, che
diceva `30` — era **la piu vicina alla Gazzetta**, non una normalizzazione d'ufficio.
Chi l'aveva scartata per la sua pulizia aveva scartato la lettura giusta.

Quello che regge, e che vale piu della regola caduta: **fra rese discordi non decide
la pulizia, decide la distanza dalla fonte.** L'unico modo di stabilirla e risalire
alla fonte, non giudicare le copie.

### Cosa vale adesso, con precisione

L'Accordo 221/2011 resta **abrogato**: questa citazione non dice cosa si applica oggi.
Dice cosa la tabella del 2011 conteneva, e la dice da **fonte primaria** invece che da
una resa di terzi. Il ragionamento e lo stesso di prima e adesso poggia su un'altra
base:

- **Non regge**: «il 221/2011 dice che la 86 e alta, quindi e alta». Abrogato.
- **Regge**: «l'Allegato IV del 2025 riprende quella tabella; in tre punti la sua resa
  e difettosa; la fonte primaria da cui deriva dice cosa c'era, e sta in Gazzetta».

Sotto **A7** resta una **deduzione dichiarata** — ma la sua base non e piu un PDF di
CMS regionale: e la Gazzetta Ufficiale, pagina 48, con la citazione completa. Sotto
**R2** una riga generata puo finalmente dire da dove viene.

E le tre divisioni tornano a essere **un caso solo**, non due: erano tutte e tre ALTO,
e tutte e tre si sono perse nella stessa catena di riedizioni.

