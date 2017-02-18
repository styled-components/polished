// @flow
import { isRgb, isRgba, isHsl, isHsla, isHex } from '../internalHelpers/_isValidColor'
import hslToRgb from '../internalHelpers/_hslToRgb'
import hexToRgb from '../internalHelpers/_hexToRgb'

const getNewTransparency = (currentTransparency: number, percentage: number) : number => (
  currentTransparency * (1 - (percentage / 100))
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

function transparentize(color: string, percentage : number) {
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
    const hslValues = getColorValuesInBrackets(color)
    const rgb = hslToRgb(
      ...(hslValues.split(', ').map(val => parseInt(val, 10))),
    )

    return transparentizeRgb(rgb, percentage)
  } else if (isHsla(color)) {
    const hslValues = getValuesTillLastComma(getColorValuesInBrackets(color))
    const currentTransparency = getLastColorValue(color)
    const rgb = hslToRgb(
      ...(hslValues.split(', ').map(val => parseInt(val, 10))),
    )

    const newTransparency = getNewTransparency(currentTransparency, percentage)
    return `rgba(${rgb}, ${newTransparency})`
  } else {
    throw new Error('Invalid color')
  }
}

export default transparentize
