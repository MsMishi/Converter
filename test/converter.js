const expect = require('chai').expect
const converter = require('../app/converter')

describe('Color Code Converter', function() {
  describe('RGB to HEX conversion', function() {
    it('converts the basic colors', function() {
      let redHex = converter.rgbToHex(255, 0, 0)
      let greenHex = converter.rgbToHex(0, 255, 0)
      let blueHex = converter.rgbToHex(0, 0, 255)
      expect(redHex).to.expect('f0000")
    })
  })
  describe('Hex to RGB conversion', function() {
    it('converts the basic colors')
  })
})
