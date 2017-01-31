// @flow

const isARGB = (color: string) => /^#([0-9a-f]{2})[0-9a-f]{6}$/i.test(color)
export default isARGB
