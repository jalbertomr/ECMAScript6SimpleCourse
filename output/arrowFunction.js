"use strict";

var array = ["Juana", "Jose", "Alberto", "Fulanuto"];
var arrayProc = array.map(function (e) {
  return "".concat(e, " has a length of ").concat(e.length);
});
console.log(arrayProc);