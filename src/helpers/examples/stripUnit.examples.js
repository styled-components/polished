import stripUnit from '../stripUnit'

export default [
  { '--dimension': stripUnit('100px') },
  `
  --dimension: ${stripUnit('100px')}
`,
]
