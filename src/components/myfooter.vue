<template>

    <!-- footer -->
    <div class="index-footer">
      <img v-bind:src =  "imgList[$route.name]" />
    </div>
</template>

<script>
  import index from '../assets/img/footer/index.png'
  import more from '../assets/img/footer/more.png'
  import product from '../assets/img/footer/product.png'
  import information from '../assets/img/footer/information.png'
  import news from '../assets/img/footer/news.png'
  import down from '../assets/img/footer/down.png'
  import enterprise from '../assets/img/footer/enterprise.png'
  import joinus from '../assets/img/footer/joinus.png'
  
  import { Carousel } from 'iview'
  export default {
    name: 'index',
    data () {
      return {
        imgList: {
          index: index,
          more: more,
          product: product,
          information: information,
          news: news,
          down: down,
          enterprise: enterprise,
          joinus: joinus
        },
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
