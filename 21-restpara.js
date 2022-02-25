//rest parameter - es-6
//have simillarity between rest operator and rest parameter.

// function myFunc(a,b){
//     console.log(a,b);
// }
// myFunc(5,6);

// function myFunc(...paras){ //rest parameter                  
//     console.log(paras);
// }
// myFunc(5,6,5);

function myFunc(a, ...paras){ //rest parameter     
    console.log(a);
    console.log(paras);
}
myFunc(4,5,6,5);

// function myFunc(...paras, a){ //comes error   
//     console.log(a);
//     console.log(paras);
// }
// myFunc(4,5,6,5);

//rest parameter must be last formal parameter