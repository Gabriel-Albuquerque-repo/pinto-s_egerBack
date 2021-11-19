module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@entites': './src/entites',
        '@controllers': './src/controllers',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
