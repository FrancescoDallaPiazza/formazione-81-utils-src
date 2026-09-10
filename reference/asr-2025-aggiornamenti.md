# Aggiornamenti — Parte III dell'ASR 2025

Fonte: Accordo Stato-Regioni 17 aprile 2025 (Rep. Atti n. 59/CSR), Parte III,
pagine 79-82 di 136. Il testo integrale sta in
[`fonti/ASR-170425.pdf`](fonti/ASR-170425.pdf).

## Periodicita, figura per figura

Citazioni dal testo, non riassunti.

**Lavoratori** (punto 1.1)

> L'aggiornamento deve essere effettuato ogni qualvolta intervengono elementi
> modificativi in termini di esiti della valutazione dei rischi ovvero quando le
> risultanze delle verifiche di efficacia della formazione durante lo svolgimento
> della prestazione lavorativa ne evidenzino la necessita e comunque con una
> periodicita quinquennale di durata minima di 6 ore **a decorrere dalla data di
> fine corso riportata nell'attestato**.

**Preposti** (punto 1.2) — cadenza **biennale**, durata minima 6 ore.

**Dirigenti** (punto 1.3) — cadenza quinquennale, durata minima 6 ore.

**Datore di lavoro** (punto 1.4) — cadenza quinquennale, durata minima 6 ore.

**Datore di lavoro che svolge i compiti di RSPP** (punto 2) — cadenza
quinquennale, **8 ore**, a decorrere dalla data di conclusione del modulo comune.

**RSPP e ASPP** (punto 3) — quinquennale a decorrere dalla conclusione del Modulo
B comune, con monte ore ASPP 20 e RSPP 40. E qui, e solo qui, che l'accordo dice
espressamente:

> Il monte ore complessivo di aggiornamento potra essere distribuito nell'arco
> temporale del quinquennio.

**Coordinatore per la sicurezza** (punto 4) — quinquennale, stesse modalita degli
RSPP, 40 ore.

**Ambienti sospetti di inquinamento o confinati** (punto 5) — quinquennale,
durata minima 4 ore di parte pratica.

**Operatori attrezzature art. 73 c. 5** (punto 6) — quinquennale, durata minima
4 ore di parte pratica.

## Cosa non vale come aggiornamento

Due regole che il motore deve rispettare, e che sono scritte.

**Un corso per un'altra figura non aggiorna la tua.**

> Ai fini dell'aggiornamento delle diverse figure, la partecipazione a corsi di
> formazione finalizzati all'ottenimento e/o all'aggiornamento di qualifiche
> specifiche come quelle, a titolo meramente esemplificativo e non esaustivo, dei
> dirigenti e dei preposti (ex art. 37 d.lgs. n. 81/2008), dei lavoratori
> incaricati dell'attuazione delle misure di prevenzione incendi e lotta
> antincendio, di evacuazione dei luoghi di lavoro in caso di pericolo grave e
> immediato, di salvataggio, di primo soccorso e, comunque, di gestione delle
> emergenze di cui agli artt. 44, 45 e 46 del d.lgs. n. 81/2008, non e da
> ritenersi valida

Il motore lo rispetta per costruzione dalla migrazione 0024: un evento vale per
il proprio `gruppo_obbligo` e per nessun altro.

**Alcuni moduli non aggiornano niente.**

> Non e valida ai fini dell'aggiornamento la partecipazione ai moduli di cui ai
> seguenti punti: punto 2.3 parte II (modulo aggiuntivo cantieri); punto 3 parte
> II (modulo aggiuntivo cantieri); punto 4 parte II (moduli tecnici-integrativi);
> punto 5.3 parte II (moduli B di specializzazione).

E `corsi.assolve_obbligo = false` della migrazione 0023, che era stato dedotto
dal fatto che il gestionale non da periodicita a quei corsi. Il "Modulo
Aggiuntivo Cantieri per Datori di lavoro" era uno dei sette. La deduzione dai
dati e la norma dicono la stessa cosa, il che e il modo migliore in cui una
deduzione puo finire.

## La decadenza a dieci anni

> L'assenza, nei limiti di 10 anni, della regolare frequenza ai corsi di
> aggiornamento non fa venir meno il credito formativo maturato dalla regolare
> frequenza ai corsi abilitanti e il completamento dell'aggiornamento, pur se
> effettuato in ritardo, consente di ritornare ad eseguire la funzione esercitata.

Due cose, non una. Entro i dieci anni l'aggiornamento tardivo rimette in regola:
e `obblighi.decadenza_mesi = 120` della migrazione 0022. Ma la frase prima dice
anche che, finche l'aggiornamento non e completato, **la funzione non e
esercitabile**:

> tale funzione non e esercitabile se non viene completato l'aggiornamento
> previsto per i rispettivi corsi.

Riguarda RSPP e ASPP, i coordinatori e gli operatori delle attrezzature dell'art.
73 c. 5. Un carrellista con l'abilitazione scaduta non e uno che ha una lettera
da ricevere: e uno che non puo salire sul muletto.

## Il carroponte e nelle attrezzature dell'art. 73

L'accordo del 2012 non lo aveva, quello del 2025 si. Parte II, sezione 8 —
«CORSI PER L'ABILITAZIONE DEGLI OPERATORI PER LE ATTREZZATURE DI CUI
ALL'ARTICOLO 73, COMMA 5» — punto 8.3.11:

> Corso di formazione teorico-pratico per lavoratori addetti alla conduzione di
> carriponte. Per l'utilizzo di carriponte (CP) e necessario il possesso da parte
> dell'operatore di almeno una delle seguenti abilitazioni. Il modulo pratico e
> distinto per le diverse tipologie di comando, distinguendo tra comando
> pensile/radiocomando e comando in cabina, per la durata, per ciascuna tipologia
> di comando, della durata di 6 ore. L'abilitazione per tutte le tipologie
> comporta un modulo pratico di 7 ore.

Con 4 ore di modulo teorico-tecnico, il percorso base e di 10 ore.

**Il termine transitorio**, parte VII, citato dalle FAQ interregionali 2025 n. 26:

> I corsi di formazione di cui alla parte II, punti 8.3.9, 8.3.10, 8.3.11
> (macchine agricole raccogli frutta, caricatori per la movimentazione di
> materiali, carroponti) del presente Accordo SR devono essere frequentati in
> modo che gli stessi vengano conclusi entro e non oltre il termine di 12 mesi
> dall'entrata in vigore del presente Accordo SR.

**Il riconoscimento del pregresso** guarda i contenuti e non la durata. FAQ
interregionali 2026, quesito n. 23:

> ai fini del riconoscimento della formazione pregressa, l'elemento determinante
> non e la durata del corso, bensi la verifica puntuale della conformita dei
> contenuti rispetto a quanto stabilito dall'Accordo. Solo dimostrando
> formalmente tale conformita sara possibile considerare validi i percorsi gia
> realizzati.

**La gru a bandiera no.** Le definizioni dell'allegato II sono due — gru a ponte
e gru a cavalletto — e vengono dalla UNI EN 15011, con quattro figure. FAQ
interregionali 2026, quesito n. 24:

> Queste definizioni, in linea con la norma UNI EN 15011, costituiscono un elenco
> esaustivo e non meramente esemplificativo. Cio significa che non e possibile
> estendere l'ambito di applicazione dell'Accordo ad altre tipologie di
> attrezzature per analogia o interpretazione. Alla luce di quanto sopra, le
> cosiddette gru a bandiera non rientrano tra le attrezzature per le quali e
> prevista la formazione abilitante ai sensi dell'Accordo SR 59/2025.

Codificato nella migrazione 0033: `obblighi.carroponte` passa a periodicita 60 e
decadenza 120, e il termine dei 12 mesi entra in `regole_transitorie`. La 0022
aveva scritto l'opposto ragionando sull'accordo del 2012.

## RSPP e ASPP: monte ore, non scadenza

> Gli RSPP, gli ASPP e i Coordinatori per la progettazione e per l'esecuzione,
> per poter esercitare la propria funzione, trascorsi i cinque anni dalla prima
> abilitazione, devono poter dimostrare, **all'atto dell'affidamento
> dell'incarico**, che nel quinquennio antecedente all'affidamento dell'incarico
> hanno partecipato a corsi di aggiornamento per un numero di ore non inferiore a
> quello minimo previsto.

E il motivo di `obblighi.metodo_calcolo = 'monte_ore'` (migrazione 0024): la data
che conta e quella dell'incarico, e non e in nessun export del gestionale. Sono
11 righe che il motore dichiara `non_calcolabile` invece di inventare una data.
