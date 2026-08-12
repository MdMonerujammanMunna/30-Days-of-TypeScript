// # TypeScript Custom Type Guards Practice Questions

// ## Question 1: Fish & Bird

// নিচের Type ব্যবহার করে একটি Custom Type Guard Function তৈরি করো যা `Fish` এবং `Bird` আলাদা করতে পারবে।

// ```ts
// type Fish = {
//   swim: () => void;
// };

// type Bird = {
//   fly: () => void;
// };
// ```

// ---

// ## Question 2: Admin & User

// নিচের Type ব্যবহার করে একটি Custom Type Guard Function তৈরি করো যা `Admin` এবং `User` আলাদা করতে পারবে।

// ```ts
// type Admin = {
//   name: string;
//   permissions: string[];
// };

// type User = {
//   name: string;
//   email: string;
// };
// ```

// ---

// ## Question 3: Car & Bike

// নিচের Type ব্যবহার করে একটি Custom Type Guard Function তৈরি করো যা `Car` এবং `Bike` আলাদা করতে পারবে।

// ```ts
// type Car = {
//   brand: string;
//   drive: () => void;
// };

// type Bike = {
//   brand: string;
//   ride: () => void;
// };
// ```

// ---

// ## Question 4: Credit Card & PayPal Payment

// নিচের Type ব্যবহার করে একটি Custom Type Guard Function তৈরি করো যা `CreditCardPayment` এবং `PayPalPayment` আলাদা করতে পারবে।

// ```ts
// type CreditCardPayment = {
//   cardNumber: string;
//   cvv: string;
// };

// type PayPalPayment = {
//   email: string;
// };
// ```

// ---

// ## Question 5: Teacher & Student

// নিচের Type ব্যবহার করে একটি Custom Type Guard Function তৈরি করো যা `Teacher` এবং `Student` আলাদা করতে পারবে।

// ```ts
// type Teacher = {
//   name: string;
//   subject: string;
// };

// type Student = {
//   name: string;
//   roll: number;
// };
// ```

// ---

// # 🎯 Rules

// - Custom Type Guard (`is`) অবশ্যই ব্যবহার করতে হবে।
// - `typeof`, `instanceof` বা `in` সরাসরি `if`-এর ভিতরে ব্যবহার করা যাবে না; শুধুমাত্র Custom Type Guard Function-এর ভিতরে ব্যবহার করা যাবে।
// - `any` ব্যবহার করা যাবে না।
// - সব Code Type-safe হতে হবে।
// - প্রতিটি Question-এর জন্য একটি Custom Type Guard Function এবং একটি ব্যবহারকারী Function (যেখানে Type Narrowing হবে) তৈরি করতে হবে।