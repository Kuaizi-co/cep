const assert = require('assert')
const chalk = require('chalk')
const path = require('path')
const {
  symlinkExtension,
  enablePlayerDebugMode,
  openChromeRemoteDebugger,
  createBuilderCEP
} = require('./utils')
const pluginName = Symbol('webpackPluginCepLink')

class webpackPluginCepLink {
  constructor ({ assets = '', cepId = 'my.cep.extension', cepFolderName = 'cep', isDebug = false, port = '' } = {}) {
    this.assets = assets
    this.cepId = cepId
    this.cepFolderName = cepFolderName
    this.debug = isDebug
    this.port = port

    assert(assets, chalk.red.bold(`webpack-plugin-cep-link assets about options is required!!!`))
    if (isDebug && !port) {
      console.log(chalk.red.bold(`the debugger mode need to set port!!!`))
    }
    // 启用debug
    enablePlayerDebugMode ()

    // 启用chrome debugger
    // isDebug && process.env.NODE_ENV === 'development' && openChromeRemoteDebugger(port)
  }

  apply (compiler) {
    if (!this.assets) return

    const pluginPath = path.resolve(process.cwd(), this.assets)

    // run once
    const runInitCEP = () => {
      let isInit = false
      return () => {
        if (!isInit) {
          this.debug && openChromeRemoteDebugger(this.port)
          try {
            symlinkExtension(pluginPath, this.cepId)
          } catch (e) {
            // symlink is exit
          }
          isInit = true
        }
      }
    }

    // dev
    if (process.env.NODE_ENV === 'development') {
      compiler.hooks.done.tap(pluginName.toString(), runInitCEP())
    }

    // build
    if (process.env.NODE_ENV === 'production') {
      const { output } = compiler.options
      if (compiler.hooks) {
        compiler.hooks.done.tap(pluginName.toString(), createBuilderCEP(output.path, this.cepFolderName, this.cepId))
      } else {
        compiler.plugin('done', createBuilderCEP(output.path, this.cepFolderName, this.cepId))
      }
    }
  }
}

module.exports = webpackPluginCepLink
