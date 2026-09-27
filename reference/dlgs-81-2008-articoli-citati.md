# D.Lgs. 81/2008 — gli articoli su cui il motore poggia

Il decreto e citato in quindici punti fra migrazioni e trascrizioni — `ruoli.norma`
lo nomina per quasi ogni riga — ma fino all'8 settembre 2026 **non era mai stato
letto**: nessuna copia in `fonti/`, nessuna trascrizione, nessuna pagina. Le
citazioni venivano da quello che si sa, non da quello che si legge, ed e
esattamente la cosa che `README.md` di questa cartella vieta.

Qui ci sono i punti letti, con la citazione. Il resto del decreto si legge quando
serve, non prima.

## L'edizione

Testo coordinato curato da G. Amato (INAIL CTSS Venezia) e F. Di Fiore (ATS
Pavia), **edizione gennaio 2026**, 1.466 pagine, dal sito
[8108amatodifiore.it](https://www.8108amatodifiore.it/). Il file **non sta nel
repo**: 25 MB per edizione, e il sito chiede di linkare la pagina invece di
ridistribuire il documento. Sta in
`OneDrive - Overall Group srl\FormazioneASR\Normativa\81-08-AmatoDiFiore-gennaio-2026.pdf`,
accanto agli accordi.

Come si controlla se ne e uscita una nuova, e cosa si guarda quando succede, sta
in [`aggiornamento-fonti.md`](aggiornamento-fonti.md).

E un testo coordinato con note, non la Gazzetta: il pregio e proprio quello:
ogni comma modificato porta la nota con il provvedimento che lo ha cambiato e la
data di entrata in vigore. E cosi che si e vista la prima cosa scritta qui sotto.

## Art. 37 c. 11 — RLS: 32 ore, e l'aggiornamento ha tre casi, non due

Pagina 46 di 202 del titolo I (numerazione interna del testo coordinato). Ultimo
periodo **modificato dall'art. 5 del D.L. 31 ottobre 2025 n. 159**, convertito con
L. 29 dicembre 2025 n. 198, **in vigore dal 31 dicembre 2025**.

> 11. Le modalita, la durata e i contenuti specifici della formazione del
> rappresentante dei lavoratori per la sicurezza sono stabiliti in sede di
> contrattazione collettiva nazionale, nel rispetto dei seguenti contenuti minimi:
> [...]
> La durata minima dei corsi e di **32 ore iniziali**, di cui 12 sui rischi
> specifici presenti in azienda e le conseguenti misure di prevenzione e
> protezione adottate, con verifica di apprendimento. La contrattazione collettiva
> nazionale disciplina le modalita dell'obbligo di aggiornamento periodico, la cui
> durata **non puo essere inferiore a 4 ore annue per le imprese che occupano dai
> 15 ai 50 lavoratori e a 8 ore annue per le imprese che occupano piu di 50
> lavoratori. Per le imprese che occupano meno di 15 lavoratori**, la
> contrattazione collettiva nazionale disciplina le modalita dell'obbligo di
> aggiornamento periodico **nel rispetto del principio di proporzionalita**, tenuto
> conto della dimensione delle imprese e del livello di rischio per la salute e la
> sicurezza derivante dall'attivita svolta.

Il progetto aveva scritto un'altra cosa. Il commento della 0039 dice
«4 ore fino a 50 dipendenti e 8 oltre», e la ROADMAP lo ripete: e la regola di
prima del 31 dicembre 2025, e sotto i 15 lavoratori **non e piu vera**. Li la
legge non fissa nessuna durata e rinvia al contratto collettivo, con un criterio
— la proporzionalita — e non con un numero.

I casi quindi sono tre:

| lavoratori | aggiornamento annuo |
| --- | --- |
| meno di 15 | non fissato dalla legge: lo dice il CCNL, per proporzionalita |
| da 15 a 50 | **4 ore** |
| oltre 50 | **8 ore** |

E cambia anche la forma della variante: l'aggiornamento dell'RLS e **annuale**,
non quinquennale, e la soglia non e una sola. Delle 480 aziende in archivio la
grande maggioranza sta sotto i 15 lavoratori, cioe nel caso in cui la risposta
non e un numero — il che vuol dire che la domanda «quanti dipendenti» da sola non
basta a chiudere questa variante, e che la riga RLS in `requisiti` resta senza
ore anche adesso, ma per una ragione diversa e piu precisa di prima.

**Le 32 ore iniziali invece sono di legge**, e possono entrare.

## Art. 37 c. 10 — il diritto alla formazione dell'RLS

> 10. Il rappresentante dei lavoratori per la sicurezza ha diritto ad una
> formazione particolare in materia di salute e sicurezza concernente i rischi
> specifici esistenti negli ambiti in cui esercita la propria rappresentanza, tale
> da assicurargli adeguate competenze sulle principali tecniche di controllo e
> prevenzione dei rischi stessi.

## Art. 37 c. 7-ter — il preposto: biennale e in presenza

Conferma cio che il motore gia applica, e ne aggiunge un pezzo che il motore non
guarda. Comma introdotto dalla L. 215/2021.

> 7-ter. Per assicurare l'adeguatezza e la specificita della formazione nonche
> l'aggiornamento periodico dei preposti ai sensi del comma 7, le relative
> attivita formative devono essere svolte **interamente con modalita in presenza**
> e devono essere ripetute con **cadenza almeno biennale** e comunque ogni
> qualvolta sia reso necessario in ragione dell'evoluzione dei rischi o
> all'insorgenza di nuovi rischi.

La cadenza biennale il motore la sa. La modalita in presenza no: e un requisito
sul **come** e stato erogato il corso, e in archivio non c'e un campo che lo dica.
Sui corsi fatti da noi si sa; su quelli esterni riconosciuti, no.

## Art. 37 c. 14-bis — il credito formativo e legge, non solo accordo

E la norma sopra all'Allegato III dell'ASR 2025, che il progetto ha gia in
`crediti_formativi` dalla 0027.

> 14-bis. In tutti i casi di formazione ed aggiornamento, previsti dal presente
> decreto legislativo per dirigenti, preposti, lavoratori e rappresentanti dei
> lavoratori per la sicurezza in cui i contenuti dei percorsi formativi si
> sovrappongano, in tutto o in parte, e riconosciuto il credito formativo per la
> durata e per i contenuti della formazione e dell'aggiornamento corrispondenti
> erogati. Le modalita di riconoscimento del credito formativo e i modelli per
> mezzo dei quali e documentata l'avvenuta formazione sono individuati dalla
> Conferenza permanente [...]

Due cose che servono al motore: il credito e dovuto **per la durata e per i
contenuti corrispondenti**, cioe puo essere parziale — ed e la ragione per cui la
0040 ha fatto bene a separare il credito parziale dall'esonero; e vale per
dirigenti, preposti, lavoratori e RLS, cioe **non** per le figure di emergenza,
che infatti nell'Allegato III non prendono crediti.

## Allegato XXI — ponteggi e lavori su funi, le ore che mancavano

**L'allegato XXI c'e, in questa edizione**, ed e la riga che ROADMAP e memoria
davano per irrisolta: «manca il solo allegato XXI del D.Lgs. 81/2008: senza,
ponteggi e lavori su funi restano senza ore». Sta nella sezione degli allegati,
pagina 105 di 186 della numerazione interna, col titolo «Accordo Stato, Regioni e
Province autonome sui corsi di formazione per lavoratori addetti a lavori in
quota».

### Ponteggi — art. 136 c. 8

> Il percorso formativo e strutturato in tre moduli della durata complessiva di
> **28 ore** piu una prova di verifica finale:
> a) Modulo giuridico - normativo della durata di quattro ore.
> b) Modulo tecnico della durata di dieci ore
> c) Prova di verifica intermedia (questionario a risposta multipla)
> d) Modulo pratico della durata di quattordici ore
> e) Prova di verifica finale (prova pratica).

Aggiornamento, punto 6:

> corso di aggiornamento **ogni quattro anni**. L'aggiornamento ha durata minima
> di **4 ore** di cui 3 ore di contenuti tecnico pratici.

Quattro anni, non cinque: e una periodicita che nel motore non esiste ancora da
nessuna parte.

### Lavori su funi

Percorso a moduli: **modulo base 12 ore**, comune, propedeutico, piu un modulo
specifico di **20 ore** — A per le funi in ambito naturale, B per quelle in
ambito urbano-industriale. Chi fa base piu un modulo specifico arriva a **32
ore**.

Aggiornamento, punto 7:

> corso di aggiornamento **ogni cinque anni**. L'aggiornamento ha durata minima
> di **8 ore** di cui almeno 4 ore di contenuti [tecnico-pratici].

E c'e una figura in piu che il vocabolario dei ruoli non ha: l'addetto alla
**sorveglianza dei lavori** su funi, **8 ore** di formazione e aggiornamento di
**4 ore ogni cinque anni**.

Quattro righe di `requisiti` che oggi hanno le ore a null possono quindi
riempirsi, e una figura nuova chiede di entrare in `ruoli`. Non e roba di questa
migrazione: e la voce che prende il posto, in ROADMAP, di quella che diceva che
l'allegato mancava.

## D.L. 159/2025 art. 1-bis — trenta giorni per alberghi e pubblici esercizi

Nota 127 all'art. 37. Stessa legge di conversione, stessa data di entrata in
vigore: **31 dicembre 2025**.

> 1. In considerazione del basso livello di rischio e delle peculiari modalita di
> erogazione del servizio, negli esercizi di somministrazione di alimenti e
> bevande come definiti dall'articolo 5 della legge 25 agosto 1991, n. 287, e
> nelle imprese turistico-ricettive, la formazione e l'eventuale addestramento
> specifico di cui all'articolo 37, comma 4, lettera a), del decreto legislativo 9
> aprile 2008, n. 81, **si concludono entro trenta giorni dalla costituzione del
> rapporto di lavoro** o dall'inizio dell'utilizzazione qualora si tratti di
> somministrazione di lavoro.

Il motore non ha nessun termine legato alla data di assunzione: calcola scadenze
a partire dai corsi fatti, non obblighi a partire dall'ingresso in azienda. Per i
clienti di questi due settori — che si riconoscono dall'ATECO, sezione I — esiste
un termine di trenta giorni che oggi nessuna lista mostra. E una voce nuova per le
decisioni aperte, non una regola pronta: prima va deciso se il motore debba
guardare anche `rapporti_lavoro.data_assunzione`.

## Art. 16 — la delega di funzioni: cosa trasferisce, e cosa NON nomina

Aperto l'11 settembre 2026 su una domanda precisa: **al datore di lavoro delegato
ex art. 16 spettano gli obblighi formativi del DATORE o quelli del DIRIGENTE?**
Tre corsie erano in tre posti diversi — una l'aveva decisa e messa in produzione,
una l'aveva aperta, una il ruolo non ce l'ha — e nessuna sapeva dirlo citando.

Pagina 23 di 202 del titolo I. **La lettera e) e nuova**: aggiunta dall'art. 5 del
D.L. 31 ottobre 2025 n. 159, convertito con L. 29 dicembre 2025 n. 198, in vigore
dal **31 dicembre 2025**.

> 1. La delega di funzioni da parte del datore di lavoro, ove non espressamente
> esclusa, e ammessa con i seguenti limiti e condizioni:
>
> a) che essa risulti da **atto scritto recante data certa**;
> b) che il delegato **possegga tutti i requisiti di professionalita ed
> esperienza** richiesti dalla specifica natura delle funzioni delegate;
> c) che essa attribuisca al delegato **tutti i poteri di organizzazione,
> gestione e controllo** richiesti dalla specifica natura delle funzioni delegate;
> d) che essa attribuisca al delegato **l'autonomia di spesa** necessaria allo
> svolgimento delle funzioni delegate;
> e) che la delega sia **accettata dal delegato per iscritto**.
>
> 2. Alla delega di cui al comma 1 deve essere data adeguata e tempestiva
> pubblicita.
>
> 3. La delega di funzioni **non esclude l'obbligo di vigilanza in capo al datore
> di lavoro** in ordine al corretto espletamento da parte del delegato delle
> funzioni trasferite. L'obbligo di cui al primo periodo si intende assolto in
> caso di adozione ed efficace attuazione del modello di verifica e controllo di
> cui all'articolo 30, comma 4.
>
> 3-bis. Il soggetto delegato puo, a sua volta, previa intesa con il datore di
> lavoro delegare specifiche funzioni in materia di salute e sicurezza sul lavoro
> alle medesime condizioni di cui ai commi 1 e 2. La delega di funzioni di cui
> al primo periodo non esclude l'obbligo di vigilanza in capo al delegante in
> ordine al corretto espletamento delle funzioni trasferite. Il soggetto al quale sia
> stata conferita la delega di cui al presente comma **non puo, a sua volta,
> delegare** le funzioni delegate.

**La cosa che l'articolo non dice, ed e la prima risposta: l'art. 16 non nomina
mai la formazione.** Non come obbligo che discende dalla delega, e nemmeno come
requisito presupposto. Cio che il delegato deve **gia possedere** e
«professionalita ed esperienza» (lett. b) — che il decreto non definisce e che non
e il corso.

Quindi l'obbligo formativo del delegato, se c'e, **non nasce qui**: nasce
dall'art. 37 c. 7, e solo attraverso la qualifica che gli si riconosce. La
domanda «datore o dirigente?» non e una sfumatura: e *tutta* la domanda.

## Art. 37 c. 7 — a chi spetta la formazione di datore e dirigente

Pagina 46 di 202. Comma modificato dalla L. 17 dicembre 2021 n. 215 (conversione
del D.L. 146/2021).

> 7. **Il datore di lavoro, i dirigenti e i preposti** ricevono un'adeguata e
> specifica formazione e un aggiornamento periodico **in relazione ai propri
> compiti** in materia di salute e sicurezza sul lavoro, secondo quanto previsto
> dall'accordo di cui al comma 2, secondo periodo.

**Tre soggetti nominati, e il delegato non e fra loro.** Non per esclusione: per
silenzio. Il comma non lo nomina ne per includerlo ne per escluderlo, e rimanda
all'accordo Stato-Regioni per il contenuto — che a sua volta parla di datore di
lavoro e dirigente, non di delegato.

## Le due definizioni che decidono, e l'articolo che le estende

Art. 2 c. 1, lett. b) e d). Le parti che contano sono in grassetto.

> b) «datore di lavoro»: il soggetto titolare del rapporto di lavoro con il
> lavoratore o, **comunque, il soggetto che**, secondo il tipo e l'assetto
> dell'organizzazione nel cui ambito il lavoratore presta la propria attivita,
> **ha la responsabilita dell'organizzazione stessa o dell'unita produttiva in
> quanto esercita i poteri decisionali e di spesa** [...]
>
> d) «dirigente»: persona che, in ragione delle competenze professionali e di
> poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli,
> **attua le direttive del datore di lavoro** organizzando l'attivita lavorativa
> e vigilando su di essa;

E l'art. 299, che dice che la qualifica segue **i poteri esercitati** e non il
nome dell'atto:

> 1. Le posizioni di garanzia relative ai soggetti di cui all'articolo 2, comma 1,
> lettere b), d) ed e), gravano **altresi su colui il quale, pur sprovvisto di
> regolare investitura, eserciti in concreto i poteri giuridici** riferiti a
> ciascuno dei soggetti ivi definiti.

## La risposta, e il suo limite

**Il testo non dice mai «il delegato e un datore di lavoro».** Chi cercasse quella
frase non la trova, e va detto prima di tutto il resto: **espressamente, la norma
non decide.**

Ma le tre citazioni qui sopra non sono neutre fra le due letture, e puntano da una
parte sola:

| | cosa serve per essere | cosa da la delega (art. 16) |
|---|---|---|
| **datore** (art. 2 b) | responsabilita dell'organizzazione **in quanto esercita i poteri decisionali e di spesa** | lett. c) tutti i poteri di organizzazione, gestione e controllo · lett. d) **l'autonomia di spesa** |
| **dirigente** (art. 2 d) | **attua le direttive del datore di lavoro** | nessuna direttiva da attuare: la delega **trasferisce** le funzioni, non le esegue |

E l'art. 299 chiude il passaggio: le posizioni di garanzia gravano su chi
**esercita in concreto** quei poteri. Un delegato ex art. 16 li esercita per
definizione, perche senza di essi la delega non e valida.

**Conclusione: la lettura «datore» e quella che il testo sostiene**, per
convergenza di tre articoli e non per una frase sola. Resta una *lettura*, non una
citazione — e la differenza e la stessa che questa cartella impone dappertutto.

### Le due cose che il testo lascia aperte davvero

1. **La delega parziale.** L'art. 16 parla sempre di «funzioni delegate» e di
   poteri «richiesti dalla specifica natura delle funzioni delegate»: la delega
   puo coprire una parte. Un delegato che riceve una fetta di funzioni non diventa
   datore per tutto il resto, e il decreto non dice a che punto la fetta diventi
   abbastanza grande. Un modello con una figura sola — delegato «pieno» — sta
   assumendo il caso totale senza dirlo.
2. **Quando la formazione deve esserci.** Se il delegato e un datore ai fini
   dell'art. 37 c. 7, gli si applicano i termini del datore, compresa la prima
   applicazione dell'ASR 2025. Ma l'art. 16 lett. b) chiede professionalita ed
   esperienza **al momento della delega**, e un delegato formato dopo soddisfa il
   c. 7 mentre la validita della delega resta una questione a parte. Sono due
   orologi, e il decreto ne fa scattare uno solo.

### Come e stato verificato il testo

Due estrazioni indipendenti, confrontate a macchina sui periodi che decidono:

- **A** — il testo coordinato Amato/Di Fiore edizione gennaio 2026, `pdftotext
  -layout` sul PDF (quello descritto in testa a questo file, fuori dal repo);
- **B** — `tussl.it`, lettura indipendente articolo per articolo.

| passo | parole A | parole B | esito |
|---|---:|---:|---|
| art. 37 c. 7 | 42 | 42 | **identici parola per parola** |
| art. 16 c. 1 | 97 | 97 | 2 differenze, nessuna di parola |
| art. 2 c. 1 lett. d) | 35 | 34 | 1 differenza, nessuna di parola |
| art. 299 | 42 | 42 | 1 differenza, nessuna di parola |

Le differenze sono **tre accentate che `pdftotext` non rende**
(`professionalita`, `l'attivita`, `altresi`) — la stessa classe gia vista sul DPR
177 — piu il prefisso `d) «` che la seconda estrazione non riporta. Nessuna parola
diversa in nessuno dei quattro passi.

**Una divergenza vera, e vale la pena tenerla.** In art. 16 c. 1 la lettera d)
finisce con un **punto** nel testo coordinato e con un **punto e virgola** su
tussl. E il residuo dell'aggiunta della lettera e) nel dicembre 2025: prima la d)
era l'ultima e chiudeva l'elenco. Segno che l'edizione coordinata ha inserito la
lettera nuova senza ritoccare la punteggiatura della precedente. Non cambia il
senso, e resta scritto qui perche e il tipo di dettaglio che, non annotato, la
prossima volta fa dubitare della fonte sbagliata.

**Limite dichiarato:** anche qui, come per il DPR 177, non e stata fatta la
lettura a video pagina per pagina che questa cartella impone per le tabelle —
manca il renderer su questa macchina. Qui non ci sono tabelle: e prosa, e il
doppio riscontro programmatico ha preso quel posto.

Il periodo centrale del c. 3-bis, che fino al 27 settembre 2026 qui era un
«[...]», e stato riempito quel giorno ed e passato dal confronto a tre qui sotto
(«art. 16 c. 1-3-bis»).

---

# Gli articoli delle lettere d'incarico

Trascritti il 27 settembre 2026 per le lettere d'incarico di AppOverall
(`docs/incarichi-e-visura.md`, A6). Quegli articoli un revisore normativo li aveva
citati a memoria, e le lettere non si scrivono su una memoria. Ogni sezione dice
**chi fa l'atto e con quale verbo**, perche e la sola cosa che una lettera deve
prendere dalla norma. Gli accenti sono tolti come nel resto del file.

## Art. 17 c. 1 — la designazione dell'RSPP non si delega

Pagina 24 di 202.

> 1. Il datore di lavoro non puo delegare le seguenti attivita:
> a) la valutazione di tutti i rischi con la conseguente elaborazione del
> documento previsto dall'articolo 28;
> b) la designazione del responsabile del servizio di prevenzione e protezione
> dai rischi.

L'RSPP lo **designa il datore di lavoro, di persona**. Il delegato ex art. 16
non firma quella lettera.

## Art. 18 c. 1 lett. a, b, b-bis — nominare, designare, individuare

Pagina 24 di 202. La lett. a e stata modificata dal D.L. 4 maggio 2023 n. 48
(L. 85/2023), la b-bis introdotta dalla L. 17 dicembre 2021 n. 215.

> 1. Il datore di lavoro, che esercita le attivita di cui all'articolo 3, e i
> dirigenti, che organizzano e dirigono le stesse attivita secondo le
> attribuzioni e competenze ad essi conferite, devono:
> a) nominare il medico competente per l'effettuazione della sorveglianza
> sanitaria nei casi previsti dal presente decreto legislativo e qualora
> richiesto dalla valutazione dei rischi di cui all'articolo 28.
> b) designare preventivamente i lavoratori incaricati dell'attuazione delle
> misure di prevenzione incendi e lotta antincendio, di evacuazione dei luoghi
> di lavoro in caso di pericolo grave e immediato, di salvataggio, di primo
> soccorso e, comunque, di gestione dell'emergenza;
> b-bis) individuare il preposto o i preposti per l'effettuazione delle attivita
> di vigilanza di cui all'articolo 19. I contratti e gli accordi collettivi di
> lavoro possono stabilire l'emolumento spettante al preposto per lo svolgimento
> delle attivita di cui al precedente periodo. Il preposto non puo subire
> pregiudizio alcuno a causa dello svolgimento della propria attivita;

Tre verbi diversi per tre atti diversi: il medico competente si **nomina**, gli
addetti all'emergenza si **designano** («preventivamente»), il preposto si
**individua**. L'obbligo e «del datore di lavoro **e dei dirigenti**», secondo le
attribuzioni: una lettera di designazione o di individuazione puo firmarla un
dirigente che ne abbia la competenza. La nomina dell'RSPP no (art. 17).

## Art. 26 c. 8-bis — il preposto negli appalti: si indica, non si individua

Pagina 34 di 202.

> 8-bis. Nell'ambito dello svolgimento di attivita in regime di appalto o
> subappalto, i datori di lavoro appaltatori o subappaltatori devono indicare
> espressamente al datore di lavoro committente il personale che svolge la
> funzione di preposto.

E una **comunicazione** dell'appaltatore al committente. Presuppone
l'individuazione dell'art. 18 c. 1 lett. b-bis e non la sostituisce: la lettera
del preposto resta quella, e in appalto si aggiunge una riga che la comunica.

## Art. 31 c. 1 — il servizio di prevenzione: «organizza» o «incarica»

Pagina 41 di 202.

> 1. Salvo quanto previsto dall'articolo 34, il datore di lavoro organizza il
> servizio di prevenzione e protezione prioritariamente all'interno della
> azienda o della unita produttiva, o incarica persone o servizi esterni
> costituiti anche presso le associazioni dei datori di lavoro o gli organismi
> paritetici, secondo le regole di cui al presente articolo.

**Il comma non dice «designa».** Per l'ASPP il decreto non scrive un atto
tipico: il datore **organizza** il servizio (dentro) o **incarica** (fuori). Il
verbo «designazione» il decreto lo usa per l'RSPP (art. 17 c. 1 lett. b) e, per
l'ASPP, solo nel c. 1 lett. c dell'art. 50, dove l'RLS e consultato «sulla
designazione del responsabile e degli addetti al servizio di prevenzione».

## Art. 34 c. 1 — il datore di lavoro RSPP informa l'RLS prima

Pagine 43-44 di 202.

> 1. Salvo che nei casi di cui all'articolo 31, comma 6, il datore di lavoro puo
> svolgere direttamente i compiti propri del servizio di prevenzione e
> protezione dai rischi, di primo soccorso, nonche di prevenzione incendi e di
> evacuazione, nelle ipotesi previste nell'allegato 2 dandone preventiva
> informazione al rappresentante dei lavoratori per la sicurezza ed alle
> condizioni di cui ai commi successivi.

Nessuna designazione: e il datore che **svolge direttamente**. L'atto che la
norma chiede e l'**informazione preventiva all'RLS**, non una consultazione.
Il testo coordinato scrive «ALLEGATO II», la Gazzetta (tussl e normattiva)
«allegato 2».

## Art. 37 c. 5 — l'addestramento, e il comma cambiato nel 2026

**Il testo vigente non e quello dell'edizione di gennaio 2026.** Il comma e
stato **sostituito dalla L. 11 marzo 2026 n. 34** (legge annuale sulle piccole e
medie imprese; nota 22 di tussl, e nota INL n. 780 del 15 aprile 2026 con le
prime indicazioni operative). Normattiva data l'articolo «Testo in vigore dal:
7-4-2026». Quale articolo della L. 34/2026 lo sostituisca **non e stato letto**:
la legge non e in `fonti/`.

Testo vigente, uguale parola per parola su tussl e su normattiva:

> 5. L'addestramento e effettuato da persona esperta e sul luogo di lavoro.
> L'addestramento consiste nella prova pratica per l'uso corretto e in sicurezza
> di attrezzature, macchine, impianti, sostanze, dispositivi, anche di
> protezione individuale; include altresi l'esercitazione applicata per le
> procedure di lavoro in sicurezza. Gli interventi di addestramento possono
> essere effettuati anche mediante l'uso di moderne tecnologie di simulazione in
> ambiente reale o virtuale e devono essere tracciati in apposito registro,
> anche informatizzato.

Il testo dell'edizione di gennaio 2026, superato, per chi confronta:

> 5. L'addestramento viene effettuato da persona esperta e sul luogo di lavoro.
> L'addestramento consiste nella prova pratica, per l'uso corretto e in
> sicurezza di attrezzature, macchine, impianti, sostanze, dispositivi, anche di
> protezione individuale; l'addestramento consiste, inoltre, nell'esercitazione
> applicata, per le procedure di lavoro in sicurezza. Gli interventi di
> addestramento effettuati devono essere tracciati in apposito registro anche
> informatizzato.

Cosa cambia per il registro degli addestramenti:
- il registro resta obbligatorio;
- «persona esperta» e «sul luogo di lavoro» restano;
- **la novita e la simulazione** «in ambiente reale o virtuale»: un
  addestramento al simulatore vale, e il registro deve poter dire che lo e stato.

La stessa legge ha inserito nel c. 4 una lett. b-bis («dei periodi di cassa
integrazione guadagni, sia in caso di sospensione che in caso di riduzione
dell'orario di lavoro»), letta su tussl e su normattiva e non confrontata a
macchina. **Nel motore nessuno la guarda.**

## Art. 43 c. 1 lett. b, c. 2, c. 3 — gli addetti all'emergenza

Pagina 53 di 202.

> 1. Ai fini degli adempimenti di cui all'articolo 18, comma 1, lettera t), il
> datore di lavoro: [...]
> b) designa preventivamente i lavoratori di cui all'articolo 18, comma 1,
> lettera b); [...]
>
> 2. Ai fini delle designazioni di cui al comma 1, lettera b), il datore di
> lavoro tiene conto delle dimensioni dell'azienda e dei rischi specifici
> dell'azienda o della unita produttiva secondo i criteri previsti nei decreti
> di cui all'articolo 46.
>
> 3. I lavoratori non possono, se non per giustificato motivo, rifiutare la
> designazione. Essi devono essere formati, essere in numero sufficiente e
> disporre di attrezzature adeguate, tenendo conto delle dimensioni e dei rischi
> specifici dell'azienda o dell'unita produttiva. Con riguardo al personale
> della Difesa la formazione specifica svolta presso gli istituti o la scuole
> della stessa Amministrazione e abilitativa alla funzione di addetto alla
> gestione delle emergenze.

**Il c. 3 non dice che la firma dell'addetto vale come ricevuta.** Dice che la
designazione non si rifiuta «se non per giustificato motivo». Che la firma sia
una ricevuta e non un'accettazione **e una deduzione**: se il rifiuto non e
libero, l'accettazione non e una condizione. Una lettera che la scrive la
dichiara tale. Il rifiuto per giustificato motivo e un fatto del lavoratore, e
non coincide con «il datore non conferma».

«la scuole» e della Gazzetta: tussl e normattiva lo riportano, il testo
coordinato lo corregge in «le scuole».

## Art. 46 c. 3 lett. b — la norma dell'antincendio non contiene l'atto

Pagine 54-55 di 202. L'articolo non designa nessuno: rinvia ai decreti.

> 3. Fermo restando quanto previsto dal decreto legislativo 8 marzo 2006, n. 139
> e dalle disposizioni concernenti la prevenzione incendi di cui al presente
> decreto, i Ministri dell'interno, del lavoro e della previdenza sociale, in
> relazione ai fattori di rischio, adottano uno o piu decreti nei quali sono
> definiti: [...]
> b) le caratteristiche dello specifico servizio di prevenzione e protezione
> antincendio, compresi i requisiti del personale addetto e la sua formazione.

La designazione dell'addetto antincendio sta nel **DM 2 settembre 2021 art. 4**
(sotto). Qui il testo coordinato aggiorna i ministri («del lavoro, della salute
e delle politiche sociali»); tussl e normattiva riportano la Gazzetta («del
lavoro e della previdenza sociale»), ed e quella che si trascrive.

## DM 2 settembre 2021 art. 4 — «il datore di lavoro designa»

`fonti/D.M. 02_09_2021.pdf`, testo coordinato del Ministero dell'interno
(settembre 2022), pagina 14. In vigore dal 4 ottobre 2022.

> 1. All'esito della valutazione dei rischi d'incendio e sulla base delle misure
> di gestione della sicurezza antincendio in esercizio ed in emergenza, ivi
> incluso il piano di emergenza, laddove previsto, il datore di lavoro designa i
> lavoratori incaricati dell'attuazione delle misure di prevenzione incendi,
> lotta antincendio e gestione delle emergenze, di seguito chiamati «addetti al
> servizio antincendio», ai sensi dell'art. 18, comma 1, lettera b) del decreto
> legislativo 9 aprile 2008, n. 81, o se stesso nei casi previsti dall'art. 34
> del medesimo decreto.
>
> 2. I lavoratori designati frequentano i corsi di formazione e di aggiornamento
> di cui all'art. 5 del presente decreto.

La designazione viene **dopo la valutazione del rischio d'incendio** e sulla
base del piano di emergenza. Il datore puo designare **se stesso** nei casi
dell'art. 34.

## Art. 47 c. 2-4 — l'RLS lo eleggono o designano i lavoratori

Pagina 56 di 202.

> 2. In tutte le aziende, o unita produttive, e eletto o designato il
> rappresentante dei lavoratori per la sicurezza.
>
> 3. Nelle aziende o unita produttive che occupano fino a 15 lavoratori il
> rappresentante dei lavoratori per la sicurezza e di norma eletto direttamente
> dai lavoratori al loro interno oppure e individuato per piu aziende
> nell'ambito territoriale o del comparto produttivo secondo quanto previsto
> dall'articolo 48.
>
> 4. Nelle aziende o unita produttive con piu di 15 lavoratori il rappresentante
> dei lavoratori per la sicurezza e eletto o designato dai lavoratori
> nell'ambito delle rappresentanze sindacali in azienda. In assenza di tali
> rappresentanze, il rappresentante e eletto dai lavoratori della azienda al
> loro interno.

Nessun atto del datore di lavoro: **per l'RLS non c'e lettera d'incarico**.

## Art. 50 c. 1 lett. c — su quali designazioni l'RLS e consultato

Pagina 57 di 202.

> 1. Fatto salvo quanto stabilito in sede di contrattazione collettiva, il
> rappresentante dei lavoratori per la sicurezza: [...]
> c) e consultato sulla designazione del responsabile e degli addetti al
> servizio di prevenzione, alla attivita di prevenzione incendi, al primo
> soccorso, alla evacuazione dei luoghi di lavoro e del medico competente;

L'elenco e chiuso:
- **dentro**: RSPP, ASPP, addetti antincendio, primo soccorso ed evacuazione,
  medico competente;
- **fuori**: il preposto, il dirigente, il delegato e gli incaricati all'uso
  delle attrezzature. Per loro la lettera non porta la riga della consultazione.

## Art. 71 c. 7 — le attrezzature riservate agli incaricati

Pagina 70 di 202.

> 7. Qualora le attrezzature richiedano per il loro impiego conoscenze o
> responsabilita particolari in relazione ai loro rischi specifici, il datore di
> lavoro prende le misure necessarie affinche:
> a) l'uso dell'attrezzatura di lavoro sia riservato ai lavoratori allo scopo
> incaricati che abbiano ricevuto una informazione, formazione ed addestramento
> adeguati;
> b) in caso di riparazione, di trasformazione o manutenzione, i lavoratori
> interessati siano qualificati in maniera specifica per svolgere detti compiti.

«ed addestramento» e di tussl e normattiva; il testo coordinato scrive «e».

## Art. 73 c. 1, 4, 4-bis, 5 — informazione, formazione, addestramento

Pagina 73 di 202. Il c. 4-bis e stato introdotto dal D.L. 4 maggio 2023 n. 48
(L. 85/2023).

> 1. Nell'ambito degli obblighi di cui agli articoli 36 e 37 il datore di lavoro
> provvede, affinche per ogni attrezzatura di lavoro messa a disposizione, i
> lavoratori incaricati dell'uso dispongano di ogni necessaria informazione e
> istruzione e ricevano una formazione e un addestramento adeguati, in rapporto
> alla sicurezza relativamente:
> a) alle condizioni di impiego delle attrezzature;
> b) alle situazioni anormali prevedibili. [...]
>
> 4. Il datore di lavoro provvede affinche i lavoratori incaricati dell'uso delle
> attrezzature che richiedono conoscenze e responsabilita particolari di cui
> all'articolo 71, comma 7, ricevano una formazione, informazione ed
> addestramento adeguati e specifici, tali da consentire l'utilizzo delle
> attrezzature in modo idoneo e sicuro, anche in relazione ai rischi che possano
> essere causati ad altre persone.
>
> 4-bis. Il datore di lavoro che fa uso delle attrezzature che richiedono
> conoscenze particolari di cui all'articolo 71, comma 7, provvede alla propria
> formazione e al proprio addestramento specifico al fine di garantire
> l'utilizzo delle attrezzature in modo idoneo e sicuro.
>
> 5. In sede di Conferenza permanente per i rapporti tra Stato, le regioni e le
> province autonome di Trento e di Bolzano sono individuate le attrezzature di
> lavoro per le quali e richiesta una specifica abilitazione degli operatori
> nonche le modalita per il riconoscimento di tale abilitazione, i soggetti
> formatori, la durata, gli indirizzi ed i requisiti minimi di validita della
> formazione e le condizioni considerate equivalenti alla specifica abilitazione.

«Lavoratori incaricati dell'uso» sta sia nel c. 1, per ogni attrezzatura, sia
nel c. 4, per quelle dell'art. 71 c. 7: l'incarico all'uso e un atto per
**tutte** le attrezzature, e l'abilitazione (c. 5) si aggiunge solo per quelle
dell'accordo. Il **datore di lavoro che usa lui stesso** l'attrezzatura non si
incarica: provvede alla propria formazione (c. 4-bis).

## Art. 90 c. 3, 4, 7 — i coordinatori li designa il committente

Pagina 82 di 202.

> 3. Nei cantieri in cui e prevista la presenza di piu imprese esecutrici, anche
> non contemporanea, il committente, anche nei casi di coincidenza con l'impresa
> esecutrice, o il responsabile dei lavori, contestualmente all'affidamento
> dell'incarico di progettazione, designa il coordinatore per la progettazione.
>
> 4. Nei cantieri in cui e prevista la presenza di piu imprese esecutrici, anche
> non contemporanea, il committente o il responsabile dei lavori, prima
> dell'affidamento dei lavori, designa il coordinatore per l'esecuzione dei
> lavori, in possesso dei requisiti di cui all'articolo 98. [...]
>
> 7. Il committente o il responsabile dei lavori comunica alle imprese
> affidatarie, alle imprese esecutrici e ai lavoratori autonomi il nominativo
> del coordinatore per la progettazione e quello del coordinatore per
> l'esecuzione dei lavori. Tali nominativi sono indicati nel cartello di
> cantiere.

L'atto e del **committente o del responsabile dei lavori**, per un cantiere, e
non del datore di lavoro verso un suo lavoratore: non e una lettera d'incarico
del cliente al suo personale.

## Art. 116 c. 1 lett. e, c. 4 — i lavori su funi e chi li sorveglia

Pagine 95-96 di 202.

> 1. Il datore di lavoro impiega sistemi di accesso e di posizionamento
> mediante funi in conformita ai seguenti requisiti: [...]
> e) lavori programmati e sorvegliati in modo adeguato, anche al fine di poter
> immediatamente soccorrere il lavoratore in caso di necessita. Il programma dei
> lavori definisce un piano di emergenza, le tipologie operative, i dispositivi
> di protezione individuale, le tecniche e le procedure operative, gli
> ancoraggi, il posizionamento degli operatori, i metodi di accesso, le squadre
> di lavoro e gli attrezzi di lavoro; [...]
>
> 4. I soggetti formatori, la durata, gli indirizzi ed i requisiti minimi di
> validita dei corsi sono riportati nell'allegato XXI.

La sorveglianza la chiede la lett. e. L'allegato XXI ne fa un modulo per
«preposti» con funzione di sorveglianza: l'atto quindi e l'**individuazione di
un preposto** (art. 18 c. 1 lett. b-bis), con l'oggetto dei lavori su funi.
**Questa e una lettura**: nessun comma scrive «designa il sorvegliante».

### Come e stato verificato il testo

Tre estrazioni indipendenti, confrontate a macchina parola per parola:
- **A**: il testo coordinato Amato/Di Fiore edizione gennaio 2026,
  `pdftotext -enc UTF-8 -layout`, con le righe di pie' pagina e di nota
  tolte a mano per intervalli;
- **B**: tussl.it, pagina per articolo;
- **C**: normattiva.it, l'articolo vigente per URN.

Prima del confronto sono stati tolti:
- i rimandi alle note: «attivita;65» in A, «(6)» in B;
- i «(( ))» con cui normattiva segna il testo modificato;
- l'accento grave su «affinche» di normattiva.

| passo | parole A | parole B | parole C | A-B | A-C |
|---|---:|---:|---:|---|---|
| art. 16 c. 1-3-bis | 254 | 254 | 254 | 1 (punteggiatura) | 1 (punteggiatura) |
| art. 17 c. 1 | 40 | 40 | 40 | 1 (nota) | 1 (nota) |
| art. 18 c. 1 alinea, a, b, b-bis | 153 | 153 | 153 | 1 (punteggiatura) | identici |
| art. 26 c. 8-bis | 35 | 35 | 35 | 1 (punteggiatura) | 1 (punteggiatura) |
| art. 31 c. 1 | 52 | 52 | 52 | identici | identici |
| art. 34 c. 1 | 62 | 62 | 62 | 1 (allegato) | 1 (allegato) |
| **art. 37 c. 5** | 58 | 73 | 73 | **7: A superato** | **7: A superato** |
| art. 37 c. 5, B contro C | — | 73 | 73 | **identici** | |
| art. 43 c. 1-3 | 330 | 330 | 330 | 2 (maiuscola, «la scuole») | 2 (idem) |
| art. 46 c. 3 | 120 | 118 | 118 | 4 (i ministri) | 4 (idem) |
| art. 47 c. 2-4 | 109 | 109 | 109 | identici | identici |
| art. 50 c. 1 lett. c | 32 | 32 | 32 | identici | identici |
| art. 71 c. 7 | 70 | 70 | 70 | 1 («e»/«ed») | 1 (idem) |
| art. 73 c. 1-5 | 283 | 283 | 283 | 2, solo maiuscole | 2, solo maiuscole |
| art. 90 c. 3-7 | 199 | 199 | 199 | identici | identici |
| art. 116 c. 1 lett. e | 63 | 63 | 63 | identici | identici |
| art. 116 c. 4 | 20 | 20 | 20 | 1, solo maiuscole | 1, solo maiuscole |

Le differenze, una per una:
- art. 16: la lett. d finisce con il punto in A e con il punto e virgola in B e
  C. E la divergenza gia annotata sopra, e C ora la conferma.
- art. 17: «2863;» in A e il numero dell'articolo con la nota 63 attaccata.
  Non e una differenza di testo.
- art. 18: «28.» in A e C, «28;» in B.
- art. 26: il punto e virgola finale c'e in A e non in B e C.
- art. 34: «ALLEGATO II» in A, «allegato 2» in B e C.
- art. 37 c. 5: **A e superato**, vedi la sezione. B e C concordano fra loro
  parola per parola.
- art. 43: «le scuole» in A, «la scuole» in B e C, e «Decreti» maiuscolo in A.
- art. 46: i ministri aggiornati in A, quelli della Gazzetta in B e C.
- art. 71: «e addestramento» in A, «ed addestramento» in B e C.
- art. 73 e 116: sole maiuscole («Regioni», «ALLEGATO»).

Dove A diverge da B e C insieme, qui si trascrive B e C.

**DM 2/9/2021 art. 4 c. 1-2.** A e il testo coordinato del Ministero
dell'interno in `fonti/`, B il testo coordinato di mauromalizia.it (copia su
unipr.it). Sono **103 parole contro 103, identici**, tolto il rimando alla
nota «b)7» di B. Tutti e due sono coordinamenti, nessuno e la Gazzetta.

**Cosa il confronto ha trovato, ed e la ragione per farlo.** L'edizione di
gennaio 2026 **non e piu il testo vigente dell'art. 37 c. 5** (L. 34/2026, in
vigore dal 7 aprile 2026 secondo normattiva). Il controllo mensile di
[`aggiornamento-fonti.md`](aggiornamento-fonti.md) guarda l'edizione dichiarata
sul sito di Amato/Di Fiore. Il 27 settembre 2026 il sito dichiara ancora
«gennaio 2026», e il controllo avrebbe detto «nessun cambiamento»: **da solo non
vede le leggi uscite dopo l'ultima edizione.**

Normattiva data l'art. 18 «Testo in vigore dal: 1-3-2026». Sul passo trascritto
i tre testi coincidono, e la modifica non e stata cercata altrove nell'articolo.

**Limite dichiarato.** Come sopra, nessuna lettura a video pagina per pagina.
Gli intervalli di righe di A e lo script di confronto non sono nel repo: il
PDF non c'e, e senza PDF non si ripetono.
