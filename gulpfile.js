const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const merge = require('gulp-merge-json');
const fs = require('fs');
const path = require('path');

const { src, dest, watch} = require('gulp');

function defaultTask(cb){
	console.log("Gulp is working");
	cb();
}

function pug_data(cb){
	return gulp.src('./data/*.json')
		.pipe(merge({
			fileName: 'data.json',
			edit: (json, file) => {
				// Extract the filename and strip the extension
				var filename = path.basename(file.path),
					primaryKey = filename.replace(path.extname(filename), '');

				// Set the filename as the primary key for our JSON data
				var data = {};
				data[primaryKey.toUpperCase()] = json;

				return data;
			}
		}))
		.pipe(gulp.dest('./temp'));
		cb();
}

function html(){
	return src("./src/pug/**/*.pug")
	.pipe(data(function() {
		theData = JSON.parse(fs.readFileSync('./temp/data.json'))
		return theData
	}))
	.pipe(pug({
		pretty: true,
		basedir: './'
	}))
	.pipe(gulp.dest('./src/dist/'));
}

exports.default = defaultTask; // Optional, for the default task
exports.pug_data = pug_data;   // Export the pug_data task
exports.html = html;           // Export the html task
exports.watch = function(){
	watch("./src/pug/**/*.pug", html)
}

