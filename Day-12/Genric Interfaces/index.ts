// Question 1

// একটি Generic Interface ApiResponse<T> তৈরি করো যেখানে success, message এবং data নামে তিনটি property থাকবে। এরপর এমন একটি response object তৈরি করো যেখানে data-এর ভিতরে একজন user-এর id, name এবং email থাকবে। নিশ্চিত করো যে data-এর type ApiResponse<T>-এর মাধ্যমে নির্ধারিত হচ্ছে।

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

interface User {
    id: number;
    name: string;
    email: string;
}

const userResponse: ApiResponse<User> = {
    success: true,
    message: "User fetched successfully",
    data: {
        id: 1,
        name: "Rahim",
        email: "rahim@gmail.com",
    },
};

console.log(userResponse);



// Question 2

// একটি Generic Interface ApiResponse<T> ব্যবহার করে একটি products response তৈরি করো। data property-তে একটি array থাকবে যেখানে প্রতিটি product-এর id, name, price এবং stock থাকবে। Generic ব্যবহার করে নিশ্চিত করো যে data শুধুমাত্র product array-ই গ্রহণ করতে পারে।

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const productResponse: ApiResponse<Product[]> = {
    success: true,
    message: "Products fetched successfully",
    data: [
        {
            id: 101,
            name: "Laptop",
            price: 75000,
            stock: 12,
        },
        {
            id: 102,
            name: "Keyboard",
            price: 1500,
            stock: 30,
        },
    ],
};

console.log(productResponse);



// Question 3

// একটি Generic Function তৈরি করো যা ApiResponse<T> type-এর একটি object parameter হিসেবে গ্রহণ করবে এবং response-এর data return করবে। Function-টি এমনভাবে লিখবে যাতে এটি user, product, order বা অন্য যেকোনো type-এর ApiResponse-এর সাথে কাজ করতে পারে।

function getResponseData<T>(response: ApiResponse<T>): T {
    return response.data;
}

const orderResponse: ApiResponse<{
    orderId: number;
    total: number;
}> = {
    success: true,
    message: "Order fetched successfully",
    data: {
        orderId: 5001,
        total: 3200,
    },
};

const orderData = getResponseData(orderResponse);

console.log(orderData);



// Question 4

// একটি ApiResponse<T> interface তৈরি করো যেখানে data property optional থাকবে। এরপর দুটি response object তৈরি করো—একটিতে সফল response হিসেবে data থাকবে এবং অন্যটিতে failed response হিসেবে শুধুমাত্র success ও message থাকবে। Generic ব্যবহার করে উভয় ক্ষেত্রেই সঠিক type নিশ্চিত করো।

interface OptionalApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}

interface Employee {
    id: number;
    name: string;
    position: string;
}

const successEmployeeResponse: OptionalApiResponse<Employee> = {
    success: true,
    message: "Employee found",
    data: {
        id: 11,
        name: "Karim",
        position: "Software Engineer",
    },
};

const failedEmployeeResponse: OptionalApiResponse<Employee> = {
    success: false,
    message: "Employee not found",
};

console.log(successEmployeeResponse);
console.log(failedEmployeeResponse);



// Question 5

// একটি ApiResponse<T> interface তৈরি করো এবং এটি ব্যবহার করে একটি student management system-এর response model তৈরি করো। data-এর মধ্যে প্রতিটি student-এর id, name, department, semester এবং cgpa থাকবে। এরপর একই ApiResponse<T> interface ব্যবহার করে teachers-এর response-ও তৈরি করো, যেখানে data-এর structure সম্পূর্ণ ভিন্ন হবে। লক্ষ্য থাকবে, একটি Generic Interface ব্যবহার করে ভিন্ন ধরনের API response handle করা।

interface Student {
    id: number;
    name: string;
    department: string;
    semester: number;
    cgpa: number;
}

interface Teacher {
    id: number;
    name: string;
    subject: string;
    experience: number;
}

const studentResponse: ApiResponse<Student[]> = {
    success: true,
    message: "Students fetched successfully",
    data: [
        {
            id: 1,
            name: "Sakib",
            department: "Computer Science",
            semester: 7,
            cgpa: 3.82,
        },
        {
            id: 2,
            name: "Nusrat",
            department: "Software Engineering",
            semester: 5,
            cgpa: 3.91,
        },
    ],
};

const teacherResponse: ApiResponse<Teacher[]> = {
    success: true,
    message: "Teachers fetched successfully",
    data: [
        {
            id: 201,
            name: "Mr. Hasan",
            subject: "Database",
            experience: 8,
        },
        {
            id: 202,
            name: "Ms. Farzana",
            subject: "Operating System",
            experience: 6,
        },
    ],
};

console.log(studentResponse);
console.log(teacherResponse);