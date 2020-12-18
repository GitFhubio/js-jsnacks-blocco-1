// 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 

var nomiLista = ['Fabio', 'Ottavio', 'Alessia', 'Michele', 'Peppe', 'Antonio', 'Simone'];

var Guest = prompt('Dì il tuo nome');

  if(nomiLista.indexOf(Guest) !== -1)
  {console.log('Puoi partecipare');
}
else{console.log('Non puoi partecipare');}


// oppure

// var nomiLista = ['Fabio', 'Ottavio', 'Alessia', 'Michele', 'Peppe', 'Antonio', 'Simone'];
//
// var Guest = prompt('Dì il tuo nome');
//
// var presente = false;
//
// for (var i = 0; i < nomiLista.length; i++) {
//   if(Guest == nomiLista[i]) {
//     presente = true;
//     }
// }
//
// if(presente){console.log('Puoi partecipare');
// }
// else{console.log('Non puoi partecipare');}
