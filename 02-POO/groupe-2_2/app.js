class Student {
  whoAmI() {
    console.log("I'm a random student");
  }
}

class Wilder extends Student{
  constructor(prenom, nom) {
    super();
    this.prenom = prenom;
    this.nom = nom;
  }

  static greetings(){
    console.log('hello');
  }

  sayMyName() {
    return this.nom + this.prenom;
  }
}

//Wilder.greetings();

const etudiant = new Wilder("Camille", "Coutens");
console.log(etudiant.sayMyName());
console.log(etudiant.whoAmI())

/*const etudiant2 = new Wilder("Bob", "Toto");
console.log(etudiant2.sayMyName());
etudiant2.fullName = "John Toto";
console.log(etudiant2);*/
//console.log(new Wilder("Bob", "Toto"));

