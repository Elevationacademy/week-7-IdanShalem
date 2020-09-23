const Matrix = require('./Matrix')

class TicTacToe extends Matrix {

    constructor() {
        super()
        this.currentPlayer = 0
    }

    loadBoard() {
        for(let r = 0; r < 3; r++) {
            this.matrix[r] = ['.', '.', '.']
        }
    }

    _checkPlayer(player) {
        const validTurn = player !== this.currentPlayer 
        this.currentPlayer = player
        return validTurn
    }

    _checkValidSpot(rowNum, columnNum) {
        return this.matrix[rowNum][columnNum] === '.'
    }

    _checkWin(rowNum, columnNum, player) {
        return (this._checkColumn(columnNum, player) || this._checkRow(rowNum, player) || 
            this._checkDiagnoLeft(player) || this._checkDiagnoRight(player))
    }

    _checkColumn(columnNum, player) {
        let counter = 0
        for(let r = 0; r < this.matrix.length; r++) {
            player === 1 ? 
                this.matrix[r][columnNum] === 'X' ? counter++ : counter = counter :
                this.matrix[r][columnNum] === 'O' ? counter++ : counter = counter
        }
        return counter === 3
    }

    _checkRow(rowNum, player) {
        let counter = 0
        for(let c = 0; c < this.matrix[rowNum].length; c++) {
            player === 1 ? 
                this.matrix[rowNum][c] === 'X' ? counter++ : counter = counter :
                this.matrix[rowNum][c] === 'O' ? counter++ : counter = counter
        }
        return counter === 3
    }

    _checkDiagnoLeft(player) {
        let counter = 0
        for(let i = 0; i < this.matrix.length; i++) {
            player === 1 ? 
                this.matrix[i][i] === 'X' ? counter++ : counter = counter :
                this.matrix[i][i] === 'O' ? counter++ : counter = counter
        }
        return counter === 3
    }

    _checkDiagnoRight(player) {
        let counter = 0
        for(let i = this.matrix.length - 1; i >= 0; i--) {
            player === 1 ? 
                this.matrix[i][i] === 'X' ? counter++ : counter = counter :
                this.matrix[i][i] === 'O' ? counter++ : counter = counter
        }
        return counter === 3
    }

    play(rowNum, columnNum, player) {
        if(this._checkPlayer(player)){
            if(this._checkValidSpot(rowNum, columnNum)){
                this.matrix[rowNum][columnNum] = player === 1 ? 'X' : 'O'
                if(this._checkWin(rowNum, columnNum, player)) {
                        console.log(`Congratulations Player ${player}`)
                        this.loadBoard()
                        this.currentPlayer = 0
                }
            } else {
                console.log(`Not a valid spot`)
            } 
        } else {
            console.log(`Player ${player} wait for your turn`)
        }
    }
    
}

let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1


board.print()
console.log(board)