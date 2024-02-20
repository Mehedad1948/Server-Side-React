const path = require('path')
const { webpack } = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {


    // Tell the webpack the root file of our server application
    entry: './src/client/client.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
    // Tell webpack to run babel on every file it runs through
    //   Merged with base config
}

module.exports = merge(baseConfig, config)