# Generic Constraints in TypeScript

> **Generic Constraints** ব্যবহার করা হয় Generic Type-কে নির্দিষ্ট কিছু নিয়মের মধ্যে সীমাবদ্ধ (restrict) করার জন্য।  
> এর মাধ্যমে নিশ্চিত করা যায় যে Generic Type শুধুমাত্র নির্দিষ্ট property বা type গ্রহণ করবে।

---

# Why Use Generic Constraints?

Without Constraints, Generic Function যেকোনো type গ্রহণ করতে পারে।

```ts
function printValue<T>(value: T): T {
  return value;
}

printValue(10);
printValue("Hello");
printValue(true);
```

কিন্তু অনেক সময় আমরা চাই শুধুমাত্র এমন value গ্রহণ করুক যেটির মধ্যে নির্দিষ্ট property আছে।

এক্ষেত্রে **extends** ব্যবহার করা হয়।

---

# Syntax

```ts
function functionName<T extends Constraint>(value: T) {
  // code
}
```

---

# extends Keyword

`extends` দ্বারা বোঝানো হয়—

> Generic Type অবশ্যই Constraint-এর নিয়ম অনুসরণ করবে।

Example

```ts
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}
```

---

# Example 1 — String

```ts
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}

console.log(getLength("TypeScript"));
```

### Output

```text
10
```

---

# Example 2 — Array

```ts
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}

console.log(getLength([10, 20, 30, 40]));
```

### Output

```text
4
```

---

# Example 3 — Object

```ts
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}

console.log(
  getLength({
    length: 50,
    name: "Munna",
  })
);
```

### Output

```text
50
```

---

# Example 4 — Invalid Type

```ts
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  return value.length;
}

getLength(100);
```

### Output

```text
❌ Error

Argument of type 'number'
is not assignable to parameter
of type 'HasLength'.
```

---

# Using Multiple Properties

```ts
interface User {
  id: number;
  name: string;
}

function printUser<T extends User>(user: T) {
  console.log(user.id);
  console.log(user.name);
}

printUser({
  id: 1,
  name: "Munna",
});
```

### Output

```text
1
Munna
```

---

# Extra Properties Are Allowed

```ts
interface User {
  id: number;
  name: string;
}

function printUser<T extends User>(user: T) {
  console.log(user.id);
  console.log(user.name);
}

printUser({
  id: 10,
  name: "Rahim",
  email: "rahim@gmail.com",
  age: 22,
});
```

### Output

```text
10
Rahim
```

> কারণ Generic Constraint শুধুমাত্র minimum required property check করে।

---

# Constraint with keyof

`keyof` ব্যবহার করে নিশ্চিত করা যায় যে শুধুমাত্র object-এর valid key ব্যবহার করা হচ্ছে।

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}

const user = {
  id: 1,
  name: "Munna",
  email: "munna@gmail.com",
};

console.log(getProperty(user, "name"));
```

### Output

```text
Munna
```

---

# Invalid keyof Example

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}

const user = {
  id: 1,
  name: "Munna",
};

getProperty(user, "age");
```

### Output

```text
❌ Error

Argument of type '"age"'
is not assignable to parameter
of type '"id" | "name"'.
```

---

# Constraint with Interface

```ts
interface Person {
  name: string;
}

function greet<T extends Person>(person: T) {
  console.log(`Hello ${person.name}`);
}

greet({
  name: "Munna",
});
```

### Output

```text
Hello Munna
```

---

# Constraint with Class

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

function printAnimal<T extends Animal>(animal: T) {
  console.log(animal.name);
}

printAnimal(new Animal("Tiger"));
```

### Output

```text
Tiger
```

---

# Real-Life Example

```ts
interface ApiResponse {
  success: boolean;
}

function handleResponse<T extends ApiResponse>(
  response: T
) {
  console.log(response.success);
}

handleResponse({
  success: true,
  message: "Login Successful",
});
```

### Output

```text
true
```

---

# Common Constraints

| Constraint | Meaning |
|------------|---------|
| `T extends string` | Only String |
| `T extends number` | Only Number |
| `T extends boolean` | Only Boolean |
| `T extends object` | Only Object |
| `T extends any[]` | Only Array |
| `T extends HasLength` | Must have length property |
| `K extends keyof T` | Must be a valid key of T |

---

# Advantages

- Restricts Generic Types
- Prevents Invalid Data
- Improves Type Safety
- Better IntelliSense
- Reduces Runtime Errors
- Reusable Code
- Cleaner APIs
- Compile-Time Error Detection

---

# When to Use?

Use Generic Constraints when—

- You need specific properties.
- You need type safety.
- You want reusable generic functions.
- You are working with APIs.
- You are creating utility functions.
- You want compile-time validation.

---

# Summary

- Generic Constraint ব্যবহার করতে `extends` keyword লাগে।
- Constraint Generic Type-কে limit করে।
- Invalid type compile-time এ error দেয়।
- `keyof` valid property access নিশ্চিত করে।
- Interface, Class এবং Built-in Type সবগুলোর সাথেই Constraint ব্যবহার করা যায়।
- Generic Constraints TypeScript-এর অন্যতম গুরুত্বপূর্ণ Feature যা Code-কে Safe, Reusable এবং Maintainable করে।