class Person {
  constructor() {
    (this.name = "Fulanito"), (this.age = 35);
  }
}

const person = new Person();
document.write(person.name);
