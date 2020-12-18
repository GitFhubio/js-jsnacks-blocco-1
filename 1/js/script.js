/* 1) L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore */

var number1 = parseInt(prompt("Insert a number"));
var number2 = parseInt(prompt("Insert another number"));

if (number1 > number2) {
  console.log("The highest number is: ", number1);
} else if(number1 < number2){
  console.log("The highest number is: ", number2);
}
else{ console.log('I due numeri sono uguali');}
