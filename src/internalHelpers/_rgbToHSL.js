const rgbToHSL = (rgba) => {
  // eslint-disable-next-line
  const r = rgba[0] / 255,
    g = rgba[1] / 255,
    b = rgba[2] / 255,
    max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    l = (max + min) / 2,
    d = max - min,
    huecalc = {}

  // eslint-disable-next-line
  var h = 0,
    s = 0

  // eslint-disable-next-line
  huecalc[r] = () => (60 * (g - b) / d) + (g < b ? 360 : 0)
  // eslint-disable-next-line
  huecalc[g] = () => (60 * (b - r) / d) + 120
  // eslint-disable-next-line
  huecalc[b] = () => (60 * (r - g) / d) + 240
  if (d === 0) {
    h = s = 0 // grayscaled color
  } else {
    s = l < 0.5 ? d / (max + min) : d / (2 - max - min)
    h = huecalc[String(max)]()
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)].concat([rgba[3]])
}

export default rgbToHSL
