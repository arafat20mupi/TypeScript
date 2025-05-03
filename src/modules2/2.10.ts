{

    // Mapped types


    // const arrofString: string[] = ['a', 'b', 'c'];

    const arrofNumber: number[] = [1, 2, 3];

    const arrofString: string[] = arrofNumber.map((item) => {
        return item.toString();
    }
    );
    console.log(arrofString); // ['1', '2', '3']




    type AreaNumber = {
        width: number;
        height: number;
    }

    // type AreaString = {
    //     width: string;
    //     height: string;
    // }

    type AreaString<T> = {
        [K in keyof T]: T[K];
    }
    const area1: AreaString<AreaNumber
    > = {
        width: 10,
        height: 20
    }

    console.log(area1); // { width: 10, height: 20 }


}