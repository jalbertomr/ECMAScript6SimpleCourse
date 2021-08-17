function addUser(name, country = "Not Specified", email, phone = "00000000") {
  return `name: ${name}, country: ${country}, email: ${email}, phone: ${phone}`;
}

console.log(addUser("Funalito", undefined, "fulanito@email.com"));
