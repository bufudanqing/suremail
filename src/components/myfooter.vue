<template>

    <!-- footer -->
    <div class="index-footer">
      <img v-bind:src="index" />
    </div>
</template>

<script>
  import { Carousel } from 'iview'
  // export default {
  //   components: { Carousel }
  // }

  export default {
    name: 'index',
    data () {
      return {
        index: '/static/img/footer/index.png',
        more: '/static/img/footer/index.png',
        product: '/static/img/footer/index.png',
        information: '/static/img/footer/index.png',
        news: '/static/img/footer/index.png',
        down: '/static/img/footer/index.png',
        enterprise: '/static/img/footer/enterprise.png',
        value3: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: 4000,
          dots: 'inside',
          trigger: 'hover',
          arrow: 'hover'
        },
        scrolled: false
      }
    },
    // route: {
    //   data () {
    //     return {
    //       console.info(111)
    //     }
    //   }
    // },
    components: {
      Carousel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*footer*/
.index-footer>img{
  width: 100%;
  height: 100%;

}
</style>
