// @flow
import directionalProperty from '../helpers/directionalProperty'

function borderStyle(...values: Array<string|null>) {
  return directionalProperty('border-style', ...values)
}

export default borderStyle
