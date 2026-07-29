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
const product = {
    id: 383,
    Name: "Pen",
    Price: 99
}
type ProductKeys = keyof typeof product;
let key: ProductKeys
key = "Name"
key = "id"
key = "Price"
// ---

// ## Question 3

// একটি `User` interface তৈরি করো যেখানে থাকবে—

// - id
// - name
// - email
// - role

// `keyof` ব্যবহার করে সকল key-এর type তৈরি করো।

interface User {
    id: number,
    Name: string,
    Email: string,
    Role: string
}
let keys: keyof User
keys = "Email"
keys = "Name"
keys = "id"
keys = "Role"
// ---

// ## Question 4

// একটি variable তৈরি করো এবং `typeof` ব্যবহার করে তার type অন্য একটি variable-এ ব্যবহার করো।

let Today = "Munna";

type TodayType = typeof Today;

const TodayTow: TodayType = "Joy";
console.log(TodayTow)
// ---

// ## Question 5

// একটি `settings` object তৈরি করো এবং `typeof` ব্যবহার করে তার সম্পূর্ণ type reuse করো।
let settings = {
    id: 839,
    Name: "Time",
    sl: 2,
    devloper: "Munna"
}
type ReuseSettings = typeof settings
const ReuseSettinges: ReuseSettings = {
    id: 22,
    Name: "Date",
    sl: 3,
    devloper: "Joy"
}
console.log(ReuseSettinges)
// ---

// # 🟡 Question 6 — Student Management System

// একটি `studentValue` object তৈরি করো যেখানে থাকবে—

// - id
// - name
// - department
// - cgpa

// এখন নিচের কাজগুলো করো—

// - `typeof` ব্যবহার করে `Student` type তৈরি করো।
// - `keyof typeof` ব্যবহার করে `StudentKeys` type তৈরি করো।
// - `Student` type ব্যবহার করে নতুন একটি `student2` object তৈরি করো।
// - `StudentKeys` type দিয়ে একটি variable declare করো যেখানে শুধুমাত্র valid property name assign করা যাবে।
// - একটি function লেখো যেটি `student` object এবং একটি valid key receive করবে এবং সেই property's value return করবে।

const studentValue = {
    id: 893,
    Name: "Munna",
    Department: "CST",
    CGPA: 4.89
}

type StudentValue = typeof studentValue
type StudentKeys = keyof typeof studentValue

const StudentValue2: StudentValue = {
    id: 90,
    Name: "Joy",
    Department: "CT",
    CGPA: 5.00
}
const DeclaerVariable: StudentKeys = "Name"

function StudentFun<T, K extends keyof T>(obj: T, key: K): T[K] {
    return (obj[key])
}
console.log(StudentFun(studentValue, "Name"))
// ---

// # 🔴 Question 2 — Generic Property Getter

// একটি **Generic Function** লেখো যেটি যেকোনো object এবং তার একটি valid key receive করবে।

// Function এমনভাবে লিখতে হবে যেন—

// - শুধুমাত্র valid key accept করে।
// - Invalid key দিলে TypeScript Error দেখায়।
// - Return type automatically সেই property's type হয়ে যায়।

// এরপর Function-টি নিচের object দিয়ে test করো—

// - User
// - Product
// - Employee

// Generic Function
function Generic<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// User Object
const user = {
    id: 1,
    name: "Munna",
    email: "munna@gmail.com"
};

// Product Object
const producto = {
    id: 101,
    title: "Laptop",
    price: 65000
};

const employee = {
    id: 5001,
    name: "Rahim",
    salary: 40000,
    isActive: true
};
const Produsto = Generic(producto, "price")
console.log(Produsto)
const userName = Generic(user, "name");
console.log(userName);
const employeeSalary = Generic(employee, "salary");
console.log(employeeSalary);
// ---

// # 🟢 Question 3 — E-Commerce Product Management

// একটি `product` object তৈরি করো যেখানে থাকবে—

// - id
// - title
// - price
// - category
// - stock
// - rating

// এখন নিচের কাজগুলো করো—

// - `typeof` ব্যবহার করে `Product` type তৈরি করো।
// - `keyof typeof` ব্যবহার করে `ProductKeys` type তৈরি করো।
// - `Product` type ব্যবহার করে অন্তত **৫টি product** এর array তৈরি করো।
// - `ProductKeys` type দিয়ে একটি variable declare করো।
// - একটি function লেখো যেটি শুধুমাত্র Product-এর valid key accept করবে।
// - একটি Generic Function লেখো যেটি Product-এর যেকোনো property's value return করবে।

const productsEcom = {
    id: 899,
    title: "A Gaming Mouse",
    price: 3830,
    category: "Mouse",
    stock: 12,
    rating: 4.8,
};

// typeof
type Product = typeof productsEcom;

// keyof typeof
type ProductEKeys = keyof typeof productsEcom;

// Product type ব্যবহার করে ৫টি product এর array
const products: Product[] = [
    {
        id: 1,
        title: "Gaming Mouse",
        price: 3830,
        category: "Mouse",
        stock: 12,
        rating: 4.8,
    },
    {
        id: 2,
        title: "Mechanical Keyboard",
        price: 5500,
        category: "Keyboard",
        stock: 8,
        rating: 4.7,
    },
    {
        id: 3,
        title: "27 Inch Monitor",
        price: 22000,
        category: "Monitor",
        stock: 5,
        rating: 4.9,
    },
    {
        id: 4,
        title: "USB Headset",
        price: 2800,
        category: "Headphone",
        stock: 15,
        rating: 4.5,
    },
    {
        id: 5,
        title: "Laptop Stand",
        price: 1200,
        category: "Accessories",
        stock: 20,
        rating: 4.4,
    },
];

let productKey: ProductKeys;

function getProductKey(key: ProductKeys): void {
    console.log(key);
}

function getProductValue<K extends keyof Product>(
    product: Product,
    key: K
): Product[K] {
    return product[key];
}

// Test
const title = getProductValue(productsEcom, "title"); // string
const price = getProductValue(productsEcom, "price"); // number
const stock = getProductValue(productsEcom, "stock"); // number
const rating = getProductValue(productsEcom, "rating"); // number

console.log(title);
console.log(price);
console.log(stock);
console.log(rating);
