/* 1) L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore */

var number1 = parseInt(prompt("Inserisci un numero"));
var number2 = parseInt(prompt("Inserisci un altro numero"));

if (number1 > number2) {
  console.log("Il numero maggiore è: ", number1);
} else if(number1 < number2){
  console.log("Il numero maggiore è: ", number2);
}
else{ console.log('I due numeri sono uguali');}
