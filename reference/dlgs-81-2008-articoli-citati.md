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
