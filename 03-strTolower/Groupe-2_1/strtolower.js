/**
 -- StrToLower --

Ecrire une fonction qui reçoit une chaine de caractère.
La fonction devra renvoyer cette même chaine mais en minuscule.

Ex: enMinuscule("HELLO WORLD") ==> "hello world"

Si un caractère est déjà en minuscule ou s'il s'agit d'un caractère spécial, l'ignorer.
Il ne faudra pas utiliser la fonction toLowerCase()

acceder à un caractere string[i] string.length

si le caractère est entre 65 et 90 :
  ajouter 32

**/

const assert = require('assert');

function enMinuscule (text){

	//const table = text.split("");

	let numAscii;
	for ( let i =0; i < text.length; i++){
		numAscii=text.charCodeAt(i)
		if (numAscii <= 90 && numAscii >= 65){ // donc majuscule


			//table[i] = String.fromCharCode(numAscii + 32) // On remplace la lettre dans le tableau en sa minuscule.
			text[i] = String.fromCharCode(numAscii + 32) // On remplace la lettre dans le tableau en sa minuscule.

		}

	}
	//return table.join("")
	return text;


	// CODE HERE


}


console.log(enMinuscule("Coool : BRAVO "))

// TESTS HERE
assert.equal(enMinuscule("HELLO WORLD"),"hello world");
assert.equal(enMinuscule("hello world"),"hello world");
assert.equal(enMinuscule("HELLO &@"),"hello &@");

