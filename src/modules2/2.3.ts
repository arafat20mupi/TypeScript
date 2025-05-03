{

    //  Normal type
    const rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rollNumber2: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const rollNumber3: boolean[] = [true, false, true, false, true, false];



    //  Generic type
    const rollNumber4: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rollNumber5: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const rollNumber6: Array<boolean> = [true, false, true, false, true, false];



    //  dainamic genaric type
    type GenericType<T> = T[];

    const rollNumber7: GenericType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rollNumber8: GenericType<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const rollNumber9: GenericType<boolean> = [true, false, true, false, true, false];

    type User = {
        name: string;
        age: number;
    }

    const rollNumber11: GenericType<User> = [
        {
            name: "Arafat Islam",
            age: 22,
        },
        {
            name: "Arafat Islam",
            age: 22,
        },
        {
            name: "Arafat Islam",
            age: 22,
        },
    ]


    // generic tuple type
    type GenericTuple<x, y> = [x, y];

    const Arafat: GenericTuple<string, string> = ["Arafat Islam", 'Bou'];

    const UserWithID: GenericTuple<number, User> = [
        12345, {
            name: "Arafat Islam",
            age: 22,
        }
    ]


}