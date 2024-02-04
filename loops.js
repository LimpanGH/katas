/* Contents:

1. For Loop
2. While Loop
3. Do While
4. for in (objects)
5. for of (arrays)

forEach
map
filter
reduce

*/

// 1 For Loop (run a specific number of times) ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- *
// 1.1 For loop  5 to 10.

// Solution:
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
//   Prints: 5 6 7 8 9 10

// 1.2 For Loop ----------------------------------------------------------------
// for loop 3-0

// Solution:
// for (let counter = 3; counter >= 0; counter--){
//     console.log(counter);
//   }
//   Prints: 3 2 1 0

// 1.2 For Loop ----------------------------------------------------------------
// for loop an array, print each index and each item
//let vacationSpots = ['Bali', 'Paris', 'Tulum']

// Solution:
// for (let i = 0; i < vacationSpots.length; i++) {
//     console.log(i, vacationSpots[i]));
//   }
//   Prints: 0 'Bali'
//           1 'Paris'
//           2 'Tulum'

// 1.3 For Loop Nested ----------------------------------------------------------------
// Nested Loops, find the names that exists in both arrays and push them to an array called mutualFollowers, print that array.
// let bobsFollowers = ['john', 'jane', 'jill', 'juno'];
// let tinasFollowers = ['john', 'bob', 'jane'];

// Solution:
// let mutualFollowers = []

// for (let bf = 0; bf < bobsFollowers.length; bf++) {
//   for (let tf = 0; tf < tinasFollowers.length; tf++) {
//     if (bobsFollowers[bf] === tinasFollowers[tf]) {
//       mutualFollowers.push(bobsFollowers[bf])
//     }
//   }
// }

// console.log(mutualFollowers)
//   Prints: [ 'john', 'jane' ]

// 2. While Loop (when you dont know how many times to run the loop) ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- *

// 2. 1 While Loop, randomly loop through the array until 'spade', first declare a variable called currentCard. Also keep track of iterations.
// (comment out the line with the condition till the end or i'll get an infinite)
// const cards = ['diamond', 'spade', 'heart', 'club'];

// Solution:
// let currentCard;
// let iteration = 0;

// while (currentCard != 'spade') {
//     currentCard = cards[Math.floor(Math.random() * cards.length)]
//     console.log(`Iteration ${iteration +1}: ${currentCard}`);
//     iteration++
// }
//   Prints: ... Iteration x: spade

// 3. Do While (runs at least once)----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- *
// 3.1 Do While until correct number of cups needed. (comment out last line untill finished writing it)

// Solution:
// let cupsOfSugarNeeded = 5;
// let cupsAdded = 0;

// do {
//   cupsAdded++;
//   console.log(cupsAdded);
// } while (cupsAdded < cupsOfSugarNeeded);
//   Prints: 1 2 3 4 5

// 3.2 Do While dice ----------------------------------------------------------------
// Do While untill dice target-number produced

// Solution:
// const targetNumber = 6
// let rolls = 0
// let rolledNumber

// do {
//   rolledNumber = Math.floor(Math.random() * targetNumber) +1
//   rolls++
//   console.log(`Roll # ${rolls} : Rolled ${rolledNumber}`)
// } while (rolledNumber != targetNumber)

// console.log(`TargetNumber ${targetNumber} was rolled after ${rolls}`)
//   Print-example: Roll # 1 : Rolled 1
//                  Roll # 2 : Rolled 1
//                  Roll # 3 : Rolled 6
//                  TargetNumber 6 was rolled after 3

// 4. for in ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- *

// 4.1 for in (object) ----------------------------------------------------------------
// Iterate through the object and print each key and its value.

// Solution:
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };

//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
// Prints: name: John
//          age: 30
//         city: New York

// 5. for of (array) ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- *

// 5.1 for of  ----------------------------------------------------------------
// Loop through the array [1, 2, 3, 4, 5]

// Solution:
// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }
//   Prints: 1 2 3 4 5

// Continue @ https://www.codecademy.com/courses/introduction-to-javascript/lessons/loops/exercises/break-keyword

// . ----------------------------------------------------------------

// Solution:

//   Prints:
