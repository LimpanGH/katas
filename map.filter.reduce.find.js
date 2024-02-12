// Resources:
// Reduce: https://www.youtube.com/watch?v=s1XVfm5mIuU

// 1. MAP
// 2. FILTER
// 3. REDUCE
// 4. FIND

// 1. MAP ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// // Map 1.1 print all items names
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
// // const itemNames = items.map((item) => {
// //   return item.name;
// // });

// // console.log(itemNames);
// // Prints: An array with all the items names

// 2. FILTER ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---* ---*

// Filter 2.1 filter out all prices <= to 100. -----------------------------
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

// Reduce 1.2 Group people that has the same age -----------------------------
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

// Reduce 1.2 Index and array, (rarely used) -----------------------------
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
