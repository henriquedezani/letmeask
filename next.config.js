const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins([
  {
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        register: true,
        sw: "/sw.js",
        start_url: "/",
      },
    },
  ],
]);
