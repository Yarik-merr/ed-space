// function sumOfDigit(num) {
//   let arr = String(num).split('')
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i])
//   }
//   return sum
// }

// console.log(sumOfDigit(123))

// let a = '123'
// console.log(typeof a.split('').join(''))

// let a = 123

// console.log(String(a).split('')[0])

/* 
Число Фибоначи(7) = 0 + 1 + 1 + 2 + 3 + 5 + 8 = 13 
Fibonachi(n) = (n - 2) + (n - 1) = n
*/

// let num1 = 0
// let num2 = 1

// function Fib() {
//   let current = num1 + num2
//   num1 = num2
//   num2 = current
//   console.log(current)
// }

// for (let i = 1; i < 7; i++) {
//   Fib()
// }

// function Fib(n) {
//   return n <= 1 ? n : Fib(n - 1) + Fib(n - 2)
// }

// console.log(Fib(7));

function Factorial(n) {
  return n === 0 || n === 1 ? 1 : n * Factorial(n - 1)
  // if (n === 0 || n === 1) {
  //   return 1
  // } else {
  //   return n * Factorial(n - 1)
  // }
}

console.log(Factorial(3))
/*
7 
7 - 1 + 7 - 2 = 11
11 - 1 + 11 - 2 = 19
*/
