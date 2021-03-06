/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function() {
    if(num <= 0){
      return null
    }
    return num === 1 ? 1 : findFactorial(num - 1) * num
}

//Exercise 2
const reverseString = function(str) {
    return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0)
}

//Exercise 3
const Stack = require('../../../../Day-2/Data-Structures/stacks-queues-lesson-exercises-master/src/Stack')
const s1 = new Stack()
const s2 = new Stack()

s1.push(1)
s1.push(2)
s1.push(3)

const swap = function(s1, s2) {
  if(s1.isEmpty()) { return }
  s2.push(s1.pop())
  
  swap(s1, s2)
}

console.log(reverseString('dog'))
module.exports = { findFactorial, reverseString, swap }