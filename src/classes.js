class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  showProperties() {
    document.write(person.name + " " + person.age);
  }
}

const person = new Person("Fulanito", 37);
person.showProperties();
