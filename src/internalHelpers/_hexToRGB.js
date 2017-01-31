// @flow

import checkFix from './_checkFix'

const hexToRGB = (hex) => {
  const newHex = checkFix(hex)
  const h2d = (h) => parseInt(h, 16)
  return [
    h2d(newHex.substr(1, 2)),
    h2d(newHex.substr(3, 2)),
    h2d(newHex.substr(5, 2)),
  ].concat([1])
}

export default hexToRGB
