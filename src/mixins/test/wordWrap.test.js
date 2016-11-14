import wordWrap from '../wordWrap'

describe('wordWrap', function() {

  it('should accept other values', function() {
    expect(wordWrap('break-all')).toMatchSnapshot()
  })

  it('should default wrap to break-word', function() {
    expect(wordWrap()).toMatchSnapshot()
  })

})

