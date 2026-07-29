// # 🟡 TypeScript Generic Functions প্র্যাকটিস

// ## 📚 প্র্যাকটিস প্রশ্নসমূহ

// ### প্রশ্ন ১: একটি Generic Identity Function তৈরি করো

// এমন একটি Generic Function তৈরি করো যার নাম `identity` হবে। Function-টি যেকোনো ধরনের একটি value parameter হিসেবে গ্রহণ করবে এবং সেই একই value return করবে। Function-টি `string`, `number` এবং `boolean` data type-এর সাথে ব্যবহার করে নিশ্চিত করো যে এটি প্রতিটি type-এর জন্য সঠিকভাবে কাজ করছে।


function identify<T>(Value: T): T {
    return Value
}
console.log(identify("Munn"))
console.log(identify(78))
console.log(identify(true))
// ---

// ### প্রশ্ন ২: একটি Array-এর প্রথম Element Return করো

// এমন একটি Generic Function তৈরি করো যা যেকোনো type-এর একটি array গ্রহণ করবে এবং সেই array-এর প্রথম element return করবে। Function-টি `number`, `string`, `boolean` এবং `object` array-এর সাথে সঠিকভাবে কাজ করতে হবে এবং return type যেন স্বয়ংক্রিয়ভাবে নির্ধারিত হয়।

// ---

// ### প্রশ্ন ৩: দুইটি ভিন্ন Type-এর Data Pair হিসেবে Return করো

// এমন একটি Generic Function তৈরি করো যা দুইটি parameter গ্রহণ করবে। Parameter দুইটি ভিন্ন type-এর হতে পারে। Function-টি এই দুইটি value-কে একটি array অথবা object আকারে return করবে এবং প্রতিটি value-এর type যেন ঠিকভাবে সংরক্ষিত থাকে।

// ---

// ### প্রশ্ন ৪: `keyof` ব্যবহার করে Object-এর Property Return করো

// এমন একটি Generic Function তৈরি করো যা একটি object এবং সেই object-এর একটি valid property name গ্রহণ করবে। `keyof` ব্যবহার করে নিশ্চিত করো যে শুধুমাত্র object-এর বিদ্যমান key-ই parameter হিসেবে পাঠানো যাবে। Function-টি নির্দিষ্ট key-এর value return করবে।

// ---

// ### প্রশ্ন ৫: Generic Constraint ব্যবহার করে `length` Property যাচাই করো

// এমন একটি Generic Function তৈরি করো যা শুধুমাত্র `length` property রয়েছে এমন value গ্রহণ করবে। `extends` keyword ব্যবহার করে এই constraint প্রয়োগ করো। Function-টি প্রদত্ত value-এর `length` return করবে এবং `string`, `array` ও `length` property থাকা object-এর সাথে কাজ করবে, কিন্তু `number` এর মতো invalid type গ্রহণ করবে না।

// ---

// ## 🎯 শেখার লক্ষ্য

// - Generic Function কী এবং কেন ব্যবহার করা হয় তা বোঝা।
// - `<T>` ব্যবহার করে Type Parameter তৈরি করা।
// - একাধিক Generic Type (`<T, U>`) নিয়ে কাজ করা।
// - `extends` ব্যবহার করে Generic Constraint প্রয়োগ করা।
// - `keyof` ও Generic একসাথে ব্যবহার করে Type-safe Function তৈরি করা।