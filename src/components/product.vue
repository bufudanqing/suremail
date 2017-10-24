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
            <div class="main-parts">
              <div class="main-parts-item" v-for="item in nav">
                <img v-bind:src="item.pic" />
                <div class="cover">

                </div>
                <div class="title">
                  <div>{{ item.name }}</div>
                  <div>{{ item.e_name }}</div>
                </div>
                <div class="desc">{{ item.desc }}</div>
              </div>

            </div>
          </div>
        </div>
        <div class="feature-container">
          <div class="feature-title">
            <img v-bind:src="title2" />
          </div>
          <div class="feature-wrapper">
            <div class="feature-desc">
               <div class="features-item" v-for="item in features">
                 <img v-bind:src="item.pic" />
               </div>
            </div>
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
          title2: '/static/img/product/title2.png',
          title3: '/static/img/product/title3.png',
          pc: '/static/img/product/pc.png',
          nav: [
            {
              name: '政务安全邮',
              e_name: 'Government security post',
              pic: '/static/img/product/p1.png',
              desc: '面向党政机关'
            },
            {
              name: '公务邮',
              e_name: 'Business post',
              pic: '/static/img/product/p2.png',
              desc: '面向大型企事业单位'
            },
            {
              name: '智慧邮',
              e_name: 'Wisdom post',
              pic: '/static/img/product/p3.png',
              desc: '面向智慧城市民生领域'
            },
            {
              name: '海外邮',
              e_name: 'Overseas post mail',
              pic: '/static/img/product/p4.png',
              desc: '支持国内外邮件之间的互联互通'
            },
            {
              name: '国别邮',
              e_name: 'Country mail',
              pic: '/static/img/product/p5.png',
              desc: '面向一带一路多语种'
            }
          ],
          features: [
            {
              name: 'features',
              pic: '/static/img/product/desc1.png'
            },
            {
              name: 'features',
              pic: '/static/img/product/desc2.png'
            },
            {
              name: 'features',
              pic: '/static/img/product/desc3.png'
            },
            {
              name: 'features',
              pic: '/static/img/product/desc4.png'
            },
            {
              name: 'features',
              pic: '/static/img/product/desc5.png'
            },
            {
              name: '国别邮',
              pic: '/static/img/product/desc6.png'
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
.type-intro-nav{
  display: block;
  height: 40px;
  margin-bottom: 50px;
}
.main-parts-item{
  float: left;
  position: relative;
}
.main-parts-item>img{
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
}
.main-parts-item:nth-child(1){
  margin-right: 40px;
}
.main-parts-item:nth-child(1),.main-parts-item:nth-child(2){
  width:500px;
  height: 279px;
  margin-bottom: 40px;
  border:solid;
}
.main-parts-item:nth-child(3),.main-parts-item:nth-child(4){
  margin-right: 40px;
}
.main-parts-item:nth-child(3),.main-parts-item:nth-child(4),.main-parts-item:nth-child(5){
  width:320px;
  height: 279px;
  border:solid;
}
.main-parts-item .cover{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #1f64a2;
  transition:all .5s ease-in-out;
}
.main-parts-item .title,.main-parts-item .desc{
  position: absolute;
  z-index: 3;
  width: 100%;
  text-align: center;
}
.main-parts-item .title>div:nth-child(1){
  font-family: "思源黑体","黑体";
  font-size: 22px;
  color:#fff;
}
.main-parts-item .title>div:nth-child(2){
  font-family: "思源黑体","黑体";
  font-size: 18px;
  color:#d4d2d2;
}
.main-parts-item .title{
  position: absolute;
  top:30px;
}
.main-parts-item .desc{
  font-family: "思源黑体","黑体";
  font-size: 16px;
  color:#fcc261;

  position: absolute;
  top:100px;
}
.main-parts-item .cover:hover{
  opacity: .3;
}
.feature-container{
  width: 1200px;
  height: 829px;
  padding-top: 50px;
  margin:0 auto;
}
.feature-title{
  width: 1200px;
  margin:0 auto;
}
.feature-wrapper{
  width: 100%;
  height: 100%;
  border:solid;
}
/*.feature-wrapper .pc{
  width: 300px;
  height: 600px;
  border:solid;
  background-image: url(/static/img/product/pc.png);
  background-position: right;
}*/
.feature-desc{
  width:830px;
  height: 600px;
  float: right;
  border:solid;
}
.features-item{
  height: 180px;
  float: left;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom:20px;
  box-shadow: none;
  transition: all .3s ease-in-out;
}
.features-item:hover{
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.1s cubic-bezier(.25,.8,.25,1);
}
.features-item:nth-child(2n+1){
  margin-right: 30px;
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
