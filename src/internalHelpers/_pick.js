// @flow

import contains from '../internalHelpers/_contains'

export default (picked: [string], object: Object): Object => {
  const result = {}
  const keys = Object.keys(object)

  for (let i = 0, len = keys.length; i < len; i += 1) {
    const key = keys[i]
    if (contains(key, picked)) {
      result[key] = object[key]
    }
  }

  return result
}
