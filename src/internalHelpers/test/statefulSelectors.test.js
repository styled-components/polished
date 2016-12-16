import statefulSelectors from '../statefulSelectors'

const mockStateMap = [null, ':before', ':after']

function mockTemplate(pseudoSelector) {
  return `section a${pseudoSelector},
  p a${pseudoSelector}`
}

describe('statefulSelectors', function() {
  // Selectors
  it('populates selectors for a single state', function() {
    expect({
      [statefulSelectors([':before'], mockTemplate, mockStateMap)]: {
        'content': 'hello'
      }
    }).toMatchSnapshot()
  })
  it('populates selectors for a multiple states', function() {
    expect({
      [statefulSelectors([':before', ':after'], mockTemplate, mockStateMap)]: {
        'content': 'hello'
      }
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state', function() {
    expect({
      [statefulSelectors([null, ':after'], mockTemplate, mockStateMap)]: {
        'content': 'hello'
      }
    }).toMatchSnapshot()
  })
  it('populates both base selectors and selectors for a single state when not passed a stateMap', function() {
    expect({
      [statefulSelectors([null, ':after'], mockTemplate)]: {
        'content': 'hello'}
      }).toMatchSnapshot()
  })

  // Errors
  it('throws an error when passed a state it does not recognize', function() {
    expect(
      function () {
        return {
          [statefulSelectors([':visited'], mockTemplate, mockStateMap)]: {
            'content': 'hello'
          }
        }
      }
    ).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when passed one of the states it is passed is not recognized', function() {
    expect(
      function () {
        return {
          [statefulSelectors(['hover', ':visited'], mockTemplate, mockStateMap)]: {
            'content': 'hello'
          }
        }
      }
    ).toThrow('You passed an unsupported selector state to this method')
  })
  it('throws an error when not passed a template', function() {
    expect(
      function () {
        return {
          [statefulSelectors([':visited'])]: {
            'content': 'hello'
          }
        }
      }
    ).toThrow('You must provide a template to this method.')
  })
})
