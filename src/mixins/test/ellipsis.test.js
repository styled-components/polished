// @flow
import ellipsis from '../ellipsis'

describe('ellipsis', () => {
  it('should pass parameter to the value of max-width', () => {
    expect(ellipsis('300px')).toEqual({
      display: 'inline-block',
      maxWidth: '300px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    })
  })

  it('should pass parameter of type integer to the value of max-width', () => {
    expect(ellipsis(300)).toEqual({
      display: 'inline-block',
      maxWidth: 300,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    })
  })

  it('should default lines to 1 and max-width to 100%', () => {
    expect(ellipsis()).toEqual({
      display: 'inline-block',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    })
  })

  it('should truncate text after 3 lines', () => {
    expect(ellipsis(null, 3)).toEqual({
      display: '-webkit-box',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      webkitBoxOrient: 'vertical',
      webkitLineClamp: 3,
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    })
  })

  it('should truncate text after 3 lines and 500px max-width', () => {
    expect(ellipsis('500px', 3)).toEqual({
      display: '-webkit-box',
      maxWidth: '500px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      webkitBoxOrient: 'vertical',
      webkitLineClamp: 3,
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    })
  })
})
