var dev = 'dev'

var $ = {
	babel: require('gulp-babel'),
	concat: require('gulp-concat'),
	del: require('del'),
	express: require('express'),
	fs: require('fs'),
	gulp: require('gulp'),
	jade: require('gulp-jade'),
	notify: require('gulp-notify'),
	open: require('open'),
	path: require('path'),
	runSequence: require('run-sequence'),
	stylus: require('gulp-stylus'),
	uglify: require('gulp-uglify'),
	wrap: require('gulp-wrap'),

	server: './../server/server',
	task: `./${dev}/tasks`,

	dev: {	
		dir: './dev',
		public: {
			dir: './dev/public',
			img: './dev/public/img'
		},
		bower: './bower_components',
	},

	deploy: {
		dir: './deploy',
		public: {
			dir: './deploy/public',
			img: './deploy/public/img',
			vendorJS: './deploy/public/js/vendor',
			css: './deploy/public/css',
			vendorCss: './deploy/public/css/vendor'
		}
	}

}

$.fn = {
	readFolder: function(folder) {
		var PATH = $.path.join(__dirname, folder)

		var FILES = $.fs.readdirSync(PATH)

		FILES.forEach(function(file){
			return require(`${$.task}/${file}`)($)
		})

	}
}

module.exports = $