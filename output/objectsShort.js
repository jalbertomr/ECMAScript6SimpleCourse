"use strict";

var createObject = function createObject(name, age) {
  return {
    name: name,
    age: age,
    showInfo: function showInfo() {
      return "name: ".concat(name, " age: ").concat(age);
    }
  };
};

console.log(createObject("Juan", 24).showInfo());