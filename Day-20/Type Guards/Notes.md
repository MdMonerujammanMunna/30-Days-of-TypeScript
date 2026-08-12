# TypeScript `Type Guards`

## What are Type Guards?

Type Guards হলো TypeScript-এর এমন একটি Technique যা Runtime-এ কোনো Variable-এর Type যাচাই করে এবং সেই অনুযায়ী Type Narrowing করে।

Type Guard ব্যবহার করলে TypeScript বুঝতে পারে Variable-এর আসল Type কী এবং নিরাপদভাবে সেই Type-এর Property বা Method ব্যবহার করা যায়।

---

# Types of Type Guards

- `typeof`
- `instanceof`
- `in`
- Custom Type Guard (`is`)
- Equality Narrowing (`===`, `!==`)

---

# 1. `typeof` Type Guard

`typeof` মূলত Primitive Type চেক করার জন্য ব্যবহার করা হয়।

## Example

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}
```

---

## Supported Types

```ts
typeof value === "string"
typeof value === "number"
typeof value === "boolean"
typeof value === "bigint"
typeof value === "symbol"
typeof value === "undefined"
typeof value === "function"
typeof value === "object"
```

---

# 2. `instanceof` Type Guard

`instanceof` Class বা Constructor Function-এর Instance কিনা তা চেক করে।

## Example

```ts
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

---

# 3. `in` Type Guard

`in` কোনো Object-এর নির্দিষ্ট Property আছে কিনা তা চেক করে।

## Example

```ts
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

function print(person: Admin | User) {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.email);
  }
}
```

---

# 4. Custom Type Guard (`is`)

নিজের প্রয়োজন অনুযায়ী Type Guard Function তৈরি করা যায়।

## Example

```ts
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

---

# 5. Equality Narrowing

Value Compare করেও Type Narrow করা যায়।

## Example

```ts
function print(value: string | null) {
  if (value !== null) {
    console.log(value.toUpperCase());
  }
}
```

---

# Real-Life Example

```ts
type Success = {
  success: true;
  data: string;
};

type Error = {
  success: false;
  message: string;
};

function handleResponse(response: Success | Error) {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}
```

---

# Advantages

- Type Safety বৃদ্ধি করে।
- Runtime Error কমায়।
- IntelliSense আরও ভালো কাজ করে।
- Code Readability বাড়ায়।
- Type Narrowing সহজ করে।

---

# Difference Between Type Guards

| Type Guard | Used For |
|------------|----------|
| `typeof` | Primitive Types |
| `instanceof` | Class Instances |
| `in` | Object Property Check |
| `is` | Custom Type Guard |
| `===` / `!==` | Equality Narrowing |

---

# Summary

- `typeof` → Primitive Type Check
- `instanceof` → Class Instance Check
- `in` → Property Check
- `is` → Custom Type Guard
- `===` / `!==` → Equality Narrowing

---

## Quick Formula

```ts
typeof value === "string"
```

➡️ Checks Primitive Types

```ts
value instanceof ClassName
```

➡️ Checks Class Instance

```ts
"property" in object
```

➡️ Checks Object Property

```ts
function isFish(value): value is Fish
```

➡️ Creates a Custom Type Guard