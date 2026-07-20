# TypeScript: Objects & Optional Properties

## 📦 Objects

TypeScript lets you define the **shape** of an object.

### Example

``` ts
const user: {
  name: string;
  age: number;
} = {
  name: "Munna",
  age: 22,
};

console.log(user.name);
```

## ➕ More Properties

``` ts
const student: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Rahim",
  age: 20,
  isStudent: true,
};
```

## ❌ Missing Required Property

``` ts
const user: {
  name: string;
  age: number;
} = {
  name: "Munna",
};
```

**Error**

``` text
Property 'age' is missing.
```

## ❓ Optional Properties (`?`)

Use `?` when a property is **not required**.

### Syntax

``` ts
propertyName?: type;
```

### Example

``` ts
const user: {
  name: string;
  age?: number;
} = {
  name: "Munna",
};
```

You can also provide the optional property:

``` ts
const user = {
  name: "Munna",
  age: 22,
};
```

## 📋 Multiple Optional Properties

``` ts
const employee: {
  id: number;
  name: string;
  email?: string;
  phone?: string;
} = {
  id: 1,
  name: "Hasan",
};
```

## ⚙️ Function Example

``` ts
function printUser(user: { name: string; age?: number }) {
  console.log(user.name);

  if (user.age !== undefined) {
    console.log(user.age);
  }
}
```

## 🏠 Nested Object

``` ts
const person: {
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Munna",
  address: {
    city: "Rangpur",
    country: "Bangladesh",
  },
};
```

## 🌐 Optional Nested Property

``` ts
const person: {
  name: string;
  address?: {
    city: string;
    country: string;
  };
} = {
  name: "Munna",
};
```

## 🔗 Optional Chaining (`?.`)

``` ts
console.log(person.address?.city);
```

## 📝 Type Alias (Recommended)

``` ts
type User = {
  name: string;
  age?: number;
};

const user1: User = {
  name: "Munna",
};

const user2: User = {
  name: "Rahim",
  age: 22,
};
```

## 💡 Interview Questions

-   What is an object type in TypeScript?
-   What are optional properties?
-   What is the difference between `?` and `| undefined`?
-   What is optional chaining (`?.`)?
-   Why use `type` or `interface`?

## 🧪 Practice

1.  Create a `Book` object.
2.  Create a `Student` object with an optional `email`.
3.  Create a `Car` object with optional `year` and `color`.
4.  Write a function that prints a user's email if it exists.
5.  Create an `Employee` object with an optional `address`.
