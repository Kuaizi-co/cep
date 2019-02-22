const webpackCepPlugin = require('@kuaizi/webpack-plugin-cep-link')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    config.plugin('cep-link')
          .use(new webpackCepPlugin({
            assets: './public/cep',
            cepFolderName: 'cep',
            cepId: 'ai.kuaizi.cloud-builder-cep-dev',
            isDebug: true,
            port: 8089
          }))
  }
}
