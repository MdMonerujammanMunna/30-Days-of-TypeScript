// # 💻 TypeScript Practice: Pick & Omit

// # 📝 প্রশ্ন ১: User Profile DTO

// নিচের `User` Interface দেওয়া আছে।

// ```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
}
// ```

// ## Task

// একটি `UserProfileDto` তৈরি করুন যেখানে থাকবে শুধুমাত্র—

// - name
// - email

// **Hint:** `Pick` ব্যবহার করুন।
type PickInfo = Pick<User, "name" | "email">

const UserProfileDto: PickInfo = {
    name: "Munna",
    email: "md@gmail.com"
}
console.log(UserProfileDto)
// ---

// # 📝 প্রশ্ন ২: Safe User DTO

// একই `User` Interface ব্যবহার করুন।

// ```ts
interface UserOmit {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
// ```

// ## Task

// একটি `SafeUserDto` তৈরি করুন যেখানে `password` থাকবে না।

// **Hint:** `Omit` ব্যবহার করুন।

type OmitInfo = Omit<UserOmit, "password">

const SafeUserDto: OmitInfo = {
    name: "Joy",
    email: "ak@gmail.com",
    id: 383,
    role: "Guest"
}
console.log(SafeUserDto)
// ---

// # 📝 প্রশ্ন ৩: Product Card DTO

// নিচের Interface দেওয়া আছে।

// ```ts
interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    stock: number;
}
// ```

// ## Task

// একটি `ProductCardDto` তৈরি করুন যেখানে থাকবে—

// - title
// - price
// - image

// **Hint:** `Pick` ব্যবহার করুন।
type ProductInfo = Pick<Product, "title" | "price" | "image">
const ProductCardDto: ProductInfo = {
    title: "This is good",
    price: 80,
    image: 'akdjkajdkfj'
}
console.log(ProductCardDto)
// ---

// # 📝 প্রশ্ন ৪: Public Product DTO

// একই `Product` Interface ব্যবহার করুন।

// ```ts
interface ProductOmit {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    stock: number;
}
// ```

// ## Task

// একটি `PublicProductDto` তৈরি করুন যেখানে থাকবে না—

// - stock
// - description

// **Hint:** `Omit` ব্যবহার করুন।
type ProductOmitInfo = Omit<ProductOmit, "stock" | "description">
const PublicProductDto: ProductOmitInfo = {
    id: "aks",
    title: "good",
    image: "pic1",
    price: 800,
}
console.log(PublicProductDto)
// ---

// # 📝 প্রশ্ন ৫: Order Summary DTO

// নিচের Interface দেওয়া আছে।

// ```ts
interface Order {
    id: string;
    customerName: string;
    customerEmail: string;
    address: string;
    totalPrice: number;
    paymentStatus: string;
    createdAt: Date;
}
// ```

// ## Task

// একটি `OrderSummaryDto` তৈরি করুন যেখানে থাকবে—

// - customerName
// - totalPrice
// - paymentStatus

// **Hint:** `Pick` ব্যবহার করুন।
type OrderInfo = Pick<Order, "customerName" | "totalPrice" | "paymentStatus">
const OrderSummaryDto: OrderInfo = {
    customerName: "munna",
    paymentStatus: "Pending",
    totalPrice: 499
}
console.log(OrderSummaryDto)
// ---
