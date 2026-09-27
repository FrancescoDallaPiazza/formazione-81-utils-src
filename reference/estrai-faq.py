"""Estrae il testo delle FAQ sull'ASR 2025 dai PDF in fonti/, senza riscriverlo.

Uso (dalla cartella reference/):   python estrai-faq.py
Scrive faq-interregionali-2025-testo.md, faq-interregionali-2026-testo.md e
faq-regione-veneto-testo.md.

Serve alle skill che rispondono in chat, dove un PDF non si legge comodamente.
Il testo e quello di `pdftotext -enc UTF-8` (poppler), riga per riga: niente
riassunti, refusi compresi. Lo script fa solo tre cose, e sono queste:
  1. toglie intestazioni e pie di pagina ripetuti (2025: «Pag. N di 19» e la
     riga «ACSR - Rep. Atti...»; 2026: nessuno);
  2. mette prima di ogni quesito un titolo `#### ...` per ritrovarlo;
  3. nel 2026 marca come `###` i titoli di sezione, che nel PDF sono in maiuscolo.
Nel 2025 i titoli di sezione NON si marcano: non si distinguono in modo sicuro
da una risposta breve (la 40 e «Vedi risposta FAQ 39»), quindi restano righe di
testo dove sono, in coda al quesito precedente.
"""
import re
import subprocess
from pathlib import Path

QUI = Path(__file__).parent
FONTI = QUI / "fonti"


def testo(pdf):
    out = subprocess.run(["pdftotext", "-enc", "UTF-8", str(FONTI / pdf), "-"],
                         check=True, capture_output=True).stdout.decode("utf-8")
    return out.replace("\f", "\n").split("\n")


def scrivi(nome, intestazione, righe):
    corpo = re.sub(r"\n{3,}", "\n\n", "\n".join(righe)).strip() + "\n"
    (QUI / nome).write_text(intestazione + corpo, encoding="utf-8", newline="\n")
    print(nome, corpo.count("\n#### "), "quesiti")


def testa(pdf, data, cita):
    return f"""# FAQ interregionali sull'ASR 2025 del {data} — il testo

Estrazione meccanica di `fonti/{pdf}` con `estrai-faq.py`. **E il testo del
PDF, non una sintesi**: refusi compresi, a capo compresi. Per citare, pero, si
va al PDF: questa copia serve a trovare e leggere. Citazione: «{cita}».

Che cosa dicono e come si pesano sta in [`faq-asr-2025.md`](faq-asr-2025.md);
il rango di queste FAQ nella gerarchia delle fonti e il 4 (decisione 7).

Rigenerata il 27 settembre 2026. Si rimisura rilanciando lo script e
confrontando col file: devono coincidere.

---

"""


# 2026: «Quesito n. N ... Risposta ...», titoli di sezione in maiuscolo
righe = []
for l in testo("FAQ-interregionali-27-03-2026.pdf"):
    s = l.strip()
    if s and not re.search(r"[a-zà-ù]", s) and re.search(r"[A-Z]{4}", s):
        righe += ["", f"### {s}", ""]
        continue
    # un quesito puo cominciare a meta riga (il 33): la riga si spezza li
    pezzi = re.split(r"(?=Quesito n\. ?\d+)", l)
    for p in pezzi:
        m = re.match(r"Quesito n\. ?(\d+)", p)
        if m:
            righe += ["", f"#### Quesito n. {m[1]}", ""]
        if p.strip():
            righe.append(p)
scrivi("faq-interregionali-2026-testo.md",
       testa("FAQ-interregionali-27-03-2026.pdf", "27 marzo 2026", "FAQ interregionali 2026, quesito n. N"), righe)

# 2025: «N) domanda» + risposta, dopo la lettera di trasmissione
tutte = testo("250731_CommissioneSalute_RegioneEmiliaRomagna_FAQ.pdf")
inizio = next(i for i, l in enumerate(tutte) if l.startswith("Allegato: documento"))
righe, atteso = [], 1
for l in tutte[inizio:]:
    if re.match(r"\s*Pag\. \d+ di \d+\s*$", l) or l.startswith("ACSR - Rep. Atti"):
        continue
    m = re.match(r"\s*(\d+)\)\s", l)
    if m and int(m[1]) == atteso:
        righe += ["", f"#### {atteso})", ""]
        atteso += 1
    righe.append(l)
scrivi("faq-interregionali-2025-testo.md",
       testa("250731_CommissioneSalute_RegioneEmiliaRomagna_FAQ.pdf", "31 luglio 2025", "FAQ interregionali 2025, n. N")
       .replace("Estrazione meccanica", "La lettera di trasmissione (prima pagina) e omessa. Estrazione meccanica"), righe)

# Veneto: domande non numerate. Indice in testa (voce + pagina), poi il corpo, dove
# domanda e risposta stanno sulla stessa riga. Le voci dell'indice dicono quali righe
# del corpo sono titoli e dove comincia ogni domanda: il testo non si riscrive, si
# cerca solo DOVE mettere il segnaposto.
import difflib

ZW = "​"  # spazio a larghezza zero che il PDF mette dopo ogni voce dell'indice
grezze = testo("FAQ-Regione-Veneto.pdf")
tutte = [l.replace(ZW, "") for l in grezze]
corpo = [i for i, l in enumerate(tutte) if l.strip() == "ORGANIZZAZIONE GENERALE"][1]
# nell'indice ogni voce finisce col carattere invisibile ZW, seguito dal numero di pagina:
# e quello a chiudere la voce, non una cifra (una domanda contiene «4 ottobre 2017»)
voci, buf = [], []
for l in grezze[2:corpo]:
    s = l.strip()
    if not s.replace(ZW, "").strip() or s == "Indice" or re.fullmatch(r"\d+", s):
        continue
    if not buf and ZW not in s and s.isupper():  # titolo di sezione senza pagina
        voci.append(s)
        continue
    buf.append(re.sub(r"\s*\d+$", "", s.split(ZW)[0]).strip() if ZW in s else s)
    if ZW in s:
        voci.append(" ".join(x for x in buf if x))
        buf = []
chiave = lambda t: re.sub(r"\W+", "", t).lower()[:60]
simile = lambda a, b: difflib.SequenceMatcher(None, a, b).ratio() >= 0.85
domande = [chiave(v) for v in voci if "?" in v]
titoli = {chiave(v) for v in voci if "?" not in v}
trovate = set()
righe = list(tutte[:2]) + [""]  # titolo e premessa del documento
for l in tutte[corpo:]:
    s = l.strip()
    if re.fullmatch(r"\d+", s):  # numero di pagina
        continue
    if s and chiave(s) in titoli and len(s) < 120:
        righe += ["", ("### " if s.isupper() else "##### ") + s, ""]
        continue
    # una domanda puo cominciare a inizio riga o dopo la fine della risposta precedente
    tagli = [0] + [m.end() for m in re.finditer(r"[.)”»] (?=[A-ZÈ])", l)]
    pezzi, ultimo = [], 0
    for c in tagli:
        k = chiave(l[c:])
        d = next((d for d in domande if d not in trovate and simile(k[:len(d)], d)), None)
        if d:
            trovate.add(d)
            pezzi.append((c, len(trovate)))
    inizio = 0
    for c, n in pezzi:
        if l[inizio:c].strip():
            righe.append(l[inizio:c].rstrip())
        righe += ["", f"#### Domanda {n}", ""]
        inizio = c
    righe.append(l[inizio:])
scrivi("faq-regione-veneto-testo.md",
       testa("FAQ-Regione-Veneto.pdf", "Regione del Veneto (2026)", "FAQ Regione del Veneto, «prime parole della domanda»")
       .replace("# FAQ interregionali sull'ASR 2025 del Regione del Veneto (2026)", "# FAQ della Regione del Veneto sull'ASR 2025")
       .replace("il rango di queste FAQ nella gerarchia delle fonti e il 4", "il rango di queste FAQ nella gerarchia delle fonti e il 5")
       .replace("Estrazione meccanica", "L'indice del PDF e omesso; le domande non sono numerate, e «Domanda N» e un segnaposto nostro. Estrazione meccanica"),
       righe)
mancano = [v[:80] for v in voci if "?" in v and chiave(v) not in trovate]
print("domande nell'indice:", len(domande), "trovate nel corpo:", len(trovate), "mancano:", mancano)
