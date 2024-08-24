/*
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default:
        break;
}
*/

/*
// truthy values

const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", undefined, null, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
*/

/*
if (userEmail.length === 0){
    // console.log("Array is empty");    
}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
*/

/*
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 1 ?? 30

console.log(val1);
*/


// ternary operator
// condition ? true : false

const  coldCoffeePrice = 280
coldCoffeePrice <= 80 ? console.log("Cold coffee is less than 80") : console.log("Cold coffee is more than 80");




/*
for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is found");
    }
    console.log(element);
}

// console.log(element);
*/


for (let i = 1; i<= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}




// Printing Array using loop

let myArray = ["Ironman", "Doctor Doom", "Tony Stark"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
} 


// break and continue

/*
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(index + " is Detected!");
        break
    }
    console.log(`value of i is: ${index}`);
}
*/
/*
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(index + " is Detected!");
        continue
    }
    console.log(`value of i is: ${index}`);
}
*/
