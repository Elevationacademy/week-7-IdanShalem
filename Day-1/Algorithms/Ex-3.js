const printStars = (num) => {
    let str = '*'
    for(let i = 1; i <= num; i++) {
        console.log(str.repeat(i))
    }
}
const printBackwardsStars = (num) => {
    let str = '*'
    for(let i = num; i > 0; i--) {
        console.log(str.repeat(i))
    }
}

const printStarSeries = (number, count) => {
    for(let i = 1; i <= count; i++){
        printStars(number)
        printBackwardsStars(number-1)
    }
}

printStarSeries(5, 2)