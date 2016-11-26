/** @module Models */

import chroma from 'chroma-js'

export default class Color {

  /**
   * Class that represents a color.
   * @constructor Color
   * @param {Object} options - The color options
   * @param {string} options.space - The color space (e.g. rgb, hsl, etc)
   * @param {Array<Number>} options.values - The color space values
   * @param {Number} options.alpha - The color alpha channel (opacity)
   */
  constructor(options) {
    const args = [].concat(options.values).concat([options.space])
    const color = chroma(...args)
    color.alpha(options.alpha)

    /**
     * @private
     * @property {chroma.Color} chromaColor - Internal chroma color instance
     */
    this.chromaColor = color
  }

  /**
   * Returns the hue, saturation, lightness, and alpha components of the color.
   * @return {Array} The color components
   */
  hsla() {
    const hsl = this.chromaColor.hsl()
    return hsl.concat([this.chromaColor.alpha()])
  }
}
