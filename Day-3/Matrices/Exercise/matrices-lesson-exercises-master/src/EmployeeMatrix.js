/* Write your code below */
const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix {

    loadData(salaryData) {
        for(let r = 0; r < salaryData.length; r++) {
            this.matrix[r] = Object.values(salaryData[r])
        }
    }

    getEmployees(department) {
        const employeesNames = []
        for(let r = 0; r < this.matrix.length; r++) {
            if(this.matrix[r][2] === department) {
                employeesNames.push(this.matrix[r][1])
            }
        }
        return employeesNames
    }

    getTotalSalary(department) {
        let total = 0
        for(let r = 0; r < this.matrix.length; r++) {
            if(this.matrix[r][2] === department) {
                total += this.matrix[r][3]
            }
        }
        return total
    }

    findRichest() {
        const richest = { salary: this.matrix[0][3], name: this.matrix[0][1]}

        for(let r = 1; r < this.matrix.length; r++) {
            if(this.matrix[r][3] > richest.salary) {
                richest.salary = this.matrix[r][3]
                richest.name = this.matrix[r][1]
            }
        }

        return richest.name
    }

}



//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
console.log(m.findRichest())
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200



/* Do not remove the exports below */
module.exports = EmployeeMatrix