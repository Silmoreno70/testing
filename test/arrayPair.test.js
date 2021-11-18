const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')

describe('Array Par', () => {
  it('Verificar si todos los numeros de un array son  par', () => {
    expect(functions.arrayPair([1, 2, 3])).to.be.equal('No')
    expect(functions.arrayPair([2, 4, 6, 8])).to.be.equal('Si')
    expect(functions.arrayPair([26, 32, 11])).to.be.equal('No')
    expect(functions.arrayPair([2, 4, 6, 8, 2.2])).to.be.equal('No')
    expect(functions.arrayPair([78, 98, 53])).to.be.equal('No')
    expect(functions.arrayPair([120, 386, 250])).to.be.equal('Si')
  })
})