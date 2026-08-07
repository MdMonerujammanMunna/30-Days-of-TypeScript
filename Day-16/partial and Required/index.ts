// # TypeScript `Partial` & `Required` Practice Questions

// ## Question 1: User Profile Update

// নিচের `User` Type ব্যবহার করে এমন একটি Update Type তৈরি করো যেখানে User-এর যেকোনো Property Update করা যাবে।

// ```ts
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };
// ```

// ---

// ## Question 2: Product Update

// নিচের `Product` Type ব্যবহার করে এমন একটি Type তৈরি করো যাতে Product-এর যেকোনো তথ্য Update করা যায়।

// ```ts
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
// };
// ```

// ---

// ## Question 3: Employee Registration

// নিচের `Employee` Type ব্যবহার করে এমন একটি Type তৈরি করো যেখানে সব Property বাধ্যতামূলক হবে।

// ```ts
// type Employee = {
//   id?: number;
//   name?: string;
//   department?: string;
//   salary?: number;
// };
// ```

// ---

// ## Question 4: Course Information

// নিচের `Course` Type ব্যবহার করে এমন একটি Type তৈরি করো যেখানে সব Property Optional হবে।

// ```ts
// type Course = {
//   title: string;
//   instructor: string;
//   duration: number;
//   price: number;
// };
// ```

// ---

// ## Question 5: Student Admission

// নিচের `Student` Type ব্যবহার করে এমন একটি Type তৈরি করো যেখানে সব Property Required হবে।

// ```ts
// type Student = {
//   id?: number;
//   name?: string;
//   email?: string;
//   department?: string;
// };
// ```

// ---

// # 🎯 Rules

// - `Partial` অথবা `Required` অবশ্যই ব্যবহার করতে হবে।
// - `any` ব্যবহার করা যাবে না।
// - সব Object Type-safe হতে হবে।
// - প্রতিটি Question-এর জন্য Type এবং Object দুটোই তৈরি করতে হবে।