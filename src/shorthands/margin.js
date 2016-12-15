// @flow
import directionalProperty from '../helpers/directionalProperty'

function margin(...values: Array<string|null>) {
  return directionalProperty('margin', ...values)
}

export default margin
