module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
  semi: true,
  singleQuote: true,
  printWidth: 100,
};
