"use strict";

function addUser(name) {
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Not Specified";
  var email = arguments.length > 2 ? arguments[2] : undefined;
  var phone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "00000000";
  return "name: ".concat(name, ", country: ").concat(country, ", email: ").concat(email, ", phone: ").concat(phone);
}

console.log(addUser("Funalito", undefined, "fulanito@email.com"));