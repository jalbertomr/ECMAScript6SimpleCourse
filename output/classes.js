"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
  _classCallCheck(this, Person);

  this.name = "Fulanito", this.age = 35;
};

var person = new Person();
document.write(person.name);