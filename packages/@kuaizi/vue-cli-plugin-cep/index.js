const webpackCepPlugin = require('@kuaizi/webpack-plugin-cep-link')

module.exports = api => {

  api.chainWebpack(config => {
    // remove prefetch and preload
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    config.plugin('cep-link')
          .use(new webpackCepPlugin({
            assets: './public/cep',
            cepFolderName: 'cep',
            cepId: process.env.VUE_APP_CEP_ID,
            isDebug: process.env.VUE_APP_CEP_DEBUG === 'false' ? false : true,
            port: process.env.VUE_APP_CEP_PORT,
            build: process.env.VUE_APP_CEP_BUILD === 'false' ? false : true
          }))
  })
}
