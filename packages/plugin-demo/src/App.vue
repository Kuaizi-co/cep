<template>
  <div id="app">
    <div id="nav">
      Test
      <button type="button" @click="testScript">click</button>
      <button type="button" @click="openInNewTab">openInNewTab</button>
    </div>
    {{ hostEnv }}
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      hostEnv: {}
    }
  },
  mounted () {
    // 获取环境
    this.hostEnv = this.$csInterface.getHostEnvironment()
  },
  methods: {
    testScript () {
      this.$csInterface.evalScript('testScript()')
    },
    openInNewTab () {
      this.$csInterface.openURLInDefaultBrowser('https://github.com/kuaizi-co/cep')
    }
  }
}
</script>
