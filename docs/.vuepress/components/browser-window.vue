
<script>
import { BrowserWindow } from 'vue-windows'
export default {
  extends: BrowserWindow,
  created () {
    console.log('window', BrowserWindow)
  }
}
</script>


<style src="vue-windows/dist/vue-windows.css"></style>
