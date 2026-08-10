# Function এবং Return Type in TypeScript

## 📌 Function কী?

- **Function** হলো এমন একটি কোড ব্লক যা নির্দিষ্ট একটি কাজ সম্পন্ন করে।
- একই কাজ বারবার করার পরিবর্তে Function ব্যবহার করলে কোড পরিষ্কার, ছোট এবং পুনঃব্যবহারযোগ্য (Reusable) হয়।

## Syntax

```ts
function functionName(parameters): returnType {
  // Code
}
```

---

# 📌 Return Type কী?

- **Return Type** হলো Function কী ধরনের ডাটা (`number`, `string`, `boolean` ইত্যাদি) রিটার্ন করবে তা নির্ধারণ করা।
- TypeScript-এ Function-এর Parameter-এর পরে `:` ব্যবহার করে Return Type লিখতে হয়।

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- এখানে Function টি একটি **number** রিটার্ন করছে।

---

# Function Return Type-এর ধরন

## ১. Type Inference

- Return Type না লিখলেও TypeScript অনেক সময় নিজেই বুঝে নিতে পারে।

```ts
function add(a: number, b: number) {
  return a + b;
}
```

- এখানে TypeScript নিজেই Return Type হিসেবে **number** ধরে নেয়।

---

## ২. Explicit Return Type

- Return Type নিজে লিখে দেওয়া।

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## ৩. String Return করা

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

---

## ৪. Boolean Return করা

```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
```

---

## ৫. Array Return করা

```ts
function getNumbers(): number[] {
  return [10, 20, 30];
}
```

---

## ৬. Object Return করা

```ts
interface Student {
  name: string;
  age: number;
}

function getStudent(): Student {
  return {
    name: "Munna",
    age: 22,
  };
}
```

---

## ৭. `void` Return Type

- যখন Function কোনো Value Return করে না।

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

---

## ৮. Arrow Function Return Type

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

অথবা

```ts
const square = (num: number): number => num * num;
```

---

## ৯. Union Return Type

- একাধিক Type Return করতে চাইলে Union (`|`) ব্যবহার করা হয়।

```ts
function getValue(isNumber: boolean): number | string {
  if (isNumber) {
    return 100;
  }

  return "One Hundred";
}
```

---

## ১০. `never` Return Type

- যখন Function কখনো স্বাভাবিকভাবে শেষ হয় না।

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

# Return Type Summary

| Return Type | ব্যবহার |
|-------------|----------|
| **number** | সংখ্যা Return করে |
| **string** | লেখা Return করে |
| **boolean** | `true` অথবা `false` Return করে |
| **void** | কিছু Return করে না |
| **Object / Interface** | Object Return করে |
| **number[]** | Number Array Return করে |
| **string[]** | String Array Return করে |
| **number \| string** | একাধিক Type Return করতে পারে |
| **never** | Function কখনো Return করে না |

---

# গুরুত্বপূর্ণ বিষয়

- Parameter-এর Type উল্লেখ করা উচিত।
- Return Type লিখলে কোড আরও নিরাপদ (Type Safe) হয়।
- TypeScript অনেক সময় নিজেই Return Type নির্ধারণ করে (Type Inference)।
- বড় Project-এ Explicit Return Type ব্যবহার করা ভালো অভ্যাস।
- কোনো Value Return না করলে `void` ব্যবহার করুন।
- Function যদি সবসময় Error Throw করে, তাহলে `never` ব্যবহার করুন।