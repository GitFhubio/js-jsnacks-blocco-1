//
// 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var quanti = parseInt(prompt("Di quanti numeri vuoi ottenere il cubo? "));
if(quanti>10){
  alert('Non puoi proseguire');}
  else{
  for (var i = 0; i < quanti; i++) {
      var numero = parseInt(prompt("Dammi un numero: "));
      console.log(Math.pow(numero, 3));
  }
}
