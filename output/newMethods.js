"use strict";

var array = [1, 2, [3, 4], [5, [6]], [[7]]];
var flatten = array.flat(2);
console.log(array);
console.log(flatten);