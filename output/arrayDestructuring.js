"use strict";

var person = ["Fulanito",, "México"];
var name = person[0],
    _person$ = person[1],
    age = _person$ === void 0 ? "Not Specified" : _person$,
    country = person[2],
    _person$2 = person[3],
    phone = _person$2 === void 0 ? "00000000" : _person$2;
console.log("".concat(name, " ").concat(age, " ").concat(country, " ").concat(phone));