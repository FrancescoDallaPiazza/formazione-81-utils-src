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
> alle medesime condizioni di cui ai commi 1 e 2. [...] Il soggetto al quale sia
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
