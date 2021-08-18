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

class Student extends Person{
    constructor( name, age, email, career){
        super( name, age, email)
        this.career = career
    }

    showProperties() {
        return `
        <b>Name:</b>  ${this.name} <br />
        <b>Age:</b>   ${this.age} <br />
        <b>Email:</b> ${this.email} <br />
        <b>career:</b> ${this.career} <br />
        <hr/>
      `;
    }
}

const personA = new Person("Fulanito", 37, "fulanito@email.com");
document.write(personA.showProperties());

const studentA = new Student("Perenganito", 23, "perenganito@email.com","Arts");
document.write(studentA.showProperties());
