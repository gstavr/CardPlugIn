var path = require('path');


module.exports = {
    entry: '/dist/ts/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}