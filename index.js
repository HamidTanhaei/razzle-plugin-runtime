'use strict';
const fs = require("fs");
const Dotenv = require("dotenv");

module.exports = function myRazzlePlugin(config, env, webpack, options) {
    const { target, dev } = env;
    
    console.log('here the plugin', target, dev);
    
    if (target === 'web') {
        //get env filename
        let envFilename = '.env';
        if (dev) {
            envFilename = '.env.development';
        }

        //get env data
        const env = Dotenv.parse(fs.readFileSync(envFilename));
        const envKeys = Object.keys(env).reduce((prev, next) => {
            prev[next] = JSON.stringify(env[next]);
            return prev;
        }, {});
        
        //set global process.env for web client
        config.plugins = [
            ...config.plugins,
            new webpack.DefinePlugin({
                process: {env: envKeys}
            })
        ]
    }
    
    return config;
};