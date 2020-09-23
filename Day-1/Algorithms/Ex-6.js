const encrypt = function(str) {
    let enc = ''

    for(let i = 0; i < str.length; i++){
        enc += str[i] === 'z' ? 'a' :  String.fromCharCode(str.charCodeAt(i) + 1)
    }
    
    return enc
}

console.log(encrypt('cat'))