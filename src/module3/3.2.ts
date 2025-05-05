{
    // inharitance

    class Perent {
        constructor(public name: string, public age: number , public address: string) {}

        getSleep( num: number ){
            console.log(`${this.name} will sleep for ${num}`);
        }
    }



    class Student extends Perent{
        constructor( name: string,  age: number ,  address: string) {
            super(name ,age , address)
        }

       
    }

    const student1= new Student('Arafat' , 20 , "Bangladesh")




    class Teacher extends Perent{
        constructor( name: string,  age: number ,  address: string ,public designation:string ) {
            super(name , age , address )
        }

       

        takeClass( numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher1= new Teacher('Persian' , 30 , "Bangladesh" , 'Mentor')

console.log(teacher1);
}