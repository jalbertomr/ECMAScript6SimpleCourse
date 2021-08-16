//let and const has block scope, not visible outside the block
const age = 18;

if (age >= 18) {
  const isMayor = true;
}
console.log( isMayor);