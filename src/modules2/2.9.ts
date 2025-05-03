{
    // Conditionals type

    type x = false
    type y = number

    type Conditionals = x extends true ? "true" : "false";

    type Conditionals2 = x extends true ? true : y extends number ? "true" : "false";



    type Badsa = {
        bike: string
        car: string
        bus: string
    }

    type CheckVahicle<T> = T extends keyof Badsa ? true : false

    type HasCar = CheckVahicle<'car'> // true



    // 
}