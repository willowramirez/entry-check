import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

import { version } from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.bundle.js',
    format: 'cjs',
    banner: '/* entry-check version ' + version + ' */',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
}