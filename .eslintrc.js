module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'prettier',
        '@typescript-eslint'
    ],
    rules: {
        'no-console': 'off',
        quotes: [
            'error',
            'single',
        ],
        indent: ['error', 4],
        'no-plusplus': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        },
        'import/extensions': ['never'],
        'import/core-modules': [ 'electron' ]
    },
}
