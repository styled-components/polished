import pxto from '../_pxto'

describe('pxto', () => {
  let em
  describe('factory', () => {
    it('should allow creating a simple pixels-to-x converter', () => {
      em = pxto('em')
      expect(em).toBeInstanceOf(Function)
    })
  })

  describe('converter', () => {
    it('should convert a simple number to ems', () => {
      expect({ height: em(16) }).toMatchSnapshot()
    })

    it('should convert a simple string with px to ems', () => {
      expect({ height: em('16px') }).toMatchSnapshot()
    })

    it('should convert a complex number to ems', () => {
      expect({ height: em(18) }).toMatchSnapshot()
    })

    it('should convert a complex string with px to ems', () => {
      expect({ height: em('18px') }).toMatchSnapshot()
    })

    it('should allow changing the base with a number', () => {
      expect({ height: em('16px', 8) }).toMatchSnapshot()
    })

    it('should allow changing the base with a string', () => {
      expect({ height: em('16px', '8px') }).toMatchSnapshot()
    })

    it('should throw an error if a non-pixel value is passed for the first arg', () => {
      expect(
        () => ({ height: em('10em') }),
      ).toThrow('Expected a string ending in "px" or a number passed as the first argument to em(), got "10em" instead.')
    })

    it('should throw an error if a non-pixel value is passed for the second arg', () => {
      expect(
        () => ({ height: em('10px', '16em') }),
      ).toThrow('Expected a string ending in "px" or a number passed as the second argument to em(), got "16em" instead.')
    })

    it('should throw an error if an invalid pixel value is passed', () => {
      expect(
        () => ({ height: em('apx') }),
      ).toThrow('Passed invalid pixel value ("apx") to em(), please pass a value like "12px" or 12.')
    })

    it('should throw an error if an invalid base value is passed', () => {
      expect(
        () => ({ height: em('16px', 'apx') }),
      ).toThrow('Passed invalid base value ("apx") to em(), please pass a value like "12px" or 12.')
    })
  })
})
