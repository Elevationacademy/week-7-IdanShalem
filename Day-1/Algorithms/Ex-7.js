const decrypt = function(str) {
    let dec = ''

    for(let i = 0; i < str.length; i++){
        dec += str[i] === 'a' ? 'z' :  String.fromCharCode(str.charCodeAt(i) - 1)
    }
    
    return dec
}

console.log(decrypt('dbu'))