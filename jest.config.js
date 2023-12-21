/**
 * @see https://github.com/kulshekhar/ts-jest
 * @see https://kulshekhar.github.io/ts-jest/user/config/
 * @see https://jestjs.io/docs/en/configuration
 */
module.exports = {
    // preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        // "^.+\\.jsx?$": require.resolve("babel-jest"),
        "^.+\\.tsx?$": "ts-jest",
    },

    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

    // Keep in mind, jest: "moduleFileExtensions must include 'js'""
    moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
    moduleNameMapper: {
        "\\.(scss|css|less)$": "identity-obj-proxy",
    },

    // "transform" mean, that it will translate the code into javascript (through Babel or TypeScript).
    // By default it won't do that for node_modules, so we need to whitelist it here
    transformIgnorePatterns: ["<rootDir>/node_modules/(precare-models)!"],

    // Unlike coveragePathIgnorePatterns, you need to use relative path here!
    // Hence the "." in the beginning is required.
    collectCoverageFrom: ["./src/**/*.{ts,tsx}"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/src/App.tsx",
        "/src/AppRoutes.tsx", 
        "/src/AppTheme.ts",
        "/src/Routes.ts",
        "/src/appState/AppState.ts"
    ],
    // "text" or "text-summary" is needed to see a coverage summary in the console output.
    coverageReporters: ["cobertura", "text-summary"],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    // setupFilesAfterEnv: ["<rootDir>enzyme.config.ts"],
    verbose: true,

    // alternatively use cli with "--reporters=default --reporters=jest-junit"
    reporters: [ "default", "jest-junit" ]
};
