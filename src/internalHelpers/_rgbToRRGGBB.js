// @flow

const rgbToRRGGBB = (color: string): string => {
  if (!color || color.length !== 3) return color
  const sp = color.split('')
  let r = ''
  sp.forEach((i) => {
    r += `${i}${i}`
  })
  return r
}

export default rgbToRRGGBB
