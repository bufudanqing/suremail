<template lang="html">
  <div class="container">
      <div class="banner">
          <img v-bind:src="banner" />
      </div>
  </div>
</template>

<script>
export default {
  name: '新闻页面',
  data () {
    return {
      banner: '/static/img/news/banner.jpg'
    }
  }
}
</script>

<style scoped lang="css">
.banner>img{
  width: 100%;
  height: 100%;


  
}

</style>
