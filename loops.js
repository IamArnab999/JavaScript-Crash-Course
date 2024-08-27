// for loop

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


for (let i = 1; i <= 10; i++) {
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


// while loop

/*
let index = 0
while(index <= 10){
    console.log(`The value of index is: ${index}`);
    index = index + 2
}

let myHeroes = ["deadpool", "wolverine", "x23"]
let index = 0
while(index < myHeroes.length){
    console.log(myHeroes[index])
    index = index + 1
}
*/

/*
// do while loop

let score = 11

do {
    console.log(`Your score is: ${score}`);
    score++
} while(score <= 10);
 */


// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    // console.log(num);
}

const greetings = "Hello world!"
for (const char of greetings){
    // console.log(`Each char is ${char}`);
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")
// console.log(map);

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

// Foreach

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        langfile: "js"
    },
    {
        languageName: "java",
        langfile: "java"
    },
    {
        languageName: "python",
        langfile: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.langfile);
} )

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )

