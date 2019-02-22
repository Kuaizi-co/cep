/* eslint-disable */
// vue plugin
export default {
  install (Vue) {
    Vue.prototype.$csInterface = new CSInterface()
  }
}
