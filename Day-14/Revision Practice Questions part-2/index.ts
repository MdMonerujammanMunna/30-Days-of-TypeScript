// # TypeScript Revision Practice Questions

// # Question 1

// একটি `Student` interface তৈরি করো যেখানে `id`, `name`, `department` এবং optional `phone` থাকবে। এরপর ৫ জন student-এর একটি array তৈরি করো। এমন একটি function লিখো যা student array গ্রহণ করে শুধুমাত্র সব student-এর `name` return করবে।
interface Students {
    Id: number,
    Name: string,
    Department: string,
    Phone?: number
}
function student(T: Students[]) {
    console.log(T)
}

const ArrayOfStudent: Students[] = [
    {
        Id: 101,
        Name: "Monerujjaman Munna",
        Department: "Computer Science",
        Phone: 1711111111,
    },
    {
        Id: 102,
        Name: "Sakib Hasan",
        Department: "Software Engineering",
        Phone: 1822222222,
    },
    {
        Id: 103,
        Name: "Nusrat Jahan",
        Department: "Information Technology",
    },
    {
        Id: 104,
        Name: "Rakib Hossain",
        Department: "Computer Science",
        Phone: 1933333333,
    },
    {
        Id: 105,
        Name: "Fahim Ahmed",
        Department: "Cyber Security",
    },
];
student(ArrayOfStudent)
// ---

// # Question 2

// একটি `Product` type তৈরি করো যেখানে `id`, `title`, `price`, `stock` থাকবে। এরপর `keyof` ব্যবহার করে এমন একটি Generic Function লিখো যা Product-এর যেকোনো property-এর value return করতে পারে।
type Product = {
    Id: number,
    Title: string,
    Price: number,
    Stock: number
}
function ProductsGen<T, k extends keyof T>(Products: T, Key: k) {
    console.log(Products[Key])
}
const p = {
    Id: 84,
    Title: "sfk",
    Price: 34,
    Stock: 83
}

ProductsGen(p, "Stock")
// ---

// # Question 3

// একটি `ApiResponse<T>` Generic Interface তৈরি করো যেখানে `success`, `message`, `data` থাকবে। এরপর User এবং Product-এর জন্য দুটি response object তৈরি করো। এমন একটি Generic Function লিখো যা response-এর `data` return করবে।
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

type Producto = {
    id: number;
    title: string;
    price: number;
    stock: number;
};
interface ApiResponse<T> {
    success: boolean,
    message: string,
    data: object
}
const userResponse: ApiResponse<User> = {
    success: true,
    message: "User fetched successfully",
    data: {
        id: 1,
        name: "Monerujamman Munna",
        email: "munna@example.com",
        role: "User",
    },
};

const productResponse: ApiResponse<Producto> = {
    success: true,
    message: "Product fetched successfully",
    data: {
        id: 101,
        title: "Wireless Mouse",
        price: 1200,
        stock: 25,
    },
};
function getResponseData<T>(response: ApiResponse<T>) {
    console.log(response.data)
}
getResponseData(userResponse)
getResponseData(productResponse)
// ---

// # Question 4

// একটি Generic Function লিখো যা শুধুমাত্র `length` property থাকা value গ্রহণ করবে। Function-টি value এবং তার length return করবে। `string`, `array` এবং `length` property থাকা object দিয়ে test করো।

// ---

// # Question 5

// একটি `UserRole` Enum তৈরি করো যেখানে `Admin`, `User`, `Moderator` থাকবে। এরপর একটি function লিখো যা role অনুযায়ী আলাদা message return করবে।

// ---

// # Question 6

// একটি function লিখো যা `string | number` type গ্রহণ করবে। `typeof` ব্যবহার করে যদি string হয় তাহলে uppercase করবে, আর number হলে তার square return করবে।

// ---

// # Question 7

// একটি readonly array তৈরি করো যেখানে ৫টি programming language থাকবে। এরপর array modify করার চেষ্টা করো এবং TypeScript কী error দেয় তা দেখো।

// ---

// # Question 8

// একটি tuple তৈরি করো যেখানে প্রথম value হবে `number`, দ্বিতীয় value হবে `string`, তৃতীয় value হবে `boolean`। এরপর tuple-এর প্রতিটি value print করো।

// ---

// # Question 9

// একটি Generic Interface `Repository<T>` তৈরি করো যেখানে `items` নামে একটি array থাকবে। এরপর User Repository এবং Product Repository তৈরি করো।

// ---

// # Question 10

// একটি Generic Function লিখো যা দুটি object merge করবে। Function-এ `extends object` constraint ব্যবহার করবে যাতে শুধুমাত্র object pass করা যায়।

// ---

// # Question 11

// একটি `Vehicle` interface তৈরি করো যেখানে `brand` এবং `model` থাকবে। এরপর `Car` এবং `Bike` interface তৈরি করো যা `Vehicle` কে extend করবে। দুটি object তৈরি করে print করো।

// ---

// # Question 12

// একটি object তৈরি করো যেখানে `name`, `email`, `age`, `country` থাকবে। এরপর `keyof` ব্যবহার করে এমন একটি Generic Function লিখো যা object-এর যেকোনো key-এর value return করবে।

// ---

// # Question 13

// একটি Literal Type তৈরি করো যার নাম `Status` এবং value হবে `"pending" | "success" | "failed"`। এরপর এমন একটি function লিখো যা status অনুযায়ী আলাদা message return করবে।

// ---

// # Question 14

// একটি Generic Function লিখো যা একটি array গ্রহণ করবে এবং array-এর প্রথম element return করবে। Function-টি `number`, `string` এবং `object` array-এর সাথে test করো।

// ---

// # Question 15

// একটি `ApiResponse<T>` Interface তৈরি করো যেখানে `data` property optional থাকবে। এরপর একটি success response এবং একটি failed response object তৈরি করো। Generic ব্যবহার করে type নিশ্চিত করো এবং একটি function লিখো যা response handle করবে।

// ---

// # Question 16

// একটি `Employee` interface তৈরি করো যেখানে `id`, `name`, `salary` এবং optional `department` থাকবে। এরপর Generic Function ব্যবহার করে Employee object-এর যেকোনো property-এর value return করো।

// ---

// # Question 17

// একটি `Book` type তৈরি করো যেখানে `title`, `author`, `price`, `available` থাকবে। এরপর এমন একটি function লিখো যা শুধুমাত্র available book-এর title return করবে।

// ---

// # Question 18

// একটি Generic Interface `ApiResult<T>` তৈরি করো যেখানে `status`, `message`, `result` থাকবে। এরপর Student, Product এবং Employee-এর জন্য তিনটি object তৈরি করো।

// ---

// # Question 19

// একটি Generic Function লিখো যা দুটি array merge করবে এবং merged array return করবে। Function-টি number array এবং string array-এর সাথে test করো।

// ---

// # Question 20

// একটি `PaymentStatus` Literal Type অথবা Enum তৈরি করো। এরপর একটি function লিখো যা payment status অনুযায়ী `"Payment Successful"`, `"Payment Pending"` অথবা `"Payment Failed"` return করবে।

// ---