// @flow
import important from '../important'
import cover from '../../mixins/cover'

describe('important', () => {
  it('should add !important to a single rule in a flat style block', () => {
    expect(important({ color: 'red' })).toMatchSnapshot()
  })

  it('should add !important to a single rule in a flat style block when the value is a number', () => {
    expect(important({ fontSize: 12 })).toMatchSnapshot()
  })

  it('should add !important to every rule in a flat style block', () => {
    expect(
      important({
        color: 'red',
        background: 'blue',
      }),
    ).toMatchSnapshot()
  })

  it('should add !important to a target rule when passed as a string', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
        },
        'color',
      ),
    ).toMatchSnapshot()
  })

  it('should add !important to a target rule when passed as a single item array', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
        },
        ['color'],
      ),
    ).toMatchSnapshot()
  })

  it('should add !important to a target rule when passed as an array', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
          height: '100px',
        },
        ['color', 'height'],
      ),
    ).toMatchSnapshot()
  })

  it('should add !important to a mixture of unnested and nested target rules when passed as an array', () => {
    expect(
      important(
        {
          background: 'blue',
          height: '100px',
          div: {
            color: 'red',
          },
        },
        ['color', 'height'],
      ),
    ).toMatchSnapshot()
  })

  it('should add !important to all rules in a polished module', () => {
    expect(important(cover())).toMatchSnapshot()
  })

  it('should add !important to a specific rule in a polished module', () => {
    expect(important(cover(), 'position')).toMatchSnapshot()
  })

  it('should return original styles when no properties are found', () => {
    expect(
      important(
        {
          color: 'red',
          background: 'blue',
          height: '100px',
        },
        ['width', 'fontSize'],
      ),
    ).toMatchSnapshot()
  })

  it('should throw an error when passed a non-object', () => {
    expect(() => {
      // $FlowFixMe
      important('test')
    }).toThrow('important requires a valid style object, got a string instead.')
  })
})
