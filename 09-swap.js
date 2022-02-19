//swapping - es-6
// swap variables

let a, b;
a = 8; b = 12;
console.log(`a = ${a} and b = ${b}`);

//before
let chang = a;
a = b;
b = chang;
console.log(`a = ${a} and b = ${b}`);

//after swapping
[a, b] = [b, a];
console.log(`a = ${a} and b = ${b}`);
