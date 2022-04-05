//jest.config.js
module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
