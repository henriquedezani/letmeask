const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins([
  {
    reactStrictMode: true,
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
    distDir: "build",
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        register: true,
        sw: "/sw.js",
        scope: "/",
        start_url: "/"
      },
    },
  ],
]);
