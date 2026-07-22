# TypeScript: Union Types & Literal Types

## Union Types কী?

**Union Type** হলো এমন একটি Type যেখানে একটি Variable একাধিক Type-এর মধ্যে যেকোনো একটি Type-এর Value ধারণ করতে পারে।

`|` (Pipe) Symbol ব্যবহার করে Union Type তৈরি করা হয়।

### Syntax

```ts
let value: string | number;
```

উপরের উদাহরণে `value` Variable-এ `string` অথবা `number` রাখা যাবে।

---

## Example 1: String অথবা Number

```ts
let userId: string | number;

userId = 101;
userId = "USER-101";

// ❌ Error
userId = true;
```

### ব্যাখ্যা

- `number` Accept করবে।
- `string` Accept করবে।
- `boolean` Accept করবে না।

---

## Example 2: Function Parameter

```ts
function printId(id: string | number): void {
  console.log("User ID:", id);
}

printId(101);
printId("USER-101");

// ❌ Error
printId(true);
```

### ব্যাখ্যা

Function-এর Parameter `string` অথবা `number` দুই ধরনের Value-ই গ্রহণ করতে পারবে।

---

## Type Narrowing

Union Type ব্যবহার করলে TypeScript নিশ্চিতভাবে জানে না Variable-এর আসল Type কী। তাই আগে Type Check করতে হয়।

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### ব্যাখ্যা

- `typeof value === "string"` হলে String Method ব্যবহার করা যাবে।
- অন্যথায় এটি Number হিসেবে কাজ করবে।

---

# Literal Types কী?

Literal Type হলো এমন একটি Type যেখানে নির্দিষ্ট কিছু Value-ই Allow করা হয়।

এতে Variable যেকোনো Value নিতে পারে না, শুধুমাত্র নির্ধারিত Value-গুলো নিতে পারে।

---

## Example 1: String Literal

```ts
let status: "success" | "error" | "loading";

status = "success";
status = "loading";

// ❌ Error
status = "completed";
```

### ব্যাখ্যা

এখানে শুধুমাত্র তিনটি Value Valid।

- success
- error
- loading

অন্য কোনো String দিলে Error হবে।

---

## Example 2: Number Literal

```ts
let rating: 1 | 2 | 3 | 4 | 5;

rating = 5;
rating = 3;

// ❌ Error
rating = 10;
```

---

## Example 3: Boolean Literal

```ts
let isAdmin: true;

isAdmin = true;

// ❌ Error
isAdmin = false;
```

---

## Literal Type Function Example

```ts
function setTheme(theme: "light" | "dark") {
  console.log("Current Theme:", theme);
}

setTheme("light");
setTheme("dark");

// ❌ Error
setTheme("blue");
```

### ব্যাখ্যা

Function শুধুমাত্র `"light"` অথবা `"dark"` Value গ্রহণ করবে।

---

# Union Type + Literal Type একসাথে

```ts
type Role = "admin" | "user" | "guest";

function login(role: Role) {
  console.log(role);
}

login("admin");
login("user");

// ❌ Error
login("manager");
```

---

# Real Life Example

```ts
type PaymentMethod = "Bkash" | "Nagad" | "Rocket";

function pay(method: PaymentMethod) {
  console.log(`Payment via ${method}`);
}

pay("Bkash");
pay("Rocket");

// ❌ Error
pay("Visa");
```

---

# Union Types এর সুবিধা

-- একাধিক Type Support করে।

-- Flexible Code লেখা যায়।

-- Type Safety বজায় থাকে।

-- Runtime Error কমে যায়।

-- Function আরও Reusable হয়।

---

# Literal Types এর সুবিধা

-- নির্দিষ্ট Value-ই Accept করে।

-- Invalid Input প্রতিরোধ করে।

-- Auto Suggestion পাওয়া যায়।

-- Code আরও Secure হয়।

-- বড় Project-এ Error কমে যায়।

---

# Union Type বনাম Literal Type

| Union Type | Literal Type |
|------------|--------------|
| একাধিক Type Allow করে | নির্দিষ্ট Value Allow করে |
| `string \| number` | `"admin" \| "user"` |
| Type নিয়ে কাজ করে | Value নিয়ে কাজ করে |
| Flexible | Strict |

---

# কখন Union Type ব্যবহার করবেন?

-- যখন একটি Variable একাধিক Type-এর Value ধারণ করতে পারে।

-- Function-এর Parameter একাধিক Type Support করলে।

-- Optional বা Dynamic Data Handle করতে।

---

# কখন Literal Type ব্যবহার করবেন?

-- যখন নির্দিষ্ট কিছু Value-ই Allow করতে চান।

-- Theme, Status, Role, Payment Method ইত্যাদির জন্য।

-- Invalid Value Prevent করতে।

---

# Summary

## Union Type

-- `|` ব্যবহার করে একাধিক Type Allow করা হয়।

-- Example:

```ts
let value: string | number;
```

---

## Literal Type

-- নির্দিষ্ট কিছু Value Allow করা হয়।

-- Example:

```ts
let theme: "light" | "dark";
```

---

## মনে রাখুন

-- **Union Type = Multiple Types**

-- **Literal Type = Fixed Values**

-- Literal Type সাধারণত Union-এর সাথেই বেশি ব্যবহার করা হয়।

```ts
type Status = "pending" | "approved" | "rejected";
```

এটি TypeScript-এ সবচেয়ে বেশি ব্যবহৃত এবং Best Practice হিসেবে ধরা হয়।