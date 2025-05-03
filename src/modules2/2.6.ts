{

    // Constraints 

    const addCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }>(
        student: T,
    ): T => {

        const course = "BSc in CSE"
        return { ...student, course }
    }


    const student1 = addCourseToStudent({
        id: 12345,
        name: "Arafat Islam",
        email: "arafatislam6619@gmail.com"
    })

    const student2 = addCourseToStudent({
        id: 12345,
        name: "Arafat Islam",
        email: "a@gmail.com",
        age: 22,
        address: "Dhaka",
        country: "Bangladesh",
    })

    console.log(student1)
    console.log(student2);

}