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
