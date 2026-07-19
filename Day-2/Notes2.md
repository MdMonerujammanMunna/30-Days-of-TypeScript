# 📚 TypeScript Arrays, Tuples & Readonly Arrays

## 1. Array

একই ধরনের (**same type**) অনেকগুলো value রাখার জন্য **Array** ব্যবহার করা হয়।

### ✅ Syntax 1

```ts
let numbers: number[] = [1, 2, 3, 4];
```

### ✅ Syntax 2 (Generic)

```ts
let numbers: Array<number> = [1, 2, 3];
```

### ✅ String Array

```ts
let names: string[] = ["Munna", "Rahim", "Karim"];
```

### ✅ Boolean Array

```ts
let isDone: boolean[] = [true, false, true];
```

### ✅ Mixed Array (Union Type)

```ts
let data: (string | number)[] = [10, "Hello", 30];
```

---

## 📌 Common Array Methods

```ts
let nums: number[] = [10, 20];

nums.push(30);     // Add at end

nums.pop();        // Remove last element

nums.unshift(5);   // Add at beginning

nums.shift();      // Remove first element

console.log(nums);
```

### 📖 Array Methods Summary

| Method | Description |
|--------|-------------|
| `push()` | Add element to the end |
| `pop()` | Remove last element |
| `unshift()` | Add element to the beginning |
| `shift()` | Remove first element |

---

# 2. Tuple

**Tuple** হলো এমন একটি Array যেখানে—

- ✅ Position fixed
- ✅ Type fixed

### Example

```ts
let person: [string, number] = ["Munna", 22];
```

এখানে—

- `0` → `string`
- `1` → `number`

---

## Multiple Types

```ts
let user: [number, string, boolean] = [
  1,
  "Munna",
  true
];
```

---

## Tuple with Optional Value

```ts
let student: [string, number?];

student = ["Munna"];

student = ["Munna", 22];
```

---

## Read Tuple Value

```ts
const point: [number, number] = [10, 20];

console.log(point[0]);
```

---

# 3. Readonly Array

**Readonly** মানে Array-এর value পরিবর্তন করা যাবে না।

```ts
let nums: readonly number[] = [1, 2, 3];
```

❌ নিচের কাজগুলো Error দিবে—

```ts
nums.push(4);

nums.pop();

nums[0] = 100;
```

✅ শুধু Read করা যাবে—

```ts
console.log(nums[0]);

console.log(nums.length);
```

---

# 📝 Summary

| Feature | Description |
|---------|-------------|
| **Array** | একই ধরনের অনেকগুলো value রাখে |
| **Tuple** | Fixed position + Fixed type |
| **Readonly Array** | Modify করা যায় না, শুধু Read করা যায় |