import rules from './rules.webpack';

export default {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules
    }
};
