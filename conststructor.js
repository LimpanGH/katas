/* 
* I JavaScript är en konstruktor en speciell typ av funktion som används för att skapa och initialisera objekt. 
* Konstruktorn används tillsammans med nyckelordet new för att skapa nya instanser av objekt av en viss typ. 
* När du använder en konstruktorfunktion med new, skapas ett nytt objekt, och this inom konstruktorn refererar till det nya objektet.
* En konstruktorfunktion ser ut som en vanlig funktion, men med konventionen att första bokstaven börjar med stor bokstav, 
* och den används oftast tillsammans med new-nyckelordet för att skapa objekt.

* I exemplet nedan skapar konstruktorfunktionen Person nya objekt med egenskaperna name och age som tilldelas till parametrarna som passerats in. 
* När du använder new Person(...) skapas ett nytt objekt med de angivna egenskaperna.
*/

// TODO Exempel 1. ---------------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1); // Person { name: 'Alice', age: 30 }
console.log(person2); // Person { name: 'Bob', age: 25 }

// TODO Exempel 2. Skapa en enkel bilmodell ---------------------------  
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.displayInfo = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  };
}

// Skapa en ny instans av Car
let myCar = new Car('Toyota', 'Camry', 2020);

// Anropa displayInfo-metoden för att visa information om bilen
myCar.displayInfo();


// TODO Exempel 3. Skapa en enkel bilmodell och använd map() för att skapa flera instanser av Car från en array med objektdata ---------------------------  
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  
  this.displayInfo = function() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  };
}

// Array med objektdata för bilar
let carsData = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2018 },
  { make: 'Ford', model: 'Fusion', year: 2019 }
];

// Skapa flera instanser av Car med map()
let cars = carsData.map(carData => new Car(carData.make, carData.model, carData.year));

// Anropa displayInfo för varje bil
cars.forEach(car => car.displayInfo());
