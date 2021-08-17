const person = {
  name: "Fulanito",
  email: "fulanito@email.com",
  age: 43,
  country: "México",
  phone: "12345678",
};

const functionDestructuringParamObject = ({
  name,
  country,
  profession = "Not Specified",
}) => {
  console.log(name, country, profession);
};

functionDestructuringParamObject(person);
