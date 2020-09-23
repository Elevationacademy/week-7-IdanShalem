const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    arr2.forEach(a => arr1.push(a))
    console.log(arr1)
    let jumbledArr = [],
        currentIndex = arr1.length - 1

    while(currentIndex >= 0) {
        let indexToFind = Math.floor(Math.random() * currentIndex--)
        jumbledArr.push(arr1.splice(indexToFind, 1)[0])
    }

    return jumbledArr
}

console.log(jumble(colors, foods)) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]