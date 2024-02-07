// // Mutating methods: --------------------------------------------------

// // 1. copyWithin() - Copies a sequence of array elements within the array.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// array.copyWithin(0, 3); // Copy the sequence starting from index 3 and paste it from index 0
// console.log(array); // Output: [4, 5, 3, 4, 5]

// // 2. fill() - Fills all the elements of an array with a static value.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// array.fill(0); // Fill the array with value 0
// console.log(array); // Output: [0, 0, 0, 0, 0]

// // 3. pop() - Removes the last element from an array and returns it.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const poppedElement = array.pop(); // Remove and return the last element
// console.log(poppedElement); // Output: 5
// console.log(array); // Output: [1, 2, 3, 4]

// // 4. push(v1, v2) - Adds one or more elements to the end of an array and returns the new length of the array.

// // Solution:
// const array = [1, 2, 3];
// const newLength = array.push(4, 5); // Add elements 4 and 5 to the end of the array
// console.log(newLength); // Output: 5
// console.log(array); // Output: [1, 2, 3, 4, 5]

// // 5. reverse() - Reverses the elements of an array in place.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// array.reverse(); // Reverse the array
// console.log(array); // Output: [5, 4, 3, 2, 1]

// // 6. shift() - Removes the first element from an array and returns it.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const shiftedElement = array.shift(); // Remove and return the first element
// console.log(shiftedElement); // Output: 1
// console.log(array); // Output: [2, 3, 4, 5]

// // 7. sort() - Sorts the elements of an array in place and returns the sorted array.

// // Solution:
// const array = [3, 1, 4, 2, 5];
// array.sort(); // Sort the array
// console.log(array); // Output: [1, 2, 3, 4, 5]

// // 8. splice() - Adds or removes elements from an array.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// array.splice(2, 0, 'a', 'b'); // Add elements 'a' and 'b' starting from index 2
// console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]

// // 9. unshift(v1, v2) - Adds one or more elements to the beginning of an array and returns the new length of the array.

// // Solution:
// const array = [3, 4, 5];
// const newLength = array.unshift(1, 2); // Add elements 1 and 2 to the beginning of the array
// console.log(newLength); // Output: 5
// console.log(array); // Output: [1, 2, 3, 4, 5]

// // Non-mutating alternatives: --------------------------------------------------

// // 10. slice(0, -1) - Returns a shallow copy of a portion of an array.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(0, -1); // Copy all elements except the last one
// console.log(newArray); // Output: [1, 2, 3, 4]

// // 11. concat([v1, v2]) - Returns a new array comprised of this array joined with other arrays and/or values.

// // Solution:
// const array1 = [1, 2];
// const array2 = [3, 4];
// const newArray = array1.concat(array2); // Concatenate two arrays
// console.log(newArray); // Output: [1, 2, 3, 4]

// // 12. reverse() - Returns a new array with the elements reversed.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice().reverse(); // Reverse the elements of a copy of the array
// console.log(newArray); // Output: [5, 4, 3, 2, 1]

// // 13. slice(1) - Returns a shallow copy of a portion of an array selected from start index 1 to the end of the array.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(1); // Copy all elements except the first one
// console.log(newArray); // Output: [2, 3, 4, 5]

// // 14. sort() - Returns a new sorted array.

// // Solution:
// const array = [3, 1, 4, 2, 5];
// const newArray = array.slice().sort(); // Sort a copy of the array
// console.log(newArray); // Output: [1, 2, 3, 4, 5]

// // 15. splice() - Returns a new array with some elements removed.

// // Solution:
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(); // Create a copy of the array
// newArray.splice(2, 1); // Remove one element from index 2
// console.log(newArray); // Output: [1, 2, 4, 5]

// // 16. splice(0, 0, v1, v2) - Returns a new array with elements inserted at the specified index.

// // Solution:
// const array = [1, 2, 5];
// const newArray = array.slice(); // Create a copy of the array
// newArray.splice(2, 0, 3, 4); // Insert elements 3 and 4 at index 2
// console.log(newArray); // Output: [1, 2, 3, 4, 5]