module.exports = {
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect",'./jest.setup.ts'],
  };