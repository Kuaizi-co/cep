// https://github.com/fusepilot/create-cep-extension/blob/9f56759c36/packages/create-cep-extension-scripts/scripts/cep.js#L229
const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const { execSync } = require('child_process')
const opn = require('opn')
const chalk = require('chalk')

// 获取系统cep所在路径
function getExtensionPath () {
  if (process.platform === 'win32') {
    return path.join(os.homedir(), 'AppData/Roaming/Adobe/CEP/extensions')
  } else {
    return '/Library/Application Support/Adobe/CEP/extensions'
  }
}

// 获取cep插件目录
const getSymlinkExtensionPath = (cepId) => {
  const extensionPath = getExtensionPath()
  if (process.platform === 'win32') {
    return path.join(extensionPath, cepId)
  } else {
    return path.join(process.env.HOME, extensionPath, cepId)
  }
}

// 创建cep插件软链
const symlinkExtension = (path, BUNDLE_ID) => {
  // fs.emptyDirSync(getExtensionPath())
  let target = getSymlinkExtensionPath(BUNDLE_ID)
  fs.removeSync(target)
  if (process.platform === 'win32') {
    fs.symlinkSync(path, target, 'junction')
  } else {
    fs.symlinkSync(path, target)
  }
}

// 启用调试模式
// https://github.com/fusepilot/parcel-plugin-cep/blob/master/src/utils.js#L18
const enablePlayerDebugMode = () => {
  if (process.platform === 'win32') {
    execSync('REG ADD HKCU\\Software\\Adobe\\CSXS.8 /f /v PlayerDebugMode /t REG_SZ /d 1');
    execSync('REG ADD HKCU\\Software\\Adobe\\CSXS.8 /f /v LogLevel /t REG_SZ /d 6');
  } else {
    execSync('defaults write com.adobe.CSXS.8 PlayerDebugMode 1');
    execSync('defaults write com.adobe.CSXS.8 LogLevel 6');
  }
}

// open the debugger page in chrome
const openChromeRemoteDebugger = (port = 8089) => {
  // macOs
  let chrome = 'google chrome'
  if (process.platform === 'win32') {
    chrome = 'chrome'
  }
  opn(`http://localhost:${port}/`, {app: [chrome, '--incognito']});
}

const createBuilderCEP = (outPath, assets, cid) => {
  const destFolder = `./${cid}`
  return () => {
    fs.emptyDirSync(destFolder)
    fs.copySync(path.join(outPath, assets), destFolder)
    fs.copySync(outPath, destFolder, {
      filter: src => {
        return !~src.indexOf(path.join(outPath, assets))
      }
    })
    console.log(chalk.green.bold(`🌈 Build ${cid} succeed !`))
  }
}

module.exports = {
  getSymlinkExtensionPath,
  symlinkExtension,
  enablePlayerDebugMode,
  openChromeRemoteDebugger,
  createBuilderCEP
}
