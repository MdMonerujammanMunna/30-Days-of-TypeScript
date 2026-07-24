// # Practice Questions: Union Types & Literal Types

// ## Question 1: User ID (Union Type)

// একটি `getUserInfo()` Function তৈরি করুন।

// ### Requirements

// - Function-এর Parameter হবে `id`।
// - `id` এর Type হবে `string | number`।
// - Function Console-এ User ID Print করবে।

const GetUserInfo = (id: string | number) => {
    console.log(id)
}

GetUserInfo("38902") //sting type in-put
GetUserInfo(82912) //Number type in-put
// ---

// ## Question 2: Payment Method (Literal Type)

// একটি `PaymentMethod` নামে একটি Type তৈরি করুন।

// ### Allowed Values

// - `"Bkash"`
// - `"Nagad"`
// - `"Rocket"`

// ### Requirements

// - `makePayment()` নামে একটি Function তৈরি করুন।
// - Function শুধুমাত্র `PaymentMethod` Type Accept করবে।
// - Console-এ Payment Method Print করবে।

type PaymentMethod = "Bkash" | "Nagad" | "Rocket"

function makePayment(Payment: PaymentMethod) {
    console.log(Payment)
}

makePayment("Bkash")
// ---

// ## Question 3: Employee Status (Union + Literal Type)

// একটি `EmployeeStatus` নামে একটি Type তৈরি করুন।

// ### Allowed Values

// - `"Active"`
// - `"Inactive"`
// - `"On Leave"`

// ### Requirements

// - `updateStatus()` নামে একটি Function তৈরি করুন।
// - Function-এর Parameter হবে `EmployeeStatus` Type।
// - Console-এ Employee Status Print করবে।

type EmployeeStatus = "Active" | "Inactive" | "On Leave"


function updateStatus(Employe: EmployeeStatus) {
    console.log(Employe)
}

updateStatus("On Leave")
// ---

// ## Question 4: Product Price (Union Type)

// একটি `displayPrice()` Function তৈরি করুন।

// ### Requirements

// - Function-এর Parameter হবে `price`।
// - `price` এর Type হবে `number | string`।
// - `typeof` ব্যবহার করে Type Check করুন।
// - যদি `price` Number হয়, তাহলে Price Print করুন।
// - যদি `price` String হয়, তাহলে Price Print করুন।

type Prices = string | number

function displayPrice(price: Prices) {
    const TypeOf = typeof price;
    if (TypeOf === "string") {
        console.log("this is String Value:- ", price)
    }
    if (TypeOf === "number") {
        console.log("this is Number Value:- ", price)
    }
}
displayPrice(45)
displayPrice("90")
// ---

// ## Question 5: Theme Switcher (Literal Type)

// একটি `Theme` নামে একটি Type তৈরি করুন।

// ### Allowed Values

// - `"Light"`
// - `"Dark"`
// - `"System"`

// ### Requirements

// - `changeTheme()` নামে একটি Function তৈরি করুন।
// - Function শুধুমাত্র `Theme` Type Accept করবে।
// - বর্তমানে কোন Theme ব্যবহার হচ্ছে তা Console-এ Print করুন।

type Themes = "Light" | "Dark" | "System"

const changeTheme = (Theme: Themes) => {
    console.log(Theme)
}

changeTheme("Light")