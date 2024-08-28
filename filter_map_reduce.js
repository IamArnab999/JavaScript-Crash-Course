/*
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNum = myNum.filter((num) => {
    return num > 4
})
// console.log(newNum);
// Same way

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNum = myNum.filter((num) => num > 4)
console.log(newNum);
*/

/*
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);
*/










const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const hinum = numss.map( (num) => {return num + 10})
const hinum = numss
.map( (num) => num + 10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)


// console.log(hinum);

const myNums = [1, 2, 3]
/*
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// console.log(myTotal);
*/


const myTotal =  myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const myCorses = [
    {
        item: "javascript",
        price: 3999
    },
    {
        item: "web development",
        price: 6999
    },
    {
        item: "Android development",
        price: 8999,
    },
    {
        item: "Cyber security",
        price: 2999,
    },
]

const yourTotal = myCorses.reduce((acc, item) => acc + item.price, 0)
console.log(yourTotal);
