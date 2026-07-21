// Question 1: Student Information

// Student নামে একটি Interface তৈরি করুন যেখানে থাকবে:

// name
// age
// email

// এরপর getStudent() নামে একটি Function তৈরি করুন যা একটি Student Object Return করবে।

interface StudentName {
    Name: string,
    Age: number,
    Email: string
}

const StudenOne: StudentName = {
    Name: "Munna",
    Age: 39,
    Email: "mdmonerujammanmunna@gmail.com"

}
function getStudent(Object: StudentName) {
    console.log(Object)
}

getStudent(StudenOne) //Uncommit this for Output


// Question 2: Product Discount

// Product নামে একটি Interface তৈরি করুন যেখানে থাকবে:

// id
// name
// price
// discount

// getDiscountPrice() নামে একটি Function তৈরি করুন যা Product-এর price এবং discount নিয়ে Discount Price (number) Return করবে।

interface Products {
    id: number,
    Name: string,
    Price: number,
    Discount: number
}

const Mouse: Products = {
    id: 933329,
    Name: "Normal Mouse",
    Price: 90,
    Discount: 10
}

function gerDiscountPrice(ProductObject: Products) {
    // console.log(ProductObject)
    const ProductPrice = ProductObject.Price
    const DiscountPercentens = ProductObject.Discount
    const DisCountPrice = (ProductPrice * DiscountPercentens) / 100 //this formula use to get How mutch money you get discount
    const UserPay = (ProductPrice - DisCountPrice)
    console.log(UserPay.toFixed(2))
}

gerDiscountPrice(Mouse) //Uncommit it for output



// Question 3: User Authentication

// login() নামে একটি Function তৈরি করুন।

// Requirements:

// দুটি Parameter নেবে: email এবং password
// যদি Email এবং Password সঠিক হয় তাহলে true
// অন্যথায় false
// Function-এর Return Type হবে boolean

interface Authentication {
    Email: string,
    Password: string
}

const User = {
    Email: "Admin123@gmail.com",
    Password: "123Admin"
}
const lOgIN = (Users: Authentication) => {             //Usr arrow Function
    // User Email and Password
    const UserEmail = Users.Email
    const UserPassword = Users.Password
    // Log in User Email and password
    const LoginUserEmail = "Admin123@gmail.com"
    const LoginUserPassword = "123Admin"

    if (LoginUserEmail !== UserEmail) {
        console.log("Your Email is incorrects")
    }
    else if (LoginUserPassword !== UserPassword) {
        console.log("Your password is incorrect")
    }
    else {
        console.log("Your are Log in Successfully")
    }

}

lOgIN(User) //uncommit for output


// Question 4: Employee List

// Employee নামে একটি Interface তৈরি করুন।

// তারপর getEmployees() নামে একটি Function তৈরি করুন যা একাধিক Employee-এর একটি Array Return করবে।

interface Employee {
    Name: string;
    Type: string;
    Salary: number;
    Years: number;
}

const employees: Employee[] = [];

function addEmployee(employee: Employee): void {
    if (!employees.includes(employee)) {
        employees.push(employee);
    }
}

addEmployee({
    Name: "Munna",
    Type: "Developer",
    Salary: 20000,
    Years: 3,
});

addEmployee({
    Name: "Joy",
    Type: "Designer",
    Salary: 18000,
    Years: 2,
});

console.log(employees); //uncommit for output

// Question 5: Calculator

// calculator() নামে একটি Function তৈরি করুন।

// Requirements:

// তিনটি Parameter নেবে:
// num1
// num2
// operation
// operation হতে পারে:
// "add"
// "subtract"
// "multiply"
// "divide"
// Function-এর Return Type হবে number
// switch Statement ব্যবহার করতে হবে।

const Calculator = (num1: number, num2: number, operation?: string) => {
    const Number1 = num1
    const Number2 = num2
    const Operation = operation
    switch (Operation) {
        default:
            console.log(Number1 + Number2)
            break;
        case "subtract":
            console.log(Number1 - Number2)
            break;
        case "multiply":
            console.log(Number1 * Number2)
            break;
        case "divide":
            console.log(Number1 / Number2)
            break;


    }
}

Calculator(5, 5, "multiply") //{"add" "subtract", "multiply", "divide"} 
