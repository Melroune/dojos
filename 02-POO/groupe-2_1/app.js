/**
 *
 */

 class Console {
   static afficher(text){
     console.log(text);
   }
 }

 Console.afficher('freizjfoiej');

 class Student {
  whoAmI() {
    console.log("I'm a random student");
  }
}

class Wilder extends Component.React {
    constructor(prenom, nom) {
      super()
        this.prenom = prenom;
        this.nom = nom;
    }

    sayMyName() {
        //console.log(`Hello my name is ` + this.prenom + ' ' + this.nom)
        console.log(`Hello my name is ${this.prenom} ${this.nom}`)
    }

    set toto(param){
      this.nom = `* ${param} *`;
    }

    get toto(){
      return `-----  ${this.nom}`;
    }
}

const wilder1 = new Wilder(`Thomas`, `Chaigneau`)

wilder1.sayMyName()
wilder1.toto = `bob`;
wilder1.sayMyName()
console.log(wilder1.toto);
wilder1.whoAmI()




`
-${var}-

-${var}-`

" "+
"-"+var+"-"+
""
