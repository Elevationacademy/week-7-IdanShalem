class UniqueArray {

    constructor(){
        this.length = 0
        this.arr = []
        this.obj = {}
    }

    add(value){
        if(!this.exists(value)){
            this.obj[value] = true
            this.arr[this.length] = value
            this.length++
        }
    }

    showAll(){
        let str = ''
        for(let i = 0; i < this.length; i++){
            str += `${JSON.stringify(this.arr[i])},`
        }
        const withoutTrailingComma = `[${str.substring(0, str.length - 1)}]`  
        console.log(withoutTrailingComma)  
    }

    exists(item){
        item = JSON.stringify(item)
        return this.arr.some(a => JSON.stringify(a) === item)
    }

    get(index){
        if(index > this.length - 1 || index < 0){
            return -1
        }
        return this.arr[index]
    }
}

const arr = new UniqueArray()

const uniqueStuff = new UniqueArray()
uniqueStuff.add({x:3})
console.log(uniqueStuff.exists({y:3}))
console.log(uniqueStuff)
uniqueStuff.showAll() //prints ["toy"]\
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toyן")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(3)) //prints "hydrogen"