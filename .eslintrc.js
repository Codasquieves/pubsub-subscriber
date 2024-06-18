module.exports = {
    extends: 'standard',
    rules: {
      semi: [2, 'always'],
      'key-spacing': [
        'error',
        {
          mode: 'minimum',
        },
      ],
      'no-trailing-spaces': [
        'error',
        {
          ignoreComments: true,
        },
      ],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: false,
        },
      ],
      'max-len': [2, { code: 150, tabWidth: 2, ignoreComments: true }],
      'no-console': 'error',
      'global-require': 'error',
      'no-duplicate-imports': 'error',
      'prefer-destructuring': 'error',
      'array-callback-return': 'error',
      'object-curly-spacing': 0,
      camelcase: 0,
      'no-prototype-builtins': 0,
      //
      'comma-dangle': 0,
      'space-before-function-paren': ['error', 'never'],
    },
    env: {
      mocha: true,
    },
  };
  