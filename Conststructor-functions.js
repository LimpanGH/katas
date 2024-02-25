 
// * ES6-klasser och konstruktorfunktioner i JavaScript är två olika sätt att skapa objektbaserad kod, men de har olika syntax och ibland olika beteenden. 
// * Här är några av de viktigaste skillnaderna mellan dem:

// TODO Syntax: ES6-klasser använder den klassbaserade syntaxen med nyckelordet class, medan konstruktorfunktioner är vanliga funktioner där egenskaper och metoder läggs till på this-objektet.

// ! Exempel på ES6-klass: 
javascript
Copy code
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

// ! Exempel på konstruktorfunktion:
 javascript
Copy code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// * Arv: ES6-klasser har inbyggt stöd för arv med extends-nyckelordet och super()-funktionen för att anropa överordnade konstruktormetoder. Konstruktorfunktioner använder prototypkedjan för att åstadkomma arv.
// * Klassmetoder: I ES6-klasser definieras metoder inuti klassen, medan i konstruktorfunktioner läggs metoder till på prototypen.
// * Läsbarhet och tydlighet: ES6-klasser erbjuder en tydligare och mer deklarativ syntax för att definiera och skapa objekt, vilket kan göra koden lättare att förstå för utvecklare som är vana vid klassbaserade språk. 
// * Konstruktorfunktioner kan vara mindre intuitiva för personer som inte är bekanta med prototypbaserad arv.
// * Båda metoderna kan användas för att skapa objekt i JavaScript, men ES6-klasser har blivit allt vanligare på grund av sin lättlästa syntax och inbyggda arvsmöjligheter.



// * I JavaScript är en konstruktor en speciell typ av funktion som används för att skapa och initialisera objekt. 
// * Konstruktorn används tillsammans med nyckelordet new för att skapa nya instanser av objekt av en viss typ. 
// * När du använder en konstruktorfunktion med new, skapas ett nytt objekt, och this inom konstruktorn refererar till det nya objektet.
// * En konstruktorfunktion ser ut som en vanlig funktion, men med konventionen att första bokstaven börjar med stor bokstav, 
// * och den används oftast tillsammans med new-nyckelordet för att skapa objekt.

// * I exemplet nedan skapar konstruktorfunktionen Person nya objekt med egenskaperna name och age som tilldelas till parametrarna som passerats in. 
// * När du använder new Person(...) skapas ett nytt objekt med de angivna egenskaperna.


// TODO Exempel 1. ---------------------------

// Solution:
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person('Alice', 30);
// const person2 = new Person('Bob', 25);

// console.log(person1); // Person { name: 'Alice', age: 30 }
// console.log(person2); // Person { name: 'Bob', age: 25 }

// TODO Exempel 2. Skapa en enkel bilmodell ---------------------------

// Solution:
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;

//   this.displayInfo = function () {
//     console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
//   };
// }

// let myCar = new Car('Toyota', 'Camry', 2020);
// myCar.displayInfo();

// TODO Exempel 3. Skapa en enkel bilmodell och använd map() för att skapa flera instanser av Car från en array med objektdata ---------------------------

// Solution:
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;

//   this.displayInfo = function() {
//     console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
//   };
// }

// // Array med objektdata för bilar
// let carsData = [
//   { make: 'Toyota', model: 'Camry', year: 2020 },
//   { make: 'Honda', model: 'Civic', year: 2018 },
//   { make: 'Ford', model: 'Fusion', year: 2019 }
// ];

// // Skapa flera instanser av Car med map()
// let cars = carsData.map(carData => new Car(carData.make, carData.model, carData.year));

// // Anropa displayInfo för varje bil
// cars.forEach(car => car.displayInfo());
