// @flow

import colorDict from './_colorDict'

const hexToName = (hex: string) => {
  const getValues = (obj) => Object.keys(obj).map((k) => obj[k])
  const findValue = (obj, keyword) => Object.keys(obj)[getValues(obj).indexOf(keyword)]
  return findValue(colorDict, hex)
}

export default hexToName
