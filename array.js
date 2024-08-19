// const myArr = [2, 3, 60, 91, 70]
// console.log(myArr.indexOf(3))

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

const allheros = marvel_heroes.concat(dc_heroes)
// console.log(allheros)

const new_heros = [...marvel_heroes, ...dc_heroes]
// console.log(new_heros)

const array1 = [2, 9, [9, 78, 91, 70], [899, 990, 87, 75, [90, 12, 11, 61]]]
const  array2 = array1.flat(Infinity)
// console.log(array2)

// console.log(Array.from("Arnab"))

let a1 = 322
let a2 = 680
let a3 = 700

console.log(Array.of(a1, a2, a3))