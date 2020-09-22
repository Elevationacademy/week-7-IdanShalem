/* Write your class below */
const Queue = require('./Queue')
class DuoQueue{

    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    enqueue(person, qNum){
        if(qNum === 1){
            this.q1.enqueue(person)
        }
        if(qNum === 2){
            this.q2.enqueue(person)
        }
    }

    dequeue(qNum){
        if(qNum === 1){
            if(!this.q1.isEmpty()){
                this.q1.dequeue()
            }   
        }
        if(qNum === 2){
            if(!this.q2.isEmpty()){
                this.q2.dequeue()
            } 
        }
    }

    getLongestQueue(){
        return this.q1.length > this.q2.length ? this.q1 : this.q2
    }

    getShortestQueue(){
        return this.q1.length > this.q2.length ? this.q2 : this.q1
    }

    balanceQueues(){
        const lQ = this.getLongestQueue()
        const sQ = this.getShortestQueue()
        while(lQ.length !== sQ.length && lQ.length - sQ.length > 1){
            sQ.enqueue(lQ.dequeue())
        }
    }

}


//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }




/* Do not remove the exports below */
module.exports = DuoQueue