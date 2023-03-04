declare module "*.glb";

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.glb/,
        type: "asset/resource",
      },
    ],
  },
};
