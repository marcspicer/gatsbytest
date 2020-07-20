var fs = require("fs");
var json = require("circular-json");
var path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  var Eindex, Eslint;
  config.module.rules.map((rule, index) => {
    if (rule.enforce == "pre") {
      Eslint = rule;
      Eindex = index;
      //console.log(rule);
    }
  });

  if (Eindex !== undefined) config.module.rules.splice(Eindex, 1);

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: function (file) {
            return (
              file.includes("src/") &&
              !file.includes("node_modules") &&
              (file.endsWith(".js") || file.endsWith(".jsx"))
            );
            return (
              file.includes("src/") &&
              !file.includes("node_modules") &&
              (file.endsWith(".js") || file.endsWith(".jsx"))
            );
          },
          use: "yi-webpack-intl-loader",
        },
      ],
    },
    // plugins: [new WebpackPluginYI()],
  });
};

/* exports.onCreateBabelConfig = ({ stage, actions }) => {
  console.log(stage);
  actions.setBabelPlugin({
    name: "yi-babel-plugin",
  });
}; */

/* class WebpackPluginYI {
  apply(compiler) {
    compiler.hooks.compile.tap("WebpackPluginYI", (params) => {
      //console.log("This is from webpack", params);
      //callback();
    });
    compiler.hooks.compilation.tap("WebpackPluginYI", (compilation) => {
      compilation.hooks.succeedModule.tap("WebpackPluginYI", (module) => {
        if (module.context && module.context.includes("src/pages")) {
          console.log(module.issuer.dependencies, "this is module");
          fs.writeFileSync(
            "module-build.json",
            json.stringify(module, null, 4)
          );
        }
      });
    });
  }
} */
