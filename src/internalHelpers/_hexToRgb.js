// @flow
function hexToRgb(hex: string) : string {
  if (hex.length === 4 || hex.length === 7) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const newHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex)
    return `rgb(${[parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(', ')})`
  } else {
    throw new Error('Invalid hex color')
  }
}

export default hexToRgb
