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

const programming = ["js", "py", "rb", "py", "java", "cpp"]
for (const key in programming){
    console.log(key);
}