const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    //  Inform webpack that we are building a bundle for nodejs,
    // rather than for the browser
    target: 'node',

    // Tell the webpack the root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
    // Tell webpack to run babel on every file it runs through

}

module.exports = merge(baseConfig, config)
