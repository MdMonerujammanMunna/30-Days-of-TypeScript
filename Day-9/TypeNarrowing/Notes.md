# Type Narrowing in TypeScript

Type Narrowing হলো TypeScript-এর একটি গুরুত্বপূর্ণ feature, যার মাধ্যমে TypeScript কোনো variable-এর নির্দিষ্ট type বুঝতে পারে এবং সেই অনুযায়ী safe code লিখতে সাহায্য করে।

সহজ ভাষায়:

> Type Narrowing মানে হলো একটি বড় type কে নির্দিষ্ট ছোট type-এ নিয়ে আসা।

---

# কেন Type Narrowing ব্যবহার করি?

JavaScript-এ একটি variable বিভিন্ন type-এর value নিতে পারে।

Example:

```ts
function print(value: string | number) {
  console.log(value);
}
```

এখানে `value` হতে পারে:

- string
- number

কিন্তু আমরা যদি string-এর method ব্যবহার করি:

```ts
value.toUpperCase();
```

তাহলে TypeScript error দিবে, কারণ সে জানে না value string নাকি number।

এখানে Type Narrowing ব্যবহার করতে হয়।

---

# Type Narrowing এর ধরন

## 1. typeof Narrowing

`typeof` ব্যবহার করে primitive type check করা হয়।

Example:

```ts
function print(value: string | number) {

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  else {
    console.log(value.toFixed(2));
  }

}
```

এখানে TypeScript বুঝতে পারে:

- if block এ value হবে string
- else block এ value হবে number

---

## 2. Equality Narrowing

`===` ব্যবহার করে type narrow করা যায়।

Example:

```ts
function checkStatus(status: "success" | "error") {

  if (status === "success") {
    console.log("Success");
  }

  else {
    console.log("Error");
  }

}
```

---

## 3. Truthiness Narrowing

Value আছে কিনা check করার মাধ্যমে type narrow করা যায়।

Example:

```ts
function printName(name?: string) {

  if(name){
    console.log(name.toUpperCase());
  }

}
```

এখানে `if(name)` এর পরে TypeScript জানে name undefined নয়।

---

## 4. in Operator Narrowing

Object-এর property check করার জন্য `in` ব্যবহার করা হয়।

Example:

```ts
interface Admin {
  name: string;
  permissions: string[];
}


interface User {
  name: string;
  email: string;
}


function checkUser(user: Admin | User){

  if("permissions" in user){
    console.log(user.permissions);
  }

  else{
    console.log(user.email);
  }

}
```

---

## 5. instanceof Narrowing

Class-এর instance check করার জন্য ব্যবহার করা হয়।

Example:

```ts
class Dog {

  bark(){
    console.log("Woof");
  }

}


class Cat {

  meow(){
    console.log("Meow");
  }

}


function animalSound(animal: Dog | Cat){

  if(animal instanceof Dog){
    animal.bark();
  }

  else{
    animal.meow();
  }

}
```

---

## 6. Discriminated Union Narrowing

বড় project-এ এটি অনেক ব্যবহার করা হয়।

Example:

```ts
type Result =
 | {
    status: "success";
    data: string;
 }
 | {
    status: "error";
    message: string;
 };


function handleResult(result: Result){

  if(result.status === "success"){
    console.log(result.data);
  }

  else{
    console.log(result.message);
  }

}
```

---

## 7. Custom Type Guard

নিজের তৈরি function দিয়ে type check করা যায়।

Example:

```ts
function isString(value: unknown): value is string {

  return typeof value === "string";

}


function print(value: unknown){

  if(isString(value)){
    console.log(value.toUpperCase());
  }

}
```

---

# Common Type Narrowing Methods

| Method | কাজ |
|---|---|
| typeof | Primitive type check |
| instanceof | Class check |
| in | Object property check |
| === | Exact value check |
| Truthiness | null/undefined check |
| Custom Guard | নিজের type checker |

---

# Real Project Example

API Response handle করার সময়:

```ts
type ApiResponse =
 | {
    success: true;
    data: string;
 }
 | {
    success: false;
    error: string;
 };


function handleResponse(response: ApiResponse){

  if(response.success){
    console.log(response.data);
  }

  else{
    console.log(response.error);
  }

}
```

---

# Type Narrowing এর সুবিধা

- Type safety বাড়ায়
- Runtime error কমায়
- Code clean করে
- Better autocomplete পাওয়া যায়
- Large project maintain করা সহজ হয়

---

# Summary

- Type Narrowing TypeScript-এর একটি গুরুত্বপূর্ণ feature।
- এটি variable-এর exact type বুঝতে সাহায্য করে।
- `typeof`, `instanceof`, `in`, `===` এবং Custom Type Guard সবচেয়ে বেশি ব্যবহার হয়।
- Safe এবং maintainable code লেখার জন্য Type Narrowing খুব প্রয়োজনীয়।