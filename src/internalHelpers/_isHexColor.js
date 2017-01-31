// @flow

const isHexColor = (color: string) => {
  let newColor = color
  if (color[0] === '#') newColor = color.slice(1)
  return (typeof newColor === 'string') && (newColor.length === 6 || newColor.length === 3) && !isNaN(parseInt(newColor, 16))
}
export default isHexColor
