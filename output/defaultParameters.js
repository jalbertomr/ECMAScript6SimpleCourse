"use strict";

function addUser(name, country, email, phone) {
  return "name: ".concat(name, ", country: ").concat(country, ", email: ").concat(email, ", phone: ").concat(phone);
}

console.log(addUser("Funalito", "México", "fulanito@email.com", "234234234"));