let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/assets')
	.sass('resources/scss/app.scss', 'public/assets')
	.browserSync({
		files: [
			'./public/index.html',
			'resources/**/*'
		],
		proxy: false,
		server: {
		    baseDir: "public",
		    index: 'index.html'
		}})
	.options({
	    postCss: [
	        require('autoprefixer')
	    ]
	}
);
