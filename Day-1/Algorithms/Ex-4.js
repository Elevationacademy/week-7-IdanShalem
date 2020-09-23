const reverse = function(str){
    let reversed = str.length === 0 ? "" : reverse(str.substr(1)) + str.charAt(0)
    return reversed
}

console.log(reverse("dog")) //should return "god"
console.log(reverse("race car")) //should return "rac ecar"