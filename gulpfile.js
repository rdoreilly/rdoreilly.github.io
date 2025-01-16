var gulp = require('gulp'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	fs = require('fs'),
    path = require('path'),
    merge = require('gulp-merge-json');;

const { series } = require('gulp');

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

function build(cb){
	return gulp.src([
		'./src/pug/components/nav.pug',
		'./src/pug/components/head.pug',
		'./src/pug/components/left_side_bar.pug',
		'./src/pug/components/footer.pug',
		'./src/pug/components/research_students.pug',
		'./src/pug/index.pug',
		'./src/pug/pub.pug',
		'./src/pug/research.pug',
		'./src/pug/teaching.pug'
		])
		.pipe(data(function() {
				theData = JSON.parse(fs.readFileSync('./temp/data.json'))
				return theData
			}))
		.pipe(pug({
            pretty: true,
			basedir: './'
        }))
		.pipe(gulp.dest('./src/dist/'));
};

exports.build = series(pug_data, build);
