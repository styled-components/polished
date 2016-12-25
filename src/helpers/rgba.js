// @flow

import rgb from './rgb'

type RgbaColor = {
  red: number,
  green: number,
  blue: number,
  alpha: number,
}

function rgba(value: RgbaColor | number, green?: number, blue?: number, alpha?: number): string {
  if (typeof value === 'number' &&
      typeof green === 'number' &&
      typeof blue === 'number' &&
      typeof alpha === 'number') {
    return alpha === 255 ? rgb(value, green, blue) : `rgba(${value},${green},${blue},${alpha})`
  } else if (typeof value === 'object' && green === undefined && blue === undefined && alpha === undefined) {
    return value.alpha === 255
      ? rgb(value.red, value.green, value.blue)
      : `rgba(${value.red},${value.green},${value.blue},${value.alpha})`
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 180) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 180 }).')
}

export default rgba
