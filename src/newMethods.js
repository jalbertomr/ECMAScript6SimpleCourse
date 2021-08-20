const transport = [ "avión","auto", "barco" ];
const transportType = ["aéreo","terrestre","maritimo"];

const dataMapped = transport.map( 
  (transport, idx) => [transport, transportType[idx]]
);

const dataFlatMapped = transport.flatMap(
  (transport, idx) => [transport, transportType[idx]]
);

console.log(dataMapped);
console.log(dataFlatMapped);