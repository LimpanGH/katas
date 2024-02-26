// * ES6-klasser och konstruktorfunktioner i JavaScript är två olika sätt att skapa objektbaserad kod, men de har olika syntax och ibland olika beteenden. 
// * Här är några av de viktigaste skillnaderna mellan dem:

// TODO Syntax: ES6-klasser använder den klassbaserade syntaxen med nyckelordet class, medan konstruktorfunktioner är vanliga funktioner där egenskaper och metoder läggs till på this-objektet.

// ! Exempel på ES6-klass: 
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

// ! Exempel på konstruktorfunktion:
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// * Arv: ES6-klasser har inbyggt stöd för arv med extends-nyckelordet och super()-funktionen för att anropa överordnade konstruktormetoder. Konstruktorfunktioner använder prototypkedjan för att åstadkomma arv.
// * Klassmetoder: I ES6-klasser definieras metoder inuti klassen, medan i konstruktorfunktioner läggs metoder till på prototypen.
// * Läsbarhet och tydlighet: ES6-klasser erbjuder en tydligare och mer deklarativ syntax för att definiera och skapa objekt, vilket kan göra koden lättare att förstå för utvecklare som är vana vid klassbaserade språk. 
// * Konstruktorfunktioner kan vara mindre intuitiva för personer som inte är bekanta med prototypbaserad arv.
// * Båda metoderna kan användas för att skapa objekt i JavaScript, men ES6-klasser har blivit allt vanligare på grund av sin lättlästa syntax och inbyggda arvsmöjligheter.



// * ES6-klasser är ett syntaktisk socker för att skapa klassbaserade objekt i JavaScript, introducerade i ECMAScript 2015 (även känd som ES6). 
// * Innan ES6 användes prototypbaserade metoder för att skapa objektorienterad kod i JavaScript. 
// * Med ES6-klasser får utvecklare en mer bekant och tydlig syntax för att definiera klasser och skapa objekt från dem, 
// * vilket liknar klasssystemen som finns i andra objektorienterade programmeringsspråk som Java eller C++.

// * Några viktiga egenskaper hos ES6-klasser inkluderar:
// * Konstruktor: En specialmetod som körs vid skapandet av en ny instans av klassen. Den används för att initialisera egenskaper för objektet.
// * Metoder: Funktioner definierade inuti klassen som är tillgängliga för instanser av klassen.
// * Arv: Möjligheten att skapa subklasser som ärver egenskaper och metoder från en överordnad klass.

// * Nyckelordet class: Används för att definiera en ny klass.



// TODO Exempel 1. 
// * Definiera en klass Car med en konstruktor och en metod. 
// * Konstruktorn används för att skapa nya instanser av Car med specifika egenskaper (tillverkare, modell och år). 
// * Metoden displayInfo() används för att visa information om bilen. 
// * Sedan skapar vi en instans av Car med nyckelordet new och anropar displayInfo()-metoden på den nya instansen för att visa informationen om bilen.

// Solution:
// // Definiera klassen Car
// class Car {
//     // Konstruktor för att skapa en ny instans av Car
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     // Metod för att visa information om bilen
//     displayInfo() {
//       console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
//     }
//   }
  
//   // Skapa en ny instans av Car
//   let myCar = new Car('Toyota', 'Camry', 2020);
  
//   // Anropa displayInfo-metoden för att visa information om bilen
//   myCar.displayInfo();
  