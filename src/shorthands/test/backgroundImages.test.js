import backgroundImages from '../backgroundImages'

describe('backgroundImages', () => {
  it('should generate a single background from a parameter', () => {
    expect({
      ...backgroundImages('url("/image/background.jpg")'),
    }).toEqual({
      backgroundImage: 'url("/image/background.jpg")',
    })
  })

  it('should generate a multiple backgroundImages from multiple parameters', () => {
    expect({
      ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)'),
    }).toEqual({
      backgroundImage: 'url("/image/background.jpg"), linear-gradient(red, green)',
    })
  })
})
