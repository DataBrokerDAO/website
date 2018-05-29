const critical = require('critical')
const glob = require("glob")

const css = glob.sync('./build/static/css/*.css')

critical.generate({
  inline: true,
  base: './build',
  src: 'index.html',
  dest: 'index.html',
  css,
  width: 1300,
  height: 900,
  minify: true,
  ignore: [/url\(/,'@font-face',/print/]
});