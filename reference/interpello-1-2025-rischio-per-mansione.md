# Interpello MLPS n. 1/2025 — l'ancoraggio ad ATECO 2007 e il rischio per mansione

**Fonte.** Ministero del Lavoro e delle Politiche Sociali, Commissione per gli
interpelli in materia di salute e sicurezza sul lavoro (art. 12 d.lgs. 81/2008),
**Interpello n. 1/2025**, seduta del **18 settembre 2025**, protocollo
`m_lps.AZFIVQQ.REGISTRO UFFICIALE.E.0013431.29-09-2025`. Istante: Universita degli
Studi di Udine. Firmato dal Presidente della Commissione, dott.ssa Maria Teresa
Palatucci.

PDF: [`fonti/Interpello-MLPS-1-2025-18092025.pdf`](fonti/Interpello-MLPS-1-2025-18092025.pdf)
Pagina ufficiale: https://www.lavoro.gov.it/documenti-e-norme/interpelli/interpello-1-del-18092025

**Il quesito.** Se «il personale docente che svolge mansioni che non li espongano
ad un rischio medio o alto puo frequentare i corsi individuati per il rischio
basso, fatto salvo che comunque i contenuti e la durata della formazione sono
subordinati all'esito della valutazione dei rischi effettuata dal datore di
lavoro».

---

## 1. L'Allegato IV e ancorato ad ATECO 2007, ed e scritto

Questa e la citazione che al progetto mancava: l'ancoraggio reggeva per deduzione
dal titolo dell'allegato, adesso e affermato da una fonte ministeriale.

L'interpello cita l'**ASR 17 aprile 2025 (Rep. atti n. 59/CSR), Parte II «Corsi di
formazione», Punto 2.1 «Corso per lavoratori»**, dove la durata minima fa
riferimento

> «alla classificazione dei settori di cui all'**Allegato IV (Individuazione
> macrocategorie di rischio e corrispondenze ATECO 2007)**»

e poi afferma per proprio conto:

> «la suddetta tabella codici **ATECO 2007** classifica il settore Istruzione
> (**sezione P, codice 85**) come attivita a **rischio medio**, per il quale la
> formazione specifica e dunque della durata di almeno 8 ore»

**Come lo applichiamo.** Conferma la premessa di `0047_raccordo_ateco_2025` e
`0049_la_scheda_chiede_l_annata`: un codice ATECO 2025 va **riportato alla
tassonomia 2007** prima di leggere l'Allegato IV. La libreria normativa
`formazione-81-utils-src` assume invece che le divisioni siano stabili e prende le
prime due cifre: su 2.166 stringhe valide in entrambe le annate, **62 cambiano
classe**. Vedi [`../docs/06-letture-allegato-iv.md`](../docs/06-letture-allegato-iv.md).

Verifica incrociata: la nostra `ateco_rischio` classifica la divisione 85 come
media. Concorde.

## 2. Il rischio si sposta per mansione, e si sposta nei due versi

E la parte che vale di piu, ed e la casella aperta «rischio basso per mansione».

### Verso il basso — ASR 2025, Parte II, Punto 2.1.1 «Condizioni particolari»

Testo riportato dall'interpello:

> «I lavoratori **a prescindere dal settore di appartenenza**, che non svolgano
> mansioni che comportino la loro presenza, **anche saltuaria**, nei reparti
> produttivi, possono frequentare i corsi individuati per il rischio basso con le
> relative modalita di erogazione (omissis). Rimane comunque salvo l'obbligo del
> datore di lavoro di assicurare la formazione specifica secondo le risultanze
> della valutazione dei rischi»

### Verso l'alto — Accordo 25 luglio 2012 (Rep. atti n. 153/CSR), Allegato A, punto 4

L'interpello lo cita per esteso, e qui sta la simmetria che nessuna delle nostre
tabelle rappresenta:

> «ove la valutazione dei rischi di una azienda **la cui classificazione ATECO
> prevede l'avvio dei lavoratori a corsi a rischio "basso"** evidenzi l'esistenza
> di rischi particolari, tale circostanza determina la necessita di programmare e
> realizzare corsi adeguati alle effettive condizioni di rischio (quindi, **di
> contenuto corrispondente al rischio "medio" o "alto"**)»

Con l'esempio dato dalla fonte: i lavoratori di un'azienda metallurgica che non
frequentano i reparti produttivi, o che svolgono semplice attivita d'ufficio, sono
lavoratori a rischio basso.

### Interpello n. 11 del 24 ottobre 2013, citato

> «la formazione — che deve essere "sufficiente ed adeguata" — va riferita
> all'effettiva mansione svolta dal lavoratore, considerata in sede di valutazione
> dei rischi; pertanto **la durata del corso puo prescindere dal codice ATECO di
> appartenenza dell'azienda**»

### La conclusione della Commissione

> «il personale docente che, sulla base della valutazione dei rischi aziendali
> effettuata dal datore di lavoro, svolga attivita lavorativa che non comporti,
> anche saltuariamente, un rischio medio o alto, puo partecipare a corsi di
> formazione specifica (...) progettati per la categoria di rischio basso»

## 3. Cosa cambia per il modello

**La classe ATECO non e ne un pavimento ne un tetto: e un default che la
valutazione dei rischi puo spostare in entrambe le direzioni.** Questo e detto da
tre fonti concordi — ASR 2025 punto 2.1.1, accordo 153/CSR allegato A punto 4,
interpello 11/2013 — e ha due conseguenze concrete.

**Prima.** Oggi `livello_rischio` sta solo sul cliente. Non c'e modo di dire che
una persona, o una mansione, sta su una classe diversa da quella dell'azienda: ne
sotto (l'impiegato della metalmeccanica) ne sopra (l'azienda a basso rischio con un
rischio particolare emerso dalla valutazione). La casella del ROADMAP diceva «chi
non entra nei reparti produttivi puo fare il corso da rischio basso»: la fonte dice
che vale anche al contrario, e questa meta non era stata registrata.

**Seconda, e va detta con precisione.** Il dossier di verifica (rilievo M3)
osservava che in AppSopralluoghi `livello_rischio` e proposto da un motore ma
**accettato a mano** (`Anagrafiche.tsx:940`), e che quindi non e un *puro derivato*.
L'osservazione era esatta; quello che mancava era la conseguenza. Quella conferma
umana **non e una concessione dell'implementazione: e un atto che la norma
richiede**, perche la classe va confrontata con la valutazione dei rischi.

Da cui il rovesciamento: la divisione fra «fatti» e «verdetti» proposta dall'analisi
era sbagliata **proprio perche trattava il livello di rischio come un derivato**,
mentre e un verdetto che qualcuno deve firmare. Un livello calcolato dall'ATECO e
scritto senza che nessuno lo confermi sarebbe la violazione, non la funzionalita.
Quello che manca non e l'automatismo — e il **posto dove annotare da cosa discende
lo scostamento**, che oggi non esiste in nessuno dei due repo.

**Terza, sul percorso a mano.** `Anagrafiche.tsx:866` -> `:873` scrive
`codice_ateco` e `livello_rischio` nella stessa patch, senza conferma. Alla luce di
questa fonte e doppiamente sbagliato: non solo puo scrivere la classe di un'annata
sbagliata (i 62 codici), ma **salta l'atto che la norma richiede** — il confronto
con la valutazione dei rischi.

## 4. Cosa non dice

Nulla sulle divisioni **30, 86 e 87**, che l'Allegato IV non classifica. Restano
`null` e restano aperte: questa fonte non le tocca.

Nulla su come si aggregano **piu codici ATECO** per un cliente multi-sede. La
regola «si prende il piu alto» resta senza fonte — e il 9 settembre 2026 e stata
**parcheggiata li**, non citata: vale come precauzione dichiarata da noi (rango 6),
solo per la sede multi-ATECO senza determinazione per mansione. Per il **gruppo di
primo soccorso** la fonte invece c'e ed e esatta, DM 388/2003 art. 1 c. 2 ultimo
periodo, e vale per unita' produttiva. Scheda 6 del repo unico, `c96ae67`.
