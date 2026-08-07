// # TypeScript Record Practice Questions

// ## Question 1: Student Marks

// `Record` ব্যবহার করে এমন একটি Object Type তৈরি করো যেখানে Key হবে `string` এবং Value হবে `number`।
type StudentsMarks = Record<string, number>

const StudentsMarksObject: StudentsMarks = {
    Bangla: 90,
    English: 99,
    Math: 89,
    Science: 80
}
console.log(StudentsMarksObject)
// ---

// ## Question 2: User Roles

// নিচের Role গুলোর জন্য `Record` ব্যবহার করে একটি Type তৈরি করো।

// ```ts
// type Role = "admin" | "user" | "guest";
// ```

// প্রতিটি Role-এর Value হবে `boolean`।

type Role = "admin" | "user" | "guest";
type Permission = Record<Role, boolean>
const RoleValue: Permission = {
    admin: true,
    user: false,
    guest: true
}
console.log(RoleValue)
// ---

// ## Question 3: Product Dictionary

// নিচের `Product` Type ব্যবহার করে `Record` তৈরি করো।

// ```ts
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// ```

// Key হবে `number` এবং Value হবে `Product`।
type Product = {
    id: number;
    name: string;
    price: number;
};
type ProductValue = Record<number, Product>
const ProductObject: ProductValue = {
    1: {
        id: 89,
        name: "Mouse",
        price: 90
    },
    2: {
        id: 90,
        name: "KeyBoard",
        price: 100
    }
}
console.log(ProductObject)
// ---

// ## Question 4: Language Translation

// `Record` ব্যবহার করে নিচের Language Code অনুযায়ী একটি Translation Object তৈরি করো।

// ```ts
// type Language = "en" | "bn" | "jp";
// ```

// Value হবে `string`।
type Language = "en" | "bn" | "es";
type LanguageValue = Record<Language, string>
const LanguageObject = {
    en: "bro",
    bn: "vai",
    es: "Hermano"
}
// ---

// ## Question 5: Employee Database

// নিচের `Employee` Type ব্যবহার করে একটি Employee Dictionary তৈরি করো।

// ```ts
// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };
// ```

// Key হবে `string` (Employee ID) এবং Value হবে `Employee`।

type Employee = {
    id: number;
    name: string;
    department: string;
};
type EmployeeValue = Record<string, Employee>
const EmployeeObject: EmployeeValue = {
    "em0001": {
        id: 398,
        name: "Man",
        department: "Softwer"
    },
    "em0002": {
        id: 399,
        name: "ManOne",
        department: "Sell"
    }
}
console.log(EmployeeObject)
// ---

// # Bonus Challenge ⭐

// ## Question 6: Status Configuration

// নিচের `Status` Type ব্যবহার করে `Record` তৈরি করো।

// ```ts
// type Status = "pending" | "approved" | "rejected";
// ```

// Value Type হবে এমন একটি Object যাতে `color` এবং `icon` নামে দুটি Property থাকবে।

// ---

// ## 🎯 Rules

// - `Record` অবশ্যই ব্যবহার করতে হবে।
// - `any` ব্যবহার করা যাবে না।
// - সব Object Type-safe হতে হবে।
// - প্রতিটি Question-এর জন্য Type এবং Object দুটোই তৈরি করতে হবে।

type Status = "pending" | "approved" | "rejected";
type StatusValue = Record<Status, { color: string, icon: string }>
const StatusObject: StatusValue = {
    pending: {
        color: "Red",
        icon: "X"
    },
    approved: {
        color: "Green",
        icon: "~"
    },
    rejected: {
        color: "Orange",
        icon: "!"
    }
}
console.log(StatusObject)