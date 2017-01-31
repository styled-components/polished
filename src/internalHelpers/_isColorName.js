// @flow

import colorDict from './_colorDict'

const isColorName = (name: string) => !(Object.keys(colorDict).indexOf(name) < 0)

export default isColorName
