/*
//rest operator - es-6
let fruits = ["apple", "orange", "mango"];
let[first, second, ...third] = fruits;
console.log(first);
console.log(second);
console.log(third);
*/

let objPerson = {
    fname: "suvodip",
    lname: "roy",
    dob: 31-01-22
}
let {fname, ...lname} = objPerson;
// console.log(fname);
// console.log(lname);

//in a function
moreNums = [5,4,6,4,5];

let test = (name, num1, ...numbers) => { //used as a rest operator
console.log(name);
console.log(numbers);
}
test("pranab", 85,3,5);
test("pranab", ...moreNums); //used as a spread operator 