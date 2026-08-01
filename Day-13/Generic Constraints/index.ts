

// # Question 1 — Length Constraint

// একটি Generic Function `getLength()` তৈরি করো যা শুধুমাত্র এমন value গ্রহণ করবে যার মধ্যে `length` property রয়েছে।

// ## Requirements

// - `extends` ব্যবহার করতে হবে।
// - Function টি `length` return করবে।
// - `string`, `array`, এবং `length` property থাকা object-এর সাথে কাজ করবে।
// - `number` এর মতো invalid type গ্রহণ করবে না।
function GetLength<T extends { length: number }>(params: T) {
    return params.length
}
console.log(GetLength("MUnna"))
console.log(GetLength([2, 2, 3, 4, 4, 5]))
console.log(GetLength({
    Name: "munna",
    length: 89
}))
// ---

// # Question 2 — User Constraint

// একটি `User` Interface তৈরি করো এবং একটি Generic Function `printUser()` তৈরি করো।

// ## Requirements

// - `User` Interface-এ `id` এবং `name` property থাকবে।
// - Function শুধুমাত্র `User` Interface follow করে এমন object গ্রহণ করবে।
// - Console-এ `id` এবং `name` print করবে।
// - Extra Property থাকলেও Function ঠিকভাবে কাজ করবে।
interface User {
    Id: number,
    Name: string
}
function printUser<T extends User>(params: T) {
    console.log(params)
}
printUser({
    Id: 38,
    Name: "munna"
})
// ---

// # Question 3 — Product Constraint

// একটি `Product` Interface তৈরি করো এবং একটি Generic Function `showProduct()` তৈরি করো।

// ## Requirements

// - `Product` Interface-এ `id`, `title`, এবং `price` property থাকবে।
// - Function শুধুমাত্র `Product` type-এর object গ্রহণ করবে।
// - Product-এর `title` এবং `price` Console-এ print করবে।
interface Product {
    Id: number,
    Title: string,
    Price: number
}
function showProduct<T extends Product>(params: T) {
    console.log("Product Title:- " + params.Title + ". Product Price:- " + params.Price)

}
showProduct({
    Id: 893,
    Title: "Gamming Mouse",
    Price: 784
})
// ---

// # Question 4 — keyof Constraint

// একটি Generic Function `getValue()` তৈরি করো যা একটি object এবং তার একটি key parameter হিসেবে গ্রহণ করবে।

// ## Requirements

// - `keyof` ব্যবহার করতে হবে।
// - Function object-এর নির্দিষ্ট property-এর value return করবে।
// - শুধুমাত্র valid key গ্রহণ করবে।
// - Invalid key দিলে TypeScript Error দেখাতে হবে।
const Value = {
    Id: 383,
    Name: "Munna",
    Roll: 38
}
function GetValue<T, U extends keyof T>(obj: T, key: U) {
    console.log(obj[key])
}
GetValue(Value, "Roll")
// ---

// # Question 5 — API Response Constraint

// একটি `ApiResponse` Interface তৈরি করো এবং একটি Generic Function `handleResponse()` তৈরি করো।

// ## Requirements

// - `ApiResponse` Interface-এ `success` property থাকবে।
// - Function শুধুমাত্র `success` property থাকা object গ্রহণ করবে।
// - `success` Console-এ print করবে।
// - Extra Property থাকলেও Function ঠিকভাবে কাজ করবে।
interface ApiResponse {
    success: boolean;
}

function handleResponse<T extends ApiResponse>(params: T): void {
    console.log(params.success);
}

handleResponse({
    success: true,
    message: "Login successful",
    token: "abc123",
});

handleResponse({
    success: false,
    error: "Invalid credentials",
    statusCode: 401,
});
// ---
