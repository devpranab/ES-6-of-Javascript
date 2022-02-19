//symbols-es-6 - unique

// let a = Symbol();
// let b = Symbol();
// console.log(a);
// console.log(b);
// console.log(a==b); //false

//symbols used in object
/*
let person = {
    name: "pk",
    age: 23,
    [a]: "Hello pk!"
}
*/
//console.log(person); 
//but symbol don`t count as a property - for check use - get
//console.log(Object.getOwnPropertyNames(person)); 
//get symbols
// console.log(Object.getOwnPropertySymbols(person)); 
// console.log(Object.keys(person)); 
// console.log(JSON.stringify(person));    //can`t get symbols

//parameter pass in symbols
let sym1 = Symbol("hello");
let sym2 = Symbol("hello");

console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);