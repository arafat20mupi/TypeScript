"use strict";
{
    // Nullish Coalescing Operator(??)
    let input = null;
    let output = input !== null && input !== void 0 ? input : "Default Value";
    console.log(output); // Default Value
    // ✅ Never Type
    function crashApp() {
        throw new Error("Something went wrong!");
    }
    // crashApp(); // Uncomment করলে Error দিবে
    // ✅ 13. Unknown Type
    let value = "Hello TypeScript";
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    // ✅ 14. Nullable Type
    let comment = null;
    comment = "This is a comment";
    console.log(comment);
}
