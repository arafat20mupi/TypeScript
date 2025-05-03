# Module 1

---

## 🧾 **TypeScript পরিচিতি**

TypeScript হলো JavaScript-এর একটি সুপারসেট, যার মাধ্যমে স্ট্যাটিক টাইপিং এবং আরও উন্নত ফিচার পাওয়া যায়। এটি বড় প্রজেক্টে বাগ কমাতে সাহায্য করে।

---

## 🛠️ **Windows এ TypeScript ও ts-node-dev ইনস্টলেশন**

### ✅ Step 1: TypeScript ইনস্টল করো

```bash
npm install -g typescript
```

চেক করতে:

```bash
tsc -v
```

### ✅ Step 2: Initialize TypeScript

```bash
tsc --init
```

### ✅ Step 4: Update tsconfig.json

{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true

  }
}

### ✅ Step 5: `ts-node-dev` ডেভেলপমেন্ট টুল ইনস্টল করো

```bash
npm i ts-node-dev --save-dev
```

### ✅ Step 6: `server.ts` বা `index.ts` ফাইল রান করো

```bash
npx ts-node-dev --respawn --transpile-only index.ts
```

---

## 🧑‍💻 **তোমার প্রথম TypeScript প্রোগ্রাম**

** `index.ts` ফাইল তৈরি করো:**

```ts
let message: string = "Hello TypeScript!";
console.log(message);
```

রান করো:

```bash
npx ts-node-dev --respawn --transpile-only index.ts
```

---

## 🧠 **Basic Data Types**

```ts
let userName: string = "Arafat";
let age: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["coding", "reading"];
let data: any = 123; // যেকোনো টাইপ হতে পারে
```

---

## 🔁 **Function, Spread, Rest Operator, Destructuring**

### ✅ ফাংশন:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### ✅ Rest Operator:

```ts
function addNumbers(...nums: number[]): number {
  return nums.reduce((sum, n) => sum + n, 0);
}
```

### ✅ Spread Operator:

```ts
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

### ✅ Destructuring:

```ts
const person = { name: "Arafat", age: 25 };
const { name, age } = person;

const colors = ["red", "green"];
const [first, second] = colors;
```

---

## 🏷️ **Type Alias, Union, Intersection**

### ✅ Type Alias:

```ts
type User = {
  name: string;
  email: string;
};
```

### ✅ Union Type:

```ts
let userId: number | string;
userId = 101;
userId = "abc101";
```

### ✅ Intersection Type:

```ts
type Admin = { role: string };
type Person = { name: string };

type AdminUser = Admin & Person;

const admin: AdminUser = { role: "Manager", name: "Arafat" };
```

---

## 🔀 **Ternary, Optional Chaining, Nullish Coalescing**

### ✅ Ternary:

```ts
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
```

### ✅ Optional Chaining:

```ts
const user = { contact: { email: "a@b.com" } };
console.log(user?.contact?.email);
```

### ✅ Nullish Coalescing:

```ts
const name = null;
const finalName = name ?? "Guest"; // যদি null বা undefined হয়, তাহলে "Guest"
```

---

## ❗ **Never, Unknown, Nullable Types**

### ✅ Never:

```ts
function throwError(): never {
  throw new Error("Error occurred");
}
```

### ✅ Unknown:

```ts
let value: unknown = "something";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### ✅ Nullable:

```ts
let myName: string | null = null;
myName = "Arafat";
```

---

## ✅ Summary: ডেভেলপমেন্টের জন্য রান কমান্ড

```bash
npx ts-node-dev --respawn --transpile-only server.ts
```
