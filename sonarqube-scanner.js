const scanner = require('sonarqube-scanner');

scanner({
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"admin",
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
  () => process.exit()
);