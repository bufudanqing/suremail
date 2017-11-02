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
            <div class="side">
              <img :src="more" />
            </div>
            <div class="employ-info">
              <div class="info-item" v-for="item in items">
                <img :src="item.pic" />
              </div>
            </div>
          </div>
          <div class="public">
            <div class="public-title">
              <img :src="public" />
            </div>
            <div class="code">
              <img :src="code" />
            </div>
            <div class="code-desc">
              <img :src="codedesc" />
            </div>
          </div>

        </div>
    </div>
</template>

<script>
    export default {
      name: 'joinus',
      data () {
        return {
          joinbanner: '/static/img/joinus/banner.png',
          more: '/static/img/joinus/more.png',
          title: '/static/img/joinus/title.png',
          public: '/static/img/joinus/public.png',
          code: '/static/img/joinus/code.png',
          codedesc: '/static/img/joinus/code-desc.png',
          items: [
            {
              name: 'UI',
              pic: '/static/img/joinus/1.png',
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
  height:2900px;
  width:1200px;
  padding-top:100px;
  margin: 0 auto;
}
.join-content{
  width: 1100px;
  height: 1900px;
  padding-left: 50px;
  /*border:solid;*/
}
.info-item{
  width: 700px;
height: 500px;
margin:0 auto;
}
.join-title>img{
  display: block;
  margin:0 auto;
}
.side{
  height: 1800px;
  width: 40px;
}
.side>img{
   height: 100%;
   width: 100%;
   margin-right:10px;
}
.employ-info{
  width:1000px;
  margin-top:80px;
  margin: 0 auto;
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
