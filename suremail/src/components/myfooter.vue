<template>

    <!-- footer -->
    <div class="index-footer">
      <img v-bind:src="footer" />
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
        imgUrl: '/static/img/logo-mail.png',
        imgUrl1: '/static/img/intro.png',
        titleImg: '/static/img/news-title.png',
        footer: '/static/img/index-footer.png',
        business: '/static/img/business-title.png',
        emtitle: '/static/img/emtitle.png',
        emdesc: '/static/img/email_desc.png',
        members: [
          {
            name: 'L',
            picture: '/static/img/banner/banner01.png',
            alt: 'suremail banner'
          },
          {
            name: 'L',
            picture: '/static/img/banner/banner02.jpg',
            alt: 'suremail banner'
          },
          {
            name: 'L',
            picture: '/static/img/banner/banner03.jpg',
            alt: 'suremail banner'
          },
          {
            name: 'L',
            picture: '/static/img/banner/banner04.jpg',
            alt: 'suremail banner'
          }
        ],
        news: [
          {
            picture: '/static/img/news/news1.png',
            alt: 'news background image'
          },
          {
            picture: '/static/img/news/news2.png',
            alt: 'news background image'
          },
          {
            picture: '/static/img/news/news3.png',
            alt: 'news background image'
          },
          {
            picture: '/static/img/news/news4.png',
            alt: 'news background image'
          }
        ],
        info: [
          {
            picture: '/static/img/info/info1.png',
            alt: 'info background image'
          },
          {
            picture: '/static/img/info/info2.png',
            alt: 'info background image'
          },
          {
            picture: '/static/img/info/info3.png',
            alt: 'info background image'
          }
        ],
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
