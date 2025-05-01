{
    function multiply(...values: number[]): number {
        return values.reduce((total, current) => total * current, 2);
    }

    console.log(multiply(2, 3, 4)); // 48
}  