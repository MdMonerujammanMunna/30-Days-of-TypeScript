// ---

//  Question 1: Interface দিয়ে Object তৈরি

// `User` নামে একটি **interface** তৈরি করুন যেখানে নিচের Property থাকবে—

// - `name` (string)
// - `email` (string)
// - `age` (number)

// এরপর সেই `interface` ব্যবহার করে একটি `user` object তৈরি করুন এবং প্রয়োজনীয় মান Assign করুন।

interface User {
    Name: string,
    Email: string,
    Age: number
}

const user: User = {
    Name: "Munna",
    Email: "mama@gmail.com",
    Age: 21
}

console.log(user)
// ---

//  Question 2: Type দিয়ে Object তৈরি

// `Product` নামে একটি **type** তৈরি করুন যেখানে নিচের Property থাকবে—

// - `id` (number)
// - `name` (string)
// - `price` (number)

// এরপর `Product` type ব্যবহার করে একটি `product` object তৈরি করুন।

type Products = {
    Id: number,
    Name: string,
    Price: number
}

const Product: Products = {
    Id: 3983,
    Name: "Gamming Mouse",
    Price: 389
}

console.log(Product)
// ---

//  Question 3: Union Type তৈরি

// `Status` নামে একটি **Union Type** তৈরি করুন যার মান শুধুমাত্র নিচের যেকোনো একটি হতে পারবে—

// - `"loading"`
// - `"success"`
// - `"error"`

// এরপর `status` নামে একটি Variable তৈরি করে Valid Value Assign করুন এবং Invalid Value Assign করলে কী Error আসে তা পর্যবেক্ষণ করুন।

type Statues = "loading" | "success" | "error"
let statues: Statues = "loading"

console.log(statues)
// ---

//  Question 4: Intersection Type ব্যবহার

// নিচের দুটি **type** তৈরি করুন—

// **Person**

// - `name` (string)

// **Employee**

// - `salary` (number)

// এরপর Intersection (`&`) ব্যবহার করে `Staff` নামে একটি নতুন Type তৈরি করুন এবং সেই Type-এর একটি Object তৈরি করুন।

type Persons = {
    Name: string,
}
type Employee = {
    salary: number
}

type Staff = Persons & Employee

const NewStaff: Staff = {
    Name: "Munna",
    salary: 32409
}
console.log(NewStaff)
// ---

//  Question 5: Interface ও Class

// `Animal` নামে একটি **interface** তৈরি করুন যেখানে থাকবে—

// - `name` (string)
// - `sound()` Method

// এরপর `Dog` নামে একটি **Class** তৈরি করুন যা `Animal` Interface-টি `implements` করবে এবং `sound()` Method-এর Implementation লিখুন।

// ---

interface Animal {
    Name: string,
    sound(): void
}

class Dog implements Animal {
    Name: string
    constructor(Name: string) {
        this.Name = Name
    }
    sound(): void {
        console.log("woof! woof")
    }
}
const dog = new Dog("Buddy")
console.log(dog.Name)
dog.sound()