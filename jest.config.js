module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],

    transform: {
        '^.+\\.js?$': 'babel-jest',
    },

    transformIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/js/$1',
    },

    testMatch: ['**/test/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],

    testURL: 'http://localhost/',

    collectCoverage: true,
    collectCoverageFrom: ['js/**/*.js'],
};
