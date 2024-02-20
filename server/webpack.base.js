module.exports = {
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