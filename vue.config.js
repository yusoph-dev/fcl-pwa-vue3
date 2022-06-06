const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    name: "FCL TEST",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
  transpileDependencies: true,
});
