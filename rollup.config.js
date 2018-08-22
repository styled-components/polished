import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import inject from 'rollup-plugin-inject'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import flow from 'rollup-plugin-flow'
import { uglify } from 'rollup-plugin-uglify'

const processShim = '\0process-shim'

const prod = process.env.PRODUCTION
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

const output = prod ?
[
  { file: 'dist/polished.min.js', format: 'umd', name: 'polished', exports: 'named' },
] :
[
  { file: 'dist/polished.js', format: 'umd', name: 'polished', exports: 'named' },
  { file: 'dist/polished.es.js', format: 'es', name: 'polished', exports: 'named' },
]

const plugins = [
  // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
  // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
  // which includes a shim containing just the parts the bundle needs.
  {
    resolveId(importee) {
      if (importee === processShim) return importee
      return null
    },
    load(id) {
      if (id === processShim) return 'export default { argv: [], env: {} }'
      return null
    },
  },
  flow(),
  nodeResolve(),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  inject({
    process: processShim,
  }),
  babel({
    plugins: [
      'external-helpers',
    ],
  }),
  json(),
]

if (prod) plugins.push(uglify())

export default {
  input: 'src/index.js',
  output,
  plugins,
}
