//promises-es-6
//successful => resolve
//failed => reject
/*
let prom = new Promise((resolve, reject) =>{
    let a = 1 + 1; //commitment-cond.

    if(a == 2){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

//other code
console.log("i am after promises, promises");

//.then .catch
prom.then((message) => {
    console.log("i`m from then " + message);
}).catch((message) => {
    console.log("i am from catch " + message);
})
*/

//real example
//while image file download

let prom = new Promise((resolve, reject) =>{

    let a;
    setTimeout(() =>{
        let a = 1 + 2; //commitment-cond.
        if(a == 2){
            resolve("Success");
        }else{
            reject("Failed");
        }
    },5000)
})

//.then .catch
prom.then((message) => {
    console.log("i`m from then " + message);
}).catch((message) => {
    console.log("i am from catch " + message);
})

//other code
console.log("i am after promises, random code");