const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator')

describe('Calculator', () => {
  describe('Suma', () => {
    it('suma de dos numeros', () => {
      expect(calculator.add(2, 4)).to.equal(6)
      expect(calculator.add(4, 4)).to.equal(8)
      expect(calculator.add(12, 102)).to.equal(114)
      expect(calculator.add(32, 30))
        .to.equal(62)
        .to.be.a('number')
    })

    it('suma 14 + 14 = 28', () => {
      expect(calculator.add(14, 14))
        .to.equal(28)
        .to.be.a('number')
    })
  })
  describe('Multiplicacioon', () => {
    it('multiplicacion de dos numeros', () => {
      expect(calculator.multiply(2, 2)).to.be.equal(4)
      expect(calculator.multiply(4, 4)).to.be.equal(16)
      expect(calculator.multiply(12, 102)).to.be.equal(1224)
      expect(calculator.multiply(32, 30)).to.be.equal(960)
    })
  })

  describe('Division', () => {
    it('division de dos numeros', () => {
      expect(calculator.divide(2, 2)).to.be.equal(1)
      expect(calculator.divide(4, 4)).to.be.equal(1)
      expect(calculator.divide(12, 6)).to.be.equal(2)
      expect(calculator.divide(36, 12)).to.be.equal(3)
    })
  })

  describe('Resta', () => {
    it('resta de dos numeros', () => {
      expect(calculator.subtract(2, 2)).to.be.equal(0)
      expect(calculator.subtract(4, 4)).to.be.equal(0)
      expect(calculator.subtract(12, 102)).to.be.equal(-90)
      expect(calculator.subtract(32, 30)).to.be.equal(2)
    })
  })
})

