//Modules: imports/exports
//first on package.json file

//import {pi, x} from "./extrnl.js" //name import
//console.log(pi); //can access
//console.log(a);

//import * as test from "./extrnl.js" //all import
//console.log(test); //all access
//console.log(test.x);

////re-name import
// import {pi as varpi, x as varx} from "./extrnl.js" 
// console.log(varpi);
// console.log(varx);

//default import
// import external from "./extrnl.js"
// console.log(external); //default const y

//default import & normal
// import external, {x} from "./extrnl.js"
// console.log(external, x); //default const y

//function import
// import {pi, x, myFunction} from "./extrnl.js"
// myFunction();

//default function import
import external from "./extrnl.js";
external();

//we can use default only one