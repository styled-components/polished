// @flow

import colorDict from './_colorDict'
import isColorName from './_isColorName'

const nameToHex = (name: string) => {
  if (isColorName(name)) return colorDict[name]
  return null
}

export default nameToHex
