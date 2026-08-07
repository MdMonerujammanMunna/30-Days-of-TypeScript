# TypeScript `Record` Utility Type

## What is `Record`?

`Record` হলো TypeScript-এর একটি **Utility Type** যা নির্দিষ্ট **Key** এবং **Value** type ব্যবহার করে একটি Object Type তৈরি করে।

### Syntax

```ts
Record<Keys, ValueType>
```

- **Keys** → Object-এর Key-এর Type
- **ValueType** → প্রতিটি Key-এর Value-এর Type

---

## Example 1: String Key

```ts
type StudentMarks = Record<string, number>;

const marks: StudentMarks = {
  math: 90,
  english: 85,
  physics: 95,
};
```

### Explanation

- Key Type → `string`
- Value Type → `number`

অর্থাৎ যেকোনো string key ব্যবহার করা যাবে, কিন্তু value অবশ্যই `number` হতে হবে।

---

## Example 2: Fixed Keys

```ts
type UserRole = "admin" | "user" | "guest";

type Permissions = Record<UserRole, boolean>;

const permissions: Permissions = {
  admin: true,
  user: true,
  guest: false,
};
```

### Explanation

এখানে শুধুমাত্র তিনটি key ব্যবহার করা যাবে:

- admin
- user
- guest

---

## Incorrect Example

```ts
const permissions: Permissions = {
  admin: true,
  user: true,
};
```

### Why Error?

কারণ `guest` key নেই।

---

## Equivalent Without `Record`

```ts
type Permissions = {
  admin: boolean;
  user: boolean;
  guest: boolean;
};
```

`Record` এই একই Object Type-কে আরও ছোট এবং পরিষ্কারভাবে লেখার সুবিধা দেয়।

---

## Real-Life Use Cases

- Role → Permission
- Status → Color
- Language → Translation
- Product ID → Product
- API Response Map
- Dictionary Object

---

## Example: Status Color

```ts
const statusColor: Record<string, string> = {
  success: "green",
  error: "red",
  warning: "yellow",
};
```

---

## Example: Product Map

```ts
type Product = {
  id: number;
  name: string;
};

const products: Record<number, Product> = {
  1: {
    id: 1,
    name: "Laptop",
  },
  2: {
    id: 2,
    name: "Phone",
  },
};
```

---

## Advantages

- Less code
- Better readability
- Strong type safety
- Easy to maintain
- Great for object mapping

---

# Summary

- `Record<K, V>` একটি Object Type তৈরি করে।
- `K` = Key-এর Type
- `V` = Value-এর Type
- Object Mapping-এর জন্য `Record` খুবই উপকারী।

## Quick Formula

```ts
Record<KeyType, ValueType>
```

**মনে রাখো:**

> **Record = Fixed Key + Fixed Value Type**