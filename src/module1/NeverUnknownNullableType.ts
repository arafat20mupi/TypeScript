{
    // Nullish Coalescing Operator(??)

    let input = undefined; // or null
    let output = input ?? "Default Value";

    console.log(output); // Default Value

    // ✅ Never Type

    function crashApp(): never {
        throw new Error("Something went wrong! This Is Never Type");
    }

    // crashApp();
    //  // Uncomment করলে Error দিবে


    // Unknown Type

    let value: unknown = null;

    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log("Unknown type value");
    }


    // ✅Nullable Type
    let comment: string | null = null; // or undefined

    comment = "This is a comment";

    console.log(comment);

}