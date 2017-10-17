<template>
  <div class="top-container">
    <!-- 导航 -->
    <div class="navbar" ref="myNav">
      <div class="navbar-wrapper" ref="myNavWrapper">
        <div class="logo">
        <img v-bind:src="imgUrl" />
        <a>北京国信安邮科技有限公司官网</a>
        </div>
        <ul class="nav-wrapper">
          <li>
            <router-link to="/components/index">首页</router-link>
            <!-- <a href="#" target="_blank">首页</a> -->
          </li>
          <li>
            <a href="#" target="_blank">走进安邮</a>
          </li>
          <li>
            <a href="#" target="_blank">安邮产品</a>
          </li>
          <li>
            <a href="#" target="_blank">成功案例</a>
          </li>
          <li>
            <a href="#" target="_blank">下载</a>
          </li>
          <li>
            <router-link to="/components/joinus">加入我们</router-link>
            <!-- <a href="#" target="_blank">加入我们</a> -->
          </li>
        </ul>
      </div>  
    </div>
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
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 0
        if (this.scrolled === true) {
          this.$refs.myNav.style.height = 50 + 'px'
          this.$refs.myNav.style.backgroundColor = 'rgba(254,242,205,0.9)'
          this.$refs.myNavWrapper.style.paddingTop = 10 + 'px'
        } else {
          this.$refs.myNav.style.height = 75 + 'px'
          this.$refs.myNavWrapper.style.paddingTop = 20 + 'px'
          this.$refs.myNav.style.backgroundColor = 'rgba(254,242,205,0.6)'
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
