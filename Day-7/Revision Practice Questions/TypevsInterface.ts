// ## 6. Type vs Interface

// - `type` ব্যবহার করে একটি Student তৈরি করো।
// Answer----=>
type Student = {
    Name: string,
    Roll: number,
    Age: number,
    Class: number,
    School: string
}

const SutdentOne: Student = {
    Name: "Munna",
    Roll: 89,
    Age: 9,
    Class: 8,
    School: "x school and collage"
}
console.log(SutdentOne)
// - `interface` ব্যবহার করে একটি Student তৈরি করো।
// Answer----=>
interface StudentInto {
    Name: string,
    Roll: number,
    Age: number,
    Class: number,
    School: string
}

const SutdentTwo: StudentInto = {
    Name: "Roy",
    Roll: 9,
    Age: 21,
    Class: 15,
    School: "y school and collage"
}
console.log(SutdentTwo)
// - `type` ব্যবহার করে একটি Product তৈরি করো।
// Answer----=>
type Products = {
    id: number | string,
    Name: string,
    Brand: string,
    Price: number,
}

const ProductOne: Products = {
    id: 6654,
    Name: "Mobile Phone",
    Brand: "Realme",
    Price: 90000
}
console.log(ProductOne)
// - `interface` ব্যবহার করে একটি Product তৈরি করো।
// Answer----=>
interface ProductsInto {
    id: number | string,
    Name: string,
    Brand: string,
    Price: number,
}

const ProductTwo: ProductsInto = {
    id: 25,
    Name: "Air buts",
    Brand: "Apple",
    Price: 150000
}
console.log(ProductTwo)
// - একটি User Interface তৈরি করো যেখানে একটি Optional Property থাকবে।
// Answer----=>
interface UserValue {
    Name: string,
    Age: number,
    IsStudent: boolean,
    Number?: number,
}

const OneMan: UserValue = {
    Name: "Munna",
    Age: 21,
    IsStudent: true,
    Number: 12532566223  //commit it , it not given error becourse it optional property
}
console.log(OneMan)

// ---