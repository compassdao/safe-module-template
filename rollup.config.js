import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import path from 'path'
import pk from './package.json'

const pathResolve = (p) => path.resolve(__dirname, p)

export default {
  input: pathResolve('src/index.ts'),
  output: [
    { file: pk.main, format: 'cjs' },
    { file: pk.module, format: 'es' },
  ],
  plugins: [
    json(),
    commonjs(),
    nodeResolve(),
    typescript(),
    alias({
      entries: {
        '@': pathResolve('src'),
      },
    }),
    uglify(),
    terser(),
  ],
}
