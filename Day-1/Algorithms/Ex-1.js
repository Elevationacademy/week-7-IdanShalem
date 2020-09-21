const printStars = (num) => {
    let str = '*'
    for(let i = 1; i <= num; i++) {
        console.log(str.repeat(i))
    }
}

printStars(4)