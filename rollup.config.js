import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser';
import alias from 'rollup-plugin-alias';
import path from 'path'

const pathResolve = p => path.resolve(__dirname, p)

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/index.cjs.js', format: "cjs" },
        { file: 'dist/index.esm.js', format: "es" },
    ],
    plugins: [
        json(),
        commonjs(),
        nodeResolve(),
        typescript(),
        alias({
            entries: {
                '@': pathResolve('src')
            }
        }),
        uglify(),
        terser(),
    ],
};