import size from 'rollup-plugin-bundle-size';
import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/tracker.js',
    output: {
      file: 'dist/latest.js',
      format: 'iife',
    },
    plugins: [
      resolve(),
      buble({objectAssign: true}),
      terser({compress: {evaluate: false}}),
      size(),
    ],
  },
  {
    cache: false,
    input: 'src/tracker.js',
    output: {
      file: 'dist/latest.modern.js',
      format: 'module',
    },
    plugins: [
      resolve(),
      terser({compress: {evaluate: false}, ecma: 2020}),
      size(),
    ],
  },
];
