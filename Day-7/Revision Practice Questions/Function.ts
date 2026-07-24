
// ## 4. Functions

// - দুটি সংখ্যা যোগ করার Function লিখো।
// Answer----=>
function TwoNumberSum(num1: number, num2: number): number {
    const FirstNumber = num1
    const SecondNumber = num2
    return FirstNumber + SecondNumber
}

console.log(TwoNumberSum(33, 22))
// - দুটি সংখ্যার মধ্যে বড় সংখ্যাটি Return করবে এমন Function লিখো।
// Answer----=>
const BigNumber = (NumberOne: number, NumberTwo: number) => {
    if (NumberOne > NumberTwo) {
        return (`1 st Number is Big:- ${NumberOne}`)
    }
    else {
        return (`2 nd Number is Big:- ${NumberTwo}`)
    }
}

console.log(BigNumber(9, 23))

// - একটি String গ্রহণ করে Greeting Return করবে এমন Function লিখো।
// Answer----=>
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Munna"));
// - একটি সংখ্যার Square Return করবে এমন Function লিখো।
// Answer----=>
const Square = (One: number) => {
    const Squareas = One ** 2
    return (Squareas)
}
console.log(Square(4))

// - একটি Boolean Return করে এমন Function লিখো।
// Answer----=>
const isAdult = (age: number): boolean => {
    return age >= 18;
};

console.log(isAdult(17));
// ---