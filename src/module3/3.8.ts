{
    // Polymorphism
    class Person {
        getSleep() {
            console.log('Im Sleeping for 8 Hounrs')
        }
    }

    class Student extends Person {
        getSleep(): void {
            console.log("Im Sleeping for 6 Hounrs");
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log('Im Sleeping for 4 Hounrs');
        }
    }

    const getSleepingHours = (params: Person) => {
        params.getSleep()
    }


    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)







    class Shepe {
        getArea(): number {
            return 0
        }
    }

    // pi 
    class Circle extends Shepe {
        redius: number

        constructor(redius: number) {
            super()
            this.redius = redius
        }
        getArea(): number {
            return Math.PI * this.redius * this.redius
        }
    }


    // rectencle 
    class Rectencle extends Shepe {


        constructor(public height: number, public wight: number) {
            super()
        }
        getArea(): number {
            return this.height * this.wight
        }
    }



    const getShapeArea = (param: Shepe) => {
        console.log(param.getArea());
    }


    const shape1 = new Shepe()
    const shape2 = new Circle(20)
    const shape3 = new Rectencle(30, 20)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)




    // 
}