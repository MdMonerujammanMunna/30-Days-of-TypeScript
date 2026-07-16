## 📘 Introduction to TypeScript (TS)


**TypeScript (TS)** হলো একটি **Open Source Programming Language**, যা **Microsoft** তৈরি করেছে।

TypeScript হলো **JavaScript-এর একটি Superset**, অর্থাৎ JavaScript-এর সব Feature TypeScript-এ আছে, পাশাপাশি অতিরিক্ত কিছু শক্তিশালী Featureও রয়েছে।

---

# 🚀 কেন TypeScript ব্যবহার করবো?

TypeScript ব্যবহার করার প্রধান সুবিধাগুলো হলো:

- ✅ **Type Error আগে থেকেই ধরা যায়** (Compile Time-এ)
- ✅ **Code আরও Safe ও Reliable হয়**
- ✅ **Developer Experience (DX) ভালো হয়**
- ✅ **Project Maintain করা সহজ হয়**
- ✅ **Auto Completion (IntelliSense) পাওয়া যায়**
- ✅ **Large Project-এ Bug কম হয়**
- ✅ **Code Readability বৃদ্ধি পায়**

---

# 📦 Data Types

TypeScript-এর Data Type মূলত **দুই ধরনের**।

- **Primitive (Basic Types)**
- **Non-Primitive Types**

---

# 🔹 Primitive Types

Primitive Types হলো Basic Data Types।

এগুলোর মধ্যে সবচেয়ে বেশি ব্যবহৃত তিনটি হলো:

- **Number**
- **String**
- **Boolean**

---

# 🔢 Number

TypeScript-এ যেকোনো Numeric Value রাখার জন্য **`number`** type ব্যবহার করা হয়।

### ✅ Syntax

```ts
let age: number = 22;

const price: number = 99.02;

var temperature: number = -5;
```

### 📌 মনে রাখবেন

- শুধুমাত্র **Number Value** রাখা যাবে।
- অন্য কোনো Type-এর Value Assign করলে **Type Error** দেখাবে।

---

# 📝 String

Text বা Character Data রাখার জন্য **`string`** type ব্যবহার করা হয়।

### ✅ Syntax

```ts
let name: string = "Munna";

const country: string = "BD";

var city: string = "Dhaka";
```

### 📌 মনে রাখবেন

- শুধুমাত্র **Text (String)** রাখা যাবে।
- Number বা অন্য কোনো Type Assign করলে **Type Error** হবে।

---

# ✅ Boolean

শুধুমাত্র **`true`** অথবা **`false`** Value রাখার জন্য **`boolean`** type ব্যবহার করা হয়।

### ✅ Syntax

```ts
let isStudent: boolean = true;

const isAdmin: boolean = false;
```

### 📌 মনে রাখবেন

- Boolean Type-এ শুধুমাত্র **true** অথবা **false** রাখা যায়।
- অন্য কোনো Value দিলে **Type Error** দেখাবে।

---

# 🎯 Summary

| Data Type | ব্যবহার | Example |
|-----------|----------|---------|
| **Number** | সংখ্যা রাখার জন্য | `22`, `99.5`, `-5` |
| **String** | Text রাখার জন্য | `"Munna"` |
| **Boolean** | True / False রাখার জন্য | `true`, `false` |