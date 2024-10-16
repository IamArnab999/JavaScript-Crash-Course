//singleton - if we create object from constructors, it'll be always singleton
//Object.create


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

/*
//there're two ways to access the array
console.log(obj.location)
console.log(obj["location"]) //recommended approach
console.log(obj["full name"]) //no option left, we have to use this approach here
console.log(obj[mySym])
*/

//console.log(obj)
obj.age = 21
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

/*
const programming = ["js", "py", "rb", "py", "java", "cpp"]
for (const key in programming){
    console.log(key);
}
*/

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