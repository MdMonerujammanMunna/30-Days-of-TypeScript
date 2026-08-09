# 📘 TypeScript Utility Types: Exclude & Extract

TypeScript-এর **Exclude** এবং **Extract** Utility Type সম্পর্কে সহজ ভাষায় বিস্তারিত আলোচনা, উদাহরণ এবং ব্যবহার।

---

# 🔴 Exclude কী?

`Exclude` হলো TypeScript-এর একটি **Utility Type**।

এটি একটি **Union Type** থেকে নির্দিষ্ট Type বা Value **বাদ দিয়ে** নতুন Type তৈরি করে।

---

## Syntax

```ts
Exclude<UnionType, ExcludedMembers>
```

### Parameter

- **UnionType** → মূল Union Type।
- **ExcludedMembers** → যেসব Type বা Value বাদ দিতে চান।

---

## উদাহরণ

```ts
type Role = "admin" | "user" | "guest";
```

`guest` বাদ দিতে চাই।

```ts
type ActiveRole = Exclude<Role, "guest">;
```

### Result

```ts
type ActiveRole = "admin" | "user";
```

---

## ব্যবহার

```ts
const role: ActiveRole = "admin";
```

✅ সঠিক

```ts
const role: ActiveRole = "guest";
```

❌ Error

কারণ `guest` Exclude করা হয়েছে।

---

# 🟢 Extract কী?

`Extract` হলো TypeScript-এর একটি **Utility Type**।

এটি একটি **Union Type** থেকে শুধুমাত্র নির্দিষ্ট Type বা Value **নির্বাচন করে** নতুন Type তৈরি করে।

---

## Syntax

```ts
Extract<UnionType, Members>
```

### Parameter

- **UnionType** → মূল Union Type।
- **Members** → যেসব Type বা Value রাখতে চান।

---

## উদাহরণ

```ts
type Role = "admin" | "user" | "guest";
```

শুধু `admin` এবং `user` রাখতে চাই।

```ts
type StaffRole = Extract<Role, "admin" | "user">;
```

### Result

```ts
type StaffRole = "admin" | "user";
```

---

## ব্যবহার

```ts
const role: StaffRole = "user";
```

✅ সঠিক

```ts
const role: StaffRole = "guest";
```

❌ Error

কারণ `guest` Extract করা হয়নি।

---

# 📝 আরও উদাহরণ

## Exclude

```ts
type Status = "pending" | "approved" | "rejected";

type FinalStatus = Exclude<Status, "pending">;
```

### Result

```ts
type FinalStatus = "approved" | "rejected";
```

---

## Extract

```ts
type Status = "pending" | "approved" | "rejected";

type ApprovedStatus = Extract<Status, "approved">;
```

### Result

```ts
type ApprovedStatus = "approved";
```

---

# 🌍 বাস্তব উদাহরণ

```ts
type UserRole = "admin" | "editor" | "user" | "guest";
```

### Exclude

```ts
type LoggedInRole = Exclude<UserRole, "guest">;
```

Result

```ts
type LoggedInRole = "admin" | "editor" | "user";
```

---

### Extract

```ts
type AdminRole = Extract<UserRole, "admin" | "editor">;
```

Result

```ts
type AdminRole = "admin" | "editor";
```

---

# ⚛️ Object Type-এর সাথে উদাহরণ

```ts
interface Cat {
  type: "cat";
  name: string;
}

interface Dog {
  type: "dog";
  name: string;
}

interface Bird {
  type: "bird";
  name: string;
}

type Animal = Cat | Dog | Bird;
```

### Extract

```ts
type Pet = Extract<Animal, Cat | Dog>;
```

Result

```ts
type Pet = Cat | Dog;
```

---

### Exclude

```ts
type NotBird = Exclude<Animal, Bird>;
```

Result

```ts
type NotBird = Cat | Dog;
```

---

# ⚖️ Exclude vs Extract

| Exclude | Extract |
|---------|---------|
| নির্দিষ্ট Type বাদ দেয় | নির্দিষ্ট Type নির্বাচন করে |
| Remove করার জন্য ব্যবহার হয় | Select করার জন্য ব্যবহার হয় |
| Union ছোট করে | Union Filter করে |
| `Exclude<Role, "guest">` | `Extract<Role, "admin">` |

---

# ✅ কখন Exclude ব্যবহার করবেন?

- Union Type থেকে কিছু Value বাদ দিতে।
- Invalid Type Remove করতে।
- Permission Filter করতে।

উদাহরণ

```ts
type ActiveRole = Exclude<Role, "guest">;
```

---

# ✅ কখন Extract ব্যবহার করবেন?

- Union Type থেকে নির্দিষ্ট Value নিতে।
- Allowed Type Filter করতে।
- Specific Category নির্বাচন করতে।

উদাহরণ

```ts
type StaffRole = Extract<Role, "admin" | "user">;
```

---

# 📌 সারসংক্ষেপ

## Exclude

- নির্দিষ্ট Type বাদ দেয়।
- Remove করার জন্য ব্যবহার হয়।
- Union Type ছোট করে।

## Extract

- নির্দিষ্ট Type নির্বাচন করে।
- Filter করার জন্য ব্যবহার হয়।
- Union Type থেকে প্রয়োজনীয় অংশ রাখে।

---

# 🧠 মনে রাখার সহজ ট্রিক

- ✅ **Exclude = Remove (বাদ দেওয়া)**
- ✅ **Extract = Select (নির্বাচন করা)**
