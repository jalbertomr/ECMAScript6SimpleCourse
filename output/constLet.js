"use strict";

//var has not a block scope
var age = 18;

if (age >= 18) {
  var isMayor = true;
}

console.log(isMayor);