{

    // Type assertion 
    let anything: any

    anything = "Hello World"
    anything = 42
    {
        anything as string // Type assertion using 'as' syntax
    }


    const kgToGm = (kg: number | string) => {
        if (typeof kg === "string") {
            const convertedValue = parseFloat(kg) * 1000;
            return `  ${convertedValue}`; // Return the converted value as a string
        } else {
            return kg * 1000; // Multiply number by 1000
        }
    }

    const result1 = kgToGm(5) as number; // 5000

    console.log(result1); // 5000



    type CustomError = {
        message: string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message); // Type assertion to CustomError
    }

}