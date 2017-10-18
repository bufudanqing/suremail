<template>
    <div class="down-container">
        <div class="down-banner">
            <img v-bind:src="downbanner" />
        </div>
        <div class="main">
          <div class="gap">
            <div class="gap-icon">
                <img :src="p1" @mouseover="p1 = pic11" @mouseleave="p1 = pic1"/>
                <img :src="p2" @mouseover="p2 = pic22" @mouseleave="p2 = pic2"/>
                <img :src="p3" @mouseover="p3 = pic33" @mouseleave="p3 = pic3"/>
            </div>
          </div>
          <div class="content">
            
          </div>
         
          
        </div>
    </div>
</template>

<script>
    export default {
      name: 'download',
      data () {
        return {
          downbanner: '/static/img/down/banner.png',
          more: '/static/img/down/more.png',
          title: '/static/img/down/title.png',
          public: '/static/img/down/public.png',
          p1: '/static/img/down/xz.png',
          p2: '/static/img/down/cy.png',
          p3: '/static/img/down/bd.png',
          pic1: '/static/img/down/xz.png',
          pic2: '/static/img/down/cy.png',
          pic3: '/static/img/down/bd.png',
          pic11: '/static/img/down/xz1.png',
          pic22: '/static/img/down/cy1.png',
          pic33: '/static/img/down/bd1.png'
        }
      }
    }
</script>

<style scoped>
.down-banner>img{
  width: 100%;
  height: 100%;
}
.main{
  width:100%;
  /*padding-top:100px;*/
}
.gap{
    width: 100%;
    height: 120px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.gap-icon{
    /*border:solid;*/
    width: 900px;
    margin:0 auto;
    height: 100%;
}
.gap-icon>img:nth-child(1),
.gap-icon>img:nth-child(2)
{
    display: inline-block;
    margin-right: 350px;
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