// @flow
import zIndex from '../zIndex'

describe('stripUnit', () => {
  const layersArray = [
    'modal',
    'backDrop',
    'header',
    'goTop',
    'base',
  ]
  const layersObject = {
    header: 10,
    modal: 23,
    goTop: 6,
    base: 1,
    backDrop: 18,
  }

  it('should return correct z-index value in array', () => {
    expect({ ...zIndex('modal', layersArray) }).toMatchSnapshot()
  })

  it('should return correct z-index value in array with base value', () => {
    expect({ ...zIndex('modal', layersArray, 100) }).toMatchSnapshot()
  })

  it('should return correct z-index value in object', () => {
    expect({ ...zIndex('modal', layersObject) }).toMatchSnapshot()
  })

  it('should not allow when any parameter is not defined', () => {
    expect(() => {
      zIndex()
    }).toThrow()
  })

  it('should not allow when layers array or object parameter is not defined', () => {
    expect(() => {
      zIndex('modal')
    }).toThrow()
  })

  it('should properly add rules when block has existing rules', () => {
    expect({
      background: 'red',
      ...zIndex('base', layersArray),
    }).toMatchSnapshot()
  })
})
