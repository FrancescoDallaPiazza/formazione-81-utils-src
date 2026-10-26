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
Pavia), dal sito [8108amatodifiore.it](https://www.8108amatodifiore.it/). Le
trascrizioni qui sotto sono state fatte sull'**edizione gennaio 2026** (1.466
pagine). Dal 6 ottobre 2026 c'e l'**edizione ottobre 2026** (1.514 pagine), e sugli
articoli della lista l'unica differenza e l'art. 37 c. 4 e 5 (L. 34/2026), gia
trascritto qui sotto. I numeri di pagina citati restano quelli di gennaio. Il
file **non sta nel repo**: 25 MB per edizione, e il sito chiede di linkare la
pagina invece di ridistribuire il documento. Le due edizioni stanno in
`OneDrive - Overall Group srl\FormazioneASR\Normativa\`
(`81-08-AmatoDiFiore-gennaio-2026.pdf`, `81-08-AmatoDiFiore-ottobre-2026.pdf`),
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
attribuzioni: la nomina del medico e l'individuazione del preposto puo firmarle un
dirigente che ne abbia la competenza. La designazione dell'RSPP no (art. 17).
Per gli addetti all'emergenza l'art. 43 c. 1 e il DM 2/9/2021 art. 4 nominano
**solo «il datore di lavoro»**: che un dirigente possa firmare quelle
designazioni in forza dell'art. 18 e una **deduzione**, non una lettura.

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
7-4-2026». Lo modifica l'**art. 10 della L. 34/2026**: lo dice la nota 132
dell'edizione ottobre 2026 del testo coordinato («Comma da ultimo modificato
dall'art. 10 della legge 11 marzo 2026, n. 34 [...] in vigore dal 07/04/2026»).
La legge non e in `fonti/`.

Testo vigente, uguale parola per parola su tussl, su normattiva e
sull'edizione ottobre 2026 (73 parole su 73, confronto a macchina):

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

## Art. 37 c. 4 lett. b-bis — la formazione nei periodi di cassa integrazione

Edizione ottobre 2026, nota 130: «Lettera aggiunta dall'art. 10 della legge 11
marzo 2026, n. 34 [...] in vigore dal 07/04/2026». Letta anche su tussl e su
normattiva, identica.

> 4. La formazione e, ove previsto, l'addestramento specifico devono avvenire in
> occasione:
> a) della costituzione del rapporto di lavoro o dell'inizio dell'utilizzazione
> qualora si tratti di somministrazione di lavoro;
> b) del trasferimento o cambiamento di mansioni;
> b-bis) dei periodi di cassa integrazione guadagni, sia in caso di sospensione
> che in caso di riduzione dell'orario di lavoro;
> c) della introduzione di nuove attrezzature di lavoro o di nuove tecnologie, di
> nuove sostanze e miscele pericolose.

La lettera mette i periodi di cassa integrazione tra le occasioni in cui la
formazione «deve avvenire». Non dice quale formazione, ne quante ore, ne entro
quando. **Nel motore nessuno la guarda**: non c'e una scadenza da calcolare.

## Art. 3 c. 7-bis — lavoro agile: l'informativa almeno annuale

Edizione ottobre 2026, nota 12: «Comma aggiunto dall'art. 11 della legge 11 marzo
2026, n. 34 [...] (G.U. n. 68 del 23/03/2026) in vigore dal 07/04/2026».

> 7-bis. Per l'attivita lavorativa prestata con modalita di lavoro agile in
> ambienti di lavoro che non rientrano nella disponibilita giuridica del datore
> di lavoro, l'assolvimento di tutti gli obblighi di sicurezza compatibili con
> tale modalita di lavoro, in particolare di quelli che attengono all'utilizzo
> dei videoterminali, e assicurato dal datore di lavoro mediante la consegna al
> lavoratore e al rappresentante dei lavoratori per la sicurezza, con cadenza
> almeno annuale, di un'informativa scritta nella quale sono individuati i rischi
> generali e i rischi specifici connessi alla particolare modalita di esecuzione
> del rapporto di lavoro, fermo restando l'obbligo del lavoratore di cooperare
> all'attuazione delle misure di prevenzione predisposte dal datore di lavoro per
> fronteggiare i rischi connessi all'esecuzione della prestazione all'esterno dei
> locali aziendali;

La sanzione, nel riquadro dell'articolo: «Art. 3, co. 7-bis: arresto da due a
quattro mesi o ammenda da 1.708,61 a 7.403,96 euro [Art. 55, co. 5, lett. c]».
La lett. c dell'art. 55 c. 5 e stata modificata dall'art. 11 della stessa legge
(nota 168) per richiamare il nuovo comma.

E un'**informativa**, non formazione: l'art. 37 non c'entra. La cadenza «almeno
annuale» e pero una scadenza che si legge, e la prima che il decreto fissa per
il lavoro agile.

## Allegato VII — la voce delle PLE

Edizione ottobre 2026, pagina 47 di 185 degli allegati, nota 23: «Voce aggiunta
dall'art. 12 della legge 11 marzo 2026, n. 34 [...] (G.U. n. 68 del 23/03/2026) in
vigore dal [07/04/2026]».

| Attrezzatura | Intervento/periodicita |
| --- | --- |
| Piattaforme di lavoro mobili elevabili e piattaforme di lavoro fuori strada per operazioni in frutteto | Verifica triennale |

Trascritta com'e. **Se «per operazioni in frutteto» valga per tutte e due le
piattaforme o solo per la seconda, la riga non lo dice**: la nota INL n. 780
del 15 aprile 2026 la riassume come «PLE e piattaforme fuori strada in
frutteto». E una verifica periodica dell'attrezzatura (art. 71 c. 11), non la
formazione dell'operatore, che resta quella dell'accordo.

**Un refuso dell'edizione.** L'elenco delle novita in apertura scrive «G.U. n. 38
del 23/03/2026». Le note agli articoli scrivono n. 68, ed e quella giusta.

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

---

# Gli articoli della scaletta delle figure

Trascritti il 26 ottobre 2026 per la scaletta della visita a un cliente nuovo di
AppOverall (`docs/scaletta-figure.md`, issue AppOverall #134): le figure che il
tecnico chiede al datore di lavoro, e su che cosa la norma si appoggia. Prima
mancavano qui, e la scaletta non le cita su una memoria.

**L'edizione e un'altra.** Questi articoli sono stati letti sull'**edizione
ottobre 2026** (1.514 pagine, `81-08-AmatoDiFiore-ottobre-2026.pdf`, stessa
cartella di OneDrive), e le pagine sono di quella: **«di 204»** per il titolo I,
**«di 185»** per gli allegati. Le sezioni di sopra citano gennaio («di 202»). Il
confronto con l'edizione di gennaio e in fondo: su questi passi le due edizioni
non differiscono.

Nessuno di questi passi e fra quelli che la L. 34/2026 ha toccato (art. 3 c.
7-bis, art. 37 c. 4 lett. b-bis e c. 5, art. 55, all. VII). Le sanzioni, che il
testo coordinato riporta in riquadro sotto ogni articolo, non sono trascritte.
Gli accenti sono tolti come nel resto del file.

## Art. 2 c. 1 lett. e, f, g, h, i — preposto, RSPP, ASPP, medico, RLS

Pagine 1-2 di 204.

> e) «preposto»: persona che, in ragione delle competenze professionali e nei
> limiti di poteri gerarchici e funzionali adeguati alla natura dell'incarico
> conferitogli, sovrintende alla attivita lavorativa e garantisce l'attuazione
> delle direttive ricevute, controllandone la corretta esecuzione da parte dei
> lavoratori ed esercitando un funzionale potere di iniziativa;
> f) «responsabile del servizio di prevenzione e protezione»: persona in possesso
> delle capacita e dei requisiti professionali di cui all'articolo 32 designata
> dal datore di lavoro, a cui risponde, per coordinare il servizio di prevenzione
> e protezione dai rischi;
> g) «addetto al servizio di prevenzione e protezione»: persona in possesso delle
> capacita e dei requisiti professionali di cui all'articolo 32, facente parte del
> servizio di cui alla lettera l);
> h) «medico competente»: medico in possesso di uno dei titoli e dei requisiti
> formativi e professionali di cui all'articolo 38, che collabora, secondo quanto
> previsto all'articolo 29, comma 1, con il datore di lavoro ai fini della
> valutazione dei rischi ed e nominato dallo stesso per effettuare la sorveglianza
> sanitaria e per tutti gli altri compiti di cui al presente decreto;
> i) «rappresentante dei lavoratori per la sicurezza»: persona eletta o designata
> per rappresentare i lavoratori per quanto concerne gli aspetti della salute e
> della sicurezza durante il lavoro;

Il preposto si riconosce da **cosa fa** («sovrintende», «garantisce
l'attuazione»), non da un titolo: e la definizione su cui poggia la domanda «chi
controlla il lavoro degli altri?». L'RSPP e **designato dal datore** e gli
risponde; il medico e **nominato** dal datore. L'RLS e **eletto o designato**:
nessuna delle due parole e del datore.

## Art. 19 c. 1 — gli obblighi del preposto

Pagine 27-28 di 204. La lett. a e stata modificata e la f-bis introdotta dalla
L. 17 dicembre 2021 n. 215.

> 1. In riferimento alle attivita indicate all'articolo 3, i preposti, secondo le
> loro attribuzioni e competenze, devono:
> a) sovrintendere e vigilare sull'osservanza da parte dei singoli lavoratori dei
> loro obblighi di legge, nonche delle disposizioni aziendali in materia di salute
> e sicurezza sul lavoro e di uso dei mezzi di protezione collettivi e dei
> dispositivi di protezione individuale messi a loro disposizione e, in caso di
> rilevazione di comportamenti non conformi alle disposizioni e istruzioni
> impartite dal datore di lavoro e dai dirigenti ai fini della protezione collettiva e
> individuale, intervenire per modificare il comportamento non conforme fornendo
> le necessarie indicazioni di sicurezza. In caso di mancata attuazione delle
> disposizioni impartite o di persistenza dell'inosservanza, interrompere
> l'attivita del lavoratore e informare i superiori diretti;
> b) verificare affinche soltanto i lavoratori che hanno ricevuto adeguate
> istruzioni accedano alle zone che li espongono ad un rischio grave e specifico;
> c) richiedere l'osservanza delle misure per il controllo delle situazioni di
> rischio in caso di emergenza e dare istruzioni affinche i lavoratori, in caso di
> pericolo grave, immediato e inevitabile, abbandonino il posto di lavoro o la
> zona pericolosa;
> d) informare il piu presto possibile i lavoratori esposti al rischio di un
> pericolo grave e immediato circa il rischio stesso e le disposizioni prese o da
> prendere in materia di protezione;
> e) astenersi, salvo eccezioni debitamente motivate, dal richiedere ai lavoratori
> di riprendere la loro attivita in una situazione di lavoro in cui persiste un
> pericolo grave ed immediato;
> f) segnalare tempestivamente al datore di lavoro o al dirigente sia le
> deficienze dei mezzi e delle attrezzature di lavoro e dei dispositivi di
> protezione individuale, sia ogni altra condizione di pericolo che si verifichi
> durante il lavoro, delle quali venga a conoscenza sulla base della formazione
> ricevuta;
> f-bis) in caso di rilevazione di deficienze dei mezzi e delle attrezzature di
> lavoro e di ogni condizione di pericolo rilevata durante la vigilanza, se
> necessario, interrompere temporaneamente l'attivita e, comunque, segnalare
> tempestivamente al datore di lavoro e al dirigente le non conformita rilevate;
> g) frequentare appositi corsi di formazione secondo quanto previsto
> dall'articolo 37.

L'articolo dice cosa il preposto **deve fare**, non chi lo sceglie: l'atto e
l'individuazione dell'art. 18 c. 1 lett. b-bis (sopra).

## Art. 25 c. 1 lett. l — il medico visita gli ambienti di lavoro

Pagina 31 di 204.

> 1. Il medico competente: [...]
> l) visita gli ambienti di lavoro almeno una volta all'anno o a cadenza diversa
> che stabilisce in base alla valutazione dei rischi; la indicazione di una
> periodicita diversa dall'annuale deve essere comunicata al datore di lavoro ai
> fini della sua annotazione nel documento di valutazione dei rischi;

E il solo obbligo del medico che lascia una traccia dal datore di lavoro: il
verbale del sopralluogo, o l'annotazione della cadenza diversa nel DVR.

## Art. 31 c. 2, 4, 6, 7 — numero, esterni, e quando il servizio e interno

Pagina 42 di 204.

> 2. Gli addetti e i responsabili dei servizi, interni o esterni, di cui al comma
> 1, devono possedere le capacita e i requisiti professionali di cui all'articolo
> 32, devono essere in numero sufficiente rispetto alle caratteristiche
> dell'azienda e disporre di mezzi e di tempo adeguati per lo svolgimento dei
> compiti loro assegnati. Essi non possono subire pregiudizio a causa della
> attivita svolta nell'espletamento del proprio incarico. [...]
>
> 4. Il ricorso a persone o servizi esterni e obbligatorio in assenza di
> dipendenti che, all'interno dell'azienda ovvero dell'unita produttiva, siano in
> possesso dei requisiti di cui all'articolo 32. [...]
>
> 6. L'istituzione del servizio di prevenzione e protezione all'interno
> dell'azienda, ovvero dell'unita produttiva, e comunque obbligatoria nei seguenti
> casi:
> a) nelle aziende industriali di cui all'articolo 2 del decreto legislativo 17
> agosto 1999, n. 334, e successive modificazioni, soggette all'obbligo di notifica
> o rapporto, ai sensi degli articoli 6 e 8 del medesimo decreto;
> b) nelle centrali termoelettriche;
> c) negli impianti ed installazioni di cui agli articoli 7, 28 e 33 del decreto
> legislativo 17 marzo 1995, n. 230, e successive modificazioni;
> d) nelle aziende per la fabbricazione ed il deposito separato di esplosivi,
> polveri e munizioni;
> e) nelle aziende industriali con oltre 200 lavoratori;
> f) nelle industrie estrattive con oltre 50 lavoratori;
> g) nelle strutture di ricovero e cura pubbliche e private con oltre 50
> lavoratori.
>
> 7. Nelle ipotesi di cui al comma 6 il responsabile del servizio di prevenzione e
> protezione deve essere interno.

Il testo coordinato annota che il D.Lgs. 334/1999 (lett. a) e stato abrogato dal
D.Lgs. 105/2015 e il D.Lgs. 230/1995 (lett. c) dal D.Lgs. 101/2020: il comma
rinvia ancora a quei numeri.

## Art. 32 c. 1, 2, 5, 6 — i requisiti di RSPP e ASPP

Pagine 42-43 di 204.

> 1. Le capacita ed i requisiti professionali dei responsabili e degli addetti ai
> servizi di prevenzione e protezione interni o esterni devono essere adeguati
> alla natura dei rischi presenti sul luogo di lavoro e relativi alle attivita
> lavorative.
>
> 2. Per lo svolgimento delle funzioni da parte dei soggetti di cui al comma 1, e
> necessario essere in possesso di un titolo di studio non inferiore al diploma
> di istruzione secondaria superiore nonche di un attestato di frequenza, con
> verifica dell'apprendimento, a specifici corsi di formazione adeguati alla
> natura dei rischi presenti sul luogo di lavoro e relativi alle attivita
> lavorative. Per lo svolgimento della funzione di responsabile del servizio
> prevenzione e protezione, oltre ai requisiti di cui al precedente periodo, e
> necessario possedere un attestato di frequenza, con verifica
> dell'apprendimento, a specifici corsi di formazione in materia di prevenzione e
> protezione dei rischi, anche di natura ergonomica e da stress lavoro-correlato
> di cui all'articolo 28, comma 1, di organizzazione e gestione delle attivita
> tecnico amministrative e di tecniche di comunicazione in azienda e di relazioni
> sindacali. I corsi di cui ai periodi precedenti devono rispettare in ogni caso
> quanto previsto dall'Accordo sancito il 26 gennaio 2006 in sede di Conferenza
> permanente per i rapporti tra lo Stato, le Regioni e le Province autonome di
> Trento e di Bolzano, pubblicato nella Gazzetta Ufficiale n. 37 del 14 febbraio
> 2006, e successive modificazioni. [...]
>
> 5. Coloro che sono in possesso di laurea in una delle seguenti classi: L7, L8,
> L9, L17, L23, e della laurea magistrale LM26 [...] sono esonerati dalla
> frequenza ai corsi di formazione di cui al comma 2, primo periodo. Ulteriori
> titoli di studio possono essere individuati in sede di Conferenza permanente
> per i rapporti tra lo Stato, le Regioni e le Province autonome di Trento e di
> Bolzano. [...]
>
> 6. I responsabili e gli addetti dei servizi di prevenzione e protezione sono
> tenuti a frequentare corsi di aggiornamento secondo gli indirizzi definiti
> nell'Accordo Stato-Regioni di cui al comma 2. E fatto salvo quanto previsto
> dall'articolo 34.

Tre requisiti per l'RSPP, due per l'ASPP: **diploma** (o il caso transitorio del
c. 3, chi svolgeva la funzione da sei mesi al 13 agosto 2003, non trascritto),
**attestato del corso adeguato ai rischi** (per l'ASPP finisce qui), e per l'RSPP
**l'attestato del secondo corso** (organizzazione, comunicazione, relazioni
sindacali). I corsi oggi sono i moduli A, B e C dell'ASR 17/04/2025, Parte II
punto 5 (`asr-2025-parte-ii-durate-iniziali.md`); l'«Accordo del 26 gennaio
2006» che il comma nomina e abrogato, annota il testo coordinato, dal punto 15
dell'accordo n. 128/CSR del 7 luglio 2016. Il c. 5 esonera solo dal «comma 2,
primo periodo», il corso comune ad ASPP e RSPP: non dal secondo, che l'RSPP
aggiunge.

## Art. 34 c. 2, 2-bis, 3 e allegato II — il datore che fa l'RSPP

Art. 34: pagine 44-45 di 204. Il c. 2-bis e del D.Lgs. 151/2015.

> 2. Il datore di lavoro che intende svolgere i compiti di cui al comma 1, deve
> frequentare corsi di formazione, di durata minima di 16 ore e massima di 48 ore,
> adeguati alla natura dei rischi presenti sul luogo di lavoro e relativi alle
> attivita lavorative, nel rispetto dei contenuti e delle articolazioni definiti
> mediante Accordo in sede di Conferenza permanente per i rapporti tra lo Stato,
> le Regioni e le Province autonome di Trento e di Bolzano, entro il termine di
> dodici mesi dall'entrata in vigore del presente decreto legislativo. [...]
>
> 2-bis. Il datore di lavoro che svolge direttamente i compiti di primo soccorso
> nonche di prevenzione incendi e di evacuazione deve frequentare gli specifici
> corsi formazione previsti agli articoli 45 e 46.
>
> 3. Il datore di lavoro che svolge i compiti di cui al comma 1 e altresi tenuto
> a frequentare corsi di aggiornamento nel rispetto di quanto previsto
> nell'Accordo di cui al precedente comma. [...]

Allegato II, pagina 4 di 185 degli allegati:

> CASI IN CUI E CONSENTITO LO SVOLGIMENTO DIRETTO DA PARTE DEL DATORE DI LAVORO
> DEI COMPITI DI PREVENZIONE E PROTEZIONE DEI RISCHI (articolo 34)
>
> 1. Aziende artigiane e industriali (1) ...... fino a 30 lavoratori
> 2. Aziende agricole e zootecniche ........ fino a 30 lavoratori
> 3. Aziende della pesca .......................... fino a 20 lavoratori
> 4. Altre aziende ..................................... fino a 200 lavoratori
>
> (1) Escluse le aziende industriali di cui all'art. 1 del decreto del Presidente
> della Repubblica 17 maggio 1988, n. 175, e successive modifiche, soggette
> all'obbligo di dichiarazione o notifica ai sensi degli articoli 4 e 6 del
> decreto stesso, le centrali termoelettriche, gli impianti ed i laboratori
> nucleari, le aziende estrattive e altre attivita minerarie, le aziende per la
> fabbricazione ed il deposito separato di esplosivi, polveri e munizioni, le
> strutture di ricovero e cura sia pubbliche sia private.

Il datore puo fare l'RSPP **solo** entro le soglie dell'allegato e fuori dai casi
dell'art. 31 c. 6 (art. 34 c. 1, sopra). Il corso oggi e l'ASR 17/04/2025 Parte II
punto 4 (`asr-2025-parte-ii-durate-iniziali.md`). Per fare anche l'addetto al
primo soccorso o all'antincendio, i corsi di quelle figure (c. 2-bis).

## Art. 38 c. 1, 4 e art. 39 c. 2 — i titoli del medico, e come lavora

Pagina 50 di 204. La lett. d-bis dell'art. 38 c. 1 riguarda i sanitari delle
Forze Armate e delle forze di polizia, ed e omessa.

> 1. Per svolgere le funzioni di medico competente e necessario possedere uno
> dei seguenti titoli o requisiti:
> a) specializzazione in medicina del lavoro o in medicina preventiva dei
> lavoratori e psicotecnica;
> b) docenza in medicina del lavoro o in medicina preventiva dei lavoratori e
> psicotecnica o in tossicologia industriale o in igiene industriale o in
> fisiologia e igiene del lavoro o in clinica del lavoro;
> c) autorizzazione di cui all'articolo 55 del decreto legislativo 15 agosto
> 1991, n. 277;
> d) specializzazione in igiene e medicina preventiva o in medicina legale; [...]
>
> 4. I medici in possesso dei titoli e dei requisiti di cui al presente articolo
> sono iscritti nell'elenco dei medici competenti istituito presso il Ministero
> del lavoro, della salute e delle politiche sociali.

Art. 39:

> 2. Il medico competente svolge la propria opera in qualita di:
> a) dipendente o collaboratore di una struttura esterna pubblica o privata,
> convenzionata con l'imprenditore;
> b) libero professionista;
> c) dipendente del datore di lavoro.

Chi ha i titoli **e iscritto nell'elenco** del c. 4: guardare l'elenco invece di
un attestato e una **deduzione** (l'articolo non dice chi lo verifica), ed e la
differenza con l'RSPP, i cui requisiti sono attestati di corsi.

## Art. 41 c. 1 — quando c'e la sorveglianza sanitaria

Pagina 51 di 204.

> 1. La sorveglianza sanitaria e effettuata dal medico competente:
> a) nei casi previsti dalla normativa vigente, dalle indicazioni fornite dalla
> Commissione consultiva di cui all'articolo 6;
> b) qualora il lavoratore ne faccia richiesta e la stessa sia ritenuta dal
> medico competente correlata ai rischi lavorativi.

Con l'art. 18 c. 1 lett. a (sopra): il medico si nomina quando la sorveglianza
sanitaria e dovuta, e **lo dicono la norma e la valutazione dei rischi**, non la
visita.
L'art. 40 non e trascritto: riguarda la trasmissione dei dati sanitari al
Servizio sanitario nazionale, che il datore di lavoro non vede.

## Art. 45 c. 1, 2 — il primo soccorso rinvia al DM 388/2003

Pagine 54-55 di 204.

> 1. Il datore di lavoro, tenendo conto della natura della attivita e delle
> dimensioni dell'azienda o della unita produttiva, sentito il medico competente
> ove nominato, prende i provvedimenti necessari in materia di primo soccorso e
> di assistenza medica di emergenza, tenendo conto delle altre eventuali persone
> presenti sui luoghi di lavoro e stabilendo i necessari rapporti con i servizi
> esterni, anche per il trasporto dei lavoratori infortunati.
>
> 2. Le caratteristiche minime delle attrezzature di primo soccorso, i requisiti
> del personale addetto e la sua formazione, individuati in relazione alla natura
> dell'attivita, al numero dei lavoratori occupati ed ai fattori di rischio sono
> individuati dal decreto ministeriale 15 luglio 2003, n. 388 e dai successivi
> Decreti Ministeriali di adeguamento acquisito il parere della Conferenza
> permanente per i rapporti tra lo Stato, le Regioni e le Province autonome di
> Trento e di Bolzano.

La designazione degli addetti e dell'art. 18 c. 1 lett. b e dell'art. 43 c. 1
lett. b (sopra); cassetta, pacchetto di medicazione e corso stanno nel DM 388/2003,
artt. 2 e 3, pagina 7 di 12 di `fonti/Decreto Min. Salute n. 388_2003.pdf`.

## Art. 47 c. 8 e art. 48 c. 1, 3, 6 — quando l'RLS non c'e

Art. 47 c. 8: pagina 57 di 204.

> 8. Qualora non si proceda alle elezioni previste dai commi 3 e 4, le funzioni
> di rappresentante dei lavoratori per la sicurezza sono esercitate dai
> rappresentanti di cui agli articoli 48 e 49, salvo diverse intese tra le
> associazioni sindacali dei lavoratori e dei datori di lavoro comparativamente
> piu rappresentative sul piano nazionale.

Art. 48, pagina 57 di 204:

> 1. Il rappresentante dei lavoratori per la sicurezza territoriale di cui
> all'articolo 47, comma 3, esercita le competenze del rappresentante dei
> lavoratori per la sicurezza di cui all'articolo 50 e i termini e con le
> modalita ivi previste con riferimento a tutte le aziende o unita produttive del
> territorio o del comparto di competenza nelle quali non sia stato eletto o
> designato il rappresentante dei lavoratori per la sicurezza. [...]
>
> 3. Tutte le aziende o unita produttive nel cui ambito non e stato eletto o
> designato il rappresentante dei lavoratori per la sicurezza partecipano al
> Fondo di cui all'articolo 52. Con uno o piu accordi interconfederali stipulati
> a livello nazionale dalle organizzazioni sindacali dei datori di lavoro e dei
> lavoratori comparativamente piu rappresentative vengono individuati settori e
> attivita, oltre all'edilizia, nei quali, in ragione della presenza di adeguati
> sistemi di rappresentanza dei lavoratori in materia di sicurezza o di
> pariteticita, le aziende o unita produttive, a condizione che aderiscano a tali
> sistemi di rappresentanza o di pariteticita, non siano tenute a partecipare al
> Fondo di cui all'articolo 52. [...]
>
> 6. L'organismo paritetico o, in mancanza, il Fondo di cui all'articolo 52
> comunica alle aziende e ai lavoratori interessati il nominativo del
> rappresentante della sicurezza territoriale.

Se i lavoratori non eleggono, **le funzioni passano all'RLST** (o all'RLS di sito,
art. 49): non e il datore che lo sceglie, e il nominativo **arriva** all'azienda
dall'organismo paritetico o dal Fondo. L'elezione e dei lavoratori (art. 47 c.
2-4, sopra): nessuno di questi commi la da al datore di lavoro. In cambio
l'azienda senza RLS **partecipa al Fondo dell'art. 52** (c. 3), salvo i settori
individuati dagli accordi interconfederali; l'art. 52 non e trascritto qui.

### Come e stato verificato il testo

Tre estrazioni, confrontate a macchina parola per parola sui passi trascritti:

- **A** — l'edizione ottobre 2026, `pdftotext -enc UTF-8 -layout`;
- **B** — l'edizione gennaio 2026, stesso comando;
- **C** — normattiva.it, l'articolo vigente per URN
  (`urn:nir:stato:decreto.legislativo:2008-04-09;81~artN!vig=`), letto il 26
  ottobre 2026.

Normalizzati prima del confronto: accenti, apostrofi tipografici, rimandi alle
note, i «(N)» con cui il testo coordinato segna i provvedimenti citati, i «(( ))»
di normattiva, la punteggiatura.

| passo | parole | A-C | B-C | A-B |
|---|---:|---|---|---|
| art. 2 c. 1 lett. e-i | 211 | identici | identici | identici |
| **art. 19 c. 1** | 356 | **3 parole** | **3 parole** | identici |
| art. 25 c. 1 lett. l | 49 | identici | identici | identici |
| art. 31 c. 2, 4, 6, 7 | 254 | identici | identici | identici |
| art. 32 c. 1, 2, 5, 6 | 341 | identici | identici | identici |
| art. 34 c. 2-3 e all. II | 297 | identici (all. II non in C) | idem | identici |
| art. 38 c. 1, 4, art. 39 c. 2 | 160 | identici | identici | identici |
| art. 41 c. 1 | 46 | identici | identici | identici |
| **art. 45 c. 1-2** | 143 | **1 parola** | **1 parola** | identici |
| art. 47 c. 8, art. 48 c. 1, 3, 6 | 263 | identici | identici | identici |

Tolte le note a pie' di pagina e le intestazioni di pagina che in A e B cadono in
mezzo a un passo, e i rimandi alle note attaccati ai numeri («334118»,
«2006120»). Le differenze vere, tutte fra il testo coordinato (A e B, che
concordano) e normattiva:
- art. 19 c. 1 lett. a: «vigilare sulla osservanza», «dal datore di lavoro e
  dirigenti», «persistenza della inosservanza» in A e B; «sull'osservanza», «e
  **dai** dirigenti», «dell'inosservanza» in C;
- art. 45 c. 1: «della natura dell'attivita» in A e B, «della natura della
  attivita» in C.

Nessuna cambia il senso. **Dove A e B divergono da C, qui si trascrive C**,
il testo vigente.

**Limite dichiarato.** Come sopra, nessuna lettura a video pagina per pagina; e
l'allegato II, che normattiva non serve per URN di articolo, e confrontato solo
fra A e B.
