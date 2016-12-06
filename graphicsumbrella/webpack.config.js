var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    output: {
        path: __dirname + '/src',
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    watch: true
}
