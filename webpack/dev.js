const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve('dist')
    },
    mode: 'development',
    watch: true
};
