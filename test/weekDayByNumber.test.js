const chai = require('chai')
const expect = chai.expect

const functions = require('../src/functions')

describe('Dia de la semana', () => {
  it('Obtener dia de la semana por numero', () => {
    expect(functions.weekDayByNumber(1)).to.be.equal('domingo')
    expect(functions.weekDayByNumber(2)).to.be.equal('lunes')
    expect(functions.weekDayByNumber(3)).to.be.equal('martes')
    expect(functions.weekDayByNumber(4)).to.be.equal('miercoles')
    expect(functions.weekDayByNumber(5)).to.be.equal('jueves')
    expect(functions.weekDayByNumber(6)).to.be.equal('viernes')
    expect(functions.weekDayByNumber(8)).to.be.equal('No es un dia valido')
  })
})