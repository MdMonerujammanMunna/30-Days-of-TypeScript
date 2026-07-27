# TypeScript `typeof` এবং `keyof`

`typeof` এবং `keyof` হলো TypeScript-এর দুটি গুরুত্বপূর্ণ **Type Operator**। এগুলো ব্যবহার করে আমরা আরও **Type Safe**, **Reusable** এবং **Maintainable** কোড লিখতে পারি।

---

# `typeof` কী?

`typeof` এমন একটি TypeScript Operator যা কোনো **Variable**, **Object**, **Array**, **Function** বা **Value-এর Type বের করতে** ব্যবহৃত হয়।

অর্থাৎ, আগে থেকে Type লিখে না দিয়ে TypeScript যেন নিজেই Type বুঝে নিতে পারে, তার জন্য `typeof` ব্যবহার করা হয়।

---

## Syntax

```ts
typeof variableName
```

---

## কেন `typeof` ব্যবহার করব?

- একই Type বারবার লিখতে হয় না।
- Type Automatic Update হয়।
- ভুল Type লেখার সম্ভাবনা কমে যায়।
- Code আরও Clean এবং Maintainable হয়।

---

## Example ১: Variable

```ts
const name = "Munna";

type NameType = typeof name;
```

Result

```ts
string
```

এখানে `name` একটি String Variable।

`typeof name` এর মাধ্যমে TypeScript বুঝে গেছে এর Type হলো `string`।

---

## Example ২: Number

```ts
const age = 22;

type AgeType = typeof age;
```

Result

```ts
number
```

---

## Example ৩: Boolean

```ts
const isAdmin = true;

type AdminType = typeof isAdmin;
```

Result

```ts
boolean
```

---

## Example ৪: Object

```ts
const user = {
    name: "Munna",
    age: 22,
};

type UserType = typeof user;
```

Result

```ts
{
    name: string;
    age: number;
}
```

এখানে পুরো Object-এর Type পাওয়া গেছে।

---

## Example ৫: Array

```ts
const numbers = [1, 2, 3];

type NumbersType = typeof numbers;
```

Result

```ts
number[]
```

---

## Example ৬: Function

```ts
function greet(name: string) {
    return `Hello ${name}`;
}

type GreetType = typeof greet;
```

Result

```ts
(name: string) => string
```

এখানে Function-এর সম্পূর্ণ Type পাওয়া গেছে।

---

## `typeof` কোথায় বেশি ব্যবহার হয়?

- Variable-এর Type বের করতে
- Object-এর Type Reuse করতে
- Array-এর Type বের করতে
- Function-এর Type বের করতে
- Utility Types-এর সাথে
- API Response-এর Type তৈরি করতে

---

# `keyof` কী?

`keyof` এমন একটি TypeScript Operator যা কোনো Object Type-এর **সবগুলো Property-এর নাম (Key)** বের করে।

এটি Key গুলোকে **Union Type** হিসেবে Return করে।

---

## Syntax

```ts
keyof TypeName
```

---

## কেন `keyof` ব্যবহার করব?

- শুধুমাত্র Valid Property ব্যবহার করা যায়।
- ভুল Property Name দিলে Error দেখায়।
- Auto Suggestion পাওয়া যায়।
- Type Safety বৃদ্ধি পায়।

---

## Example ১: Basic Object

```ts
type User = {
    name: string;
    age: number;
    email: string;
};

type UserKeys = keyof User;
```

Result

```ts
"name" | "age" | "email"
```

এখানে `UserKeys` শুধুমাত্র এই তিনটি Value গ্রহণ করতে পারবে।

---

## Example ২: Variable-এর সাথে

```ts
type User = {
    name: string;
    age: number;
};

let key: keyof User;

key = "name";
key = "age";
```

Valid Value

```ts
"name"
"age"
```

Invalid

```ts
key = "email";
```

TypeScript Error দেখাবে কারণ `"email"` Property নেই।

---

## Example ৩: `typeof` + `keyof`

```ts
const user = {
    name: "Munna",
    age: 22,
    city: "Rangpur",
};

type UserKeys = keyof typeof user;
```

Result

```ts
"name" | "age" | "city"
```

এটি TypeScript-এর সবচেয়ে বেশি ব্যবহৃত Patternগুলোর একটি।

---

## Example ৪: Generic Function

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```

Usage

```ts
const user = {
    name: "Munna",
    age: 22,
};

getValue(user, "name");
getValue(user, "age");
```

Invalid

```ts
getValue(user, "email");
```

TypeScript Error

কারণ `"email"` Property Object-এ নেই।

---

# `typeof` এবং `keyof` এর পার্থক্য

| `typeof` | `keyof` |
|----------|----------|
| কোনো Value-এর Type বের করে | Object-এর Property-এর নাম বের করে |
| Variable, Object, Array, Function-এর সাথে কাজ করে | শুধুমাত্র Object Type-এর সাথে কাজ করে |
| Type Return করে | Union of Keys Return করে |
| Type Reuse করতে ব্যবহৃত হয় | Valid Property Restrict করতে ব্যবহৃত হয় |

---

# `typeof` + `keyof` একসাথে

```ts
const product = {
    id: 1,
    title: "Laptop",
    price: 500,
};

type Product = typeof product;

type ProductKeys = keyof Product;
```

Result

```ts
Product
```

```ts
{
    id: number;
    title: string;
    price: number;
}
```

Result

```ts
ProductKeys
```

```ts
"id" | "title" | "price"
```

---

# কখন `typeof` ব্যবহার করব?

- Variable-এর Type দরকার হলে
- Object-এর Type Reuse করতে
- Function-এর Type বের করতে
- Array-এর Type বের করতে
- Duplicate Type লেখা এড়াতে

---

# কখন `keyof` ব্যবহার করব?

- Object-এর Key দরকার হলে
- Generic Function-এ
- Dynamic Property Access-এর সময়
- Invalid Property Name আটকাতে

---

# সহজভাবে মনে রাখো

### `typeof`

👉 **Value → Type**

```
Variable থেকে Type বের করে।
```

---

### `keyof`

👉 **Object Type → Keys**

```
Object-এর সব Property-এর নাম বের করে।
```

---

### `keyof typeof`

👉 **Object → Type → Keys**

```
প্রথমে Object-এর Type বের করে,
তারপর সেই Type-এর সব Key বের করে।
```

---

# Interview Questions

## `typeof`

1. TypeScript-এ `typeof` কী?
2. `typeof` কেন ব্যবহার করা হয়?
3. `typeof` কি Function-এর সাথে ব্যবহার করা যায়?
4. `typeof` কি Array-এর সাথে ব্যবহার করা যায়?
5. JavaScript-এর `typeof` এবং TypeScript-এর `typeof` এর পার্থক্য কী?

---

## `keyof`

1. `keyof` কী?
2. `keyof` কী Return করে?
3. `keyof` কেন ব্যবহার করা হয়?
4. `keyof typeof` বলতে কী বোঝায়?
5. Generic Function-এ `keyof` কেন ব্যবহার করা হয়?

---

# সংক্ষেপে (Revision)

| Operator | কাজ |
|----------|------|
| `typeof` | কোনো Value-এর Type বের করে |
| `keyof` | Object Type-এর সব Key বের করে |
| `keyof typeof` | Object থেকে Key বের করার সবচেয়ে জনপ্রিয় উপায় |