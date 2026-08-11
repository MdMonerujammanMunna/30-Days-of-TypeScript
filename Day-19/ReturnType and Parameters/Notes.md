# TypeScript `ReturnType` & `Parameters`

## `ReturnType<T>`

### What is `ReturnType`?

`ReturnType<T>` হলো TypeScript-এর একটি Utility Type যা কোনো Function-এর **Return Type** বের করে দেয়।

### Syntax

```ts
ReturnType<typeof functionName>
```

---

## Example

```ts
function getUser() {
  return {
    id: 1,
    name: "Munna",
  };
}

type User = ReturnType<typeof getUser>;
```

এখন `User` Type হবে:

```ts
type User = {
  id: number;
  name: string;
};
```

---

## Real-Life Example

```ts
function createToken(userId: number) {
  return {
    token: "abc123",
    userId,
  };
}

type Token = ReturnType<typeof createToken>;

const token: Token = {
  token: "abc123",
  userId: 1,
};
```

---

## Advantages

- Function-এর Return Type আলাদা করে লিখতে হয় না।
- Duplicate Type কমে যায়।
- Refactor করা সহজ হয়।
- Type Safety বজায় থাকে।

---

# `Parameters<T>`

## What is `Parameters`?

`Parameters<T>` হলো TypeScript-এর একটি Utility Type যা কোনো Function-এর **Parameters-এর Type** Tuple আকারে বের করে দেয়।

### Syntax

```ts
Parameters<typeof functionName>
```

---

## Example

```ts
function createUser(name: string, age: number) {
  return {
    name,
    age,
  };
}

type UserParams = Parameters<typeof createUser>;
```

এখন `UserParams` হবে:

```ts
type UserParams = [string, number];
```

---

## Real-Life Example

```ts
function login(email: string, password: string) {
  return true;
}

type LoginParams = Parameters<typeof login>;

const credentials: LoginParams = [
  "munna@example.com",
  "123456",
];
```

---

## Advantages

- Function-এর Parameter Type পুনরায় ব্যবহার করা যায়।
- Wrapper Function তৈরি করতে সুবিধা হয়।
- Duplicate Type কমে যায়।
- Type Safety বজায় থাকে।

---

# Difference Between `ReturnType` & `Parameters`

| Utility Type | Description |
|--------------|-------------|
| `ReturnType<T>` | Function-এর Return Type বের করে |
| `Parameters<T>` | Function-এর Parameters Tuple বের করে |

---

# Quick Comparison

```ts
function calculate(a: number, b: number) {
  return a + b;
}
```

### ReturnType

```ts
type Result = ReturnType<typeof calculate>;
```

Result

```ts
number
```

---

### Parameters

```ts
type Args = Parameters<typeof calculate>;
```

Result

```ts
[number, number]
```

---

# Summary

- `ReturnType<T>` → Function-এর Return Type বের করে।
- `Parameters<T>` → Function-এর Parameters Tuple বের করে।
- `ReturnType` সাধারণত Function-এর Return Value-এর Type পুনরায় ব্যবহার করার জন্য ব্যবহৃত হয়।
- `Parameters` সাধারণত Function Wrapper, Helper Function এবং Middleware তৈরির সময় ব্যবহৃত হয়।

---

## Quick Formula

```ts
ReturnType<typeof functionName>
```

➡️ Gets the return type of a function.

```ts
Parameters<typeof functionName>
```

➡️ Gets the parameter types of a function as a tuple.