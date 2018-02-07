const { BABEL_ENV, NODE_ENV } = process.env
const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test'

module.exports = {
  presets: [
    ['env', {
      modules: false,
      loose: true,
      exclude: ['transform-es2015-typeof-symbol'],
    }]
  ],
  plugins: [
    cjs && 'add-module-exports',
    cjs && 'transform-es2015-modules-commonjs',
    'transform-object-rest-spread',
    'transform-flow-strip-types',
    'syntax-trailing-function-commas',
    'annotate-pure-calls'
  ].filter(Boolean)
}
