// # 📝 Practice Questions

// ## 🟢 Question 1(Easy)

//     - `Theme` নামে একটি object তৈরি করুন যেখানে `LIGHT` এবং `DARK` নামে দুটি value থাকবে।
// - Object - টি`as const` ব্যবহার করে তৈরি করতে হবে।
// - `ThemeType` নামে একটি type তৈরি করুন।
// - `changeTheme(theme: ThemeType)` নামে একটি function লিখুন, যা শুধুমাত্র valid theme গ্রহণ করবে।

const Themes = {
    LIGHT: "LIGHT",
    DARK: "DARK"
} as const;

type ThemeType = (typeof Themes)[keyof typeof Themes]

function ChangeTheme(them: ThemeType) {
    console.log(them)
}
ChangeTheme("DARK")

// ---

// ## 🟡 Question 2(Medium)

//     - `Status` নামে একটি object তৈরি করুন যেখানে`PENDING`, `SUCCESS` এবং `FAILED` থাকবে।
// - Object - টি`as const` ব্যবহার করতে হবে।
// - `StatusType` নামে একটি type তৈরি করুন।
// - `printStatus(status: StatusType)` নামে একটি function লিখুন।
// - `Object.values()` ব্যবহার করে সব status console - এ print করুন।

const Status = {
    PENDING: "Pending",
    SUCCESS: "Success",
    FAILED: "Failed"
} as const;

type StatusType = (typeof Status)[keyof typeof Status]
function printStatus(status: StatusType) {
    console.log(status)
    console.log(Object.values(Status))
}
printStatus("Pending")
// ---

// ## 🔴 Question 3(Hard)

//     - `Role` নামে একটি object তৈরি করুন যেখানে`ADMIN`, `MODERATOR`, `USER` এবং `GUEST` থাকবে।
// - Object - টি`as const` ব্যবহার করতে হবে।
// - `RoleType` নামে একটি type তৈরি করুন।
// - `User` নামে একটি interface তৈরি করুন যেখানে `role` হবে `RoleType`।
// - অন্তত ৪টি user নিয়ে একটি array তৈরি করুন।
// - `isAdmin(user: User): boolean` নামে একটি function লিখুন, যা user - এর role `ADMIN` হলে `true` এবং অন্যথায় `false` return করবে।

const Role = {
    ADMIN: "Admin",
    MODERATOR: "Modorator",
    USER: "User",
    GUEST: "Guest"
} as const;

type RoleType = (typeof Role)[keyof typeof Role]

interface User {
    Name: string
    role: RoleType
}

const UserArray: User[] = [
    {
        Name: "Munna",
        role: "User"
    },
    {
        Name: "Joy",
        role: "Admin"
    },
    {
        Name: "Roy",
        role: "Guest"
    },
    {
        Name: "Toy",
        role: "Modorator"
    }
]

const IsAdmin = (user: User) => {
    return user.role == Role.ADMIN
}

console.log(IsAdmin(UserArray[1]));