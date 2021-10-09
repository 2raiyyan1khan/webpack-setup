const path = require("path");
const { merge } = require("merge");
const common = require("./webpack.common");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
