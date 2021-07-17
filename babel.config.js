module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
