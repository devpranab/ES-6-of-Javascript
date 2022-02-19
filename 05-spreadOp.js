//speed operator ... - es-6

/*
//before comming operator
//concat and
const serialOne = [11, 23, 45, 32, 19];
const serialTwo = [11, 23, 45, 32, 19];
const serialThree = [16, 22, 40, 35, 17];
const allSerial = serialOne.concat(serialTwo).concat([500000]).concat(serialThree);
console.log(allSerial);


//max number - .. in a method
let job = 2000;
let business = 5000;
let intern = 500;
let maxAmnt = Math.max(job, business, intern);
comsole.log(maxAmnt);
*/

//after comming spreed operator
/*
const serialOne = [11, 23, 45, 32, 19];
const serialTwo = [11, 23, 45, 32, 19];
const serialThree = [16, 22, 40, 35, 17];
const allSerial2 = [...serialOne ,...serialTwo, 600000000, ...serialThree];
console.log(allSerial2);


//max number
const amountAll = [23, 43, 12,50, 45];
let maxAmnt = Math.max(...amountAll);
console.log(maxAmnt);
*/


/*
//spread operator used in function
//before
let person = ["suvho", "malhotra"];

let test = (fname, lname) =>{
    console.log(`${fname} ${lname}`);
}
//test(person[0], person[1]);
//now use ...
test(...person);
*/

//implimentin - possible
// [...arr].forEach(arr =>{

// })
