// # 💻 TypeScript Practice: Exclude & Extract

// নিচের প্রতিটি প্রশ্নে **Exclude** অথবা **Extract** ব্যবহার করে নতুন Type (DTO) তৈরি করতে হবে।

// > **নিয়ম:** প্রতিটি প্রশ্নে মূল Type পরিবর্তন করা যাবে না। শুধুমাত্র Utility Type ব্যবহার করে নতুন DTO তৈরি করতে হবে।

// ---

// # 📝 প্রশ্ন ১: Active User Role DTO

// নিচের Type দেওয়া আছে।

// ```ts
// type UserRole = "admin" | "editor" | "user" | "guest";
// ```

// ## Task

// একটি `ActiveUserRoleDto` তৈরি করুন যেখানে `guest` থাকবে না।

// **Hint:** `Exclude` ব্যবহার করুন।

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

// ---
