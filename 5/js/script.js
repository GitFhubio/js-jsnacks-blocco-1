// 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numbers = [];
var number;
for (var i = 0; i < 6; i++) {
   number= parseInt(prompt("Dammi un numero"));
  if (number % 2 !== 0) {
    numbers.push(number);
  }
}
console.log(numbers);
