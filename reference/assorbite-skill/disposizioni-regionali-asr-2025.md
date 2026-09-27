================================================================================
ASSORBITO da analisi-dvr-81 il 27 settembre 2026 (decisione 7, R1).
--------------------------------------------------------------------------------
DA DOVE VIENE  skill claude.ai analisi-dvr-81, references/base_normativa_tecnica.md,
               sezione 7 «Disposizioni regionali sulla formazione», sottosezioni
               7.2-7.8, come caricata il 27/09/2026 (nella skill: «Ultimo
               aggiornamento sezione: 27/05/2026», rev. 1).
COSA CONTIENE  quali Regioni e Province autonome hanno un atto proprio che attua
               l'ASR 2025, e se vincola il datore di lavoro che forma i suoi
               dipendenti in casa (il caso del KIT FORMASUBITO).
NATURA         SINTESI, NON TRASCRIZIONE. **Non citabile**: nessuno degli atti
               regionali nominati sta in `fonti/`. Le righe «Impatto sul KIT»
               sono interpretazioni di Overall (materia b della decisione 7),
               non letture della fonte.
MISURATO IL    27/05/2026 dalla skill; non riverificato all'assorbimento.
               Si rimisura aprendo l'atto di ciascuna Regione della matrice.
================================================================================

## Dove si verifica lo stato

Dal 27 settembre 2026 ogni atto di questo file e una norma del **Database Normativo
Sicurezza** di Overall, verificata alla fonte con la stessa cadenza delle altre norme
(controllo settimanale, verifica mensile). La data «MISURATO IL» qui sopra dice quando e
stato scritto questo testo; **lo stato di oggi lo dice il database**:

    node controlla.js <ID>     # dalla copia pubblica overall-database-normativo-sicurezza-export

| Regione / PA | ID nel database |
| --- | --- |
| Veneto (FAQ regionali) | S-016 |
| Lombardia | S-017, S-018, S-019 |
| Piemonte | S-020 |
| Emilia-Romagna | S-021 |
| Sicilia | S-022 |
| P.A. Bolzano | S-023 |
| tutte le altre (nessun atto; Veneto per gli atti) | S-024 |

Quando la verifica trova un atto nuovo o cambiato, si corregge **questo file** con la
data, e il database registra l'azione.

## Cosa va saputo prima di usarlo

Quattro cose trovate all'assorbimento, il 27 settembre 2026. Nessuna e stata
corretta qui dentro: il testo sotto e quello della skill, e le correzioni
aspettano la lettura degli atti.

1. **Il Veneto risulta «nessun atto specifico».** E vero per gli atti (DGR,
   leggi), ma la Regione del Veneto ha pubblicato le sue **FAQ sull'ASR 2025**, che
   stanno in `fonti/FAQ-Regione-Veneto.pdf` e che la gerarchia della decisione 7
   mette al rango 5. Per un'azienda veronese sono la fonte regionale che conta:
   vedi `../faq-asr-2025.md`.
2. **La Lombardia ha una scadenza passata.** «DGR attuativa della L.R. 4/2026
   attesa entro agosto 2026, non ancora pubblicata»: al 27/09/2026 agosto e
   passato e nessuno ha guardato. Finche non si guarda, lo stato lombardo e
   **non verificabile**, non «invariato».
3. **Le skill kitformasubito* dicono altro in due punti**: citano una «DGR 4499»
   lombarda che qui non c'e, e contano 17 Regioni senza atti invece di 16.
   Una delle due versioni e sbagliata; non si sa quale finche non si apre l'atto.
4. **Le date qui sotto sono gia al 19 maggio 2025** (corretto il 27/09/2026 anche
   nella skill): vedi `../asr-2025-parte-vii.md`.

---

### 7.2 — Matrice riassuntiva Regioni / Province autonome

Una riga per Regione/PA. **Stato atto specifico**: SÌ = c'è un atto regionale dedicato all'attuazione dell'ASR 17/04/2025; NO = al momento nessun atto specifico, si applica direttamente l'ASR. **Vincola DDL interno?**: indica se l'atto regionale, dove presente, impone obblighi al datore di lavoro che eroga formazione interna ai propri dipendenti (la stragrande maggioranza degli atti regionali vincola solo enti accreditati / soggetti formatori autorizzati, NON i DDL interni).

| Regione / PA | Atto specifico ASR | Vincola DDL interno? | Riferimento dettaglio |
|---|---|---|---|
| Abruzzo | NO | — | §7.8 |
| Basilicata | NO | — | §7.8 |
| Calabria | NO | — | §7.8 |
| Campania | NO | — | §7.8 |
| Emilia-Romagna | SÌ — DGR 1085 del 07/07/2025 | NO (solo enti accreditati) | §7.5 |
| Friuli-Venezia Giulia | NO | — | §7.8 |
| Lazio | NO | — | §7.8 |
| Liguria | NO | — | §7.8 |
| Lombardia | SÌ — DGR XII/4515 09/06/2025 + DGR XII/5667 26/01/2026 + L.R. 4/2026 10/02/2026 | NO finché DGR attuativa L.R. 4/2026 non esce | §7.3 |
| Marche | NO | — | §7.8 |
| Molise | NO | — | §7.8 |
| Piemonte | SÌ — atto attuativo regionale | NO (solo enti accreditati) | §7.4 |
| Puglia | NO | — | §7.8 |
| Sardegna | NO | — | §7.8 |
| Sicilia | SÌ — Decreto G.U.R.S. 27/03/2026 n. 15 | Da verificare (non analizzato in profondità) | §7.6 |
| Toscana | NO | — | §7.8 |
| Trentino-Alto Adige — P.A. Trento | NO | — | §7.8 |
| Trentino-Alto Adige — P.A. Bolzano | SÌ — clausola di salvaguardia ASR + progetti pilota | Solo se cliente aderisce a progetto pilota | §7.7 |
| Umbria | NO | — | §7.8 |
| Valle d'Aosta | NO | — | §7.8 |
| Veneto | NO | — | §7.8 |

### 7.3 — Lombardia (Regione a maggior rischio evolutivo)

- **DGR Regione Lombardia XII/4515 del 09/06/2025**: prima disposizione attuativa dell'ASR 17/04/2025 sui requisiti dei soggetti formatori e sull'organizzazione dei corsi nel territorio lombardo. **Vincolante per i soggetti accreditati Regione Lombardia**, NON per il datore di lavoro che eroga formazione interna ai propri dipendenti.
- **DGR Regione Lombardia XII/5667 del 26/01/2026**: integrazione e correzione di DGR 4515. Stesso campo di applicazione.
- **L.R. Lombardia n. 4 del 10/02/2026**: legge regionale che ha normato il **tracciamento di TUTTI i corsi erogati in Lombardia in materia di salute e sicurezza** (anche quelli erogati da DDL interno). Però la legge rinvia a una DGR attuativa per le modalità operative del tracciamento. **DGR attuativa attesa entro agosto 2026**, non ancora pubblicata alla data di rev. sezione 7.

**Impatto sul KIT FORMASUBITO**:
- Finché la DGR attuativa di L.R. 4/2026 NON è pubblicata → il KIT standard ASR è conforme. Eventuale nota informativa nel Progetto Formativo che richiami la futura piattaforma regionale è opzionale.
- Se la DGR attuativa viene pubblicata → STOP emissione, serve aggiornare la skill `kitformasubito*` con i nuovi obblighi documentali e ri-emettere il KIT.

**Query web di check al passo 0.5.c**: `Legge Regionale Lombardia 4/2026 DGR attuativa tracciamento corsi formazione [anno corrente]`.

### 7.4 — Piemonte

- **Atto regionale attuativo** dell'ASR 17/04/2025 emanato dalla Regione Piemonte (vedi pagina ufficiale `https://www.regione.piemonte.it/web/temi/sanita/sicurezza-sul-lavoro/formazione-materia-salute-sicurezza-sul-lavoro` per estremi correnti). **Vincolante per gli enti accreditati Regione Piemonte**, NON per il DDL che eroga formazione interna.

**Impatto sul KIT FORMASUBITO**: nessun obbligo aggiuntivo per il DDL interno. KIT standard conforme. Nota informativa opzionale.

### 7.5 — Emilia-Romagna

- **DGR Regione Emilia-Romagna n. 1085 del 07/07/2025**: recepimento dell'Accordo Stato-Regioni 17 aprile 2025. Disciplina i percorsi formativi obbligatori sul territorio regionale per: datori di lavoro (art. 37 e 97 c.3-ter), DL RSPP, RSPP/ASPP, coordinatori cantieri, abilitazioni art. 73 c.5, operatori ambienti confinati DPR 177/2011. **Soggetti autorizzati all'erogazione**: esclusivamente enti di formazione professionale accreditati ai sensi della DGR di accreditamento regionale.
- **Termine transitorio**: corsi avviati dopo l'entrata in vigore dell'Accordo devono rispettare le nuove indicazioni entro 12 mesi dal 19/05/2025 (termine massimo 19/05/2026 — già scaduto alla data di rev. sezione 7).

**Impatto sul KIT FORMASUBITO**: la DGR 1085/2025 vincola i soggetti accreditati, NON il DDL che eroga formazione interna ai propri dipendenti ex art. 37 c.7 D.Lgs. 81/08. KIT standard conforme. La nota informativa nel Progetto Formativo (se scelta dall'utente al passo 0.5.d) richiama il perimetro di non-applicabilità.

**Query web di check**: `delibera Regione Emilia-Romagna formazione sicurezza ASR 17/04/2025 [anno corrente]`.

### 7.6 — Sicilia (atto recente non ancora analizzato in profondità)

- **Decreto G.U.R.S. 27/03/2026 n. 15**: approva linee guida regionali sui corsi di formazione in materia di salute e sicurezza. **Campo di applicazione non ancora analizzato in profondità da Overall**: non è chiaro se vincoli solo enti accreditati regionali o anche i datori di lavoro che fanno formazione interna.

**Impatto sul KIT FORMASUBITO**: prudenza. Al passo 0.5.d le skill consumer presentano l'utente con il Caso 4 dedicato alla Sicilia: prima di emettere il KIT, l'utente è invitato ad aprire il decreto e verificare il campo di applicazione, oppure procedere con il KIT standard assumendosi la responsabilità.

**Query web di check**: `Linee guida Sicilia formazione sicurezza ASR 59/2025 datore lavoro [anno corrente]`.

### 7.7 — P.A. Bolzano

- L'ASR 17/04/2025 contiene una clausola di salvaguardia che ammette per la P.A. Bolzano **progetti pilota sperimentali** (anche da remoto). **Gli attestati rilasciati in deroga in Bolzano NON sono validi nelle altre Regioni/PA**.

**Impatto sul KIT FORMASUBITO**: dipende dal singolo cliente. Al passo 0.5.d le skill consumer chiedono se il cliente ha aderito a uno specifico progetto pilota (in tal caso il KIT standard non è la scelta giusta) oppure segue il percorso standard ASR (KIT standard conforme).

**Query web di check**: `progetti pilota Bolzano formazione sicurezza ASR 59/2025 deroghe`.

### 7.8 — Regioni "tranquille" (nessun atto regionale specifico)

Per le seguenti 16 Regioni/PA non risultano disposizioni regionali attuative specifiche dell'ASR 17/04/2025 alla data di rev. sezione 7: Abruzzo, Basilicata, Calabria, Campania, Friuli-Venezia Giulia, Lazio, Liguria, Marche, Molise, P.A. Trento, Puglia, Sardegna, Toscana, Umbria, Valle d'Aosta, Veneto.

**Impatto sul KIT FORMASUBITO**: si applica direttamente l'ASR. KIT standard conforme senza necessità di nota informativa.

**Query web di check al passo 0.5.c**: `delibera Regione [NomeRegione] formazione sicurezza ASR 17/04/2025 [anno corrente]`. Se la query restituisce un atto nuovo non riflesso in §7.8, il passo 0.5.c delle skill consumer impone di segnalarlo all'utente e di non procedere finché l'utente non conferma come gestirlo.

