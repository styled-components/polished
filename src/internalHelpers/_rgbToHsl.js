// @flow

function rgbToHsl(_red: number, _green: number, _blue: number) {
  // make sure rgb are contained in a set of [0, 255]
  const red = _red / 255
  const green = _green / 255
  const blue = _blue / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2

  if (max === min) {
    return { hue: 0, saturation: 0, lightness } // achromatic
  }

  let hue
  const delta = max - min
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  switch (max) {
    case red:
      hue = ((green - blue) / delta) + (green < blue ? 6 : 0)
      break
    case green:
      hue = ((blue - red) / delta) + 2
      break
    default: // blue case
      hue = ((red - green) / delta) + 4
      break
  }

  hue *= 60
  return { hue, saturation, lightness }
}

export default rgbToHsl
