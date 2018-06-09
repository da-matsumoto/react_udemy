const path = require('path')
module.exports = {
    mode : 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
        open:true
      },
}