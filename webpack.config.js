const Path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
};