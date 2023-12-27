module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', 'jest-styled-components'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            jsx: true,
            decorators: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
      },
    ],
  },
};
