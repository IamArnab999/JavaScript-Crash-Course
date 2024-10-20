//singleton - if we create object from constructors, it'll be always singleton
//Object.create

/*
const mySym = Symbol("key1")
//object literals
const obj = {
    name: "Arnab",
    "full name": "Arnab Kanti Das", //here comes the problem (investigation study)
    age: 30,
    [mySym]: "myKey11",
    location: "Khagra",
    hobbies: ["reading", "playing guiter", "coding"],
    isMarried: false
};
*/
/*
//there're two ways to access the array
console.log(obj.location)
console.log(obj["location"]) //recommended approach
console.log(obj["full name"]) //no option left, we have to use this approach here
console.log(obj[mySym])
*/

//console.log(obj)
// obj.age = 21
//Object.freeze(obj)
//obj.age = 38 // this can't make any changes to the object

/*
obj.greeting = function(){
    console.log("Hello JS programmer");
}
obj.greeting2 = function(){
    console.log(`Hello JS programmer, ${this.name}`);
}
console.log(obj.greeting())
console.log(obj.greeting2())
*/
/*
const tinderUser = {}

tinderUser.id = "arnab21"
tinderUser.name = "Arnab Kanti Das"
tinderUser.age = 30
tinderUser.location = "Khagra"
tinderUser.isMarried = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    userdetail: {
        fullname: {
            first: "Arnab",
            last: "Kanti Das"
        }
    }
}
// console.log(regularUser.userdetail.fullname.last);

const obj1 = {a: 1, b: 2}
const obj2 = {b: 3, d: 4}
// const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj5 = {...obj, ...obj2}
// console.log(obj5)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.getOwnPropertyNames(tinderUser));
// console.log(Object.getOwnPropertyDescriptors(tinderUser));

// console.log(tinderUser.hasOwnProperty('isMarried'));
const course = {
    name: "JavaScript",
    duration: "6 months",
    price: 5000.00,
    instructor: "Arnab Kanti D"
}

const {instructor: tutor} = course
// console.log(tutor)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/
/*
const programming = ["js", "py", "rb", "py", "java", "cpp"]
for (const key in programming){
    console.log(key);
}
*/
/*
// ## The main differance between classes & objects - Classes are a single templates based on which we can create many different functions, but object can hold perperties.

const student = {
    fullname: "Arnab Kanti Das",
    marks: 91.6,
    printMarks: function(){
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calctax(){
        console.log("tax rate is 20%");
    },
    // OR (another way to define function)
    calctax2: function(){
        console.log("tax rate is 30%");
    }
};

// now we're going to create a new object
const karanArjun = {
    salary: 20000,
};

// set prototype (by setting protype of a class to another object, that new object can get access to the features of the previous class - the syntax is like this)
karanArjun.__proto__ = employee;

// Let's create a class 

class ToyotaCar {
    constructor(brand, milage){
        console.log("Creating new object!");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

// syntax to create objects
let fortuner = new ToyotaCar("fortuner", 12); //constructor
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 20); //constructor
console.log(lexus);
// lexus.setBrand("lexus");
*/


// Inheritance
/* EX - 1
class Parent{
    greet(){
        console.log("Hello everyone!");
    }
}
class Child extends Parent{}
let obj = new Child();


class Person {
    constructor(){
        console.log("Enter parent constructor");
        this.species = "homo sapience";
    }
    eat() {
        console.log("can eat...");
    }
    sleep() {
        console.log("can sleep...");
    }
    work() {
        console.log("dont't do anything! ");
    }
}

class Engineer extends Person {
    constructor(branch){
        console.log("Enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work() {
        super.eat();
        console.log("solve problems, build something...");
    }
}
class Doctor extends Person {
    work() {
        console.log("treat patients...");
    }
}
// let arnab = new Doctor();
let engobj = new Engineer("chemical eng");


let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = ", DATA);
    }
}
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}
let student1 = new User("arnab", "arnab29@gmail.com")
let student2 = new User("rik", "soso29@gmail.com")

let teacher1 = new User("sirji", "sirrrr@gmail.com")

let admin1 = new Admin();
*/

/*
function hello(){
    console.log("Hello");
}
setTimeout(hello, 4000)

// OR

setTimeout(() => {
    console.log("Hello...");
}, 4000);
*/

// Callback

/*
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(3, 6, sum)

// nesting

for(let i = 0; i<5; i++){
    let str ="";
    for(let j = 0; j<5; j++){
        str = str + j;
    }
    console.log(i, str);
}


function getData(dataId, getNextdata){
    setTimeout(() => {
        console.log("data", dataId); 
        getNextdata();
    },3000);  
}

getData(1, () => {
    console.log("Getting data 2...");
    getData(2, () => {
        console.log("Getting data 3...");
        getData(3, () => {
            console.log("Getting data 4...");
            getData(4, () => {
                console.log("Getting data 5...");
                getData(5, () => {
                    console.log("Getting data 6...");
                    getData(6);
                })
            })
        })
    });
});
*/
/*
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success")
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000);
    });
}

console.log("Fetching data1...");
asyncFunc1().then((res) => {
    console.log("Fetching data2...");
    asyncFunc2().then((res) => {});
});
*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Im-a promise");
        resolve("success!");
        // reject("error!!");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("Promise fulfilled!");
});

promise.catch(() => {
    console.log("rejected due to some error!");
});

function getData(dataId, getNextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success!");
            // reject("error occured!");
            if (getNextdata) {
                getNextdata();
            }
        }, 5000);
    });
}