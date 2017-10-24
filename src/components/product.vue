<template>
    <div class="container">
        <div class="banner">
            <img v-bind:src="banner" />
        </div>
        <div class="product-intro">
            <div class="intro-container">
              <div class="item-desc">
                  <div class="item-title">
                      <img :src="title" />
                  </div>
                  <div class="item-summary">
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍
                      政务安全邮客户端的介绍政务安全邮客户端的介绍

                  </div>
                  <div class="know-more">了解更多</div>
              </div>
              <div class="item-pic">
                  <img :src="intro" />
              </div>
            </div>
        </div>
        <div class="gap">
          <img :src="gap" />
          <div class="gap-container">
             <div class="icon-wrapper">
                <div class="icon-item item1" v-on:click="wave" v-bind:style="{backgroundImage: 'url(' + type + ')'}"></div>
                <div class="icon-item item2" v-bind:style="{backgroundImage: 'url(' + feature + ')'}"></div>
                <div class="icon-item item3" v-bind:style="{backgroundImage: 'url(' + solution + ')'}"></div>
             </div>
         </div>
        </div>
        <div class="type-intro">
          <div class="type-intro-container">
            <div class="type-intro-title">
              <img v-bind:src="title1" />
            </div>
            <ul class="type-intro-nav">
              <li class="nav-item" v-for= "item in nav">
                <span>{{ item.name }}</span>
                <span>{{ item.e_name }}</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    // import Waves from '../js/waves.js'
    // Vue.use(VueWaves)
    export default {
      name: 'Suremail Product',
      data () {
        return {
          banner: '/static/img/product/banner.png',
          intro: '/static/img/product/intro.png',
          title: '/static/img/product/title.png',
          gap: '/static/img/product/gap.png',
          solution: '/static/img/product/solution.png',
          feature: '/static/img/product/feature.png',
          type: '/static/img/product/type.png',
          title1: '/static/img/product/title1.png',
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
          ],
          nav: [
            {
              name: '政务安全邮',
              e_name: 'Government security post'
            },
            {
              name: '公务邮',
              e_name: 'Business post'
            },
            {
              name: '海外邮',
              e_name: 'Overseas postal mail'
            },
            {
              name: '国别邮',
              e_name: 'Country mail'
            }
          ]
        }
      }
    }
</script>

<style scoped>
@import '/static/css/waves.min.css';
.banner>img{
  width: 100%;
  height: 100%;
}
.product-intro{
  height:778px;
  padding-top: 120px;
}
.intro-container{
  width: 1000px;
  height:778px;
  margin:0 auto;
  padding-right: 20px;
  /*border:solid;*/
}
.item-title{
  margin-bottom: 55px;
}
.item-pic{
    /*margin-right: 130px;*/
    width: 530px;
    float: right;
}
.item-desc{
    /*border:solid;*/
    width:400px;
    height:400px;
    float: left;
    margin-top: 20px;
    /*border:solid;*/
}
.item-summary{
  font-size:16px;
  color:#a2a1a1;
  font-family: "黑体";
}
.know-more
{
    width: 126px;
    height: 36px;
    line-height: 36px;
    font-size:16px;
    color:#ffffff;
    font-family: "黑体";
    text-align: center;
    margin-top: 40px;
    background-color: #1f64a2;
    box-shadow: 3px 3px 3px grey;
    transition: all .3s ease-in-out;
    /*background-image: url();*/
}
.know-more:hover{
    box-shadow: 3px 3px 10px grey;
}
.gap{
  width:100%;
  height: 180px;
  position: relative;
}
.gap>img{
  width: 100%;
  height: 100%;
}
.type{
  width: 100%;
  height: 1199px;
}
.gap-container{
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.icon-wrapper{
  width: 800px;
  height:100%;
  margin:0 auto;
  align-items:center;
  display: -webkit-flex;
}
.icon-wrapper>.icon-item{
  float: left;
}
.icon-wrapper>.item1{
  width: 91px;
  height:130px;
  margin-right:250px;
  border:solid;

}

.icon-wrapper>.item2{
  width: 62px;
  height:128px;
  margin-right:280px;
}
.icon-wrapper>.item3{
  width: 72px;
  height:127px;
}
.type-intro{
  width: 100%;
  height: 1199px;
  padding-top: 103px;
  padding-bottom:168px;
}
.type-intro-container{
  width: 1050px;
  height: 100%;
  margin:0 auto;
  border:solid;
}
.type-intro-title{
  width: 100%;
  height: 43px;
}
.type-intro-title>img{
  display: block;
  float: right;
}
.nav-item{
  display: inline-block;
  float: left;
  margin-right: 20px;
}
.nav-item span{
  display: block;
  font-family: "思源黑体","黑体";
  font-size: 16px;
  color:#8f8e8e;
}
.nav-item span:nth-child(2){
  font-size: 14px;
  letter-spacing:-2px;
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
