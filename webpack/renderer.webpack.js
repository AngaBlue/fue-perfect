/* eslint-disable global-require */
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: require('./rules.webpack')
    }
};
