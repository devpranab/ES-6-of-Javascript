//default parameter in function - es-6
/*
function add(a, b=5){    //b=5 is default parameter, don`t depend on user input
    return a + b;
}
const total = add(12, 3);
const total = add(12);
console.log(total);
*/

/*
//old way
function add(a, b){
    b = b || 5;
    return a + b;
}
const total = add(12);
console.log(total);
*/