//первое задание
//1
let a = 2
let result = a*2+a
//результат первого примера
console.log(result)
// 1 + 2
let b = 54
let c = 16
// результат 2ого примера
let result2 = (Math.sin(b)*Math.cos(c))**2
console.log(result2)

let dResult = Math.sqrt(13.2 * 71.9)
console.log(dResult)
let eResult = 2.4/7**4
let f = 3
console.log(eResult)
let totalResult = ((c*dResult)/eResult * f * Math.sqrt(49)) * 2**7
console.log(totalResult)
let finalResult = Math.round(totalResult)
//результат 3его примера
console.log(finalResult)

//2ое задание
let number = 35
let number2 = 186
let number3 = 3

console.log(number%2 ===0) // не четное - false
console.log(number2%2===0) // четное - true
console.log(number3%2===0) // не четное - false

// 3е задание
let guest = 'Jason'
if (!guest) {
    console.log('Hello, guest!')
} else {
    console.log(`Hello, ${guest}!`)
}