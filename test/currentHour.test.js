const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')
const date = new Date()
const hour = `${date.getHours()}:${date.getMinutes()}`
describe('Hora actual', () => {
  it('Obtener la hora actual', () => {
    expect(functions.currentHour()).to.be.equal(hour)
    expect(functions.currentHour()).to.be.equal(hour)
    expect(functions.currentHour()).to.be.equal(hour)
    expect(functions.currentHour()).to.be.equal(hour)
    expect(functions.currentHour()).to.be.equal(hour)
    expect(functions.currentHour()).to.be.equal(hour)
  })
})