//
// 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var N = parseInt(prompt("Di quanti numeri vuoi ottenere il cubo? "));
if(N>10){
  alert('Non puoi proseguire');}
  else{
  for (var i = 1; i <= N; i++) {
      console.log(Math.pow(i, 3));
  }
}
