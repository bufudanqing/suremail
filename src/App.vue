<template>
  <div id="app">
    <navigation></navigation>
    <!-- <navigation1></navigation1> -->
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import navigation1 from './components/navigation1.vue'
import myfooter from './components/myfooter.vue'
import index from './components/index.vue'
import joinus from './components/joinus.vue'
import more from './components/more.vue'
import download from './components/download.vue'
import enterprise from './components/enterprise.vue'

export default {
  name: 'app',
  components: {
    navigation,
    navigation1,
    myfooter,
    joinus,
    index,
    more,
    download,
    enterprise
  }
}
</script>

<style>
body{
  margin:0;
  padding: 0;
}
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
