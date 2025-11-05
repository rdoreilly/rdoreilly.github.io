const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const data = require('gulp-data');
const merge = require('gulp-merge-json');
const fs = require('fs');
const path = require('path');
const flatten = require('gulp-flatten');
const del = require('del');

const { src, dest, watch, series } = gulp;

// Change this if your output folder isn't "dist"
const BASE_DIR = 'dist';
const PORT = process.env.PORT || 3000;

/* ----------------- Serve ----------------- */

function _serveOnly(done) {
  browserSync.init({
    server: { baseDir: BASE_DIR },
    files: [`${BASE_DIR}/**/*`], // live reload on any change in output
    host: '0.0.0.0',             // IMPORTANT for Codespaces
    port: PORT,   
    open: false,
    ui: false,
    notify: false
  });
  done();
}

// Try to run your existing "build" first if it exists.
// If not, we just start the server.
let serve;
try {
  // Gulp v4 style exported tasks: exports.build
  if (exports.build) {
    const gulp = require('gulp');
    serve = gulp.series(exports.build, _serveOnly);
  } else {
    // Gulp v3 or no build task
    serve = _serveOnly;
  }
} catch (e) {
  serve = _serveOnly;
}
exports.serve = serve;

/* ----------------- Misc / Default ----------------- */
function defaultTask(cb){
	console.log("Gulp is working");
	cb();
}
exports.default = defaultTask;

/* ----------------- Build steps ----------------- */
function cname() {
  const cnamePath = 'dist/CNAME';
  const domain = 'www.rdor.eu';
  // Ensure the dist folder exists
  fs.mkdirSync('dist', { recursive: true });
  // Write or overwrite the CNAME file
  fs.writeFileSync(cnamePath, domain + '\n', 'utf8');
  console.log(`✅ CNAME written to ${cnamePath}`);
  return Promise.resolve();
}

function pug_data(){
	return src('./data/*.json', { allowEmpty: true })
		.pipe(merge({
			fileName: 'data.json',
			edit: (json, file) => {
				// Extract the filename and strip the extension
				const filename = path.basename(file.path);
				const primaryKey = filename.replace(path.extname(filename), '');
        const out = {};
        out[primaryKey.toUpperCase()] = json;  
        return out;
			}
		}))
		.pipe(gulp.dest('./temp'));
}

function html(){
	return src("./src/pug/**/*.pug", { allowEmpty: true })
	.pipe(data(() => {
		const theData = fs.existsSync('./temp/data.json')
        ? JSON.parse(fs.readFileSync('./temp/data.json'))
        : {};
      return theData;
	}))
	.pipe(pug({
		pretty: true,
		basedir: './'
	}))
	.pipe(gulp.dest('./dist/'));
}


function copy_img_assets(){
    return src('assets/img/**/*', { allowEmpty: true })
		.pipe(flatten())
		.pipe(dest('dist/img'));
}



// Build pipeline: merge data -> render pug -> dist
const build = series(pug_data, html, copy_img_assets, cname);
exports.build = build;

exports.default = defaultTask; // Optional, for the default task
exports.pug_data = pug_data;   // Export the pug_data task
exports.html = html;           // Export the html task
exports.watch = function () {
  watch("./data/**/*.json", build);
  watch("./src/pug/**/*.pug", build);
  watch(['assets/**/*', 'src/css/**/*', 'src/js/**/*'], build);
};

