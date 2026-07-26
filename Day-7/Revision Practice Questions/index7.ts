
// ## 7. Mixed Practice

// - ৫ জন Student-এর তথ্য সংরক্ষণ করার জন্য একটি Type Define করো।
// Answer----=>
type Studens = {
    Name: string,
    Roll: number,
    Class: number,
    Age: number,
}

const studentDetails: Studens[] = [
    {
        Name: "Munna",
        Roll: 78,
        Class: 10,
        Age: 16
    },
    {
        Name: "Roy",
        Roll: 8,
        Class: 9,
        Age: 15
    },
    {
        Name: "Joy",
        Roll: 1,
        Class: 2,
        Age: 7
    },
    {
        Name: "Sheen",
        Roll: 85,
        Class: 10,
        Age: 16
    },
    {
        Name: "Rezwan",
        Roll: 20,
        Class: 6,
        Age: 12
    },

]
console.log(studentDetails)
// - একটি Function লিখো যা একজন Student Object গ্রহণ করে তার নাম Return করবে।
// Answer----=>
type StudensFun = {
    Name: string,
    Roll: number,
    Class: number,
    Age: number,
}

const SudentFunction = (studens: StudensFun) => {
    console.log(studens)
}

SudentFunction(
    {
        Name: "Munna",
        Roll: 8,
        Class: 8,
        Age: 12
    })
// - একটি Function লিখো যা একটি Number Array গ্রহণ করে সব সংখ্যার যোগফল Return করবে।
// Answer----=>
const SumArray = (Array: number[]) => {
    let sum = 0
    for (let i = 0; i < Array.length; i++) {
        const element = Array[i];
        sum = sum + element
    }
    return sum

}
console.log(SumArray([1, 2, 3, 4]))
// - একটি Product Type তৈরি করো এবং একটি Product Object বানাও।
// Answer----=>
type Products = {
    id: string | number,
    Name: string,
    Price: number,
    Brand: string
}

const Product: Products = {
    id: 3332,
    Name: "KeyBoard",
    Price: 9393,
    Brand: "hp"
}
console.log(Product)
// - একটি User Interface তৈরি করো এবং তার একটি Object তৈরি করো।
// Answer----=>
interface UserInto {
    Name: string,
    Age: number,
    Gender: string,
}

const User: UserInto = {
    Name: "Munna",
    Age: 21,
    Gender: "Male"
}
console.log(User)
// ---