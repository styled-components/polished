import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import inject from 'rollup-plugin-inject'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import flow from 'rollup-plugin-flow'
import uglify from 'rollup-plugin-uglify'

import { list as babelHelpersList } from 'babel-helpers'

const processShim = '\0process-shim'

const prod = process.env.PRODUCTION
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

const output = prod ?
[
  { file: 'dist/polished.min.js', format: 'umd' },
] :
[
  { file: 'dist/polished.js', format: 'umd' },
  { file: 'dist/polished.es.js', format: 'es' },
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
    babelrc: false,
    presets: [
      ['env', { 'modules': false }],
    ],
    plugins: [
      'external-helpers',
      'transform-object-rest-spread',
      'annotate-pure-calls',
    ],
    // fixing temporary rollup's regression, remove when rollup/rollup#1595 gets solved
    externalHelpersWhitelist: babelHelpersList.filter(helperName => helperName !== 'asyncGenerator'),
  }),
  json(),
]

if (prod) plugins.push(uglify())

export default {
  input: 'src/index.js',
  name: 'polished',
  exports: 'named',
  output,
  plugins,
}
