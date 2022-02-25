//important object tricks - es-6

// const myObj = {
//     name: "Javascript",
//     founder: "Brendan Eich",
//     estd: "1995",
//     ranking: 1
// }
// const keys = Object.keys(myObj);
// const values = Object.values(myObj);
// const entries = Object.entries(myObj); //both
// console.log(keys);
// console.log(values);
// console.log(entries);

//no need to use forEach iteration

//object shorthand
let x = 5;
let y = 6;
const myObj = {
    name: "Javascript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
    // x: x, //property & value same
    // y: y
    x, //shorthand
    y
}
const entries = Object.entries(myObj); //both
console.log(entries);