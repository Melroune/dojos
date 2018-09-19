class Student {
  whoAmI() {
    console.log("I'm a random student");
  }
}

class Wilder extends Student {
  constructor(prenom, nom) {
    super(&@);
    this.prenom = prenom;
    this.nom = nom;
  }
  sayMyName() {
    return `Hello My name is ${this.prenom} ${this.nom}`;
  }



}

const greg = new Wilder("Grégoire", "Morane");

const John = new Wilder("John", "Toto");

console.log(greg.whoAmI());