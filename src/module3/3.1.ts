{
    // OOP - Class and objects
    // This code defines a class called Person with properties and a method.
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    const person1 = new Person("Alice", 30);


    //  perameter properties
    class Animal {

        constructor( public species: string, public sound: string) {}

        makeSound() {
            console.log(`${this.species} makes a ${this.sound} sound.`);
        }
    }

    const cat = new Animal("Cat", "meow");

}