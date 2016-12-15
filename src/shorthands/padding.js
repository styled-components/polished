// @flow
import directionalProperty from '../helpers/directionalProperty'

function padding(...values: Array<string|null>) {
  return directionalProperty('padding', ...values)
}

export default padding
