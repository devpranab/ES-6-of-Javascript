//arrow function - es-6

/*
//normal function
function doubleIt(a){
    return a*2;
}
const result = doubleIt(6);
console.log(result);
*/

//notes:
//parenthesis() can be avoided when there is single parameter
//curly braces{} can be avoided when there is single statement(but not for return)

//arrow function()

/*
const itSubstract = a => a*2;   //or
const itSubstract = a => {return a*2}; //both of them are same
*/

/*
const doubleIt = a => a*2; //one parameter
const add = (x, y) => x+y; //two parameter
const giveme5 = () => 5;   //no parameter
const doSum = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum+diff;
    return result;
};

const result = doubleIt(36);
const result2 = add(3, 6);
const result3 = giveme5();
const result4 = doSum(7, 5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
*/

/*
//use callback function to take help arrow function
let numbers = [1,2,3,4,5,6,7];

let printAll = item =>{
    console.log(item);
}

numbers.forEach(printAll);

//or
numbers.forEach(item) => console.log(item);
*/

/*
//use map() function to take help arrow function
let numbers = [1,2,3,4,5,6,7];
let squareNums = numbers.map(function(item){
    return item*item;

})
console.log(squareNums);

//or
const squareAll = (item) => item*item;
let squareNums = numbers.map(function(item){
    return item*item;
});
 console.log(squareNums);
*/