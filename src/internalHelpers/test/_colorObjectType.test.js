// @flow
import colorObjectType from '../_colorObjectType'
import MockedError from '../_errors'

jest.mock('../_errors', () => jest.fn().mockImplementation((errorNumber = 0) => new Error(`Error ${errorNumber}`)))

const DEFAULT_TYPE_ERROR = 'Error 8'

describe('colorObjectType', () => {
  it('identifies color object type', () => {
    expect(colorObjectType({
      color: { red: 255, green: 205, blue: 100 },
    })).toEqual('rgb')

    expect(colorObjectType({
      color: {
        red: 255, green: 205, blue: 100, alpha: 0.5,
      },
    })).toEqual('rgba')

    expect(colorObjectType({
      color: { hue: 100, saturation: 0.5, lightness: 0.5 },
    })).toEqual('hsl')

    expect(colorObjectType({
      color: {
        hue: 100, saturation: 0.5, lightness: 0.5, alpha: 0.5,
      },
    })).toEqual('hsla')
  })

  it('throws error if color object is invalid', () => {
    expect(() => colorObjectType({
      color: {
        not: 123, a: 123, color: 123,
      },
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: {
        red: 255, green: 205, notBlue: 123,
      },
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: {},
    })).toThrowError(DEFAULT_TYPE_ERROR)
  })

  it('throws error if color object is missing', () => {
    expect(() => colorObjectType({ color: undefined })).toThrowError(DEFAULT_TYPE_ERROR)
  })

  it('throws error if color object is not an object', () => {
    expect(() => colorObjectType({ color: 'not an object' })).toThrowError(DEFAULT_TYPE_ERROR)
  })

  it('throws error for unexpected color types', () => {
    expect(() => colorObjectType({
      color: { red: 255, green: 205, blue: 100 },
      expectedTypes: ['hsl', 'hsla'],
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: { hue: 100, saturation: 0.5, lightness: 0.5 },
      expectedTypes: ['rgb', 'rgba'],
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: { hue: 100, saturation: 0.5, lightness: 0.5 },
      expectedTypes: ['hsla'],
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: { red: 255, green: 205, blue: 100 },
      expectedTypes: ['rgba'],
    })).toThrowError(DEFAULT_TYPE_ERROR)

    expect(() => colorObjectType({
      color: {
        red: 255, green: 205, blue: 100, alpha: 0.5,
      },
      expectedTypes: ['rgb'],
    })).toThrowError(DEFAULT_TYPE_ERROR)
  })

  it('throws custom errors', () => {
    expect(() => colorObjectType({
      color: {
        not: 123, a: 123, color: 123,
      },
      typeError: new MockedError(99),
    })).toThrowError('Error 99')
  })
})
