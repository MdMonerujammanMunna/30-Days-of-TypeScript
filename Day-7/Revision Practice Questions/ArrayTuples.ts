
// ## 2. Arrays & Tuples

// - ৫টি সংখ্যার একটি Array তৈরি করো।
// Answer----=>
const NumberArray: number[] = [2, 3, 4, 2, 3]
console.log(NumberArray)
// - ৫টি নামের একটি Array তৈরি করো।
// Answer----=> 
const NameArray: string[] = ["Munna", "Joy", "Roy", "Sheen", "Rezwan"]
console.log(NameArray)
// - Number এবং String একসাথে থাকবে এমন একটি Array তৈরি করো।
// Answer----=> 
const NumString: (number | string)[] = ["ON", 3, "OFF", 9]
console.log(NumString)
// - একটি Readonly Array তৈরি করো।
// Answer----=> 
const ReadOnly: readonly number[] = [1, 2, 2, 3, 5, 6]
console.log(ReadOnly)
// - একটি Tuple তৈরি করো যেখানে Name এবং Age থাকবে।
// Answer----=> 
const People: [string, number] = ["Munna", 90]
console.log(People)
// ---