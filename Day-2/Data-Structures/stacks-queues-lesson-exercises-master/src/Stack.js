/* Write your class below */
class Stack {

    constructor(){
        this.stack = []
        this.length = 0
    }

    push(x){
        this.stack[this.length] = x
        this.length++
    }

    peek(){
        return this.stack[this.length - 1]
    }

    pop(){
        if(this.length !== 0){
            this.length--
            return this.stack.splice(this.length, 1)[0]
        }
        return null
    }

    isEmpty(){
        return this.length === 0
    }

    print(){
        console.log(this.stack)
    }
}







//You can paste the test code from the lesson below to test your solution

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Stack