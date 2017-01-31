// @flow

import isHexColor from './_isHexColor'
import isARGB from './_isARGB'

const isColor = (color: string) => color && (isHexColor(color) || isARGB(color))

export default isColor
