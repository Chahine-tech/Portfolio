// module.exports = {
//     webpack5: true,
//     webpack(config, options) {
//         config.module.rules.push({
//           test: /\.mp3$/,
//           use: {
//             loader: "url-loader",
//           },
//         });
// }
// }
module.exports = {
    reactStrictMode: true,
    experimental: {
      turboMode: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "url-loader",
        },
      });
      return config;
    },
  };