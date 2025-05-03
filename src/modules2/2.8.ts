{

    // Basic Promise Example

    const data = async () => {
       const res = await fetch('https://dummyjson.com/products')
         const data = await res.json()
            console.log(data)
           
    }
    data()

    const myPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {

            const data: string = "Hello World!";

            if (data) {
                resolve(data);
            }
            else {
                reject("No data found");
            }

        });
    }

    const ShowData = async (): Promise<string> => {
        const data: string = await myPromise();
        return data;

    }
    ShowData();


}