{

    // Function with generic 

    const createArray = (param: string
    ): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    interface Person {
        name: string;
        id: number;
        age: number;
    }

    const result1 = createArray("Arafat Islam")

    const result2 = createArrayWithGeneric<string>("Arafat Islam")

    const result3 = createArrayWithGeneric<Person>(
        {
            name: "Arafat Islam",
            id: 12345,
            age: 22,
        }
    )


    //  Function with Topple with generic
    const createArrayWithGeneric2 = <T, U>(param1: T, param2: U): [T, U] => {
        return [param1, param2]
    }

    const result4 = createArrayWithGeneric2<string, number>("Arafat Islam", 12345)

    const result5 = createArrayWithGeneric2<number, string>(12345, "Arafat Islam")

    const result6 = createArrayWithGeneric2<Person, string>(
        {
            name: "Arafat Islam",
            id: 12345,
            age: 22,
        },
        "Bangladesh"
    )

    const addCourseToStudent = <T>(
        student: T,
    ): T => {

        const course = "BSc in CSE"
        return { ...student, course }
    }


    const student = {
        name: "Arafat Islam",
        email: "arafatislam6619@gmail.com"
    }
    const result7 = addCourseToStudent(student)
    console.log(result7)



}