"use strict";

// var, let and const have function scope, can not been seen from outside the function
function greeting() {
  var nombre = "Alberto"
  return "Hi " + nombre;
}

console.log(greeting());
// console.log(nombre);  // Error not visible