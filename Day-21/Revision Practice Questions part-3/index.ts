// # Day 21 — TypeScript Revision Practice

// ## 🎯 Goal

// Day 21 is a complete TypeScript revision session covering the utility types and type-system concepts practiced during Days 15–20.

// - **Total Questions:** 30
// - **Focus:** TypeScript Utility Types & Type Guards
// - **Extra:** 5 LeetCode Easy Problems using TypeScript

// ---

// ## 📚 Topics Covered

// - `Record`
// - `Partial`
// - `Required`
// - `Pick`
// - `Omit`
// - `Exclude`
// - `Extract`
// - `ReturnType`
// - `Parameters`
// - Type Guards
// - Custom Type Guards

// ---

// ## 🟢 Part 1 — Record

// ### Question 01
// একটি `UserRole` union type দেওয়া আছে। প্রতিটি role-এর জন্য একটি `permissions` array রাখার উপযোগী একটি type তৈরি করুন `Record` ব্যবহার করে।

// ### Question 02
// একটি `Status` union type থেকে প্রতিটি status-এর জন্য `message` এবং `code` রাখার একটি configuration type তৈরি করুন।

// ### Question 03
// একটি `Language` union type ব্যবহার করে প্রতিটি language-এর জন্য একজন translator-এর নাম রাখার type তৈরি করুন।

// ### Question 04
// একটি `ProductCategory` union type ব্যবহার করে প্রতিটি category-এর জন্য product count রাখার একটি type তৈরি করুন।

// ### Question 05
// একটি `Permission` union type ব্যবহার করে প্রতিটি permission-এর জন্য `boolean` value রাখার একটি type তৈরি করুন।

// ---

// ## 🟡 Part 2 — Partial & Required

// ### Question 06
// একটি `User` interface থেকে এমন একটি `UserUpdate` type তৈরি করুন যেখানে সব property optional হবে। `Partial` ব্যবহার করতে হবে।

// ### Question 07
// একটি `Product` interface থেকে এমন একটি type তৈরি করুন যেখানে update করার সময় প্রয়োজনীয় property-গুলো optional হবে।

// ### Question 08
// একটি `Profile` interface থেকে এমন একটি type তৈরি করুন যেখানে সব property অবশ্যই required থাকবে। `Required` ব্যবহার করুন।

// ### Question 09
// একটি `AppConfig` interface-এর সব optional property-কে required করে নতুন configuration type তৈরি করুন।

// ### Question 10
// একটি `Order` interface থেকে এমন একটি update type তৈরি করুন যেখানে প্রথমে সব property optional থাকবে এবং পরে একটি নতুন type তৈরি করতে হবে যেখানে সব property required হবে।

// ---

// ## 🔵 Part 3 — Pick & Omit

// ### Question 11
// একটি `User` interface থেকে শুধুমাত্র `name`, `email` এবং `avatar` নিয়ে `UserProfileDto` তৈরি করুন।

// ### Question 12
// একটি `User` interface থেকে `password` এবং `refreshToken` বাদ দিয়ে `SafeUser` type তৈরি করুন।

// ### Question 13
// একটি `Product` interface থেকে শুধুমাত্র frontend-এ display করার জন্য প্রয়োজনীয় property নিয়ে একটি DTO তৈরি করুন।

// ### Question 14
// একটি `Employee` interface থেকে sensitive information বাদ দিয়ে একটি public employee type তৈরি করুন।

// ### Question 15
// একটি `Order` interface থেকে শুধুমাত্র order summary-এর জন্য প্রয়োজনীয় property নিয়ে একটি `OrderSummaryDto` তৈরি করুন।

// ---

// ## 🟠 Part 4 — Exclude & Extract

// ### Question 16
// একটি `UserRole` union type থেকে `admin` role বাদ দিয়ে নতুন role type তৈরি করুন।

// ### Question 17
// একটি `Status` union type থেকে শুধুমাত্র active-related statusগুলো নিয়ে নতুন type তৈরি করুন।

// ### Question 18
// একটি union type থেকে সব numeric type বাদ দিয়ে শুধুমাত্র non-numeric type তৈরি করুন।

// ### Question 19
// একটি `Permission` union type থেকে শুধুমাত্র read-related permissionগুলো আলাদা করুন।

// ### Question 20
// দুটি আলাদা union type দেওয়া হলে তাদের মধ্যে common values বের করে নতুন type তৈরি করুন।

// ---

// ## 🟣 Part 5 — ReturnType & Parameters

// ### Question 21
// একটি function-এর return value থেকে `ReturnType` ব্যবহার করে নতুন type তৈরি করুন।

// ### Question 22
// একটি function-এর parameter list থেকে `Parameters` ব্যবহার করে নতুন tuple type তৈরি করুন।

// ### Question 23
// একটি API function-এর return type সরাসরি function থেকে বের করে একটি নতুন type তৈরি করুন।

// ### Question 24
// একটি function-এর দ্বিতীয় parameter-এর type বের করে নতুন type হিসেবে ব্যবহার করুন।

// ### Question 25
// একটি function-এর parameters এবং return value—দুটোর type utility ব্যবহার করে বের করে একটি নতুন type structure তৈরি করুন।

// ---

// ## 🔴 Part 6 — Type Guards & Custom Type Guards

// ### Question 26
// `string | number` union type-এর value কোনটি `string` তা নির্ধারণ করার জন্য একটি type guard তৈরি করুন।

// ### Question 27
// দুটি আলাদা object type-এর মধ্যে কোন object কোন type-এর তা নির্ধারণ করার জন্য একটি custom type guard function তৈরি করুন।

// ### Question 28
// একটি `User | Admin` union type দেওয়া হলে object-টি `Admin` কিনা নির্ধারণ করার জন্য custom type guard তৈরি করুন।

// ### Question 29
// একটি `SuccessResponse | ErrorResponse` union type থেকে response-এর type নির্ধারণ করার জন্য custom type guard তৈরি করুন।

// ### Question 30
// একটি `Payment` union type-এর বিভিন্ন payment method আলাদা করার জন্য custom type guard ব্যবহার করে একটি function তৈরি করুন।

// ---

// ## 🧠 Bonus Challenge — LeetCode

// Day 21-এর 30টি TypeScript practice question শেষ করার পর:

// - [ ] 5টি Easy LeetCode problem solve করুন
// - [ ] TypeScript ব্যবহার করুন
// - [ ] প্রতিটি solution নিজে লিখুন
// - [ ] ব্যবহৃত TypeScript concept review করুন

// ---

// ## 📌 Day 21 Checklist

// - [ ] Record — 5 Questions
// - [ ] Partial & Required — 5 Questions
// - [ ] Pick & Omit — 5 Questions
// - [ ] Exclude & Extract — 5 Questions
// - [ ] ReturnType & Parameters — 5 Questions
// - [ ] Type Guards & Custom Type Guards — 5 Questions
// - [ ] 5 LeetCode Easy Problems

// ---

// ## 🚀 Revision Flow

// `Record` → `Partial` → `Required` → `Pick` → `Omit` → `Exclude` → `Extract` → `ReturnType` → `Parameters` → `Type Guards` → `Custom Type Guards`

// ---

// ## ✅ Day 21 Complete
