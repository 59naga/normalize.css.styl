var fs = require('fs')
fs
.createReadStream(require.resolve('normalize.css'))
.pipe(fs.createWriteStream('./normalize.styl'))
