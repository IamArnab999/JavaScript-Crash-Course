function sayMyName(){
    console.log("A")
    console.log("R")
    console.log("N")
    console.log("A")
    console.log("B")
}

// sayMyName()

function add(num1, num2){
    let res = num1 + num2
    return res
}

const result = add(2, 4)
// console.log("Result: ", result)


//Arrow function
const user = {
    username: "Arnab",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome! to our website`);
    }
}

user.welcomeMessage()
user.username = "Shyam"
user.welcomeMessage()