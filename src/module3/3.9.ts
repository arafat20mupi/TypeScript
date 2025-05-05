{
    // Abstraction in OOP  1.Interface   2.Abstact

    // Idea
    interface Vehicle1 {
        startEngine(): void
        stopEngine(): void
        move(): void
    }

    // real Implement
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("Start Engine");
        }
        stopEngine(): void {
            console.log("Stop Engine");
        }
        move(): void {
            console.log('Move Car');
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine()









    // abstarct

   abstract class Car2 {
       abstract startEngine(): void 
       abstract stopEngine(): void 
        abstract move(): void 
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('Start');
        }
        stopEngine(): void {
            console.log('Stop');
        }
        move(): void {
            console.log('Move');
        }
    }

    const Honda = new ToyotaCar()
    Honda.stopEngine()

}