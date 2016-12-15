// @flow
import directionalProperty from '../helpers/directionalProperty'

function borderWidth(...values: Array<string|null>) {
  return directionalProperty('border-width', ...values)
}

export default borderWidth
