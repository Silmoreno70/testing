const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')
console.log(functions.orderedArray([2, 4, 1, 5, 9, 1]))
describe('Ordenar array', () => {
  it('ordena un array de forma ascendente', () => {
    expect(functions.orderedArray([2, 4, 5, 9, 1])).to.have.all.members([ 1, 2, 4, 5, 9])
    expect(functions.orderedArray([10, 9 , 8, 7])).to.have.all.members([7, 8, 9, 10])
    expect(functions.orderedArray([-3, 2, -1])).to.have.all.members([-3, -1, 2])
    expect(functions.orderedArray([1, -1, 2, -2, 3, -3])).to.have.all.members([-3, -2, -1, 1, 2, 3])
    expect(functions.orderedArray([1.5, 1.155, 0])).to.have.all.members([0, 1.155, 1.5])
    expect(functions.orderedArray([3.1416, 9.80, 2.3])).to.have.all.members([2.3, 3.1416, 9.80])
  })
})