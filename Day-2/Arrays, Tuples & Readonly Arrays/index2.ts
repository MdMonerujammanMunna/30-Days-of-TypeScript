// 1. Find the Largest Number in an Array

// Given an array of numbers, write a TypeScript program to find the largest number without using Math.max().

// Example:

// Input: [10, 5, 30, 8, 25]

// Output:
// 30

// Answere:-
let largeNubmerArray: number[] = [10, 5, 30, 25]
let largeNumber = largeNubmerArray[0]
for (let i = 0; i < largeNubmerArray.length; i++) {
    const element = largeNubmerArray[i];
    if (largeNumber < element) {
        largeNumber = element
    }

}
console.log("The largest number:- " + largeNumber) //Out put Uncommit it



// 2. Count Even and Odd Numbers

// Given an array of integers, count how many even numbers and how many odd numbers are present.

// Example:

// Input: [1, 2, 3, 4, 5, 6]

// Output:
// Even: 3
// Odd: 3

//Answere
let EvenOddArray: number[] = [1, 2, 3, 4, 5, 6]
let Even: number = 0
let odd: number = 0
for (let i = 0; i < EvenOddArray.length; i++) {
    const element = EvenOddArray[i];
    if (element % 2 === 0) {
        Even++
    }
    else {
        odd++
    }
}
console.log("Even:- " + Even) // OUt put Uncommit it 
console.log("Odd:- " + odd)// out put uncommit it




// 3. Reverse an Array Without Using reverse()

// Write a program to reverse an array manually without using the built-in reverse() method.

// Example:

// Input: [1, 2, 3, 4, 5]

// Output:
// [5, 4, 3, 2, 1]

// Create New Array :-
const ReverseArray: number[] = [1, 2, 3, 4, 5]
const NewArray: number[] = []
for (let i = 0; i < ReverseArray.length; i++) {
    const element = ReverseArray[i];
    NewArray.unshift(element)
}
console.log("Reverse Array:- " + NewArray) //out put Uncommit it



// 4. Remove Duplicate Values

// Given an array of numbers, create a new array that contains only unique values without duplicates.

// Example:

// Input: [1, 2, 2, 3, 4, 4, 5]

// Output:
// [1, 2, 3, 4, 5]

const ValueAll: number[] = [1, 2, 2, 3, 4, 4, 5]
const NewUniqueValur: number[] = []
for (let i = 0; i < ValueAll.length; i++) {
    const element = ValueAll[i];
    if (NewUniqueValur.includes(element)) {
        continue
    }
    NewUniqueValur.push(element)
}
console.log("Unique Numbers Array:- "+NewUniqueValur) //out put uncommit it


// 5. Find the Second Largest Number

// Write a program to find the second largest number in an array without sorting the array.

// Example:

// Input: [12, 35, 1, 10, 34, 1]

// Output:
// 34

const SecondLargeNumber = [12, 35, 1, 10, 34, 1];

let largeNumberio = SecondLargeNumber[0];
let SeclargeNumber = SecondLargeNumber[0];

for (let i = 1; i < SecondLargeNumber.length; i++) {
    const element = SecondLargeNumber[i];

    if (element > largeNumberio) {
        SeclargeNumber = largeNumberio;
        largeNumberio = element;
    } else if (element > SeclargeNumber && element !== largeNumberio) {
        SeclargeNumber = element;
    }
}
console.log("Second Largest Number:", SeclargeNumber);