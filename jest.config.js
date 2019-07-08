const esModules = ['lit-html', 'lit-element'].join('|');

module.exports = {
  preset: 'ts-jest',
  runner: '@jest-runner/electron',
  testEnvironment: '@jest-runner/electron/environment',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  // transformIgnorePatterns: ['node_modules/(?!(lit-html|lit-element|my-project))'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
};
