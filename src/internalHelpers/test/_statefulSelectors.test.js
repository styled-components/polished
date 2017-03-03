import statefulSelectors from '../_statefulSelectors'

const mockStateMap = [null, ':before', ':after']

function mockTemplate(pseudoSelector) {
  return `section a${pseudoSelector},
  p a${pseudoSelector}`
}

describe('statefulSelectors', () => {
  // Selectors
  it('populates selectors for a single state', () => {
    expect({
      [statefulSelectors([':before'], mockTemplate, mockStateMap)]: {
        'content': 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates selectors for a multiple states', () => {
    expect({
      [statefulSelectors([':before', ':after'], mockTemplate, mockStateMap)]: {
        'content': 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', () => {
    expect({
      [statefulSelectors([null, ':after'], mockTemplate, mockStateMap)]: {
        'content': 'hello',
      },
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state when not passed a stateMap', () => {
    expect({
      [statefulSelectors([null, ':after'], mockTemplate)]: {
        'content': 'hello' },
    }).toMatchSnapshot()
  })

  // Errors
  it('throws an error when passed a state it does not recognize', () => {
    expect(
      () => ({
        [statefulSelectors([':visited'], mockTemplate, mockStateMap)]: {
          'content': 'hello',
        },
      }),
    ).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when passed one of the states it is passed is not recognized', () => {
    expect(
      () => ({
        [statefulSelectors(['hover', ':visited'], mockTemplate, mockStateMap)]: {
          'content': 'hello',
        },
      }),
    ).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when not passed a template', () => {
    expect(
      () => ({
        [statefulSelectors([':visited'])]: {
          'content': 'hello',
        },
      }),
    ).toThrow('You must provide a template to this method.')
  })
})
