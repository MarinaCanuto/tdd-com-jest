const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
