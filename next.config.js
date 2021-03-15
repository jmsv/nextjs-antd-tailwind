const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = {
  target: "serverless",
  ...withLess({
    ...withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      ...withCSS({
        cssLoaderOptions: {
          url: false,
        },
      }),
    }),
  }),
};
