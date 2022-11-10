const fs = require("fs");

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("./school.loc+4-key.pem"),
      cert: fs.readFileSync("./school.loc+4.pem"),
    },
    public: "https://localhost:8080/",
  },

  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@intlify/vue-i18n-loader")
      .end();
  },
};
