// # Type Narrowing Practice Questions (TypeScript)

// ## Question 1: typeof Narrowing

// Create a function named `checkValue`.

// The function parameter type should be:

// ```ts
// string | number | boolean
// ```

// Use **typeof Type Narrowing**.

// ### Requirements:

// - If the value is a string:
//   - Return the string length.

// - If the value is a number:
//   - Return the number multiplied by 10.

// - If the value is a boolean:
//   - Return `"Boolean Value"`.

function CheckValue(params: string | number | boolean) {
    const Type = typeof params
    if (Type == "string") {
        console.log((params as string).length)
    }
    if (Type == "number") {
        console.log((params as number) * 10)
    }
    if (Type == "boolean") {
        console.log("Boolean Value")
    }
}
CheckValue(false)
// ---

// ## Question 2: typeof Narrowing

// Create a function named `processData`.

// The function parameter type should be:

// ```ts
// string | number
// ```

// Use **typeof narrowing**.

// ### Requirements:

// - If the value is a string:
//   - Convert it to uppercase.

// - If the value is a number:
//   - Convert it to a string and add `" points"`.

const processData = (parameter: string | number) => {
    const Type = typeof parameter
    if (Type == "string") {
        console.log((parameter as string).toUpperCase())
    }
    if (Type == "number") {
        const stri = parameter.toString()
        console.log(stri + " points")
    }
}

processData(55)
// ---

// ## Question 3: in Operator Narrowing

// Create two types:

// ```ts
// Admin
// User
// ```

// ### Admin type should contain:

// ```ts
// name
// permission
// ```

// ### User type should contain:

// ```ts
// name
// email
// ```

// Create a function:

// ```ts
// checkAccess(person)
// ```

// Parameter type:

// ```ts
// Admin | User
// ```

// Use **in operator narrowing**.


// ### Requirements:

// - If the object contains `permission`:
//   - Return `"Admin Access"`.

// - Otherwise:
//   - Return `"User Access"`.

type Admin = {
    Name: string,
    Permission: string
}
type User = {
    Name: string,
    Email: string
}

const checkAccess = (person: Admin | User) => {
    if ("Permission" in person) {
        console.log("admin Access")
    }
    else {
        console.log("User Access")
    }
}
// checkAccess({ Name: "Munna", Permission: "yes" }) // admin access 
checkAccess({ Name: "Munna", Email: "makeit@gmail.com" }) // user access 
// ---

// ## Question 4: in Operator Narrowing

// Create two types:

// ```ts
// CardPayment
// CashPayment
// ```

// ### CardPayment properties:

// ```ts
// amount
// cardNumber
// ```

// ### CashPayment properties:

// ```ts
// amount
// cashReceived
// ```


// Create a function:

// ```ts
// processPayment(payment)
// ```

// Parameter type:

// ```ts
// CardPayment | CashPayment
// ```


// Use **in operator narrowing**.


// ### Requirements:

// - If payment contains `cardNumber`:
//   - Return `"Payment Done By Card"`.

// - Otherwise:
//   - Return `"Payment Done By Cash"`.

type CardPayment = {
    Amount: number,
    CardNumber: number
}
type CashPayment = {
    Amount: number,
    CashReceived: string
}

function processPayment(payment: CardPayment | CashPayment) {
    if ("CardNumber" in payment) {
        console.log("Payment Done By Card")
    }
    else {
        console.log("Payment Done By Cash")
    }
}
processPayment({ Amount: 900, CardNumber: 564456464 }) //Card payment 
processPayment({ Amount: 900, CashReceived: "Munna" }) //Cash payment 

// ---

// ## Question 5: Mixed Type Narrowing

// Create a function:

// ```ts
// handleInput(input)
// ```

// Input type:

// ```ts
// string | number | object
// ```


// Use:

// - typeof narrowing
// - in operator narrowing


// ### Requirements:

// - If input is a string:
//   - Return `"String Data"`.

// - If input is a number:
//   - Return `"Number Data"`.

// - If input is an object:
//   - Check if the object has a `name` property.

// - If `name` exists:
//   - Return `"User Object"`.

// - Otherwise:
//   - Return `"Unknown Object"`.
function handleInput(input: string | number | object) {
    if (typeof input === "string") {
        console.log("String Data");
    }
    if (typeof input === "number") {
        console.log("Number Data")
    }
    if (typeof input === "object") {
        if ((input as { Name?: string }).Name) {
            console.log("User Object")
        }
        else {
            console.log("Unknown Object")
        }
    }

}
handleInput("Munna") //string input 
handleInput(89) //Number input
handleInput({ Name: "TOday" }) //Object input with Name
handleInput({ Role: 520 }) //Object input With out Name
// ---

// ## Question 6: Type Predicate Narrowing

// Create a type:

// ```ts
// Student
// ```


// Properties:

// ```ts
// name
// roll
// ```


// Create a custom type guard function using:

// ```ts
// is
// ```


// Create a function:

// ```ts
// checkStudent(data)
// ```

// ### Requirements:

// - Check whether the given data is a Student type.
// - If it is a Student:
//   - Return student information.
// - Otherwise:
//   - Return `"Invalid Student"`.
type student = {
    Name: string,
    Roll: number
}

function checkStudent(data: object) {

}
// ---

// ## Question 7: Discriminated Union Narrowing

// Create two types:

// ```ts
// SuccessResponse
// ErrorResponse
// ```


// ### SuccessResponse:

// ```ts
// status
// data
// ```


// ### ErrorResponse:

// ```ts
// status
// message
// ```


// Create a function:

// ```ts
// handleResponse(response)
// ```


// Parameter type:

// ```ts
// SuccessResponse | ErrorResponse
// ```


// Use **Discriminated Union Narrowing**.


// ### Requirements:

// - If status is `"success"`:
//   - Return data.

// - If status is `"error"`:
//   - Return error message.


// ---
