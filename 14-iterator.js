//iterator-es-6
//iterator is built-in method of symbols

/*
let iterable = "hello";
//Symbol.iterator()
let iter = iterable[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next().value);

console.log("others code");

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/

//custom iterator
let nameList = ["A", "B", "C", "D", "E"];
function customIter(arr){
    let i = 0;
    return{
        next: function(){
            return i<arr.length ? {value: arr[i++], done:false} : {done: true};
        }
    };
}
let members = customIter(nameList);
console.log(members);
console.log(members.next().value);
console.log(members.next());
console.log(members.next());
console.log(members.next());