class Person {
    constructor(name, age, email) {
        this.name = name,
        this.age = age,
        this.email = email;
    }

    showProperties() {
        return `
        <b>Name:</b>  ${this.name} <br />
        <b>Age:</b>   ${this.age} <br />
        <b>Email:</b> ${this.email} <br />
        <hr/>
      `;
    }
}

const personA = new Person("Fulanito", 37, "fulanito@email.com");
document.write(personA.showProperties());

const personB = new Person("Perenganito", 23, "perenganito@email.com");
document.write(personB.showProperties());
