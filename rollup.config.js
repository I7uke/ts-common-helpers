import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';

export default {
	input: './src/index.ts',
	output: {
		file: './dist/index.js',
		format: 'es'
	},
	plugins: [
		cleaner({
			targets: [
				'./dist'
			]
		}),
		resolve(),
		terser(),
		typescript(),
		babel(),
	]
};

