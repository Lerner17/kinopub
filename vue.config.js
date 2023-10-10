const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/_variables.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: config => {
		config.module
			.rule("vue")
	}
})
