# 🚀 TypeScript Generic Functions

## 📖 Introduction

### What is a Generic Function?

A **Generic Function** is...

---

## 🎯 Why Use Generic Functions?

- Reusable code
- Type safety
- Better IntelliSense

---

## 📝 Syntax

```ts
function identity<T>(value: T): T {
    return value;
}
```

### Explanation

- `T` is a type parameter.
- It acts as a placeholder.

---

## 📌 Examples

### Example 1: Without Generic

```ts
function getValue(value: string): string {
    return value;
}
```

### Example 2: Generic Function

```ts
function getValue<T>(value: T): T {
    return value;
}
```

### Example 3: Generic with Array

```ts
function firstElement<T>(arr: T[]): T {
    return arr[0];
}
```

## ✅ Advantages

- **Reusable**
- **Type Safe**
- **Less Duplicate Code**
- **Easy to Maintain**

---

## 💼 Real-World Use Cases

- React (`useState<T>`)
- Axios
- Express.js
- API Responses
- Utility Functions

---

## 📋 Summary

| Syntax | Description |
|--------|-------------|
| `<T>` | Generic Type |
| `<T, U>` | Multiple Generic Types |
| `extends` | Constraint |
| `keyof` | Object Keys |

---
