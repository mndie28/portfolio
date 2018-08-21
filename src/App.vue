<template>
  <div id="app" class="header">
    <img src="./assets/logo.png">
  <hr/>
    <div class="thin">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test'
export default {
  name: 'App',
  components: {
    test: Test
  }
}
</script>

<style>
body {
    margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #020202;
  color: #CACACA;
  height: 60px;
}
.thin {
  width: 30%;
}
</style>
