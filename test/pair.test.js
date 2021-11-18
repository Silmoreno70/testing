const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')

describe('Par', () => {
  it('Verificar numero par', () => {
    expect(functions.pair(2)).to.be.equal('Si')
    expect(functions.pair(5)).to.be.equal('No')
    expect(functions.pair(6)).to.be.equal('Si')
    expect(functions.pair(6.2)).to.be.equal('No')
    expect(functions.pair(4.2)).to.be.equal('No')
    expect(functions.pair(0)).to.be.equal('Si')
  })
})