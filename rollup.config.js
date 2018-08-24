import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const createConfig = ({
  output,
  env,
  min = false,
}) => ({
  input: 'src/index.js',
  output: Object.assign({ name: 'polished', exports: 'named' }, output),
  plugins: [
    nodeResolve(),
    babel({ plugins: ['external-helpers'] }),
    env && replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    min && uglify(),
  ].filter(Boolean),
})

export default [
  createConfig({
    output: { file: pkg.module, format: 'esm' },
  }),
  createConfig({
    output: { file: 'dist/polished.js', format: 'umd' },
    env: 'development',
  }),
  createConfig({
    output: { file: 'dist/polished.min.js', format: 'umd' },
    env: 'production',
    min: true,
  }),
]
