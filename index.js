//первое задание
//1
const  a = 2
let result = a*2+a
//результат первого примера
console.log(result)
// 2
const b = 54
const c = 16
// результат 2ого примера
const result2 = (Math.sin(b)*Math.cos(c))**2
console.log(result2)
//3
const d = 16 * Math.sqrt(13.2 * 71.9)
const e = 2.4 / 7 ** 4
const g = 3 * Math.sqrt(49)
const h =  2 ** 7

const result3 = (d/e + g) * h
//результат 3 примера
console.log(result3)


//2ое задание
const number = 35
const number2 = 186
const number3 = 3

console.log(number%2 ===0) // не четное - false
console.log(number2%2===0) // четное - true
console.log(number3%2===0) // не четное - false

// 3е задание
let guest;
guest = 'Jason'

console.log(`Hello ${guest || `guest`}`)