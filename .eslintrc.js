module.exports = {
  plugins: ['prettier', 'jest'],
  extends: ['eslint-config-airbnb', 'plugin:jest/recommended', 'prettier'],
  parser: 'babel-eslint',
  settings: { ecmascript: 6 },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  globals: {
    google: false,
    adyen: false,
    Raven: false,
    OUTVIO_API_URL: false,
    FACEBOOK_APP_ID: false,
    GOOGLE_CLIENT_ID: false,
    ADYEN_API_KEY: false,
    S3_BUCKET: false,
    S3_ACCESS_KEY: false,
    S3_SECRET_KEY: false,
    AMAZON_DEVELOPER_ID: false
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 100, trailingComma: 'all' }],
    'no-else-return': 0,
    'consistent-return': 0,
    'default-case': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-multi-comp': 0,
    'no-empty-pattern': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['bin/*.js', '**/*.test.js'] }
    ]
  }
};
