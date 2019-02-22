module.exports = api => {

  api.extendPackage({
    dependencies: {
      '@kuaizi/webpack-plugin-cep-link': '^1.0.0'
    }
  })

  api.injectImports(api.entryFile, `import './cs-interface-plugin'`)

  api.render('./template')

}
