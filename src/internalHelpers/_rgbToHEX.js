// @flow

const hexToRGB = (rgba) => {
  const rgb = rgba.slice(0, 3)
  const d2h = (d) => {
    let hex = d.toString(16)
    hex = '00'.substr(0, 2 - hex.length) + hex
    return hex
  }
  const r = rgb.map(d2h).join('').toLowerCase()
  return `#${r}`
}

export default hexToRGB
