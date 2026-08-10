// # 💻 TypeScript Practice: Exclude & Extract
// ---

// # 📝 প্রশ্ন ১: Active User Role DTO

// নিচের Type দেওয়া আছে।

// ```ts
// type UserRole = "admin" | "editor" | "user" | "guest";
// ```

// ## Task

// একটি `ActiveUserRoleDto` তৈরি করুন যেখানে `guest` থাকবে না।

// **Hint:** `Exclude` ব্যবহার করুন।
type UserRole = "Admin" | "Editor" | "User" | "Guest"
type ActiveUserRole = Exclude<UserRole, "Guest">
const Role: ActiveUserRole = "Admin" //remove this valu You can see Guest valu do not gave you
console.log(Role)
// ---

// # 📝 প্রশ্ন ২: Staff Role DTO

// একই Type ব্যবহার করুন।

// ```ts
// type UserRole = "admin" | "editor" | "user" | "guest";
// ```

// ## Task

// একটি `StaffRoleDto` তৈরি করুন যেখানে থাকবে শুধুমাত্র—

// - admin
// - editor

// **Hint:** `Extract` ব্যবহার করুন।
type UserRoleExtract = "admin" | "editor" | "user" | "guest";
type ActiveUserRoleExtract = Extract<UserRoleExtract, "admin">
const RoleExtract: ActiveUserRoleExtract = "admin"
console.log(RoleExtract)
// ---

// # 📝 প্রশ্ন ৩: Available Payment DTO

// নিচের Type দেওয়া আছে।

// ```ts
// type PaymentMethod =
//   | "cash"
//   | "card"
//   | "bkash"
//   | "nagad"
//   | "paypal";
// ```

// ## Task

// একটি `LocalPaymentDto` তৈরি করুন যেখানে `paypal` থাকবে না।

// **Hint:** `Exclude` ব্যবহার করুন।

type PaymentMethod = "Cash" | "Card" | "Bkash" | "Nagad" | "Paypal"
type PaymentInfo = Exclude<PaymentMethod, "Paypal">

const LocalPaymentDto: PaymentInfo = "Nagad"
console.log(LocalPaymentDto)
// ---

// # 📝 প্রশ্ন ৪: Online Payment DTO

// একই Type ব্যবহার করুন।

// ```ts
// type PaymentMethod =
//   | "cash"
//   | "card"
//   | "bkash"
//   | "nagad"
//   | "paypal";
// ```

// ## Task

// একটি `OnlinePaymentDto` তৈরি করুন যেখানে থাকবে শুধুমাত্র—

// - card
// - bkash
// - nagad
// - paypal

// **Hint:** `Extract` ব্যবহার করুন।
type OnlinePaymentMethod = "Cash" | "Card" | "Bkash" | "Nagad" | "Paypal"
type OnlinePaymentInfo = Extract<OnlinePaymentMethod, "Card" | "Bkash" | "Nagad" | "Paypal">
const OnlinePaymentDto: OnlinePaymentInfo = "Card"
console.log(OnlinePaymentDto);
// ---

// # 📝 প্রশ্ন ৫: Vehicle DTO

// নিচের Type দেওয়া আছে।

// ```ts
// type Vehicle =
//   | "car"
//   | "bike"
//   | "bus"
//   | "train"
//   | "plane";
// ```

// ## Task

// দুটি DTO তৈরি করুন।

// ### ১. PublicTransportDto

// যেখানে থাকবে শুধুমাত্র—

// - bus
// - train

// ### ২. PersonalTransportDto

// যেখানে থাকবে না—

// - bus
// - train
// - plane

// **Hint:**

// - `PublicTransportDto` → `Extract`
// - `PersonalTransportDto` → `Exclude`

type Vehicle = "Car" | "Bike" | "Bus" | "Train" | "Plane"
type PublicTransport = Extract<Vehicle, "Bus" | "Train" | "Plane">
const PublicTransportDto: PublicTransport = "Train"
type PersonalTransport = Exclude<Vehicle, "Bus" | "Train">
const PersonalTransportDto: PersonalTransport = "Car"
console.log(PublicTransportDto, PersonalTransportDto)
// ---
