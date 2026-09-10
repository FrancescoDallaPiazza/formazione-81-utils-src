# FAQ sull'ASR 2025 — cosa si appoggia a cosa

Tre documenti, in `fonti/`:

- **FAQ interregionali 31/07/2025** — 63 domande, trasmesse dal Coordinamento
  Commissione Salute. Citate come «FAQ interregionali 2025, n. N».
- **FAQ interregionali 27/03/2026** — 44 quesiti, riordinati per argomento.
  Citate come «FAQ interregionali 2026, quesito n. N».
- **FAQ Regione del Veneto** — risposte ai quesiti del primo periodo
  applicativo. E la fonte che la migrazione 0021 gia citava.

## Il transitorio dei preposti, verificato sul testo

La migrazione 0021 era stata scritta citando le FAQ del Veneto a memoria. Il
testo dice esattamente questo:

> Richiamato che il termine di riferimento e fissato nel 24 maggio 2025, data di
> entrata in vigore del nuovo ASR 2025, l'obbligo di aggiornamento annuale o
> biennale e definito in base alla data indicata negli attestati.
> Per i preposti che abbiano frequentato il corso di formazione da meno di 2 anni
> dalla data di entrata in vigore dell'ASR 2025, la frequenza dell'aggiornamento
> e quella definita dall'articolo 37 comma 7-ter del D.Lgs. 81/2008 (ogni 2
> anni). In concreto: per i preposti formati **prima del 23 maggio 2023** (punto
> a) vale il periodo transitorio di un anno e, pertanto, l'aggiornamento deve
> essere concluso **entro il 24 maggio 2026**. Per i preposti formati **a partire
> dal 24 maggio 2023 e fino al 23 maggio 2025** (punto b), si applica
> l'aggiornamento biennale e, quindi, dovra essere concluso **entro il 24 maggio
> 2027**.

Le due righe di `regole_transitorie` corrispondono. E confermato anche il buco
sul 23 maggio 2023, che la 0021 aveva notato: «prima del 23» e «a partire dal
24» lasciano scoperto il 23 stesso, e il 23 sta nel primo scaglione perche
l'interpretazione opposta regalerebbe un anno a chi non ce l'ha.

## Due punti in cui le fonti non concordano

**Quando e entrato in vigore l'accordo.** Le FAQ del Veneto danno per fissato il
**24 maggio 2025**, data di pubblicazione in Gazzetta Ufficiale, e da li contano
i termini transitori. Le FAQ interregionali del 27/03/2026, quesito n. 11,
dicono un'altra cosa:

> Entra in vigore dalla data di pubblicazione sul sito del Ministero del Lavoro
> ossia **19 maggio 2025**, ai sensi di quanto previsto dall'art. 32 della legge
> 18 giugno 2009 n. 69.

Sono cinque giorni. Contano perche i termini transitori dei preposti si contano
da li: con il 19 maggio le scadenze sono il 19/05/2026 e il 19/05/2027 invece del
24, e riguarda **167 persone**.

**Sciolto il 6 settembre 2026, sul 19 maggio** — migrazione
`0043_entrata_in_vigore_19_maggio.sql`, commit `eba5a4e`. `regole_transitorie`
porta `scadenza_fissa` a `2026-05-19` e `2027-05-19`.

Fino al 9 settembre questa sezione diceva ancora «il progetto usa il 24 maggio,
perche il Veneto e la regione in cui l'azienda opera» e chiudeva con «va sciolto».
Era vero quando e stato scritto e falso da tre giorni: **nessuno aveva riletto la
trascrizione dopo aver deciso.** Chi apre `reference/` per sapere cosa il progetto
applica trovava la risposta scartata, ed e esattamente il caso d'uso per cui questa
cartella esiste. Segnalato dalla corsia AppOverall il 9 settembre.

### E la ragione che regge non e quella scritta nella 0043

Il commento della migrazione motiva la scelta cosi: «e la data anteriore e viene dal
documento piu recente». Regge il risultato, non il ragionamento — e vale la pena
scrivere quello giusto, perche il primo si rompe al prossimo conflitto.

Il conflitto vero **non era fra due FAQ**. Era fra la Parte VII punto 1
dell'accordo — «entra in vigore il giorno della pubblicazione nella Gazzetta
Ufficiale», e la Gazzetta e la n. 119 del **24 maggio** — e le FAQ interregionali.
Una gerarchia ingenua darebbe il 24: l'accordo sta sopra una FAQ, sempre.

Da il 19 per un'altra ragione: **quella FAQ non parla in proprio**. Invoca l'art. 32
della legge 18 giugno 2009 n. 69, cioe una norma primaria sulla pubblicita legale
degli atti. Non sta contraddicendo l'accordo — sta dicendo **quale pubblicazione
conta** ai fini della clausola che l'accordo stesso ha scritto. Accordo e 19 maggio
non sono in conflitto: la FAQ riporta l'applicazione di una fonte di rango 1.

Da cui la regola, formulata dalla corsia AppOverall come *G1-bis* nella scheda 7 del
repo unico: **il rango di chi porta la notizia non e il rango della notizia.** Una
FAQ che cita una norma primaria va pesata come la norma che cita, non come una FAQ.

**I 60 giorni dall'assunzione non ci sono piu.** docs/04 elencava fra i casi
particolari il «neoassunto: obbligo entro 60 giorni dall'assunzione». Le FAQ
interregionali 2026, quesito n. 9, rispondono **No** alla domanda se quella
possibilita esista ancora:

> La formazione deve avvenire in coerenza con le disposizioni di cui al comma 4
> dell'articolo 37 del D.Lgs. 81/2008 (norma primaria) ovvero al momento: a)
> della costituzione del rapporto di lavoro [...]; b) del trasferimento o
> cambiamento di mansioni; c) della introduzione di nuove attrezzature di lavoro
> o di nuove tecnologie [...]

E ribadito dal quesito n. 32. Per il motore cambia poco — la data di assunzione
manca su 1.120 delle persone che avrebbe riguardato — ma cambia la regola: non
c'e nessuna finestra di tolleranza da calcolare.

## L'aggiornamento puo essere scaglionato

FAQ interregionali 2025, n. 53. La domanda era se serva un attestato per ogni
break formativo di 15-30 minuti. La risposta dice tre cose che il motore usa:

> Laddove si faccia ricorso a break formativi la formazione viene erogata
> direttamente all'interno dei reparti aziendali [...] Gli stessi sono ritenuti
> validi ai fini della formazione specifica e per l'aggiornamento dei lavoratori.

> Ai partecipanti ai corsi di formazione ed aggiornamento, che abbiano
> regolarmente frequentato il corso e superato la verifica finale, deve essere
> rilasciato dal soggetto formatore un attestato — **unico per ciascun corso**.

> Da cio ne deriva che un singolo percorso formativo — di aggiornamento —
> potrebbe essere **progettato e strutturato con momenti di formazione
> scaglionati nel tempo**. L'attestato di formazione finale fara, quindi,
> riferimento ai vari momenti formativi erogati nell'ambito dell'intero progetto
> formativo realizzato.

Quindi: spalmare si puo, ma dentro **un solo progetto formativo progettato come
tale**, e l'attestato e uno e sta alla fine. Tre sessioni da due ore decise di
volta in volta non sono la stessa cosa. E la ragione dei `progetti_formativi`
della migrazione 0028.

Per l'accordo, la distribuzione nel quinquennio e scritta espressamente solo per
RSPP e ASPP (vedi `asr-2025-aggiornamenti.md`); per i lavoratori arriva di qui.

## Da quale data decorre il termine

FAQ interregionali 2025, nn. 21 e 28, sulla stessa risposta per ambienti
confinati e attrezzature:

> L'aggiornamento parte dalla data di fine corso riportata nell'attestato.

E la regola che il motore applica ovunque, e che il confronto con lo scadenzario
del gestionale ha riprodotto su 4.678 coppie.

## Nessuna integrazione a posteriori

FAQ interregionali 2025, n. 22. La domanda era se un corso previgente piu breve
di quello richiesto possa essere riconosciuto integrando le ore mancanti:

> E possibile accettare i corsi gia erogati solo se completamente conformi ai
> contenuti, **non e prevista l'integrazione**.

E la risposta piu vicina che le fonti danno alla domanda «le ore di un ciclo di
aggiornamento lasciato scadere contano sul ciclo nuovo?», che nessuno dei tre
documenti affronta direttamente. Cercando «tardivo», «scaduto», «omesso»,
«decorso il termine» e «mancato aggiornamento» in accordo e FAQ non si trova
niente: il caso non e contemplato. La lettura prudente e che si riparta da zero,
ma e una lettura, e riguarda 78 persone.

## Quesito 57 — il rischio si svincola dall'ATECO, e decide l'e-learning

FAQ della Commissione Salute del **31 luglio 2025**, quesito n. 57, pagina 17 di 19
della nostra copia. E la terza fonte concorde sul fatto che la classe ATECO sia un
default e non un verdetto, dopo l'ASR 2025 punto 2.1.1 e l'Interpello MLPS 1/2025.

Il quesito chiede se un autoriparatore possa fare la formazione specifica in
e-learning, dato che la tabella 3.5 lo consente solo al rischio basso. La risposta:

> «per le aziende classificate a rischio basso **non e consentito l'e-learning** per
> tutti quei lavoratori che, pur essendo l'attivita' classificata come rischio basso,
> svolgano mansioni che li espongono a rischio medio o alto. Si ritiene che tale
> conclusione debba trovare evidenza nella valutazione dei rischi.»

E cita la propria genealogia, che e la parte che vale:

> «il principio che il livello di rischio della formazione specifica si poteva
> svincolare dal codice Ateco, avendo riguardo anche alle mansioni concretamente
> svolte in azienda dal lavoratore purche' l'inquadramento fosse coerente con la
> Valutazione dei rischi (es. le mansioni di ufficio erano considerate a rischio
> basso, se non frequentavano i reparti produttivi), era gia' stato espresso nelle
> **linee applicative del 25/7/2012** degli Accordi 2011 e nell'**Interpello n. 11
> del 24.10.2013**.»

Con l'esempio che va **verso l'alto**: la mansione nel settore riparazione
veicoli/carrozzerie, «pur essendo classificato come Ateco (G 45) a rischio basso», in
considerazione dei rischi delle mansioni «potra' prevedere una formazione a rischio»
superiore.

**Come lo applichiamo, e cosa non abbiamo.** Le prime due fonti dicevano *quante ore*
si devono; questa aggiunge una conseguenza che non e sulle ore: **il livello di
rischio decide se l'e-learning e ammesso**. Un lavoratore d'azienda a rischio basso
ma con mansione a rischio medio non puo farla a distanza. Oggi `corsi.modalita` sa
che un corso *puo* essere erogato in e-learning; non sa che una **persona** non puo
riceverlo cosi. E una regola con effetti pratici — su cosa si vende e su cosa si
eroga — e il motore non la esprime.

Segnalato dalla corsia AppOverall il 9 settembre 2026, verificato qui sulla nostra
copia.

