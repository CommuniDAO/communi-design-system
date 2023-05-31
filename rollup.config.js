import path from 'path';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.ts', // Entry point
  output: [
    {
      file: 'lib/index.js', // Output file
      format: 'umd', // UMD format for use in Node.js or in the browser
      name: 'communi-design-system', // Name of the global variable for the bundle
      sourcemap: true,
      globals: {
        'react': 'React', // Indicate that React is external and will not be bundled
        'react-dom': 'ReactDOM' // Indicate that ReactDOM is external and will not be bundled
      }
    }
  ],
  external: ['react', 'react-dom'], // Mark react as external
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'), // Replace environment variables
    }),
    alias({
      entries: [
        { find: '~/styles', replacement: path.resolve(projectRootDir, 'styles') }, // Path aliases
        { find: '~/src', replacement: path.resolve(projectRootDir, 'src') }
      ]
    }),
    resolve(), // Resolve modules from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    json(), // Converts .json files to ES6 modules
    typescript({
      sourceMap: false, // don't generate sourceMap for production
    }),
    terser({
      format: {
        comments: false, // remove comments
      },
    }),
  ]
};
