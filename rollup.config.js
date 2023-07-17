// Importing necessary plugins
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import path from 'path'
import pk from './package.json' // Importing package.json file

// Function to resolve paths
const pathResolve = (p) => path.resolve(__dirname, p)

// Exporting the configuration object
export default {
  input: pathResolve('src/index.ts'), // Input file
  output: [
    { file: pk.main, format: 'cjs' }, // Output file in CommonJS format
    { file: pk.module, format: 'es' }, // Output file in ES module format
  ],
  plugins: [
    json(), // To import JSON files
    commonjs(), // To convert CommonJS modules to ES6
    nodeResolve(), // To resolve node modules
    typescript(), // To compile TypeScript files
    alias({ // To create alias for directories
      entries: {
        '@': pathResolve('src'),
      },
    }),
    terser(), // To minify the output
  ],
}