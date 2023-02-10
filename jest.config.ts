import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./src",
});

/** @type {import('jest').Config} */
const customJestConfig: import("jest").Config = {
  moduleDirectories: ["node_modules", "src", "<baseUrl>"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default createJestConfig(customJestConfig);
