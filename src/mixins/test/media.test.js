import media from '../media'

describe('media', () => {
  it('should return a valid media query when passed min width', () => {
    expect(
      media({
        minWidth: 100,
      }),
    ).toMatchSnapshot()
  })

  it('should return a valid media query when passed max width', () => {
    expect(
      media({
        maxWidth: 600,
      }),
    ).toMatchSnapshot()
  })

  it('should return a valid media query when passed min/max widths', () => {
    expect(
      media({
        minWidth: 100,
        maxWidth: 600,
      }),
    ).toMatchSnapshot()
  })

  it('should return a valid media query when passed type', () => {
    expect(
      media({
        type: 'print',
      }),
    ).toMatchSnapshot()
  })

  it('should return a valid media query when passed type and min/max widths', () => {
    expect(
      media({
        type: 'all',
        minWidth: '10rem',
        maxWidth: '30rem',
      }),
    ).toMatchSnapshot()
  })

  it('should return a valid media query when passed a string', () => {
    expect(media('(orientation: portrait)')).toMatchSnapshot()
  })

  it('should throw an error when passed a boolean', () => {
    expect(() => {
      media(true)
    }).toThrow('Property must be an object or string')
  })
})
