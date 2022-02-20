//copyWithin() - array method, have in array prototype
//copyWithin(target,start,end); //follow index 3 parameters 
//target is required
//start(defaults to 0),end(defaults to array.length) optional
//never changes array.length
//overwrites main array
//returns modified array

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
 //             0=s 1=take    2=e    2=target
// //fruits.copyWithin(2, 0, 2);
//   fruits.copyWithin(-2, 0, -2); //- positioning
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//                                     tk       tr
fruits.copyWithin(3, 2);
console.log(fruits);