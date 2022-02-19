//generator*-es-6
//generator like iterator that helps to iterate

function* genFunc(){
    console.log("i am some random codes");
    yield 1;
    //return;
    console.log("i am some random codes");    //if i use return, stop next codes
    console.log("i am some random codes");
    console.log("i am some random codes");
    yield "Rahim";
    yield 4;
    yield "hello";
}

let iter = genFunc();
console.log(iter);
console.log(iter.next().value);
console.log(iter.next());