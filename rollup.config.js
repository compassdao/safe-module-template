import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser';


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
        uglify(),
        terser(),
    ],
};