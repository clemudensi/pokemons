const nextJest = require('next/jest')

const babelConfigEmotion = {
    presets: [
        [
            'next/babel',
            {
                'preset-react': {
                    runtime: 'automatic',
                    importSource: '@emotion/react',
                },
            },
        ],
    ],
    plugins: [
        require.resolve('babel-plugin-macros'),
        require.resolve('@emotion/babel-plugin'),
    ],
}

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', babelConfigEmotion],
    },
    moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue', "cjs"],
    moduleDirectories: ['node_modules', __dirname]
}

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig(customJestConfig)