
<template>
  <bw :title="title">
    <slot />
  </bw>
</template>

<script>
import 'vue-windows/dist/vue-windows.css'
import { BrowserWindow } from 'vue-windows'
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  },
  components: {
    bw: BrowserWindow
  }
}
</script>

