<template>
  <div class="top-container">
    <!-- 导航 -->
    <div class="navbar" ref="myNav">
      <div class="navbar-wrapper" ref="myNavWrapper">
        <div class="logo">
        <img v-bind:src="imgUrl" />
        <!-- <a>北京国信安邮科技有限公司官网</a> -->
        </div>
        <ul class="nav-wrapper" v-show="show1">
          <li>
            <router-link to="/components/index">首页</router-link>
          </li>
          <li>
            <router-link to="/components/more">走进安邮</router-link>
          </li>
          <li>
            <router-link to="/components/product">安邮产品</router-link>
          </li>
          <li>
            <router-link to="/components/enterprise">成功案例</router-link>
          </li>
          <li>
            <router-link to="/components/download">下载</router-link>
          </li>
          <li>
            <router-link to="/components/joinus">加入我们</router-link>
          </li>
        </ul>

        <ul class="nav-wrapper" v-show="show2">
          <li>
            <router-link to="/components/index">返回首页
              <Icon type="arrow-return-left"></Icon></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import url from '../assets/img/logo.png'
  import { Carousel } from 'iview'
  // export default {
  //   components: { Carousel }
  // }

  export default {
    name: 'index',
    // created () {
    // },
    data () {
      return {
        // isReturn: this.$route.name === 'news' ? true : false,
        // isReturn1: this.$route.name === 'information' ? true : false,
        imgUrl: url,
        show1: true,
        show2: false
      }
    },
    components: {
      Carousel
    },
    watch: {
      '$route' () {
        console.info(this.$route.name)
        if (this.$route.name === 'news') {
          this.show1 = false
          this.show2 = true
        } else if (this.$route.name === 'info') {
          this.show1 = false
          this.show2 = true
        } else {
          this.show1 = true
          this.show2 = false
        }
      }

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
      console.info(this.$route.name)
      if (this.$route.name === 'news') {
        this.show1 = false
        this.show2 = true
      } else if (this.$route.name === 'information') {
        this.show1 = false
        this.show2 = true
      } else {
        this.show1 = true
        this.show2 = false
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  border-bottom: solid 2px #f39800;
  color:#fff;
}
.ivu-icon{
  color:#fff;
}
</style>
