export class Person  {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    showInfo(){
        console.log(`name: ${this.name } age: ${this.age}`);
    }
}