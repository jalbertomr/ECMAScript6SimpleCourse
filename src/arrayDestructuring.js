const person = ["Fulanito", , "México"];

const [name, age = "Not Specified", country, phone = "00000000"] = person;

console.log(`${name} ${age} ${country} ${phone}`);
