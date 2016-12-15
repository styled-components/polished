// @flow
import directionalProperty from '../helpers/directionalProperty'

const positionMap = ['absolute', 'fixed', 'relative', 'static', 'sticky']

function position(positionKeyword: string|null, ...values: Array<string|null>) {
  if (positionMap.includes(positionKeyword)) {
    return {
      position: positionKeyword,
      ...directionalProperty('', ...values),
    }
  } else {
    const firstValue = positionKeyword // in this case position is actually the first value
    return directionalProperty('', firstValue, ...values)
  }
}

export default position
