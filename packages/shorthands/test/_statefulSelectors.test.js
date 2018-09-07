// @flow
import statefulSelectors from '../src/_statefulSelectors'

const mockStateMap = [null, 'hover', 'focus']

function mockTemplate(pseudoSelector) {
  return `section a${pseudoSelector},
  p a${pseudoSelector}`
}

describe('statefulSelectors', () => {
  // Selectors
  it('populates selectors for a single state', () => {
    expect({
      [statefulSelectors(['focus'], mockTemplate, mockStateMap)]: {
        content: 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates selectors for a multiple states', () => {
    expect({
      [statefulSelectors(['active', 'focus'], mockTemplate, mockStateMap)]: {
        content: 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', () => {
    expect({
      [statefulSelectors([null, 'focus'], mockTemplate, mockStateMap)]: {
        content: 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state when not passed a stateMap', () => {
    expect({
      [statefulSelectors([null, 'focus'], mockTemplate)]: {
        content: 'hello',
      },
    }).toMatchSnapshot()
  })

  // Errors
  it('throws an error when passed a state it does not recognize', () => {
    expect(() => ({
      // $FlowFixMe
      [statefulSelectors([':visited'], mockTemplate, mockStateMap)]: {
        content: 'hello',
      },
    })).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when passed one of the states it is passed is not recognized', () => {
    expect(() => ({
      // $FlowFixMe
      [statefulSelectors(['hover', ':visited'], mockTemplate, mockStateMap)]: {
        content: 'hello',
      },
    })).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when not passed a template', () => {
    expect(() => ({
      // $FlowFixMe
      [statefulSelectors([':visited'])]: {
        content: 'hello',
      },
    })).toThrow('You must provide a template to this method.')
  })
})
