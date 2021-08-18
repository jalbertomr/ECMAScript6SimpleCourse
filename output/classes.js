"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, age, email) {
    _classCallCheck(this, Person);

    this.name = name, this.age = age, this.email = email;
  }

  _createClass(Person, [{
    key: "showProperties",
    value: function showProperties() {
      return "\n        <b>Name:</b>  ".concat(this.name, " <br />\n        <b>Age:</b>   ").concat(this.age, " <br />\n        <b>Email:</b> ").concat(this.email, " <br />\n        <hr/>\n      ");
    }
  }]);

  return Person;
}();

var personA = new Person("Fulanito", 37, "fulanito@email.com");
document.write(personA.showProperties());
var personB = new Person("Perenganito", 23, "perenganito@email.com");
document.write(personB.showProperties());