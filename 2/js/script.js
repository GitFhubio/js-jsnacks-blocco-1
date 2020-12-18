/* 2) L'utente inserisce due parole in successione con due prompt. Il software stampa prima la parola più corta poi la parola più lunga. */

  var parola1 = prompt("Inserisci una parola");
  var parola2 = prompt("Inserisci un'altra parola");

  if (parola1.length < parola2.length) {
    console.log("La parola più corta è " + parola1);
    console.log("La parola più lunga è " + parola2);
  } else if (parola1.length > parola2.length) {
    console.log("La parola più corta è " + parola2);
    console.log("La parola più lunga è " + parola1);
  } else {
    console.log( "Le parole " + parola1 + " e "+ parola2 + " hanno la stessa lunghezza." );
  }
