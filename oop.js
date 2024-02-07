// Med ES6 kom ny syntax som gör att vi kan skapa mer klassiska class filer med JavaScript
// Detta liknar sättet manga 00P programmringsspräk som t.ex. Java, C+ och C# fungerar.
// Detta är dock syntaktiskt socker 1 bakgrunden är fortfarande JavaScript ett prototypbaserat språk

// Konstruktorfunktion - en funktion som man kan skapa nya instanser/objekt med. (Arrow function is not suitable for constructor functions because it binds .this differently)

// Övning 1 ------------------------------------------------------------
// function Car(name, color) {
//   this.name = name;
//   this, (color = color);
// }

// Car.prototype.start = function () {
//   return `engine of ${this.name} has started`;
// };

// Car.prototype.speak = function () {
//   return `Honk Honk!`;
// };

// const car1 = new Car('Wolkswagen', 'red');
// const car2 = new Car('Wolkswagen', 'black');

// console.log(car1.start());
// console.log(car1.speak());

// console.log(car1);
// console.log(car2);

// Övning 2 --------------------------------------------------

// Konstruktorfunktion
// function SocialMediaProfile(username) {
//     this.username = username;
//     this.friends = [];
//     this.posts = [];
// }

// // Methods (man lägger till sina metoder på prototypen)
// SocialMediaProfile.prototype.addFriend = function (friend) {
//     this.friends.push(friend);
// };

// SocialMediaProfile.prototype.postMessage = function (message) {
//     this.posts.push(message);
// };

// SocialMediaProfile.prototype.displayProfile = function () {
//     return `Username: ${this.username}
// Friends: ${this.friends.join(', ')}
// Posts: ${this.posts.join(', ')}`;
// };

// const myProfile = new SocialMediaProfile('coolUser123');
// myProfile.addFriend('Torsten');
// myProfile.addFriend('Stina');
// myProfile.postMessage('Hej min första post');
// myProfile.postMessage('Jag såg en grym rulle igår');

// console.log(SocialMediaProfile.prototype); // Logs the prototype object associated with the SocialMediaProfile constructor function.

// console.log(myProfile.displayProfile()); // Logs the profile information for myProfile.

// Prints: Username: coolUser123
//         Friends: Torsten, Stina
//         Posts: Hej min första post, Jag såg en grym rulle igår

//  JS-OOP the old way  ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// 1. Konstruktorfunktion Song:  Skapa en konstruktorfunktion Song som initieras med egenskaper som title, artist, och duration.
// 2. Metod playSong: Lägg till en metod playSong som skriver ut "Playing [title] by [artist]".
// 3. Skapa Instanser: Skapa två instanser av Song, till exempel en låt med titeln "Happy" av "Pharrell" och en annan med titeln "Imagine" av "John Lennon".
// 4. Anropa playSong: Anropa playSong på båda instanserna och verifiera att utskriften är korrekt.

// 1. Konstruktorfunktion, defines a constructor function "Song" that will be used to create instances of songs.
// function Song(title, artist, duration) { // This constructor function takes three parameters.
//   this.title = title; // Assigns parameters to properties of the newly created object (this refers to the current object being created).
//   this.artist = artist;
//   this.duration = duration;
// }

// // 2. Adding our method "playSong" to the Song.prototype
// Song.prototype.playSong = function () {
// //   console.log(`Playing ${this.title} by ${this.artist}`);
//   return(`Playing ${this.title} by ${this.artist}`);
// };

// // 3. Creating two instances of "Song"
// const mySong = new Song('Bohemian Rhapsody', 'Queen', '5:55');
// const yourSong = new Song('Happy', 'Pharrell', '4:55');

// // 4. Calling playSong method on each instance
// console.log(mySong.playSong()) // Output: Playing Bohemian Rhapsody by Queen
// console.log(yourSong.playSong()) // Output: Playing Happy by Pharrell

//  JS-OOP the new ES6 way ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Exempel 1. --------------------------------------
// Konstruktorfunktion
// class SocialMediaProfile {
//   constructor(username) {
//     this.username = username;
//     this.friends = [];
//     this.posts = [];
//   }

//   addFriend(friend) {
//     this.friends.push(friend);
//   }

//   postMessage(message) {
//     this.posts.push(message);
//   }

//   displayProfile() {
//     return `Username: ${this.username}
//       Friends: ${this.friends.join(', ')}
//       Posts: ${this.posts.join(', ')}`;
//   }
// }

// const myProfile = new SocialMediaProfile('coolUser123');
// myProfile.addFriend('Torsten');
// myProfile.addFriend('Stina');
// myProfile.postMessage('Hej min första post');
// myProfile.postMessage('Jag såg en grym rulle igår');

// console.log(myProfile.displayProfile());

// Exempel 2. Gör om "Song" med ES6-sättet ---------------------------------------------

// class Song {
//   constructor(title, artist, duration) {
//     this.title = title;
//     this.artist = artist;
//     this.duration = duration;
//   }

//   playSong(title) {
//     return `Playing ${this.title} by ${this.artist}`;
//   }
// }

// const mySong = new Song('Bohemian Rhapsody', 'Queen', '5:55');
// const yourSong = new Song('Happy', 'Pharrell', '4:55');

// console.log(mySong.playSong());
// console.log(yourSongplaySong());

//Övning Geometriska figurer med Prototype inheritance --------------------------------------------------------------
// 1. Skapa en konstruktorfunktion Shape som initialiseras med tre egenskaper - name, sides och sideLength
// 2. Lägg till en ny metod som delas med alla Shape-instanser. Metoden heter calcPerimeter och beräknar omkretsen av den geomteriska figuren.
// 3. Skapa en ny instans av Shape och kalla den square med sidesär 4 och sideLength är 5.
// 4. Anropa calcPerimeterpå den skapade instansen square och se att beräkningen stämmer i utskriften.
// 5. Testa att skapa en annan instans av Shape som kallas triangle med sides 3 och sideLength 3. Anropa calcPerimeter på den instansen och se att beräkningen stämmer i utskriften.

// Solution:
// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
// }

// Shape.prototype.calcPerimeter = function() {
//     return this.sides * this.sideLength;
// }

// const square = new Shape('square', 4, 5);
// const triangle = new Shape('triangle', 3, 3);

// console.log(square.calcPerimeter()); // Prints 20
// console.log(triangle.calcPerimeter()); // Prints 9

// Övning Geometriska figurer med ES6 Classes --------------------------------------------------------------
// Skriv om övningen så att du istället för Prototype inheritance använder syntaxen för ES6 classes

// Solution:
// class Shape {
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength;
//     }

//     calcPerimeter() {
//         return this.sides * this.sideLength;
//     }
// }

// const square = new Shape('square', 4, 5);
// const triangle = new Shape('triangle', 3, 3);

// console.log(square.calcPerimeter()); // Prints 20
// console.log(triangle.calcPerimeter()); // Prints 9

// Klassen Bankkonto --------------------------------------------------------------
// 1. Definiera en klass med namnet “BankAccount”. Bankkontot ska ha egenskaperna “owner” och “balance” 0.0 när instansen skapas.
// 2. Varje bankkonto ska även ha metoderna:
// - deposit som sätter in en viss summa från bankkontot
// - withdraw som tar ut en viss summa från bankkontot
// - getBalance som skriver ut nuvarande saldo för bankkontot
// 4. Gör även en kontroll så att man inte kan gå minus på kontot!
// 5. Testa din klass genom att skapa en instans av klassen, d.v.s ett konto för en viss “owner”.
// 6. Testa även att göra några insättningar och uttag, samt checka saldot.

// class BankAccount {
//     constructor(owner) {
//       this.owner = owner;
//       this.balance = 0.0;
//     }

//     deposit(amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(`${amount} SEK deposited. New balance: ${this.balance} SEK`);
//       } else {
//         console.log('Invalid deposit amount. Please deposit a positive amount.');
//       }
//     }

//     withdraw(amount) {
//       if (amount > 0) {
//         if (amount <= this.balance) {
//           this.balance -= amount;
//           console.log(`${amount} SEK withdrawn. New balance: ${this.balance} SEK`);
//         } else {
//           console.log('Insufficient funds. Withdrawal amount exceeds current balance.');
//         }
//       } else {
//         console.log('Invalid withdrawal amount. Please withdraw a positive amount.');
//       }
//     }

//     getBalance() {
//       console.log(`Current balance for ${this.owner}: ${this.balance} SEK`);
//     }
//   }

//   // Testa BankAccount-klassen
//   const myAccount = new BankAccount('Alice');
//   myAccount.deposit(100);
//   myAccount.withdraw(50);
//   myAccount.getBalance();

//   // Testa negativt saldo
//   myAccount.withdraw(200);

//   // Testa negativ insättning
//   myAccount.deposit(-50);


// Statisk metod ---------------------------------------------------------------------------
// class User {
//     constructor(username) {
//       this.username = username;
//     }
    
//     // Vanlig metod som anropas genom instansobjektet
//     displayUsername() {
//       return `Username: ${this.username}`;
//     }
    
//     // En metod som anropas enbart på klassnamnet ('hoppar' över konstruktorn)
//     static checkValidEmail(email) {
//       if (email.includes('@')) {
//         return 'Hmm the email looks good!';
//       } else {
//         return 'Invalid email format';
//       }
//     }
    
//     static loginHelloEmail(email) {
//       console.log(this.checkValidEmail(email));
//       console.log('Logged in with helloEmail');
//     }
//   }
  
//   // Vanligt utan static
//   const user1 = new User('JohnDoe');
//   console.log(user1.displayUsername());
  
//   // Anropa en statisk metod
//   console.log(User.checkValidEmail('john.doe@example.com'));
  
//   // Anropa en annan statisk metod
//   User.loginHelloEmail('john.doe@example.com');
  
  // -------------------------------------------------------------------------------------------------------------
