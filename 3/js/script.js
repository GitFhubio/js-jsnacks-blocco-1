// 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


// Ciclo for

var somma=0;
for (var i = 0; i < 5; i++) {
  somma=somma + parseInt(prompt('Inserisci un numero'));

}

console.log(somma);

// Ciclo while
//
// var somma=0;
// var i=0;
// while ( i < 5) {
//   somma=somma + parseInt(prompt('Inserisci un numero'));
// i++;
// }
//
// console.log(somma);
