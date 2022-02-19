//let, const - es-6

//scope
/*
var a = 1;
let b = 2;
const c = 3;
var d = 7;
console.log(`Global scope: `,a, b, c);

function test(){ //same for control flow(if, for loop)
    var a = 4;
    let b = 5;   //local scope
    const c = 6;
    console.log(`Function scope: `,a, b, c, d);
}
test();
console.log(`Global scope: `,a, b, c);
*/


/* hey programmer, avoid using var,
use let and const*/

//let - reassign but no declare twice
/*
let memName = "pranab";
memName = "rajav";
console.log(memName);
*/
// let is block scope variable
/*
let sum = 0;
for(let i = 0; i<10; i++){
    sum = sum + i;
    console.log(i);   //not possible to call out of block,because of i used let, let is block scope
}
// console.log(i);
*/


//const - no reassign no declare twice
// const myName = "pranab";
// myName = "rajav"; //no
// console.log(myName);

/*
const arrNumbers = [21, 34, 67, 43];
arrNumbers[1] = 35;  //yes
arrNumberNew = [20, 30, 60, 40]; //no change^ main array in const, same at object also
console.log(arrNumbers);
*/
