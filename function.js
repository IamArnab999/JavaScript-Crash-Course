function sayMyName() {
    console.log("A")
    console.log("R")
    console.log("N")
    console.log("A")
    console.log("B")
}

// sayMyName()

function add(num1, num2) {
    let res = num1 + num2
    return res
}

const result = add(2, 4)
// console.log("Result: ", result)


//Arrow function
const user = {
    username: "Arnab",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome! to our website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "Shyam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ArNAAb"
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username = "ArNAAb"
//     console.log(this.username);
// }
// chai()


const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 6));









/*
// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

((name) => {
    //unnamed IIFE with "arrow function"
    console.log(`DB connected again to ${name}`);
})("ArnabDB")
*/