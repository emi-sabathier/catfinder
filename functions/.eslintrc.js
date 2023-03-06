module.exports = {
    root: true,
    env: {
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module'
    },
    ignorePatterns: [
        '/lib/**/*',
        '*.config.js',
        '__tests__/**' // Ignore built files.
    ],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        quotes: ['error', 'single'],
        'require-jsdoc': 0,
        'import/no-unresolved': 0,
        'object-curly-spacing': 0,
        'quote-props': 0,
        'comma-dangle': ['error', 'never'],
        'max-len': ['error', { code: 120 }],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ]
    }
};
