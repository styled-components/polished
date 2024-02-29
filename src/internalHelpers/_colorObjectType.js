// @flow
import PolishedError from './_errors'

const TYPE_KEYS = {
  rgb: ['red', 'green', 'blue'],
  rgba: ['red', 'green', 'blue', 'alpha'],
  hsl: ['hue', 'saturation', 'lightness'],
  hsla: ['hue', 'saturation', 'lightness', 'alpha'],
}

const matchType = (color: Object, type: string) => {
  const keys = TYPE_KEYS[type]
  return keys.every(key => typeof color[key] === 'number')
    && (typeof color.alpha === 'number' ? keys.indexOf('alpha') > -1 : true)
}

/**
 * Check color object type
 * @private
 */
export default function colorObjectType({
  color,
  expectedTypes = ['rgb', 'rgba', 'hsl', 'hsla'],
  typeError = new PolishedError(8),
}:{ color: Object, expectedTypes?: string[], typeError?: PolishedError }): string {
  if (typeof color !== 'object') throw typeError

  const matchedType = expectedTypes.find(type => matchType(color, type))
  if (matchedType) return matchedType

  throw typeError
}
