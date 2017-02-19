// @flow
import { isRgb, isRgba, isHsl, isHsla, isHex } from '../internalHelpers/_isValidColor'
import hexToRgb from '../internalHelpers/_hexToRgb'
import hslToRgb from '../internalHelpers/_hslToRgb'

const getNewTransparency = (currentTransparency: number, percentage: number) : number => (
  currentTransparency * (1 - percentage)
)

const getColorValuesInBrackets = (color: string) : string => (
  color.slice(color.indexOf('(') + 1, color.indexOf(')'))
)

const getValuesTillLastComma = (color: string) : string => (
  color.slice(0, color.lastIndexOf(','))
)

const transparentizeRgb = (rgb: string, percentage: number) : string => (
  `rgba(${getColorValuesInBrackets(rgb)}, ${getNewTransparency(1, percentage)})`
)

const getLastColorValue = (color: string) : number => (
  Number(
    color.slice(
      color.lastIndexOf(',') + 1,
      color.indexOf(')'),
    ),
  )
)

function transparentize(color: string, percentage: number) {
  if (percentage >= 0 && percentage <= 1) {
    if (isHex(color)) {
      return transparentizeRgb(`${hexToRgb(color)})`, percentage)
    } else if (isRgb(color)) {
      return transparentizeRgb(color, percentage)
    } else if (isRgba(color)) {
      const currentTransparency = getLastColorValue(color)
      const rgb = getValuesTillLastComma(getColorValuesInBrackets(color))
      const newTransparency = getNewTransparency(currentTransparency, percentage)

      return `rgba(${rgb}, ${newTransparency})`
    } else if (isHsl(color)) {
      const newTransparency = getNewTransparency(1, percentage)
      const values = getColorValuesInBrackets(color).split(',').map(num => parseInt(num, 10) / 100)
      const rgbValues = hslToRgb(...values)

      return `rgba(${rgbValues}, ${newTransparency})`
    } else if (isHsla(color)) {
      const hslValues = getValuesTillLastComma(getColorValuesInBrackets(color))
      const currentTransparency = getLastColorValue(color)
      const newTransparency = getNewTransparency(currentTransparency, percentage)
      const values = hslValues.split(',').map(num => parseInt(num, 10) / 100)
      const rgbValues = hslToRgb(...values)

      return `rgba(${rgbValues}, ${newTransparency})`
    } else {
      throw new Error('Invalid color')
    }
  } else {
    throw new Error('Invalid percentage, only values from 0 to 1 are accepted')
  }
}

export default transparentize
