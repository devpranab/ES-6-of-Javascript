//destructure - es-6
/*
//old way before comming destructure
let person = {
    name: "abir",
    age:25,
    from: "kolkata",
    proff: "dev"
}
const whatage = person.age;
const whatproff = person.proff;
console.log(whatage);
console.log(whatage);
console.log(whatage);
console.log(whatproff);
console.log(whatproff);
console.log(whatproff);
console.log(whatproff);
console.log(whatproff);
*/

//after comming destructure- use of array destructure
/*
const studentName = ["pk", "sp", "dk", "mk", "sr"];
const [firstName, secondName, ...nextName] = studentName;
const [firstName, , secondName,] = studentName; //skip sp in , _ ,
console.log(firstName, secondName);
console.log(nextName);
*/


//after comming destructure- use of object destructure
/*
let person = {
    name: "abir",
    age:25,
    from: "kolkata",
    proff: "dev",
    hobby: "coding"
}
const {name : nam, age, proff} = person;   //no need to maintain ordering, use same name of object
console.log(age);
console.log(proff);
/*
//in a function pass by parameter
function display({name, age, from, proff, hobby}){
    console.log(name, age, from);
}
display(person);
*/


/*
const nestedObj = {
    name: "car",
    info: {
        color: "black",
        price: "28 lakhs",
        model: "Fcsiikl"
    }
}
const {model} = nestedObj.info;
console.log(model);
*/

