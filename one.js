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
/*
const  coldCoffeePrice = 280
coldCoffeePrice <= 80 ? console.log("Cold coffee is less than 80") : console.log("Cold coffee is more than 80");
*/


// Fetch API

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    factPara.innerText = data[0].text;
};