const path = require('path');
const devServer = require('webpack-dev-server');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{

    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html',
            chunks:['index']
        }),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
}