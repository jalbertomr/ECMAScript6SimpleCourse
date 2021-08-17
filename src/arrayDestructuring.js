const person = ["Fulanito", , "México"];

const showParamsFromArray = ([
  name,
  age = "Not Specified",
  country,
  phone = "00000000",
] = arrayPassed) => {
  console.log(`${name} ${age} ${country} ${phone}`);
};

showParamsFromArray(person);
