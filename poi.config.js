'use strict'

module.exports = options => ({
  // Entry is relative to process.cwd()
  entry: './src/index.js',
  dist: 'build',
  presets: [require('poi-preset-react')()],
  html: {
    template: './public/index.ejs'
  },
  port: 8080,
  env: {
    REACT_APP_ENV: process.env.REACT_APP_ENV
  },
  staticFolder: './public'
})
