"use strict";

var text = ["one", "tree", "once", "eleven", "thirteen"];
console.log(text.findIndex(function (e) {
  return e === "once";
}));