import backgrounds from '../backgrounds'

describe('backgrounds', () => {
  it('should generate a single background from a parameter', () => {
    expect({
      ...backgrounds('url("/image/background.jpg")'),
    }).toMatchSnapshot()
  })

  it('should generate a multiple backgrounds from multiple parameters', () => {
    expect({
      ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat'),
    }).toMatchSnapshot()
  })
})
