// @flow
import directionalProperty from '../helpers/directionalProperty'

function borderColor(...values: Array<string|null>) {
  return directionalProperty('border-color', ...values)
}

export default borderColor
