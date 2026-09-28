# Cosa e stato assorbito dalle skill di claude.ai

Il 27 settembre 2026 Francesco ha deciso che le copie normative sparse nelle skill
Overall di claude.ai confluiscono qui, sotto la decisione 7 di `AppOverall` — come
era gia successo il 10 settembre con `Organigramma-sicurezza`
([`../assorbite-organigramma/`](../assorbite-organigramma/README.md)). La decisione e
scritta in `overall-database-normativo-sicurezza/DECISIONI.md`.

Il confronto e stato fatto il **27 settembre 2026** sulle skill come caricate quel
giorno (copie locali in `~/.claude/skills/synced/`), affermazione per affermazione
contro le trascrizioni di questa cartella. Si rimisura rifacendo lo stesso confronto.

**Il risultato in una riga: quasi niente meritava di entrare.** Le skill non avevano
fonti che qui mancano — avevano **sintesi** delle stesse fonti, e le sintesi erano
invecchiate o sbagliate in una ventina di punti. L'assorbimento vero e l'altra meta:
**le skill smettono di tenersi le copie e leggono qui.**

## Cosa e entrato

| file | da dove | citabile |
| --- | --- | --- |
| [`disposizioni-regionali-asr-2025.md`](disposizioni-regionali-asr-2025.md) | `analisi-dvr-81`, sezione 7 | **no**: nessun atto regionale sta in `fonti/`. E l'unica materia che qui non c'era affatto, e quattro cose vanno sapute prima di usarla: stanno in testa al file |

E tre trascrizioni nuove, che non vengono dalle skill ma **le sostituiscono**, in
`reference/` perche sono testo delle fonti e non assorbimenti:

| file | fonte | perche |
| --- | --- | --- |
| [`../faq-interregionali-2026-testo.md`](../faq-interregionali-2026-testo.md) | `fonti/FAQ-interregionali-27-03-2026.pdf`, 44 quesiti | vedi sotto, conflitto 1 |
| [`../faq-interregionali-2025-testo.md`](../faq-interregionali-2025-testo.md) | `fonti/250731_..._FAQ.pdf`, 63 quesiti | idem |
| [`../faq-regione-veneto-testo.md`](../faq-regione-veneto-testo.md) | `fonti/FAQ-Regione-Veneto.pdf`, 30 domande | nessuna skill le aveva; per un'azienda veronese sono la fonte regionale che conta |

Tutte e tre escono da [`../estrai-faq.py`](../estrai-faq.py), che toglie solo
intestazioni e numeri di pagina e aggiunge i segnaposto per ritrovare i quesiti.
Verificato parola per parola contro `pdftotext` il 27/09/2026: **zero parole
aggiunte o cambiate**; le sole tolte sono intestazioni, numeri di pagina, la lettera
di trasmissione del 2025 e l'indice del Veneto.

## Cosa e rimasto fuori, e perche

| skill, file | cos'e | esito |
| --- | --- | --- |
| `checkupformazione81`, tutto `references/` | le stesse schede di Organigramma | **gia valutato il 10/09/2026**: vedi `../assorbite-organigramma/` |
| `consulente-formazione-81`, `faq_integrali_2026.md` e `faq_integrali_regioni_2025.md` | dichiarate «riproduzione integrale» | **non lo sono**: conflitto 1 |
| `consulente-formazione-81`, `quadro_obblighi_formativi.md`, `fonti_normative.md`, `faq_ufficiali_asr2025.md` | sintesi per rispondere in chat | circa 35 affermazioni confermate qui, 15 divergenti: conflitti 2-3 |
| `analisi-dvr-81`, `base_normativa_tecnica.md` sezioni 1-6 | quadro generale per l'analisi dei DVR | 12 confermate, 5 divergenti, 11 assenti qui: conflitto 4 e «Buchi» |
| `dvr-modulare`, `libreria/attrezzature.md` | durate delle abilitazioni per il DVR | poggia sull'accordo del 2012, abrogato: conflitto 5 |
| `checkupformazione81`, `percorsi-formativi.md` | tabelle per il checkup | circa 76 confermate, 10 divergenti: conflitto 5 |

## I conflitti dichiarati

Sotto G3 della decisione 7. In tutti **vince questa cartella**; le skill si correggono
al loro prossimo aggiornamento, che le fa leggere qui.

**1. Le «FAQ integrali» di `consulente-formazione-81` sono sintesi.** Confronto
parola per parola col PDF: nel 2026 solo 14 quesiti su 44 sono testo letterale, e con
refusi corretti in silenzio (il 35 e sostituito da «Risposta come quesito n. 34»);
nel 2025 nessuno dei 63 combacia per intero. Tutte e due si presentano come
«riproduzione integrale». Chi citava da li citava frasi che le FAQ non contengono.

**2. `consulente-formazione-81`, le modalita di erogazione.**
- e-learning per la formazione specifica dei lavoratori: la skill lo ammette anche a
  rischio medio e alto «con requisiti tecnici»; qui e **solo rischio basso**, e non per
  chi ha una mansione a rischio piu alto (Parte IV tab. 3.5; FAQ 2025 n. 57);
- attrezzature dell'art. 73: la skill ammette la teoria a distanza; qui **solo
  presenza**, iniziale e aggiornamento (FAQ 2026 n. 19; FAQ 2025 n. 31).

**3. `consulente-formazione-81`, ore e regole.**
- aggiornamento DL-RSPP: la skill scrive «6h (alcune fonti 8h)» e lo tiene fra le aree
  grigie; qui **8 ore quinquennali** dalla fine del modulo comune (`asr-2025-aggiornamenti.md`,
  Parte III p. 2);
- aggiornamento del primo soccorso 6/4 ore: la skill lo da come obbligo del DM 388; qui
  **prassi aziendale**, decisa il 6/9/2026, perche il decreto fissa la cadenza e non le
  ore (`ore-fuori-dall-asr.md`);
- accordo 2012: «confluito ai punti 8.3.9-8.3.11» — quei punti sono le tre attrezzature
  **nuove**; e gli attestati del 2012 sono **fatti salvi** (Parte VII), non «validi solo
  se integralmente conformi»;
- RLS sotto i 15 lavoratori: le ore dell'aggiornamento le fissa il contratto collettivo
  dal 31/12/2025 (D.L. 159/2025; `dlgs-81-2008-articoli-citati.md`, art. 37 c. 11);
- minori: allegato 3 del DM 388 e solo il gruppo A; l'Allegato II dell'ASR sono le
  definizioni delle attrezzature, non i casi DL-RSPP; le FAQ sono interregionali, non
  «Ministero + INAIL + INL»; manca l'abrogazione dell'accordo 223/CSR del 2011.

**4. `analisi-dvr-81`, il quadro normativo.** L'accordo 22/02/2012 e dato «vigente»
(e abrogato, Parte VII p. 3); il D.L. 159/2025 «dal 30/12/2025» (qui 31/12/2025); il DM
10/03/1998 «superato dal DM 03/09/2021» (e sostituito dal **DM 02/09/2021**); l'e-learning
«solo per aziende a rischio basso» (la limitazione riguarda la sola formazione specifica
dei lavoratori); manca l'eccezione dei 30 giorni del D.L. 159/2025 art. 1-bis.

**5. Le durate delle attrezzature** (`dvr-modulare`, `checkupformazione81`). PLE
«8/10/12» (qui 8 per una tipologia, 10 per entrambe: 8.3.1); gru a torre «12/14/16» (12
o 14: 8.3.3); carrelli «12/16/20» (12 per tipologia, 16 per tutte, 14 per il modulo 6:
8.3.4); telescopico 16 e terna 16 (12 e 10: sono 16 solo i percorsi combinati); rullo
compattatore «10h» (non e fra le attrezzature dell'8.3.7); aggiornamento «4h di cui 3
pratiche» (e la regola del 2012: oggi 4 ore di pratica, Parte III p. 6); modulo cantieri
«se ATECO edile» (e per l'**impresa affidataria**, art. 97 c. 3-ter); decadenza a 10
anni come regola generale (qui vale per RSPP/ASPP, coordinatori e attrezzature). Mancano
in tutte e due le tre abilitazioni nuove.

## Buchi di questa cartella, trovati nel confronto

Non sono conflitti: sono cose che le skill dicevano e che qui **non si possono ancora
verificare**. Restano aperte finche qualcuno non trascrive la fonte.

- **Parte IV, tabella 3.5** (modalita di erogazione per ogni corso): non trascritta. E
  la fonte di ogni domanda «si puo fare in e-learning?», e oggi si risponde da FAQ.
- **D.Lgs. 213/2025**: nessuna occorrenza. **L. 34/2026**: citata solo per l'art. 37 c. 5;
  gli altri contenuti che le skill le attribuiscono non sono stati letti.
- **Allegato II del D.Lgs. 81/08** (casi in cui il datore di lavoro puo svolgere
  direttamente i compiti del servizio di prevenzione e protezione: limiti per settore e
  numero di lavoratori, art. 34 c. 1): non trascritto. `dlgs-81-2008-articoli-citati.md`
  riporta l'art. 34 c. 1 ma non i limiti dell'allegato, che quindi non si possono dare
  da qui.
- **Punti 8.3.2, 8.3.5, 8.3.6, 8.3.8** dell'ASR 2025 (gru per autocarro, gru mobili,
  trattori, pompe): non trascritti; le ore si confermano solo sull'accordo del 2012.
- **Un'incoerenza interna**: `quadro-storico-ore-pregresse.md` dice, sulle attrezzature,
  che «le durate non sono cambiate»; `asr-2025-attrezzature-durate-varianti.md` mostra
  che per PLE, gru a torre e carrelli sono cambiate. Da sciogliere da chi tiene quei file.
