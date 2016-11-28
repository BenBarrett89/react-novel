import {describe, it} from 'mocha'
const should = require('chai').should()

describe('Test suite', () => {
  it('should do something', () => {
    var variable = 'value'
    variable.should.be.a('string')
    variable.should.equal('value')
  })
})
