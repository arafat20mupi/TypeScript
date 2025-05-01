{

    // ✅ Object Destructuring:

    const student = { name: "Sami", grade: "A" };
    const { name, grade } = student;

    console.log({name} , {grade});
    
    // ✅ Array Destructuring

    const fruits = ["apple", "banana", "mango"];
    const [first, second] = fruits;

    console.log({first} , {second});

}