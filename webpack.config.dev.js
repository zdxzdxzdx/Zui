const base =require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base,{
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
   
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
   

})
