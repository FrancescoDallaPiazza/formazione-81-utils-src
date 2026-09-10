# Crediti ed esoneri — Allegato III dell'ASR 2025

Fonte: `fonti/ASR-170425-Esoneri_crediti.pdf`, Allegato III dell'Accordo
Stato-Regioni 17 aprile 2025 (Rep. Atti n. 59/CSR), pagine 127-131 di 136.

## Legenda

L'allegato usa tre valori:

| valore | significato |
| --- | --- |
| **TOTALE** | credito pieno: chi possiede la formazione in riga non deve frequentare il corso in colonna |
| **PARZIALE** | credito su una parte del monte ore; l'allegato elenca le ore riconosciute e quelle da frequentare |
| **FREQUENZA** | nessun credito: il corso va frequentato |
| `/` | la casella non ha senso (stessa formazione in riga e in colonna) |

E un asterisco, che vale solo nella matrice di pagina 130:

> \* il credito viene riconosciuto totale per coloro che svolgono il ruolo
> indicato nella prima colonna della tabella nella medesima azienda, negli altri
> casi la formazione deve essere svolta.

## Matrice principale — pagina 130

Righe: la formazione gia posseduta. Colonne: il corso per cui vale il credito.

| formazione posseduta | RLS | DL | LAVORATORE generale | LAVORATORE specifica | DIRIGENTE | PREPOSTO |
| --- | --- | --- | --- | --- | --- | --- |
| RSPP (Modulo A + B + C) | TOTALE | TOTALE | TOTALE | TOTALE\* | TOTALE | TOTALE\* |
| ASPP (Modulo A + B) | TOTALE | TOTALE | TOTALE | TOTALE\* | TOTALE | TOTALE\* |
| Coordinatore sicurezza (CSP/CSE) | TOTALE | TOTALE | TOTALE | TOTALE\* | TOTALE | TOTALE\* |
| DL-RSPP (art. 34) | FREQUENZA | TOTALE | TOTALE | TOTALE\* | TOTALE | TOTALE\* |
| DL (art. 37) | FREQUENZA | / | TOTALE | TOTALE\* | TOTALE | TOTALE\* |
| RLS | / | FREQUENZA | TOTALE | FREQUENZA | TOTALE | TOTALE |
| LAVORATORE formazione generale | FREQUENZA | FREQUENZA | / | FREQUENZA | FREQUENZA | FREQUENZA |
| LAVORATORE formazione specifica | FREQUENZA | FREQUENZA | / | / | FREQUENZA | FREQUENZA |
| DIRIGENTE | FREQUENZA | TOTALE | TOTALE | TOTALE\* | / | TOTALE\* |
| PREPOSTO | FREQUENZA | FREQUENZA | FREQUENZA | FREQUENZA | FREQUENZA | / |

Norme di riferimento indicate a fianco di ogni riga: art. 32 d.lgs. 81/2008 e
accordi 26 gennaio 2006 e 7 luglio 2016 per RSPP e ASPP; art. 98 e allegato XIV
per il coordinatore; art. 34 e accordo 21-12-2011 per il DL-RSPP; art. 37 e
accordo 21-12-2011 per DL, RLS, lavoratore, dirigente e preposto; in tutte le
righe anche il «presente accordo».

### Le tre cose che questa matrice dice e che non erano ovvie

**Il preposto non da credito per niente.** Tutta la riga PREPOSTO e FREQUENZA. Il
corso da preposto non esonera dalla formazione lavoratori, ne generale ne
specifica. La FAQ della Regione del Veneto dice anzi il contrario del contrario:
«per accedere alla formazione particolare aggiuntiva di preposto (durata minima
di 12 ore) e propedeutico aver frequentato il corso di formazione (generale e
specifica) per lavoratori». Chi ha il corso preposti e non ha la formazione
lavoratori non e un caso di credito: e un'anomalia.

**Il datore di lavoro si porta dietro la formazione lavoratori.** DL, DL-RSPP,
RSPP, ASPP, CSP/CSE e dirigente hanno credito TOTALE sulla formazione generale e
TOTALE\* sulla specifica. E la casistica piu frequente nell'archivio: chi fa il
corso art. 34 di solito non risulta anche come lavoratore formato.

**L'RLS ha credito totale su generale, dirigente e preposto, ma non sulla
specifica.** La riga RLS e l'unica in cui i due lavoratori si separano: TOTALE
sulla generale, FREQUENZA sulla specifica. Ha senso — la parte specifica dipende
dai rischi della mansione, e il corso RLS non li copre.

## Le altre matrici

**Pagine 127-129: crediti verso i percorsi lunghi** (CSP/CSE, DL-RSPP modulo
comune e moduli integrativi 1-4, RSPP moduli A+B+C). Qui i crediti sono in gran
parte PARZIALI e l'allegato li quantifica in ore, per esempio:

> RSPP con Modulo A — PARZIALE. Credito: Modulo giuridico 28 ore. Necessaria
> frequenza: Modulo tecnico 52 ore, Modulo metodologico / organizzativo 16 ore,
> Parte pratica 24 ore.

Non sono ancora codificati: riguardano percorsi che nell'archivio hanno 25 eventi
in tutto, e il credito parziale ha bisogno di un modello a ore che oggi il motore
non ha.

**Pagina 131: modulo aggiuntivo cantieri, ambienti confinati, attrezzature.**
Le colonne sono «DL modulo aggiuntivo cantieri», «Dirigente modulo aggiuntivo
cantieri», «LAVORATORE sospetto di inquinamento» e «Operatore attrezzature di
lavoro». La colonna attrezzature e FREQUENZA su ogni riga: **nessuna formazione
da credito per le abilitazioni dell'art. 73.** Il coordinatore, il DL-RSPP con
modulo integrativo 3 e il dirigente cantiere hanno invece credito TOTALE sui
moduli cantieri.

## Cosa e stato codificato

La matrice di pagina 130, nella migrazione 0027, come tabella `crediti_formativi`
con la citazione su ogni riga. Le matrici di pagina 127-129 e 131 no, per i
motivi scritti sopra.
