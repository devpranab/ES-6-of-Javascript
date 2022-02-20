//async-await-es-6
/*
fetch('http://api.icndb.com/jokes/random/5000')
.then(response => response.json())
.then(data => console.log(data));

console.log("i`m after promises, random codes"); //async by fetch
*/


//for help use async-await
fetch('http://api.icndb.com/jokes/random/5000')
.then(response => response.json())
.then(data => {});

async function getJokes(){
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    let data = await response.json();
    return data;
}

getJokes().then(jokes => console.log(jokes));

//async convert to promises