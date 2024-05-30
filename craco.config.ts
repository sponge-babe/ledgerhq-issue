// import { Configuration } from "@craco/types";
import webpack, { Configuration } from "webpack";

module.exports = {
  webpack: {
    configure: (webpackConfig: Configuration) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          assert: require.resolve("assert"),
          stream: require.resolve("stream-browserify"),
          url: require.resolve("url"),
          https: require.resolve("https-browserify"),
          zlib: require.resolve("browserify-zlib"),
          http: require.resolve("stream-http"),
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
          fs: require.resolve("browserify-fs"),
          vm: require.resolve("vm-browserify"),
          // buffer: require.resolve("buffer"),
        },
      };

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
          process: "process/browser.js",
        }),
      ];

      return webpackConfig;
    },
  },
};

// module.exports = {
//   webpack: {
//     configure: {
//       resolve: {
//         fallback: {
//           crypto: require.resolve("crypto-browserify"),
//           assert: require.resolve("assert"),
//           stream: require.resolve("stream-browserify"),
//           url: require.resolve("url"),
//           https: require.resolve("https-browserify"),
//           zlib: require.resolve("browserify-zlib"),
//           // os: require.resolve("os-browserify"),
//           // buffer: require.resolve("buffer"),
//           http: require.resolve("stream-http"),
//         },
//       },
//       plugins: [
//         new webpack.ProvidePlugin({
//           Buffer: ["buffer", "Buffer"],
//         }),
//         new webpack.ProvidePlugin({
//           process: "process/browser.js",
//         }),
//       ],
//       module: {
//         rules: [{
//           oneOf: []
//         }]
//       }
//     },
//   },
// } as CracoConfig;
