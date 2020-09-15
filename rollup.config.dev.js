import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

const dist = process.env.ROLLUP_WATCH ? '.dev' : '.gh-pages';

// eslint-disable-next-line import/no-default-export
export default {
	input: path.resolve(__dirname, 'dev', 'app.ts'),
	output: {
		format: 'esm',
		dir: dist,
		sourcemap: process.env.ROLLUP_WATCH ? 'inline' : true,
	},
	plugins: [
		babel({
			babelHelpers: 'bundled',
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							esmodules: true,
						},
					},
				],
				'@babel/preset-typescript',
			],
			extensions,
		}),
		resolve({ extensions }),
		commonjs(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
			__PACKAGE_VERSION__: JSON.stringify(pkg.version),
		}),
		html(),
		process.env.ROLLUP_WATCH && serve(dist),
		process.env.ROLLUP_WATCH && livereload({ watch: dist }),
	].filter(Boolean),
};
