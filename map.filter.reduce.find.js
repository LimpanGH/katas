// Resources:
// Reduce: https://www.youtube.com/watch?v=s1XVfm5mIuU

// 1. MAP
// 2. FILTER
// 3. REDUCE
// 4. FIND

// 1. MAP ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Map 1.1 map all elements in the array and doubble them -----------------------------
// let arr = ['a','b','c','d','e','f','g']

// // Solution
// // let allLettersDoubbled = arr.map((parameter) => {
// //   return parameter + parameter
// // })
// // console.log(allLettersDoubbled); // Prints: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg']

// Map 1.2  -----------------------------
// For every element, we create an object containing:
// - The original value (value).
// - The index of the element in the array, incremented by 1 (index).
// - A boolean indicating whether the element is in uppercase (isUpperCase).
// - The original array

// const arr = ['A', 'b', 'C', 'd', 'e', 'f', 'g'];

// Solution:
// const allElems = arr.map((parameter, index, array) => {
//   return {
//     Value: parameter,
//     Index: index +1,
//     IsUpperCase: parameter.toUpperCase() === parameter,
//     Thearray: array
//   }
// })
// console.log(allElems);
// // Prints: an array of objects, each containing information about the corresponding element in the original array. 


// Map 1.3 print all items names and price -----------------------------
// const items = [
//   { name: 'Bike', price: 100 },
//   { name: 'TV', price: 200 },
//   { name: 'Album', price: 10 },
//   { name: 'Book', price: 5 },
//   { name: 'Phone', price: 500 },
//   { name: 'Computer', price: 1000 },
//   { name: 'Keyboard', price: 25 },
// ];

// //  Solution
// // let namesAndPrices = items.map((parameter) => {
// //   return `${parameter.name} ${parameter.price}`
// // })
// // console.log(namesAndPrices);
// // Prints: An array with all the items names and prices

// 2. FILTER ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Filter 2.1 filter out all prices <= to 100. -----------------------------
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const allPricesLessThan100 = items.filter((parameter)=>{
if(parameter.price <= 100) {
  return parameter.price
}
})

console.log(allPricesLessThan100);

// // Solution
// // const filteredItems = items.filter((item) => {
// //     // return item.price <= 100 // This is a shorter way than the if statement.
// //     if (item.price <= 100) {
// //         return item.price
// //     }
// // })

// // console.log(filteredItems);
// // Prints: An array with all items that costs $100 or less

// 3. REDUCE ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Reduce 3.1 Add all prices and print the total -----------------------------
// const items = [
//   { name: 'Rice', price: 5 },
//   { name: 'Book', price: 20 },
//   { name: 'Chicken', price: 10 },
//   { name: 'Monitor', price: 100 },
// ];

// // With forEach ---------
// // let totalPrice = 0
// // items.forEach(item => {
// //     totalPrice += item.price
// // })

// // Solution with reduce --------
// // const totalPrice = items.reduce((total, item) => {
// //   console.log(item.price);
// //   return total + item.price;
// // }, 0);

// // console.log(totalPrice);
// // Prints 135

// Reduce 3.2 Print all names and add all prices and print the total -----------------------------
// const items = [
//     { name: 'Bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },
//   ];

//   // Solution
//   // const { itemNames, totalPrice } = items.reduce((accumulator, currentItem) => {
//   //     accumulator.itemNames.push(currentItem.name);
//   //     accumulator.totalPrice += currentItem.price;
//   //     return accumulator;
//   //   }, { itemNames: [], totalPrice: 0 });

//   //   console.log(itemNames); // Prints: ["Bike","TV","Album","Book","Phone","Computer","Keyboard"]
//   //   console.log(totalPrice); // Prints: 1840

// Reduce 3.3 Group people that has the same age -----------------------------
// const people = [
//   { name: 'Kyle', age: 26 },
//   { name: 'John', age: 31 },
//   { name: 'Sally', age: 42 },
//   { name: 'Jill', age: 42 },
// ];

// // Solution:
// // const result = people.reduce((groupedPeople, person) => {
// //   const age = person.age;
// //   if (groupedPeople[age] == null) {
// //     groupedPeople[age] = [];
// //   }
// //   groupedPeople[age].push(person);
// //   return groupedPeople;
// // }, {});

// // console.log(result);
// // Prints: 26: (1 person)
// //         31: (1 person)
// //         42: (2 people)

// Reduce 3.4 Index and array, (rarely used) -----------------------------
// const numbers = [13, 2, 5]
// const sum = numbers.reduce((total, number, index, array) => {
// console.log(`Current index is: ${index}`); // Displaying the index, (rarely used)
// console.log(array); // Displaying the array, (rarely used)
//     return total + number

// }, 0)

// console.log(sum);

// 4. FIND ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Find 4.1 find an item in the array

// const items = [
//   { name: 'Bike', price: 100 },
//   { name: 'TV', price: 200 },
//   { name: 'Album', price: 10 },
//   { name: 'Book', price: 5 },
//   { name: 'Phone', price: 500 },
//   { name: 'Computer', price: 1000 },
//   { name: 'Keyboard', price: 25 },
// ];

// // Solution
// // const foundItem = items.find((item) => {
// //   return item.name === 'Book';
// // });

// // console.log(foundItem);
// // Prints: {name: 'Book', price: 5}
