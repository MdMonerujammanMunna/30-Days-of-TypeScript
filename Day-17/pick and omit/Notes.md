# 📘 TypeScript Utility Types: Pick & Omit

TypeScript-এর **Pick** এবং **Omit** Utility Type সম্পর্কে সহজ ভাষায় বিস্তারিত আলোচনা, উদাহরণ এবং ব্যবহার।

---

# 🟢 Pick কী?

`Pick` হলো TypeScript-এর একটি **Utility Type**।

এটি কোনো Existing Type থেকে **নির্দিষ্ট কিছু Property নির্বাচন করে** একটি নতুন Type তৈরি করে।

---

## Syntax

```ts
Pick<Type, Keys>
```

### Parameter

- **Type** → যে Type থেকে Property নেওয়া হবে।
- **Keys** → যেসব Property রাখতে চান।

---

## উদাহরণ

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

শুধু `name` এবং `email` নিয়ে নতুন Type তৈরি করা।

```ts
type UserInfo = Pick<User, "name" | "email">;
```

### Result

```ts
{
  name: string;
  email: string;
}
```

---

## ব্যবহার

```ts
const user: UserInfo = {
  name: "Munna",
  email: "munna@gmail.com",
};
```

✅ সঠিক

```ts
const user: UserInfo = {
  name: "Munna",
  email: "munna@gmail.com",
  password: "123456",
};
```

❌ Error

কারণ `password` Property `Pick` করা হয়নি।

---

# 🔴 Omit কী?

`Omit` হলো TypeScript-এর আরেকটি Utility Type।

এটি Existing Type থেকে **নির্দিষ্ট কিছু Property বাদ দিয়ে** নতুন Type তৈরি করে।

---

## Syntax

```ts
Omit<Type, Keys>
```

---

## উদাহরণ

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

`password` বাদ দিতে চাই।

```ts
type SafeUser = Omit<User, "password">;
```

### Result

```ts
{
  id: number;
  name: string;
  email: string;
}
```

---

## ব্যবহার

```ts
const user: SafeUser = {
  id: 1,
  name: "Munna",
  email: "munna@gmail.com",
};
```

✅ সঠিক

```ts
const user: SafeUser = {
  id: 1,
  name: "Munna",
  email: "munna@gmail.com",
  password: "123456",
};
```

❌ Error

কারণ `password` Property `Omit` করা হয়েছে।

---

# 📝 একাধিক Property

## Pick

```ts
type UserData = Pick<User, "id" | "name" | "email">;
```

## Omit

```ts
type PublicUser = Omit<User, "password" | "id">;
```

---

# ⚖️ Pick vs Omit

| Pick | Omit |
|------|------|
| নির্দিষ্ট Property নির্বাচন করে | নির্দিষ্ট Property বাদ দেয় |
| কম সংখ্যক Property দরকার হলে ব্যবহার করা হয় | বেশিরভাগ Property দরকার হলে ব্যবহার করা হয় |
| `Pick<User, "name" \| "email">` | `Omit<User, "password">` |

---

# 🌍 বাস্তব উদাহরণ

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

### Profile Data

```ts
type Profile = Pick<User, "name" | "email">;
```

### API Response

```ts
type SafeUser = Omit<User, "password">;
```

---

# ⚛️ React উদাহরণ

```tsx
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

```tsx
type UserCardProps = Pick<User, "name" | "email">;

function UserCard({ name, email }: UserCardProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
    </>
  );
}
```

---

# ✅ কখন Pick ব্যবহার করবেন?

- অল্প কিছু Property দরকার হলে।
- Component Props তৈরি করতে।
- API Response-এর নির্দিষ্ট Field নিতে।
- ছোট Type তৈরি করতে।

```ts
type UserInfo = Pick<User, "name" | "email">;
```

---

# ✅ কখন Omit ব্যবহার করবেন?

- সব Property প্রয়োজন, শুধু ১-২টি বাদ দিতে হবে।
- Password-এর মতো Sensitive Data লুকাতে।
- Existing Type-এর বেশিরভাগ অংশ ব্যবহার করতে।

```ts
type SafeUser = Omit<User, "password">;
```

---

# 📌 সারসংক্ষেপ

## Pick

- নির্দিষ্ট Property নির্বাচন করে।
- ছোট Type তৈরিতে উপযোগী।
- Code Reuse বাড়ায়।

## Omit

- নির্দিষ্ট Property বাদ দেয়।
- Sensitive Data লুকাতে সাহায্য করে।
- Code আরও পরিষ্কার ও Maintainable হয়।

---

# 🧠 মনে রাখার সহজ ট্রিক

- ✅ **Pick = Select (নির্বাচন)**
- ✅ **Omit = Remove (বাদ দেওয়া)**
