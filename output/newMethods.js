"use strict";

var transport = ["avión", "auto", "barco"];
var transportType = ["aéreo", "terrestre", "maritimo"];
var dataMapped = transport.map(function (transport, idx) {
  return [transport, transportType[idx]];
});
var dataFlatMapped = transport.flatMap(function (transport, idx) {
  return [transport, transportType[idx]];
});
console.log(dataMapped);
console.log(dataFlatMapped);