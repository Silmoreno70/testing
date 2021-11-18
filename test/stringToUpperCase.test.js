const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')

describe('String a Mayusculas', () => {
  it('Verificar numero par', () => {
    expect(functions.stringToUpperCase('hola mundo')).to.be.equal('HOLA MUNDO')
    expect(functions.stringToUpperCase('Test')).to.be.equal('TEST')
    expect(functions.stringToUpperCase('dinero dinero dinero')).to.be.equal('DINERO DINERO DINERO')
    expect(functions.stringToUpperCase(480)).to.be.equal('480')
    expect(functions.stringToUpperCase('nembe')).to.be.equal('NEMBE')
    expect(functions.stringToUpperCase('siuuuu')).to.be.equal('SIUUUU')
  })
})