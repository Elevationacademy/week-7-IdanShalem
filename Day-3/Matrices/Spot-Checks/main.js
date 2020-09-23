//spot-check2

const printMatrix = function(mat) {
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[r].length; c++){
            console.log(mat[r][c])
        }
    }
}

const get = function(mat, rowNum, colNum) {
    return mat[rowNum][colNum]
}

const print = function(mat) {
    for (let i = 0; i < mat.length; i++) {
        let line = ""
        for (let j = 0; j < mat[i].length; j++) {
            line += (mat[i][j] + "\t")
        }
        console.log(line)
    } 
}

const printRow = function(matrix, rowNum) {
    for(let i = 0; i < matrix[rowNum].length; i++) {
        console.log(matrix[rowNum][i])
    }
}

const alter = function(matrix, rowNum, colNum, upVal) {
    matrix[rowNum][colNum] = upVal
}

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
printRow(matrix, 1)