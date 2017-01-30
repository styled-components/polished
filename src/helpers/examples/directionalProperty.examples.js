import directionalProperty from '../directionalProperty'
import { stringify } from '../../../helpers'

export default [
  { ...directionalProperty('padding', '12px', '24px', '36px', '48px') },
  stringify`
  ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
`,
]
