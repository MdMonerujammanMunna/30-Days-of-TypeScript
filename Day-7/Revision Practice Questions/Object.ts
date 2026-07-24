
// ## 3. Objects

// - একটি Student Object তৈরি করো।
// Answer----=> 
const Student:
    {
        Name: string,
        Class: number,
        Roll: number
    }
    =
{
    Name: "Munna",
    Class: 8,
    Roll: 19,
}
console.log(Student)
// - একটি Product Object তৈরি করো।
// Answer----=> 
const Products: {
    id: number,
    Name: string,
    Price: number,
    Brand: string
} = {
    id: 89383,
    Name: "ASUS Laptop",
    Price: 3908,
    Brand: "ASUS"
}
console.log(Products)
// - একটি Car Object তৈরি করো।
// Answer----=> 
const Car: {
    CarName: string,
    Price: number,
    Brand: string,
} = {
    CarName: "BMW",
    Price: 11990,
    Brand: "BMW"
}
console.log(Car)
// - একটি User Object তৈরি করো যেখানে Phone Number Optional হবে।
// Answer----=>
const UserDetails: {
    UserName: string,
    UserAge: number,
    UserPassword: string | number,
    PhoneNumber?: number
} = {
    UserName: "Roy Ray",
    UserAge: 89,
    UserPassword: "1234Admin",
    PhoneNumber: 54221542125
}
console.log(UserDetails)
// - একটি Employee Object তৈরি করো।
// Answer----=>
const Employee: {
    EmployeeName: string,
    Sallary: number,
    Position: string
} = {
    EmployeeName: "Have a Name",
    Sallary: 200000,
    Position: "CEO"
}
console.log(Employee)
// ---