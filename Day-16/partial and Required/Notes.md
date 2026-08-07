# TypeScript Utility Types: `Partial` & `Required`

## `Partial<T>`

### What is `Partial`?

`Partial<T>` হলো TypeScript-এর একটি Utility Type যা কোনো Type-এর **সব Property-কে Optional (`?`)** করে দেয়।

### Syntax

```ts
Partial<Type>
```

---

## Example

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type PartialUser = Partial<User>;
```

উপরের `PartialUser` Type হবে:

```ts
type PartialUser = {
  name?: string;
  age?: number;
  email?: string;
};
```

এখন নিচের Object-টি সম্পূর্ণ Valid।

```ts
const user: PartialUser = {
  name: "Munna",
};
```

---

## Real-Life Example

ধরো User Profile Update API তৈরি করছো। User সব তথ্য একসাথে Update করবে না।

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

function updateUser(user: Partial<User>) {
  console.log(user);
}

updateUser({
  age: 22,
});
```

এখানে শুধু `age` পাঠালেও কোনো Error হবে না।

---

## Advantages

- Update API তৈরিতে খুব উপকারী।
- সব Property Optional হয়ে যায়।
- কম Code লিখতে হয়।
- Type Safety বজায় থাকে।

---

# `Required<T>`

## What is `Required`?

`Required<T>` হলো TypeScript-এর একটি Utility Type যা কোনো Type-এর **সব Optional Property-কে Required** করে দেয়।

### Syntax

```ts
Required<Type>
```

---

## Example

```ts
type User = {
  name?: string;
  age?: number;
  email?: string;
};

type RequiredUser = Required<User>;
```

এখন `RequiredUser` হবে:

```ts
type RequiredUser = {
  name: string;
  age: number;
  email: string;
};
```

---

## Valid Example

```ts
const user: RequiredUser = {
  name: "Munna",
  age: 22,
  email: "munna@example.com",
};
```

---

## Invalid Example

```ts
const user: RequiredUser = {
  name: "Munna",
};
```

উপরের Code-এ Error হবে কারণ `age` এবং `email` দেওয়া হয়নি।

---

## Real-Life Example

ধরো Registration Form-এ সব তথ্য বাধ্যতামূলক।

```ts
type User = {
  name?: string;
  age?: number;
};

function register(user: Required<User>) {
  console.log(user);
}
```

এখন `name` এবং `age` দুটোই দিতে হবে।

---

## Advantages

- সব Property Required হয়ে যায়।
- Missing Property Error ধরতে সাহায্য করে।
- Form Validation ও Registration-এর মতো ক্ষেত্রে উপকারী।
- Type Safety আরও শক্তিশালী হয়।

---

# Difference Between `Partial` & `Required`

| Utility Type | Description |
|--------------|-------------|
| `Partial<T>` | সব Property Optional (`?`) করে দেয় |
| `Required<T>` | সব Optional Property Required করে দেয় |

---

# Quick Comparison

```ts
type User = {
  name?: string;
  age?: number;
};
```

### Partial

```ts
type A = Partial<User>;
```

Result

```ts
{
  name?: string;
  age?: number;
}
```

---

### Required

```ts
type B = Required<User>;
```

Result

```ts
{
  name: string;
  age: number;
}
```

---

# Summary

- `Partial<T>` → সব Property Optional করে।
- `Required<T>` → সব Optional Property Required করে।
- `Partial` সাধারণত Update API-এর জন্য ব্যবহার করা হয়।
- `Required` সাধারণত Registration, Validation এবং Required Data নিশ্চিত করার জন্য ব্যবহার করা হয়।

---

## Quick Formula

```ts
Partial<Type>
```

➡️ Makes all properties optional.

```ts
Required<Type>
```

➡️ Makes all properties required.