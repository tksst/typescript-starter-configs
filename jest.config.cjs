// To use this config in your project, put the following in jest.config.js:
// module.exports = require("@tksst/typescript-starter/jest.config.cjs")

/** @type {import("@jest/types").Config.InitialOptions} */
module.exports = {
    transform: {
        "^.+\\.tsx?$": [
            "@swc/jest",
            {
                jsc: {
                    target: "es2020",
                },
            },
        ],
    },
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    collectCoverage: true,
    errorOnDeprecated: true,
    resetMocks: true,
    reporters: ["default", "github-actions"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};
