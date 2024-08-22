const a = 24

if (true) {
    let a = 200
    // let b = 3004
    // console.log("Inner a:", a)
}

// console.log(a)

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}

one()


/*
if(true){
    const username = "Arnab"
    if (username === "Enable yourself"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

*/


console.log(addone(5));

function addone(num) {
    return num + 1
}


// second type:

const addTwo = function (num) {
    return num + 2
}
addTwo(5)