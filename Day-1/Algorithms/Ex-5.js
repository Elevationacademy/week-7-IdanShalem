const isPalindrom = function(str) {
    str = str.replace(' ', '').toLowerCase()
    reverseStr = str.split('').reverse().join("")
    return str === reverseStr ? true : false
}

console.log(isPalindrom("soodos"))