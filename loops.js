
/* Contents:

1. For Loop
2. While Loop

forEach
for in
map
filter
reduce

*/


// 1.1 For Loop ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * 
// For loop  5 to 10.



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



// Solution:
// for (let i = 0; i < vacationSpots.length; i++) {
//     console.log(i, vacationSpots[i]));
//   }
//   Prints: 0 'Bali'
//           1 'Paris'
//           2 'Tulum'

// 1.3 For Loop Nested ----------------------------------------------------------------
// Nested Loops, find the names that exists in both arrays


// Solution:
// let bobsFollowers = ['john', 'jane', 'jill', 'juno'];
// let tinasFollowers = ['john', 'bob', 'jane'];

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


// 2. While Loop ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * ----- * 
// 2. 1 While Loop, randomly loop through the array until 'spade'.


// Solution:
// const cards = ['diamond', 'spade', 'heart', 'club'];

// let currentCard;

// while (currentCard != 'spade') {
//     currentCard = cards[Math.floor(Math.random() *4)]
//     console.log(currentCard);
// }
//   Prints: club spade


// 2. ----------------------------------------------------------------


// Solution:

//   Prints: 

// 2. ----------------------------------------------------------------


// Solution:

//   Prints: 