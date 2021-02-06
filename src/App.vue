<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script lang="ts">
import { BootstrapVue} from 'bootstrap-vue'
import { Component, Vue } from "vue-property-decorator";
import Main from "./components/Main.vue";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(BootstrapVue);
@Component({
  components: {
    Main
  }
})
export default class App extends Vue {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
