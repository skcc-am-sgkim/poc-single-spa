const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "poc",
    projectName: "single-spa-layout-comp",
    webpackConfigEnv,
    argv,
  });

  const cssRule = {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          use: ["postcss-loader"],
        },
      ],
    },
  };

  console.log(defaultConfig);

  return merge(defaultConfig, cssRule);
};
