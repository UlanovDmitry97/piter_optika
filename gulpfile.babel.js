import { src, dest, series, watch, parallel } from 'gulp';
import concat from 'gulp-concat';
import htmlMin from 'gulp-htmlmin';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import svgSprite from 'gulp-svg-sprite';
import image from 'gulp-image';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpack from 'webpack-stream';

let isDev = true;
let isProd = !isDev;

let webpackConfig = {
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'none'
}

const sass = gulpSass(dartSass)

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const styles = () => {
  return src('src/styles/scss/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      {cascade: false}
    ))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist'))
};

const stylesDev = () => {
  return  src ([
    'src/styles/swiper-bundle.min.css',
    'src/styles/**/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: false,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const gulpSvgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/images'))
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
}

const scripts = () => {
  return src('src/js/main.js')
    .pipe(webpack(
      webpackConfig
    ))
    .pipe(dest('dist'))
}

const scriptsDev = () => {
  return src('src/js/main.js')
    .pipe(webpack(
      webpackConfig
    ))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/scss/**/*.scss', stylesDev);
watch('src/images/svg/**/*.svg', gulpSvgSprites)
watch('src/images/**', images);
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.build = series(clean, parallel(resources, htmlMinify, scripts, styles, images), gulpSvgSprites)
exports.dev = series(clean, parallel(resources, htmlMinify, scriptsDev, stylesDev, images, gulpSvgSprites), watchFiles )