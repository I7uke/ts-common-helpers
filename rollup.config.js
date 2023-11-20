import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';

/** @type {import('rollup').RollupOptions} */
const rollupOptions = {
	input: './src/index.ts',
	output: {
		file: './dist/index.js',
		format: 'umd',
		name: 'bundle',
		sourcemap: false
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

export default rollupOptions;