<template>
  <div id="app">
    <Dev />
  </div>
</template>

<script>
import Dev from './components/Dev';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'App',
  components: {
    Dev
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: #AEECEF;
}
</style>
