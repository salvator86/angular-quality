module.exports = function (config) {
  config.set({
    reporters: ["progress", "junit"],
    junitReporter: {
      outputDir: "test-results",
      outputFile: "junit.xml",
      useBrowserName: false
    }
  });
};
