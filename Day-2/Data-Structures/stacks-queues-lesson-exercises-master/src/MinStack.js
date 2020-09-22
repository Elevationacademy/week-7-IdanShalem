/* Write your class below */
const Stack = require('./Stack')
class MinStack {

    constructor(){
        this.stack = []
        this.minValue = new Stack()
        this.length = 0
    }

    push(x){
        this.stack[this.length] = x
        if(this.length === 0){
            this.minValue.push(x)
        } else{
            if(this.minValue.peek() >= x){
                this.minValue.push(x)
            }
        }
        this.length++
    }

    peek(){
        return this.stack[this.length - 1]
    }

    pop(){
        if(this.length !== 0){
            if(this.minValue.peek() === this.peek()){
                this.minValue.pop()
            }
            this.length--
            return delete this.stack[this.length]
        }
        return null
    }

    isEmpty(){
        return this.length === 0
    }

    getMin(){
        return this.minValue.peek()
    }

    print(){
        console.log(this.stack)
    }
}


//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19



/* Do not remove the exports below */
module.exports = MinStack