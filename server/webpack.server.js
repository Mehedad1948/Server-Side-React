const path = require('path')

module.exports = {
    //  Inform webpack that we are building a bundle for nodejs,
    // rather than for the browser
    target: 'node',

    // Tell the webpack the root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [{
            // Ensure running babel on just js files
            test: /\.js?$/,
            loader: 'babel-loader',
            //  Tell webpack not to run babel on this files
            exclude: /node_modules/,
            options: {
                //  Some rules which we want babel to do when transpiling our code
                presets: [
                    //  Takes jsx and output normal js 
                    'react',
                    //  Use to handle async codes
                    'stage-0',
                    // Run transfor rules to ensure our code workes on last 2 versions of popular browser
                    ['env', { targets: { browsers: ['last 2 versions'] } }]
                ]
            }
        }]
    }
}