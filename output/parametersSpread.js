"use strict";

var showInfo = function showInfo() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
};

var arrData = ['Perenganito', 54, 'Perenganito@gmail.com', "México"];
showInfo.apply(void 0, arrData);