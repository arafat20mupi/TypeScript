{

    //  Generic with interface
    interface ComputerType {
        name: string;
        price: number;
    }

    interface Developer<T, V = null> {
        name: string;
        computer: ComputerType
        smartWatch: T
        bike?: V;
    }


    

    interface smartWatch {
        brand: string;
        price: number;
        color: string;
    }

    const poorDeveloper: Developer<smartWatch
    > = {
        name: "Arafat Islam",
        computer: {
            name: "Acer",
            price: 50000,
        },
        smartWatch: {
            brand: "Apple",
            price: 1000,
            color: "Black",
        }
    }


    interface SmartWatch2  {
        brand: string;
        price: number;
        color: string;
        model: string;
        sleepTracking: boolean;
    }

    const richDeveloper: Developer<SmartWatch2, boolean
    > = {
        name: "Arafat Islam",
        computer: {
            name: "Acer",
            price: 50000,
        },
        smartWatch: {
            brand: "Apple",
            price: 50000,
            color: "Black",
            model: "Apple Watch Series 7",
            sleepTracking: true,
        },
        bike: true,
    }


}