/**
 * Smoke test — verifica che la classificazione restituisca i valori
 * normativi noti per casi citati in interpelli e prassi consolidata.
 *
 * Esecuzione:  node tests/smoke_test.js
 * Exit code:   0 se tutti i test passano, 1 altrimenti
 */

'use strict';

const { classificaRischio, classificaClienteMultiSede } = require('../raccordo_ateco');

const CASI = [
  // [codice ATECO, livello atteso, descrizione/fonte]
  ['85.20',     'MEDIO', 'Istruzione primaria (Interpello MLPS 1/2025)'],
  ['85.42.00',  'MEDIO', 'Istruzione universitaria'],
  ['56.10.20',  'BASSO', 'Sushi/take-away (caso IK POKE)'],
  ['56.11.11',  'BASSO', 'Ristoranti con servizio al tavolo'],
  ['47.11.10',  'BASSO', 'Ipermercati'],
  ['43.21.01',  'ALTO',  'Installazione impianti elettrici (costruzioni)'],
  ['41.20.00',  'ALTO',  'Costruzione edifici'],
  ['10.13.00',  'ALTO',  'Produzione prodotti a base di carne (manifatturiero)'],
  ['62.01.00',  'BASSO', 'Produzione software'],
  ['86.10.10',  'ALTO',  'Ospedali (sanità)'],
  ['88.91.00',  'MEDIO', 'Asili nido (assistenza sociale non residenziale)'],
  ['87.10.00',  'ALTO',  'Strutture residenziali sanitarie (assistenza sociale residenziale)'],
  ['49.41.00',  'MEDIO', 'Trasporto merci su strada'],
  ['64.19.10',  'BASSO', 'Banche'],
  ['96.02.01',  'BASSO', 'Saloni di parrucchiere'],
  ['01.41.00',  'MEDIO', 'Allevamento bovini'],
  ['38.11.00',  'ALTO',  'Raccolta rifiuti non pericolosi'],
];

let pass = 0, fail = 0;
console.log('\n=== SMOKE TEST formazione-81-utils ===\n');
for (const [c, atteso, desc] of CASI) {
  const r = classificaRischio(c);
  const ok = r.livello === atteso;
  if (ok) pass++; else fail++;
  console.log(
    `  ${ok ? '✅' : '❌'}  ${c.padEnd(11)} → ${(r.livello || 'NULL').padEnd(6)} ` +
    `(atteso ${atteso.padEnd(6)}) | ${desc}`
  );
}

// Test multi-sede
console.log('\n--- Test multi-sede ---');
const multi = classificaClienteMultiSede(['56.11.11', '85.20', '47.11.10']);
const okMulti = multi.livelloAggregato === 'MEDIO';
if (okMulti) pass++; else fail++;
console.log(
  `  ${okMulti ? '✅' : '❌'}  [56.11, 85.20, 47.11] → ${multi.livelloAggregato} ` +
  `(atteso MEDIO, perché 85=Istruzione domina su 56 e 47)`
);

// Test codice non esistente (divisione 04 non assegnata in ATECO 2007)
console.log('\n--- Test codice non valido ---');
const bad = classificaRischio('04.99.99');
const okBad = !bad.livello;  // divisione 04 non esiste → deve dare errore
if (okBad) pass++; else fail++;
console.log(`  ${okBad ? '✅' : '❌'}  '04.99.99' → ${bad.errore ? 'errore (corretto)' : 'NON gestito!'}`);

// Test input vuoto
const empty = classificaRischio('');
const okEmpty = !!empty.errore;
if (okEmpty) pass++; else fail++;
console.log(`  ${okEmpty ? '✅' : '❌'}  '' → ${empty.errore ? 'errore (corretto)' : 'NON gestito!'}`);

console.log(`\n${'='.repeat(45)}`);
console.log(`  ${pass} passed | ${fail} failed`);
console.log('='.repeat(45));
process.exit(fail === 0 ? 0 : 1);
