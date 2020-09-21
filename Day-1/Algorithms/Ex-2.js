const printBackwardsStars = (num) => {
    let str = '*'
    for(let i = num; i > 0; i--) {
        console.log(str.repeat(i))
    }
}

printBackwardsStars(6)