"use strict";

var person = {
  name: "Fulanito",
  email: "fulanito@email.com",
  age: 43,
  country: "México",
  phone: "12345678"
};

var functionDestructuringParamObject = function functionDestructuringParamObject(_ref) {
  var name = _ref.name,
      country = _ref.country,
      _ref$profession = _ref.profession,
      profession = _ref$profession === void 0 ? "Not Specified" : _ref$profession;
  console.log(name, country, profession);
};

functionDestructuringParamObject(person);