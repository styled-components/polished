// @flow

import hexToRGB from './_hexToRGB'
import hexToName from './_hexToName'
import rgbToHSL from './_rgbToHSL'
import rgbToHEX from './_rgbToHEX'
import hslToRGB from './_hslToRgb'
import nameToHex from './_nameToHex'
import isColorName from './_isColorName'
import isHexColor from './_isHexColor'

class Color {
  constructor(opt, val) {
    if (opt) {
      this.set(opt, val)
    }
  }

  // eslint-disable-next-line consistent-return
  hex(str) {
    if (arguments.length <= 0) return this.hexval
    this.hexval = str.toLowerCase()
    this.rgbaval = hexToRGB(this.hexval)
    this.name = hexToName(this.hexval)
  }

  // eslint-disable-next-line consistent-return
  rgb(r, g, b) {
    if (arguments.length <= 0) return this.rgbaval.slice(0, 3)
    this.rgba(r, g, b, 1)
  }

  // eslint-disable-next-line consistent-return
  rgba(r, g, b, a) {
    if (arguments.length <= 0) return this.rgbaval
    this.rgbaval = [r, g, b, a]
    this.hexval = rgbToHEX(this.rgbaval)
    this.hslaval = rgbToHSL(this.rgbaval)
    this.name = hexToName(this.hexval)
  }

  // eslint-disable-next-line consistent-return
  hsl(h, s, l) {
    if (arguments.length <= 0) return this.hslaval.slice(0, 3)
    this.hsla(h, s, l, 1)
  }

  // eslint-disable-next-line consistent-return
  hsla(h, s, l, a) {
    if (arguments.length <= 0) return this.hslaval
    this.hslaval = [h, s, l, a]
    this.rgbaval = hslToRGB(this.hslaval)
    this.hexval = rgbToHEX(this.rgbaval)
    this.name = hexToName(this.hexval)
  }

  // eslint-disable-next-line consistent-return
  mix(color1, color2, weight = 50) {
    const base = color1.rgba()
    const brend = color2.rgba()
    const newcolor = base.map((c, i) => {
      if (i === 3) {
        return brend[i] + ((c - brend[i]) * (weight / 100))
      }
      return Math.floor(brend[i] + ((c - brend[i]) * (weight / 100)))
    })

    this.rgbaval = newcolor
    this.hexval = rgbToHEX(this.rgbaval)
    this.hslaval = rgbToHSL(this.rgbaval)
    this.name = hexToName(this.hexval)
  }

  // eslint-disable-next-line consistent-return
  name(str) {
    if (arguments.length <= 0) return this.name
    if (!isColorName(str)) return null
    this.hexval = nameToHex(str)
    this.rgbaval = hexToRGB(this.hexval)
    this.hslaval = rgbToHSL(this.rgbaval)
    this.name = hexToName(this.hexval)
  }

  values() {
    return {
      rgb: this.rgb(),
      rgba: this.rgba(),
      hex: this.hex(),
      hsl: this.hsl(),
      hsla: this.hsla(),
      name: this.name,
    }
  }

  // eslint-disable-next-line consistent-return
  set(opt, val) {
    const options = {
      hex: (arg) => this.hex.call(this, arg),
      // eslint-disable-next-line
      rgb: (arg) => this.rgb.apply(this, arg),
      // eslint-disable-next-line
      rgba: (arg) => this.rgba.apply(this, arg),
      // eslint-disable-next-line
      hsl: (arg) => this.hsl.apply(this, arg),
      // eslint-disable-next-line
      hsla: (arg) => this.hsla.apply(this, arg),
      // eslint-disable-next-line
      mix: (arg) => this.mix.apply(this, arg),
      name: (arg) => this.name.call(this, arg),
    }

    if (typeof opt === 'string') {
      if (isColorName(opt)) {
        options.name.call(this, opt)
      } else if (isHexColor(opt)) {
        options.hex.call(this, opt)
      } else if (!(Object.keys(options).indexOf(opt) < 0)) {
        options[opt].call(this, val)
      } else {
        throw new Error('Please enter a valid color')
      }
    } else if (typeof opt === 'object') {
      const key = Object.keys(opt)[0]
      options[key].call(this, opt[key])
    } else {
      throw new Error('Please enter a valid color')
    }
  }

}

export default Color
