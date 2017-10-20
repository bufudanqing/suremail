<template>
    <div class="join-container">
        <div class="join-banner">
            <img v-bind:src="joinbanner" />
        </div>
        <div class="main">
          <div class="join-title">
            <img :src="title" />
          </div>
          <div class="join-content">

          </div>

        </div>
    </div>
</template>

<script>
    export default {
      name: '安邮产品',
      data () {
        return {
          banner: '/static/img/product/banner.png',
          more: '/static/img/product/more.png',
          title: '/static/img/product/title.png'
          items: [
            {
              name: 'UI',
              pic: '/static/img/product/1.png',
              alt: 'UI'
            },
            {
              name: 'UI',
              pic: '/static/img/joinus/2.png',
              alt: 'UI'
            },
            {
              name: 'UI',
              pic: '/static/img/joinus/3.png',
              alt: 'UI'
            }
          ]
        }
      }
    }
</script>

<style scoped>
.join-banner>img{
  width: 100%;
  height: 100%;
}
.main{
  height:3800px;
  width:1200px;
  padding-top:100px;
  margin: 0 auto;
}
.join-title>img{
  display: block;
  margin:0 auto;
}
.side>img{
   width:56px;
   margin-right:10px;
}
.employ-info{
  width:1100px;
  margin-top:80px;
}
.side,.employ-info{
  float: left;
}
.info-item:nth-child(1){
  margin-top:50px;
}
.info-item{
  margin-bottom:120px;
  animation:pulse 2s ease-in-out infinite;
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
.info-item>img{
  width: 100%;
}
.public{
  margin-top:100px;
}
.public-title>img{
  display: block;
  margin: 0 auto;
}
.code{
  margin-top:130px;
}
.code>img{
  display: block;
  margin:0 auto;
  border:solid 20px lightgrey;
}
.code-desc{
  margin-top:80px;
}
.code-desc>img{
  display: block;
  margin:0 auto;
}
</style>
