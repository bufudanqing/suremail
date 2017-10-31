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
            <router-link to="/components/index">返回首页
              <Icon type="arrow-return-left"></Icon></router-link>
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
        imgUrl: '/static/img/logo-mail.png'
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
.router-link-active{
  /*border-bottom: solid 2px #f39800;*/
  /*color:#fff;*/
}
.ivu-icon{
  color:#fff;
}
</style>
