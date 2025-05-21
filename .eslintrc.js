module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/style-prop-object': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { variables: false, functions: false, classes: false },
    ],
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '**/__mocks__/**/*.js'], // For JS files & JS mocks
      parserOptions: {
        project: null, // Do not use tsconfig for these JS files
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'func-names': 'off',
        'global-require': 'off', // Allow require in JS mocks if needed
      },
    },
    {
      files: [
        '**/*.test.tsx',
        '**/*.spec.tsx',
        '**/__tests__/**/*.ts?(x)',
        '**/__mocks__/**/*.ts?(x)',
        'jest-setup.js',
      ],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off', // Allow require in tests
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['src/App.tsx'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
