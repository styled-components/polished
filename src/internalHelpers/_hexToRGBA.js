// @flow

const hexToRGBA = (color: string) => {
  const num = parseInt(color.slice(1), 16) // Convert to a number
  // eslint-disable-next-line
  return [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255]
}

export default hexToRGBA
