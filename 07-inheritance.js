//inheritance - es-6- part of oop

class Parent{
    constructor(){
        this.father = "Sid";
    }
}
class Class extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

}

const baby = new Child("Tom");
const baby2 = new Child("Jerry");
console.log(baby);
console.log(baby2);

