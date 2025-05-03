{

    // COnstants With Key Of Operator

    type colors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
    }

    type colorsValue = "red" | "green" | "blue";  // Manualy defined

    // Keyof operator
    type colorKeys = keyof colors;

    const colorKey: colorKeys = "blue"; // This is valid


    

    const getPropertyByValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key];
    }


    const user = {
        name: "John",
        age: 30,
        isActive: true,
    }
    const dinajpur = {
        name: "Denajpur",
        population: 10000000,
        isCapital: false,
    }


    console.log(getPropertyByValue(dinajpur, "population")); // John




}