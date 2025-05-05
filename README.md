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




# Module 2

## 📘 TypeScript Advanced Concepts

এই ডকুমেন্টটি TypeScript-এর কিছু গুরুত্বপূর্ণ ও ইন্টারমিডিয়েট থেকে অ্যাডভান্সড টপিক কভার করে। প্রতিটি সেকশনে কনসেপ্ট ব্যাখ্যা ও উদাহরণসহ ব্যাখ্যা করা হয়েছে।

---

### 🔷 2-1: Type Assertion / Type Narrowing

**🟦 Type Assertion:** তুমি কম্পাইলারকে জানিয়ে দাও যে তুমি টাইপ সম্পর্কে নিশ্চিত — যেমন:

```ts
let value: any = "Hello";
let strLength = (value as string).length;
```

**🟦 Type Narrowing:** শর্তের মাধ্যমে টাইপ নির্ধারণ করা — যেমন:

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

---

### 🔷 2-2: Interface vs Type Alias

**Interface:**

```ts
interface User {
  name: string;
  age: number;
}
```

**Type Alias:**

```ts
type User = {
  name: string;
  age: number;
};
```

✅ Similarities:

* উভয়েই object টাইপ define করতে পারে।

🔁 Differences:

* Interface extend করা যায় (inheritance), Type বেশি flexible।

---

### 🔷 2-3: Introduction to Generics

**Generics** allow you to create reusable components:

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(5));
console.log(identity<string>("Hello"));
```

---

### 🔷 2-4: Generics with Interface

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "Arafat" },
};
```

---

### 🔷 2-5: Function with Generics

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const combined = merge({ name: "Arafat" }, { age: 25 });
```

---

### 🔷 2-6: Constraints in TypeScript

**Constraint** মানে — Generics-কে নির্দিষ্ট টাইপের সীমার মধ্যে রাখা:

```ts
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("Hello");
printLength([1, 2, 3]);
```

---

### 🔷 2-7: Constraint Using `keyof`

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "Sami", age: 30 };
console.log(getProperty(person, "name"));
```

---

### 🔷 2-8: Asynchronous TypeScript

```ts
const fetchData = async (): Promise<string> => {
  return "Data loaded";
};

fetchData().then(data => console.log(data));
```

---

### 🔷 2-9: Conditional Types

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>;  // "Yes"
type B = IsString<number>;  // "No"
```

---

### 🔷 2-10: Mapped Types

Mapped Type দিয়ে আমরা object টাইপের সব প্রপার্টি একসাথে বদলাতে পারি:

```ts
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  [K in keyof User]: User[K];
};
```

---

### 🔷 2-11: Utility Types

✅ TypeScript Built-in Utility Types:

| Utility Type   | ব্যাখ্যা                                                 |
| -------------- | -------------------------------------------------------- |
| `Partial<T>`   | সব প্রপার্টি optional হয়                                 |
| `Required<T>`  | সব প্রপার্টি required হয়                                 |
| `Readonly<T>`  | সব প্রপার্টি read-only হয়                                |
| `Pick<T, K>`   | নির্দিষ্ট কিছু প্রপার্টি নেয়                             |
| `Omit<T, K>`   | নির্দিষ্ট কিছু প্রপার্টি বাদ দেয়                         |
| `Record<K, T>` | একটি object তৈরি করে যেখানে key টাইপ `K`, value টাইপ `T` |

**Example:**

```ts
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;
```



# Module 3

---

# 📘 OOP in TypeScript – বাংলা ডকুমেন্টেশন

এই ডকুমেন্টে TypeScript এর Object-Oriented Programming (OOP) এর মূল ধারণাগুলো ব্যাখ্যা করা হয়েছে। এই ধারণাগুলো বুঝলে তুমি স্কেলেবল, ক্লিন ও রিইউজেবল কোড লিখতে পারবে।

---

## 🔷 1. Classes – ক্লাস ও অবজেক্ট

ক্লাস হলো অবজেক্ট তৈরির জন্য একটি ব্লুপ্রিন্ট। এতে থাকে state (properties) এবং behavior (methods)।

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
  }
}

const person1 = new Person("Arafat", 22);
person1.greet();
```

---

## 🔷 2. Inheritance – উত্তরাধিকার

একটি ক্লাস অন্য একটি ক্লাসের প্রপার্টি ও মেথড নিতে পারে। এটিকে Inheritance বলা হয়।

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move();
dog.bark();
```

---

## 🔷 3. Type Guard – `typeof` ও `in` দিয়ে

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

function hasName(obj: any): obj is { name: string } {
  return "name" in obj;
}
```

---

## 🔷 4. Type Guard – `instanceof` দিয়ে

```ts
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCargo() {
    console.log("Loading cargo...");
  }
}

function useVehicle(vehicle: Car | Truck) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}
```

---

## 🔷 5. Access Modifiers – `public`, `private`, `protected`

```ts
class BankAccount {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Arafat", 1000);
console.log(acc.getBalance()); // 1000
```

---

## 🔷 6. Getter & Setter

```ts
class Student {
  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    }
  }
}

const s = new Student();
s.name = "Rafi";
console.log(s.name); // Rafi
```

---

## 🔷 7. Static Properties & Methods

```ts
class MathUtil {
  static PI = 3.1416;

  static square(n: number): number {
    return n * n;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));
```

---

## 🔷 8. Polymorphism – বহু রূপ

```ts
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing square");
  }
}

function render(shape: Shape) {
  shape.draw();
}

render(new Circle());
render(new Square());
```

---

## 🔷 9. Abstraction – বিমূর্ততা

```ts
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

const cat = new Cat();
cat.makeSound();
cat.move();
```

---

## 🔷 10. Encapsulation – গোপনীয়তা

Encapsulation এর মাধ্যমে আমরা ক্লাসের ভিতরের ডেটা বাইরের থেকে সরাসরি পরিবর্তন করতে দিই না।

```ts
class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  checkPassword(pass: string): boolean {
    return this.password === pass;
  }
}

const u = new User("secret");
console.log(u.checkPassword("secret")); // true
```

