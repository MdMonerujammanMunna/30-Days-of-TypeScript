# 📘 TypeScript Generic Interfaces

## 📖 What is a Generic Interface?

**Generic Interface** হলো TypeScript-এর এমন একটি **Interface**, যেখানে **Type Parameter (`<T>`)** ব্যবহার করা হয়। এর মাধ্যমে একই Interface বিভিন্ন ধরনের (Type) Data-এর জন্য পুনরায় ব্যবহার করা যায়।

---

## 🎯 কেন Generic Interface ব্যবহার করবো?

- Code Reusability বৃদ্ধি করে।
- একই Interface বারবার লিখতে হয় না।
- Type Safety নিশ্চিত করে।
- বিভিন্ন ধরনের Data-এর জন্য একই Structure ব্যবহার করা যায়।
- Code আরও Clean ও Maintainable হয়।

---

# 📝 Basic Syntax

```ts
interface InterfaceName<T> {
  property: T;
}
```

### ব্যাখ্যা

- `interface` → Interface তৈরি করার Keyword
- `InterfaceName` → Interface-এর নাম
- `<T>` → Generic Type Parameter
- `property: T` → Property-এর Type পরে নির্ধারণ হবে

---

# 📌 Example 1: String

```ts
interface Box<T> {
  value: T;
}

const box: Box<string> = {
  value: "Hello TypeScript"
};
```

### Output Type

```ts
value: string
```

---

# 📌 Example 2: Number

```ts
interface Box<T> {
  value: T;
}

const box: Box<number> = {
  value: 100
};
```

---

# 📌 Example 3: Boolean

```ts
interface Box<T> {
  value: T;
}

const box: Box<boolean> = {
  value: true
};
```

---

# 📌 Example 4: Array

```ts
interface Box<T> {
  value: T;
}

const numbers: Box<number[]> = {
  value: [10, 20, 30]
};
```

---

# 📌 Example 5: Object

```ts
interface Box<T> {
  value: T;
}

const user: Box<{
  name: string;
  age: number;
}> = {
  value: {
    name: "Munna",
    age: 22,
  },
};
```

---

# 📌 Multiple Generic Types

একটি Interface-এ একাধিক Generic Type ব্যবহার করা যায়।

```ts
interface Pair<T, U> {
  first: T;
  second: U;
}
```

### Example

```ts
const data: Pair<string, number> = {
  first: "Munna",
  second: 22,
};
```

---

# 📌 Generic Interface with Function

```ts
interface Calculator<T> {
  add(a: T, b: T): T;
}
```

### Example

```ts
const sum: Calculator<number> = {
  add(a, b) {
    return a + b;
  },
};
```

---

# 📌 Generic Interface with Method

```ts
interface Repository<T> {
  get(): T;
}
```

### Example

```ts
const userRepo: Repository<string> = {
  get() {
    return "Munna";
  },
};
```

---

# 📌 Generic Interface with Array

```ts
interface Collection<T> {
  items: T[];
}
```

### Example

```ts
const users: Collection<string> = {
  items: ["A", "B", "C"],
};
```

---

# 📌 Generic Interface with Object

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

### Example

```ts
const response: ApiResponse<{
  name: string;
  age: number;
}> = {
  success: true,
  data: {
    name: "Munna",
    age: 22,
  },
};
```

---

# 📌 Default Generic Type

Generic-এর Default Type নির্ধারণ করা যায়।

```ts
interface Box<T = string> {
  value: T;
}
```

### Example

```ts
const data: Box = {
  value: "Hello",
};
```

এখানে `T` স্বয়ংক্রিয়ভাবে `string` হবে।

---

# 📌 Generic Constraint (`extends`)

```ts
interface User<T extends string> {
  value: T;
}
```

### ✅ Valid

```ts
const user: User<string> = {
  value: "Munna",
};
```

### ❌ Invalid

```ts
const user: User<number> = {
  value: 10,
};
```

কারণ `number` এখানে Allowed নয়।

---

# 📌 Real Life Example

```ts
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
```

### User Response

```ts
const user: ApiResponse<{
  id: number;
  name: string;
}> = {
  success: true,
  message: "Success",
  data: {
    id: 1,
    name: "Munna",
  },
};
```

### Product Response

```ts
const product: ApiResponse<{
  id: number;
  price: number;
}> = {
  success: true,
  message: "Success",
  data: {
    id: 101,
    price: 500,
  },
};
```

---

# 📌 Generic Interface vs Type Alias

## Generic Interface

```ts
interface Box<T> {
  value: T;
}
```

## Generic Type Alias

```ts
type Box<T> = {
  value: T;
};
```

### পার্থক্য

| Generic Interface | Generic Type Alias |
|-------------------|--------------------|
| Object Structure Define করতে বেশি ব্যবহৃত হয় | Object, Union, Tuple, Function সবকিছুর জন্য ব্যবহার করা যায় |
| `extends` করে Inheritance করা সহজ | Intersection (`&`) বেশি ব্যবহৃত হয় |
| Declaration Merging Support করে | Declaration Merging Support করে না |

---

# 🧠 Interview Questions

1. Generic Interface কী?
2. কেন Generic Interface ব্যবহার করা হয়?
3. `<T>` কী বোঝায়?
4. Generic Interface এবং Generic Function-এর মধ্যে পার্থক্য কী?
5. Multiple Generic Type কীভাবে ব্যবহার করা যায়?
6. `extends` কেন ব্যবহার করা হয়?
7. Default Generic Type কী?
8. Generic Interface এবং Type Alias-এর মধ্যে পার্থক্য কী?
9. `ApiResponse<T>` কেন বাস্তব প্রজেক্টে জনপ্রিয়?
10. Generic Interface কীভাবে Code Reusability বৃদ্ধি করে?

---

# 📚 Summary

- Generic Interface একই Interface-কে একাধিক Type-এর জন্য ব্যবহার করতে দেয়।
- `<T>` হলো Generic Type Parameter।
- Multiple Generic Type ব্যবহার করা যায় (`<T, U>`).
- Default Generic Type দেওয়া যায়।
- `extends` ব্যবহার করে Constraint দেওয়া যায়।
- API Response, Repository Pattern, Collection, Form Data, React Component Props ইত্যাদিতে Generic Interface ব্যাপকভাবে ব্যবহৃত হয়।

---

> **💡 Tip:** Generic Interface ভালোভাবে বুঝতে চাইলে আগে **Generics**, **Generic Functions**, এবং **`keyof`**, **`extends`** কনসেপ্ট ভালোভাবে আয়ত্ত করো।