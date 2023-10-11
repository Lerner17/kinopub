const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',

  chainWebpack: config => {
		config.module
			.rule("vue")
	},
});
