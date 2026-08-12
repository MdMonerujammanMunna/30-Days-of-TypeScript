// # TypeScript `ReturnType` & `Parameters` Practice Questions

// ## Question 1: User Information

// নিচের Function ব্যবহার করে `ReturnType` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function getUser(id: number) {
//   return {
//     id,
//     name: "Munna",
//     email: "munna@example.com",
//   };
// }
// ```
function getUser(id: number) {
    return {
        id,
        name: "Munna",
        email: "munna@example.com",
    };
}
type UserGet = ReturnType<typeof getUser>
const GetUserInfo: UserGet = {
    id: 39823,
    name: "Joy",
    email: "joua@ak.com"
}
console.log(GetUserInfo);
// ---

// ## Question 2: Login Function

// নিচের Function ব্যবহার করে `Parameters` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function login(email: string, password: string) {
//   return true;
// }
// ```
function login(email: string, password: string) {
    return true;
}
type LogIN = Parameters<typeof login>
const LOGIN: LogIN = [
    "md@gmail.com",
    "234"
]
// ---

// ## Question 3: Product Details

// নিচের Function ব্যবহার করে `ReturnType` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function getProduct() {
//   return {
//     id: 1,
//     name: "Laptop",
//     price: 70000,
//     stock: 15,
//   };
// }
// ```
function getProduct() {
    return {
        id: 1,
        name: "Laptop",
        price: 70000,
        stock: 15,
    };
}
type GetProduct = ReturnType<typeof getProduct>
const GetProductInfo: GetProduct = {
    id: 393,
    name: "KeyBoard",
    price: 2000,
    stock: 5
}
console.log(GetUserInfo)
// ---

// ## Question 4: Student Registration

// নিচের Function ব্যবহার করে `Parameters` দিয়ে একটি নতুন Type তৈরি করো।

// ```ts
// function registerStudent(
//   name: string,
//   email: string,
//   department: string,
//   semester: number
// ) {
//   return "Registration Successful";
// }
// ```
function registerStudent(
    name: string,
    email: string,
    department: string,
    semester: number
) {
    return "Registration Successful";
}
type RegisterStudent = Parameters<typeof registerStudent>
const StudentRegisterd = [
    "Munna islam",
    "mama@gmail.com",
    "this is a ts 30 day Day-19 ReturnType and Parameters",
    8

]
console.log(StudentRegisterd)
// ---

// ## Question 5: Order Summary

// নিচের Function ব্যবহার করে `ReturnType` এবং `Parameters`—দুটো Utility Type ব্যবহার করে দুটি আলাদা Type তৈরি করো।

// ```ts
// function createOrder(
//   productId: number,
//   quantity: number,
//   discount: number
// ) {
//   return {
//     orderId: 101,
//     total: 2500,
//     success: true,
//   };
// }
// ```

function createOrder(
    productId: number,
    quantity: number,
    discount: number
) {
    return {
        orderId: 101,
        total: 2500,
        success: true,
    };
}
type CreateOrderReturnType = ReturnType<typeof createOrder>
type CreateOrderParameters = Parameters<typeof createOrder>

const ReturnTypeOrder: CreateOrderReturnType = {
    orderId: 105,
    total: 2000,
    success: false
}
const ParametersOrder: CreateOrderParameters = [
    388,
    27,
    10
]
console.log(ReturnTypeOrder);
console.log(ParametersOrder);
// ---