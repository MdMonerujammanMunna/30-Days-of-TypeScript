# TypeScript-এ `as const` (Enum-এর আধুনিক বিকল্প)

`as const` হলো TypeScript-এর একটি ফিচার যা একটি Object বা Array-কে **readonly** করে এবং প্রতিটি ভ্যালুকে **literal type** হিসেবে সংরক্ষণ করে। আধুনিক TypeScript-এ অনেক ক্ষেত্রে `enum`-এর পরিবর্তে `as const` ব্যবহার করা হয়।

---

## কেন `as const` ব্যবহার করবেন?

- ✅ অতিরিক্ত JavaScript কোড তৈরি করে না
- ✅ Bundle Size ছোট থাকে
- ✅ Tree Shaking ভালো হয়
- ✅ Literal Type পাওয়া যায়
- ✅ Readonly Object তৈরি হয়
- ✅ Modern TypeScript-এ Recommended

---

# Basic Syntax

```ts
const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
  GUEST: "GUEST",
} as const;
```

---

# `as const` কী করে?

### Without `as const`

```ts
const Role = {
  ADMIN: "ADMIN",
};
```

Type হবে

```ts
{
  ADMIN: string;
}
```

এখানে `"ADMIN"` শুধু `string` হিসেবে ধরা হচ্ছে।

---

### With `as const`

```ts
const Role = {
  ADMIN: "ADMIN",
} as const;
```

Type হবে

```ts
{
  readonly ADMIN: "ADMIN";
}
```

এখানে

- Property `readonly`
- Value `"ADMIN"` একটি Literal Type

---

# Enum Type তৈরি করা

```ts
const Status = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
} as const;

type StatusType = (typeof Status)[keyof typeof Status];
```

Type হবে

```ts
type StatusType =
  | "PENDING"
  | "SUCCESS"
  | "FAILED";
```

---

# Example

```ts
const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

type RoleType = (typeof Role)[keyof typeof Role];

function login(role: RoleType) {
  console.log(role);
}

login(Role.ADMIN);
login(Role.USER);
```

---

## Valid

```ts
login("ADMIN");
```

---

## Invalid

```ts
login("SUPER_ADMIN");
```

❌ Error হবে কারণ `"SUPER_ADMIN"` `RoleType`-এর মধ্যে নেই।

---

# Value Access করা

```ts
console.log(Role.ADMIN);
```

Output

```txt
ADMIN
```

---

# Loop করা

```ts
Object.values(Role).forEach((role) => {
  console.log(role);
});
```

Output

```txt
ADMIN
USER
```

---

# Array-এর সাথে `as const`

```ts
const Colors = ["red", "green", "blue"] as const;

type Color = typeof Colors[number];
```

Type হবে

```ts
type Color =
  | "red"
  | "green"
  | "blue";
```

---

# Interface-এ ব্যবহার

```ts
const Theme = {
  LIGHT: "light",
  DARK: "dark",
} as const;

type ThemeType = (typeof Theme)[keyof typeof Theme];

interface User {
  name: string;
  theme: ThemeType;
}
```

---

# Traditional Enum

```ts
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
```

Compile হওয়ার পরে JavaScript

```js
var Role;
(function (Role) {
  Role["ADMIN"] = "ADMIN";
  Role["USER"] = "USER";
})(Role || (Role = {}));
```

এখানে অতিরিক্ত JavaScript তৈরি হয়েছে।

---

# `as const`

```ts
const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;
```

Compile হওয়ার পরে JavaScript

```js
const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
};
```

এখানে কোনো অতিরিক্ত JavaScript তৈরি হয় না।

---

# `enum` vs `as const`

| বৈশিষ্ট্য | `enum` | `as const` |
|-----------|--------|------------|
| অতিরিক্ত JS তৈরি করে | ✅ হ্যাঁ | ❌ না |
| Bundle Size | বড় | ছোট |
| Tree Shaking | ❌ না | ✅ হ্যাঁ |
| Readonly | ❌ না | ✅ হ্যাঁ |
| Literal Type | ❌ না | ✅ হ্যাঁ |
| Modern TypeScript | ⚠️ কম ব্যবহৃত | ✅ Recommended |

---

# কখন `as const` ব্যবহার করবেন?

- যখন শুধু কিছু Constant Value সংরক্ষণ করতে হবে।
- যখন Literal Type দরকার হবে।
- React / Next.js Project-এ।
- API Status, User Role, Theme, Permission ইত্যাদির জন্য।

---

# Best Practice

✅ `as const` ব্যবহার করুন যদি Runtime-এ `enum`-এর বিশেষ সুবিধা দরকার না হয়।

❌ শুধুমাত্র Enum-এর Runtime Feature দরকার হলে `enum` ব্যবহার করুন।

---

# সংক্ষেপে

- `as const` Object-কে Readonly করে।
- Value-গুলোকে Literal Type হিসেবে সংরক্ষণ করে।
- সহজে Union Type তৈরি করা যায়।
- অতিরিক্ত JavaScript তৈরি হয় না।
- আধুনিক TypeScript Project-এ এটি `enum`-এর চেয়ে বেশি ব্যবহৃত ও Recommended।