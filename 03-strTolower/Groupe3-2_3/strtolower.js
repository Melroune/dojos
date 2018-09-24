/**
 -- StrToLower --

Ecrire une fonction qui reçoit une chaine de caractère.
La fonction devra renvoyer cette même chaine mais en minuscule.

Ex: enMinuscule("HELLO WORLD") ==> "hello world"

Si un caractère est déjà en minuscule ou s'il s'agit d'un caractère spécial, l'ignorer.
Il ne faudra pas utiliser la fonction toLowerCase()

Créer variable qui contient  notre string en majuscules à convertir en minuscule
Créer arrayMAJ contenant les caracteres ASCII de 65 à 90
Créer arrayMin contenant les caracteres ASCII de 97 à 122

transformer le string en array
dans une boucle, transformer chaque contenu (indice) en caractère ASCII
ajouter +32
ré transformer contenu ASCII en lettre
ré tranformer le array en string
l'afficher

exemple retourner caractère "ABC".charCodeAt(0) // returns 65
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits);
transformer ASCII en  lettres String.fromCharCode(65,66,67); // ABC

**/

const assert = require('assert');

function enMinuscule(text) {
	let valMin;
	const splits = text.split("");
	for (let i = 0; i < splits.length; i++) {
		if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
			valMin = text.charCodeAt(i) + 32;
			splits[i] = String.fromCharCode(valMin);
		}
	}
	return splits.join("");
	// CODE HERE
}
console.log(enMinuscule("Hey c'est COOL on a REUSSI !"));

// TESTS HERE
assert.equal(true, true);
assert.equal(enMinuscule("HELLO WORLD"), "hello world")
assert.equal(enMinuscule("AUJOURD'HUI"), "aujourd'hui")
assert.equal(enMinuscule("aujourd'hui"), "aujourd'hui")
assert.equal(typeof enMinuscule, "function")
