<!-- 成功案例 -->

<template>
    <div class="container">
        <div class="banner">
            <img v-bind:src="banner" />
        </div>
        <div class="main">
          <div class="title">
            <img :src="title" />
          </div>
          <div class="e-map"> 
             
          </div>
        </div>
        
    </div>
</template>

<script>
    export default {
      name: 'joinus',
      data () {
        return {
          banner: '/static/img/enterprise/banner.png',
          title: '/static/img/enterprise/title.png'
        }
      }
    }
</script>

<style scoped>
.banner>img{
  width: 100%;
  height: 100%;
}
.main{
  height: auto;
  width:1200px;
  margin: 0 auto;
  padding-top:100px;
}
.title{
  margin-bottom: 100px;
}
.title>img{
  display: block;
  margin:0 auto;
}

@keyframes pulse
{
  0% {box-shadow: 0 0 25px rgba(0,0,0,0.12),0 0 45px rgba(0,0,0,0.24);}
  50% {box-shadow: 0 0 55px rgba(0,0,0,0.12),0 0 75px rgba(0,0,0,0.24);}
  100% {box-shadow: 0 0 25px rgba(0,0,0,0.12),0 0 45px rgba(0,0,0,0.24);}
}
@-webkit-keyframes pulse
{
  0% {box-shadow: 0 0 25px rgba(0,0,0,0.12),0 0 45px rgba(0,0,0,0.24);}
  50% {box-shadow: 0 0 55px rgba(0,0,0,0.12),0 0 75px rgba(0,0,0,0.24);}
  100% {box-shadow: 0 0 25px rgba(0,0,0,0.12),0 0 45px rgba(0,0,0,0.24);}
}

</style>