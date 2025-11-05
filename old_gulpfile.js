const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const merge = require('gulp-merge-json');
const fs = require('fs');
const path = require('path');

const { src, dest, watch, series, parallel} = require('gulp');

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

// Copy assets to the dist structure your Pug expects (img/, css/, js/, icons/)
function copy_imgs()   { return src('assets/img/misc/**/*',   { allowEmpty: true }).pipe(dest('src/dist/img')); }
function copy_icons()  { return src('assets/img/icons/**/*', { allowEmpty: true }).pipe(dest('src/dist/icons')); }
function copy_css()    { return src('src/css/**/*',      { allowEmpty: true }).pipe(dest('src/dist/css')); }
function copy_js()     { return src('src/js/**/*',       { allowEmpty: true }).pipe(dest('src/dist/js')); }
function copy_misc()   { return src(['assets/favicon.ico'], { allowEmpty: true }).pipe(dest('src/dist')); }

const copy_assets = parallel(copy_imgs, copy_icons, copy_css, copy_js, copy_misc);

// Build pipeline: merge data -> render pug -> dist
const build = series(pug_data, html, copy_assets);
exports.build = build;

exports.default = defaultTask; // Optional, for the default task
exports.pug_data = pug_data;   // Export the pug_data task
exports.html = html;           // Export the html task

exports.watch = function () {
  watch("./data/**/*.json", build);
  watch("./src/pug/**/*.pug", build);
  watch(['assets/**/*', 'src/css/**/*', 'src/js/**/*'], build);
};

