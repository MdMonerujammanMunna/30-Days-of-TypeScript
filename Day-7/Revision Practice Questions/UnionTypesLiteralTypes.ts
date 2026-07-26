
// ## 5. Union Types & Literal Types

// - এমন একটি Variable তৈরি করো যেখানে Number অথবা String রাখা যাবে।
// Answer----=>
const NumStr: number | string = 67 //"Munna" 
console.log(NumStr)
// - এমন একটি Variable তৈরি করো যেখানে `"success"` অথবা `"error"` রাখা যাবে।
// Answer----=>
type Valuo = "success" | "error"

const SucEro: Valuo = "error"
console.log(SucEro)
// - এমন একটি Variable তৈরি করো যেখানে `"admin"` অথবা `"user"` রাখা যাবে।
// Answer----=>
type Role = "Admin" | "User"

const Who: Role = "Admin"
console.log(Who)
// - এমন একটি Variable তৈরি করো যেখানে `"male"` অথবা `"female"` রাখা যাবে।
// Answer----=>
type Gender = "male" | "female"

const Sex: Gender = "male"
console.log(Sex)
// - এমন একটি Variable তৈরি করো যেখানে Number অথবা Boolean রাখা যাবে।
// Answer----=>

type BoolNum = number | Boolean

const Numboo: BoolNum = 38 //true
console.log(Numboo)
// ---