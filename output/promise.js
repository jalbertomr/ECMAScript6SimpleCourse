"use strict";

var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var asyncProcessCompleted = true;

    if (asyncProcessCompleted) {
      resolve("process Success");
    } else {
      reject("process Not Success");
    }
  }, 3000);
});
myPromise.then(function (message) {
  alert(message);
});
myPromise["catch"](function (message) {
  alert(message);
});