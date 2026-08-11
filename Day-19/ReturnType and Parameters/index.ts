// # TypeScript `ReturnType` & `Parameters` Practice Questions

// ## Question 1: User Information

// নিচের Function ব্যবহার করে `ReturnType` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function getUser(id: number) {
//   return {
//     id,
//     name: "Munna",
//     email: "munna@example.com",
//   };
// }
// ```

// ---

// ## Question 2: Login Function

// নিচের Function ব্যবহার করে `Parameters` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function login(email: string, password: string) {
//   return true;
// }
// ```

// ---

// ## Question 3: Product Details

// নিচের Function ব্যবহার করে `ReturnType` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function getProduct() {
//   return {
//     id: 1,
//     name: "Laptop",
//     price: 70000,
//     stock: 15,
//   };
// }
// ```

// ---

// ## Question 4: Student Registration

// নিচের Function ব্যবহার করে `Parameters` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function registerStudent(
//   name: string,
//   email: string,
//   department: string,
//   semester: number
// ) {
//   return "Registration Successful";
// }
// ```

// ---

// ## Question 5: Order Summary

// নিচের Function ব্যবহার করে `ReturnType` এবং `Parameters`—দুটো Utility Type ব্যবহার করে দুটি আলাদা Type তৈরি করো।

// ```ts
// function createOrder(
//   productId: number,
//   quantity: number,
//   discount: number
// ) {
//   return {
//     orderId: 101,
//     total: 2500,
//     success: true,
//   };
// }
// ```

// ---

// # 🎯 Rules

// - `ReturnType` অথবা `Parameters` অবশ্যই ব্যবহার করতে হবে।
// - `typeof` ব্যবহার করতে হবে।
// - `any` ব্যবহার করা যাবে না।
// - সব Type Type-safe হতে হবে।
// - প্রতিটি Question-এর জন্য Type এবং Object/Variable তৈরি করতে হবে।
// ```