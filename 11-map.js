//map - data structure
//keep info as key value - pair
/*
let myMap = new Map(
    [
        ["first key", 011],
        ["second key", "Hi"]
    ]
)
*/
//add
// myMap.set("third key", "Hello")

//console.log(myMap);

//call using key
//console.log(myMap.get("second key"));

//has - or not
//console.log(myMap.has("second key"));

//size
//console.log(myMap.size);

//iterating
// for(let [x,y] of myMap){
//   console.log(x, y);
// }

//keys access only
// for(let x of myMap.keys()){
//     console.log(x);
//   }

//values access only
// for(let x of myMap.values()){
//     console.log(x);
//   }

//entries(key,value)
// for(let x of myMap.entries()){
//     console.log(x);
//   }

  //forEach - get value,key
//   myMap.forEach((x, y) => {
//   console.log(x, y);
//   });


//convert array to map
//let arr = Array.from(myMap);
//let arr = Array.from(myMap.keys()); //only array of key
//let arr = Array.from(myMap.values()); //only array of value
//console.log(arr);