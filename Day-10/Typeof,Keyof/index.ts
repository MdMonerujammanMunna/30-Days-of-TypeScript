// # 🚀 Day 10 Practice – `typeof` & `keyof`

// আজকের লক্ষ্য হলো `typeof` এবং `keyof` ব্যবহার করে TypeScript-এ Type-Safe কোড লেখা। নিচের প্রশ্নগুলো সমাধান করার চেষ্টা করো। কোনো Hint বা Solution দেওয়া হয়নি, যেন নিজে চিন্তা করে করতে পারো।

// ---

// # 🟢 Basic Level

// ## Question 1

// একটি `student` object তৈরি করো যেখানে `name`, `age`, `email`, `isActive` থাকবে।

// `typeof` ব্যবহার করে সেই object-এর type তৈরি করো এবং সেই type দিয়ে আরেকটি student object declare করো।

const student = {
    Name: "Munna",
    Age: 12,
    Email: "mdmone124@gmail.com",
    isActive: true
}
const Students = typeof student
const student2 = {
    Name: "Joy",
    Age: 89,
    Email: "hijoy@gmail.com",
    isActive: false
}
console.log(student, student2)
// ---

// ## Question 2

// একটি `product` object তৈরি করো।

// `keyof typeof` ব্যবহার করে object-এর সকল key-এর union type তৈরি করো।

// ---

// ## Question 3

// একটি `User` interface তৈরি করো যেখানে থাকবে—

// - id
// - name
// - email
// - role

// `keyof` ব্যবহার করে সকল key-এর type তৈরি করো।

// ---

// ## Question 4

// একটি variable তৈরি করো এবং `typeof` ব্যবহার করে তার type অন্য একটি variable-এ ব্যবহার করো।

// ---

// ## Question 5

// একটি `settings` object তৈরি করো এবং `typeof` ব্যবহার করে তার সম্পূর্ণ type reuse করো।

// ---

// # 🟡 Intermediate Level

// ## Question 6

// একটি function লেখো যেটি দুইটি parameter নিবে—

// - object
// - key

// Function শুধুমাত্র object-এর valid key accept করবে এবং সেই key-এর value return করবে।

// ---

// ## Question 7

// একটি `car` object তৈরি করো।

// `keyof typeof` ব্যবহার করে এমন একটি variable declare করো যেখানে শুধুমাত্র valid property name assign করা যাবে।

// ---

// ## Question 8

// একটি `employee` object তৈরি করো।

// `typeof` ব্যবহার করে Employee type তৈরি করো এবং সেই type দিয়ে নতুন employee object বানাও।

// ---

// ## Question 9

// একটি `theme` object তৈরি করো।

// একটি function লেখো যেটি শুধুমাত্র theme-এর valid key accept করবে এবং সেই color return করবে।

// ---

// ## Question 10

// একটি `course` object তৈরি করো।

// `keyof typeof` ব্যবহার করে course-এর সকল key-এর type তৈরি করো এবং সেই type দিয়ে একটি variable declare করো।

// ---

// # 🔴 Advanced Level

// ## Question 11

// একটি Generic Function লেখো যেটি যেকোনো object থেকে নির্দিষ্ট property return করবে।

// Function এমনভাবে লিখতে হবে যাতে invalid key দিলে TypeScript Error দেখায়।

// ---

// ## Question 12

// একটি `company` object তৈরি করো।

// `typeof` ব্যবহার করে type তৈরি করো এবং সেই type দিয়ে একটি array তৈরি করো যেখানে একাধিক company store করা যাবে।

// ---

// ## Question 13

// একটি `profile` object তৈরি করো।

// একটি function লেখো যেটি profile-এর key receive করবে এবং সেই property-এর value return করবে।

// ---

// ## Question 14

// একটি `config` object তৈরি করো যেখানে বিভিন্ন application settings থাকবে।

// `keyof typeof` ব্যবহার করে ConfigKeys type তৈরি করো এবং সেই type ব্যবহার করে একটি function লিখো।

// ---

// ## Question 15

// একটি `languages` object তৈরি করো।

// `typeof` ব্যবহার করে type তৈরি করো এবং সেই type reuse করে নতুন language object তৈরি করো।

// ---

// # 🏆 Real Project Challenge

// ধরো তুমি একটি E-commerce Project বানাচ্ছ।

// একটি `product` object তৈরি করো যেখানে থাকবে—

// - id
// - title
// - price
// - category
// - stock
// - rating

// এখন নিচের কাজগুলো করো—

// - `typeof` ব্যবহার করে Product type তৈরি করো।
// - `keyof typeof` ব্যবহার করে ProductKeys type তৈরি করো।
// - একটি function লেখো যেটি শুধুমাত্র Product-এর valid key accept করবে।
// - আরেকটি function লেখো যেটি Product-এর যেকোনো property-এর value return করবে।
// - একই Product type ব্যবহার করে অন্তত ৫টি product-এর array তৈরি করো।

// ---

// # 🎯 Bonus Challenge

// নিচের Object-এর জন্য নিজে নিজে `typeof` এবং `keyof` ব্যবহার করে Practice করো।

// - User
// - Student
// - Product
// - Book
// - Course
// - Employee
// - Company
// - Theme
// - Settings
// - Configuration

// ---