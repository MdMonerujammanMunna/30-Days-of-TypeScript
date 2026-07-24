# 📘 Day 02: Type vs Interface in TypeScript

## 📖 পরিচিতি

TypeScript-এ `type` এবং `interface`—দুটিই কোনো ডেটার **structure (গঠন)** বা **shape** নির্ধারণ করার জন্য ব্যবহৃত হয়। এগুলোর মাধ্যমে আমরা নির্ধারণ করতে পারি একটি object, function, class বা অন্য কোনো ডেটার মধ্যে কী কী property থাকবে এবং সেগুলোর type কী হবে।

দেখতে অনেকটা একই রকম হলেও `type` এবং `interface`-এর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। একজন TypeScript Developer-এর জন্য এই পার্থক্যগুলো জানা খুবই গুরুত্বপূর্ণ।

---

# 🔹 `type` কী?

`type` হলো TypeScript-এর একটি **keyword**, যা একটি নতুন **Type Alias** তৈরি করতে ব্যবহৃত হয়।

এটি শুধুমাত্র object-এর জন্য নয়, বরং **Primitive, Union, Tuple, Function, Intersection** সহ বিভিন্ন ধরনের type তৈরি করতে পারে।

## Syntax

```ts
type User = {
  name: string;
  age: number;
};
```

## উদাহরণ

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Munna",
  age: 21,
};
```

---

# ✅ `type` দিয়ে কী কী করা যায়?

## ১. Object Type

```ts
type Student = {
  name: string;
  cgpa: number;
};
```

---

## ২. Primitive Type

```ts
type Name = string;
type Age = number;
```

---

## ৩. Union Type

একটি Variable একাধিক Type গ্রহণ করতে পারে।

```ts
type ID = string | number;

let userId: ID = 101;
userId = "A101";
```

---

## ৪. Function Type

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

---

## ৫. Tuple Type

```ts
type Point = [number, number];

const position: Point = [20, 30];
```

---

## ৬. Intersection Type

একাধিক Type একত্রে ব্যবহার করা যায়।

```ts
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;
```

---

# 🔹 `interface` কী?

`interface` মূলত **Object-এর Structure** নির্ধারণ করার জন্য তৈরি করা হয়েছে।

এটি বলে দেয় একটি Object বা Class-এর মধ্যে কী কী Property এবং Method থাকবে।

## Syntax

```ts
interface User {
  name: string;
  age: number;
}
```

## উদাহরণ

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Munna",
  age: 21,
};
```

---

# ✅ `interface`-এর গুরুত্বপূর্ণ Feature

## ১. Method ব্যবহার

```ts
interface User {
  name: string;
  age: number;

  greet(): void;
}
```

---

## ২. Interface Extend করা

একটি Interface অন্য Interface-এর Property গ্রহণ করতে পারে।

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  cgpa: number;
}
```

---

## ৩. Class-এ Interface Implement করা

```ts
interface Animal {
  name: string;

  sound(): void;
}

class Dog implements Animal {
  name = "Tommy";

  sound() {
    console.log("Woof");
  }
}
```

---

# ⚔️ Type vs Interface

| Feature | Type | Interface |
|---------|------|-----------|
| Object তৈরি | ✅ | ✅ |
| Primitive Type | ✅ | ❌ |
| Union Type | ✅ | ❌ |
| Tuple | ✅ | ❌ |
| Function Type | ✅ | ✅ |
| Intersection | ✅ | সীমিত |
| Extend | `&` | `extends` |
| Class Implement | ✅ | ✅ |
| Declaration Merging | ❌ | ✅ |

---

# 🔥 Declaration Merging

`interface`-এর সবচেয়ে বড় সুবিধাগুলোর একটি হলো **Declaration Merging**।

অর্থাৎ একই নামে একাধিক Interface লিখলে TypeScript সেগুলোকে Merge করে দেয়।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Munna",
  age: 21,
};
```

এটি সম্পূর্ণ Valid।

কিন্তু `type`-এ একই নামে দুইবার Declare করা যায় না।

```ts
type User = {
  name: string;
};

type User = {
  age: number;
};
```

এক্ষেত্রে Error দেখাবে।

---

# 🔗 Type Combine করা

## `type` ব্যবহার করে

```ts
type A = {
  name: string;
};

type B = {
  age: number;
};

type C = A & B;
```

---

## `interface` ব্যবহার করে

```ts
interface A {
  name: string;
}

interface B extends A {
  age: number;
}
```

---

# 📌 কখন `type` ব্যবহার করবেন?

নিচের ক্ষেত্রে `type` ব্যবহার করা ভালো—

- Primitive Type
- Union Type
- Tuple
- Function Type
- Intersection Type
- Complex Type Combination

উদাহরণ:

```ts
type Status = "loading" | "success" | "error";
```

---

# 📌 কখন `interface` ব্যবহার করবেন?

নিচের ক্ষেত্রে `interface` ব্যবহার করা ভালো—

- Object Structure তৈরি করতে
- Class-এর Blueprint তৈরি করতে
- বড় Project-এ Reusable Object Model তৈরি করতে
- Future-এ Extend করার প্রয়োজন হলে
- Declaration Merging ব্যবহার করতে

উদাহরণ:

```ts
interface User {
  id: number;
  name: string;
}
```

---

# 🚀 Best Practice

বড় TypeScript Project-এ সাধারণত—

- ✅ Object ও Class-এর জন্য `interface` ব্যবহার করা হয়।
- ✅ Primitive, Union, Tuple এবং Complex Type-এর জন্য `type` ব্যবহার করা হয়।

তবে এটি কোনো বাধ্যতামূলক নিয়ম নয়। Project-এর প্রয়োজন অনুযায়ী যেটি কোডকে বেশি পরিষ্কার ও Maintainable করে, সেটিই ব্যবহার করা উচিত।

---

# 📋 সংক্ষেপে

| ব্যবহার | Recommended |
|---------|-------------|
| Object Structure | ✅ Interface |
| Class | ✅ Interface |
| Primitive | ✅ Type |
| Union | ✅ Type |
| Tuple | ✅ Type |
| Function Type | ✅ Type |
| Complex Type | ✅ Type |
| Declaration Merging | ✅ Interface |

---

# 🎯 উপসংহার

`type` এবং `interface`—দুটিই TypeScript-এর অত্যন্ত গুরুত্বপূর্ণ Feature। দুটোর কাজ অনেক ক্ষেত্রে একই হলেও ব্যবহার করার ক্ষেত্র আলাদা।

- **Object ও Class-এর Structure** তৈরি করতে `interface` সবচেয়ে উপযোগী।
- **Primitive, Union, Tuple, Function এবং Complex Type** তৈরির জন্য `type` বেশি শক্তিশালী এবং Flexible।

একজন ভালো TypeScript Developer হওয়ার জন্য শুধু `type` বা `interface` ব্যবহার করাই যথেষ্ট নয়, বরং কোন পরিস্থিতিতে কোনটি ব্যবহার করা উচিত সেটি বোঝাই সবচেয়ে গুরুত্বপূর্ণ।

---

## 📚 References

- TypeScript Official Documentation
- TypeScript Handbook