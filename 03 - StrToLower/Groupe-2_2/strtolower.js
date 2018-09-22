/**

 -- StrToLower --

Ecrire une fonction qui reçoit une chaine de caractère.
La fonction devra renvoyer cette même chaine mais en minuscule.

Ex: enMinuscule("HELLO WORLD") ==> "hello world"

Si un caractère est déjà en minuscule ou s'il s'agit d'un caractère spécial, l'ignorer.
Il ne faudra pas utiliser la fonction toLowerCase()

creer un taableau qui prend la variable text et la converti

une bouckle qui parcourt le tableau
a chaque boucle: si le caratere est une Maj, la transformer en minuscule
sinon rien

test si maj:
1: récup code ascci du car
2: test si le code est dans la plage 65-90
Si oui, faire une soustraction du code ascii
'A' = 65
'a' = 97
 >donc ajouter 32 au code ascii pour trasnformer un car maj en min

**/

const assert = require('assert');

function enMinuscule(text) {
	const str = text.split('')
	for (let i = 0; i < str.length; i++) {
		if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
			str[i] = String.fromCharCode(text.charCodeAt(i) + 32);
		}
	}

	return str.join('');
}

console.log('TOTO feijzocej 2094@é=');
console.log(enMinuscule('TOTO feijzocej 2094@é='));

/*let test = 'lol';

console.log(test.charCodeAt(0));
console.log(String.fromCharCode(65));*/



// TESTS HERE
assert.equal(true,true);
assert.equal(typeof enMinuscule,'function');
assert.equal(enMinuscule('A'),'a');
assert.equal(enMinuscule('a'),'a');
assert.equal(enMinuscule('#'),'#');
assert.equal(enMinuscule('aBc'),'abc');

