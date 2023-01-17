import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default [{
    input: './src/index.js',
    output: [{
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        },
        {
            dir: 'output',
            format: 'cjs'
        },
    ],
    plugins: [
        postcss({
            plugins: [],
            minimize: true,
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        image(),
        external(),
        resolve(),
        terser(),
    ]
}];