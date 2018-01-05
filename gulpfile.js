const gulp = require('gulp')
const copy = require('gulp-copy')
const replace = require('gulp-replace')
const revAppend = require('gulp-rev-append')
const exec = require('child_process').exec
const ts = require('gulp-typescript')
const rename = require('gulp-rename')
const merge = require('merge-stream')
const { join } = require('path')

const sequence = require('gulp-sequence').use(gulp)

gulp.task('ts', () => {
  const project = ts.createProject('vendor.json')

  return project
    .src()
    .pipe(project())
    .js.pipe(gulp.dest('./lib'))
})

gulp.task('jspm', (done) => {
  exec('npm run build:lib', (err, result) => {
    console.log(result)
    done(err ? err : undefined)
  })
})

gulp.task('fixcss', () => {
  return gulp
    .src('./dist/app.js')
    .pipe(
      replace(/url\(["']?styles\/[^"\)]+["']?\)/g, (match) => {
        return match.replace('styles', '/styles')
      })
    )
    .pipe(replace('/*# sourceMappingURL=__.css.map */', ''))
    .pipe(
      replace(
        /jspm_packages\/github\/twbs\/bootstrap@[^\/]+\/dist\/fonts\//g,
        '/styles/fonts/glyphicons/'
      )
    )
    .pipe(
      replace(
        /jspm_packages\/github\/FontFaceKit\/open-sans@[^\/]+\/fonts\//g,
        '/styles/fonts/opensans/'
      )
    )
    .pipe(gulp.dest('./dist/'))
})

gulp.task('revAppend', (done) => {
  return gulp
    .src('./_index.html')
    .pipe(revAppend())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
})

gulp.task('copyfonts', () => {
  const bootstrap = gulp
    .src('./jspm_packages/github/twbs/bootstrap@*/dist/fonts/*')
    .pipe(copy('./styles/fonts/glyphicons', { prefix: 6 }))

  const opensans = gulp
    .src('./jspm_packages/github/FontFaceKit/open-sans@*/fonts/**')
    .pipe(copy('./styles/fonts/opensans', { prefix: 5 }))

  return merge(bootstrap, opensans)
})

gulp.task('build', sequence(['copyfonts', 'revAppend'], 'ts', 'jspm', 'fixcss'))
