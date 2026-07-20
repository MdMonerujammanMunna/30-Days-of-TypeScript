// Question 1: Student Type

// Create a Student type with the following properties:

// id: number
// name: string
// age: number
// email?: string (optional)

// Then create 3 student objects based on this type.
interface Students {
    Name: String,
    Roll: number,
    Age: number,
    Email: string
}

const Student1: Students = {
    Name: "Munna",
    Roll: 62,
    Age: 22,
    Email: "mdmonerujammanmunna@gmail.com"
}
const Student2: Students = {
    Name: "Joy",
    Roll: 2,
    Age: 20,
    Email: "joyroy389@gmail.com"
}
const Student3: Students = {
    Name: "Rwzwan",
    Roll: 89,
    Age: 25,
    Email: "rezwan28@gmail.com"
}

console.log(Student1, Student2, Student3)


// Question 2: Product Type

// Create a Product type with the following properties:

// id: number
// name: string
// price: number
// stock: number
// discount?: number (optional)

// Then create an array of 5 products.

interface Products {
    id: number
    Name: string
    price: number
    stock: number
    discount?: number //optional
}

const ProductsArray: Products[] = [
    {
        id: 1001,
        Name: "HeadPhone",
        price: 3999,
        stock: 30,
        discount: 10,
    },
    {
        id: 1002,
        Name: "Wireless Mouse",
        price: 1499,
        stock: 50,
        discount: 15,
    },
    {
        id: 1003,
        Name: "Mechanical Keyboard",
        price: 4999,
        stock: 20,
        discount: 12,
    },
    {
        id: 1004,
        Name: "Gaming Monitor",
        price: 18999,
        stock: 10,
        discount: 8,
    },
    {
        id: 1005,
        Name: "USB-C Charger",
        price: 1299,
        stock: 75,
        discount: 20,
    },
]
console.log(ProductsArray)

// Question 3: Function

// Write a function that accepts a Student object as a parameter and prints the student's name and age.

function ParameterStudent(students: Students) {
    console.log(students.Name)
}
ParameterStudent(Student1)
// Question 4: Array Practice

// Given an array of Product objects, find all products whose price is greater than 1000.

const ArrayProducts = ProductsArray.filter((Produs) => {
    return Produs.price > 10000
})

console.log(ArrayProducts)
// Question 5: Object Update

// Create a Student object. Then:

// Update the student's age.
// If the email property is missing, add one.
// Print the updated object.