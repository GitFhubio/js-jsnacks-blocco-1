// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt('Inserisci un numero di 4 cifre');
var messaggio = document.getElementById('messaggio');
var btn = document.getElementById('btn');
var numeroSplit = numero.split('');
console.log(numeroSplit);
btn.addEventListener('click',
function() {
  var somma = 0;

  if (numeroSplit.length !== 4) {
    messaggio.innerHTML = 'Devi inserire un numero di 4 cifre';
  } else {
    for (var i = 0; i < numeroSplit.length; i++) {
      somma += parseInt(numeroSplit[i]);
    }
    messaggio.innerHTML = 'La somma è: '+ somma;
  }

}
)
