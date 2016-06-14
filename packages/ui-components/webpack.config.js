var getConfig = require('hjs-webpack')
var join = require('path').join

module.exports = getConfig({
  in: 'index.js',
  out: 'public',
  clearBeforeBuild: true,
  resolve: {
    root: [
      __dirname,
      join(__dirname, '..', 'renderer'),
      join(__dirname, '..', 'ui-components')
    ],
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    extensions: [
      '',
      '.js'
    ]
  }
})
