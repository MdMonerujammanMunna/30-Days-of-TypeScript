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
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};
type UserValue = Partial<User>
const UserObject: UserValue = {
    id: 383,
    name: "Munna",
    email: "mdmoneruakd@gmai.com",
    age: 9
}
console.log(UserObject)
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
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};
type ProductValue = Partial<Product>
const ProductObject: Product = {
    id: 83,
    name: "Mouse",
    price: 99.99, //
    stock: 2
}
// ProductObject.name = "KeyBoard"
console.log(ProductObject)
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
type Employee = {
    id?: number;
    name?: string;
    department?: string;
    salary?: number;
};
type EmployeeValue = Required<Employee>
const EmployeeObject: EmployeeValue = {
    id: 83,
    name: "Joy",
    department: "Selles", // if you remove or not given any detais it's gives you an error
    salary: 10000
}
console.log(EmployeeObject)
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
type Course = {
    title: string;
    instructor: string;
    duration: number;
    price: number;
};
type CourseValue = Partial<Course>
const CourseObject: CourseValue = {
    title: "This is good",
    instructor: "Jack",
    duration: 180
}
console.log(CourseObject)
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
type Student = {
    id?: number;
    name?: string;
    email?: string;
    department?: string;
};
type StudentValue = Required<Student>
const StudentObject: StudentValue = {
    id: 8383,
    name: "munna",
    email: "makjd@gmai.com",
    department: "CSE"
}
console.log(StudentObject)
// ---
