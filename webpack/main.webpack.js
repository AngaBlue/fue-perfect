import rules from './rules.webpack';

export default {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './electron/main.ts',
    module: {
        rules
    }
};
