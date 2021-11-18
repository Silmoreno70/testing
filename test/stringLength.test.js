const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')

describe('Longitud string', () => {
  it('Longitud de un string', () => {
    expect(functions.stringLength('Hola mundo')).to.be.equal(10)
    expect(functions.stringLength('ola que hace')).to.be.equal(12)
    expect(functions.stringLength('test de chai')).to.be.equal(12)
    expect(functions.stringLength('')).to.be.equal(0)
    expect(functions.stringLength('cuantos caracteres tengo?')).to.be.equal(25)
    expect(functions.stringLength('    ')).to.be.equal(4)
  })
})