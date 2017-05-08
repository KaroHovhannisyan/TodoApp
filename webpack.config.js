var path = require('path');
var webpack= require('webpack')

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    devServer: {
        inline:true,
        port:8090
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

};