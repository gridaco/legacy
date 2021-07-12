const path = require("path");
// const withPWA = require("next-pwa");
const withTM = require("next-transpile-modules")(
  [
    "@design-sdk/figma-remote",
    "@design-sdk/figma-types",
    // "@nothing.app/react-core",
    // "@nothing.app/react-compact",
    // "@nothing.app/react",
    // "@nothing.app/react-state",
  ],
  {
    // resolveSymlinks: true,
    debug: true,
  }
);

const LOCAL_DEVELOPMENT_ENV_VARS = {
  FIGMA_PERSONAL_ACCESS_TOKEN: process.env.FIGMA_PERSONAL_ACCESS_TOKEN,
};

module.exports = withTM({
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.ts(x?)$/,
      use: "babel-loader",
    });

    //  https://www.npmjs.com/package/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react
    if (isServer) {
      console.log("server app");
      config.externals = ["react", ...config.externals];
    }
    const reactPath = path.resolve(__dirname, "..", "node_modules", "react");
    console.log("reactPath", reactPath);
    config.resolve.alias["react"] = reactPath;
    //

    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  env: {
    ...LOCAL_DEVELOPMENT_ENV_VARS,
  },

  // enable SPA mode, disable SSR
  target: "serverless",
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
});
