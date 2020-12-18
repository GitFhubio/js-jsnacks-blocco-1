var numbers = [];
var number;
for (var i = 0; i < 6; i++) {
   number= parseInt(prompt("Dammi un numero"));
  if (number % 2 !== 0) {
    numbers.push(number);
  }
}
console.log(numbers);
