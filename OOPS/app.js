
//Factory function
// function PersionMaker(name,age){
//    const persion={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi My name is ${this.name}`);
//         }
//     }
//     return persion;
// }
// let p1=PersionMaker("Anand", 19);
// let p2=PersionMaker("Adarsh", 21);




//Constructor - does't return 
// function Persion(name, age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
//     Persion.prototype.talk=function(){
//         console.log(`hi, My name is ${this.name}`);
//     }
// }
// let p1=new Persion("anand", 19);
// let p2=new Persion("adarssh",21);
// consol.log(p1);
// consol.log(p2);




//Classes
// class Persion{
//    constructor(name,age){
//     this.name=name;
//     this.age=age;
//    }
//     talk(){
//         console.log(`hi, My name is ${this.name}`);
//     }
// }

// let p1=new Persion("anand", 19);




//Inheritance
class Persion{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}
class Student extends Persion{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}
class Teacher extends Persion{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}





