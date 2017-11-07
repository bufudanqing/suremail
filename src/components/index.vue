<template>
  <div class="top-container">
    <!-- 轮播 -->
    <div class="carousel">
      <Carousel
       v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
          <CarouselItem v-for="member in members">
            <img class="slider-img" v-bind:src="member.picture" />
          </CarouselItem>

      </Carousel>
    </div>

    <!-- 安邮介绍 -->
    <div class="intro">
       <img v-bind:src="imgUrl1" />
    </div>

    <!-- 安邮新闻 -->
    <div class="news">
      <div class="news-container">
       <div class="news-title">
        <img v-bind:src="titleImg" />
       </div>
       <div class="news-content">
        <!-- <div class="news-slider"> -->


        <!-- </div> -->
          <input type="radio" name="news" id="i1" checked>
          <input type="radio" name="news" id="i2">
          <input type="radio" name="news" id="i3">
          <input type="radio" name="news" id="i4">
          <div class="news-list" id="one">
           <div class="news-list-item" v-for="item in news">
            <div class="item-wrapper">
              <div class="news-bg">
                <img v-bind:src="item.picture" />
                <div class="news-footer">
                  <span>2017-10-12</span>
                  <div class="band">
                    <div class="band-text">
                      <span>安邮新闻</span><span>消息</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- news title and summary -->
              <div class="title-summary">
                <a class="item-title">Suremail安全邮件网页端2.0</a>
                <a class="item-summary">本次版本发布在网页端。优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能。</a>
                <a class="item-more">更多详情</a>
              </div>
            </div>
           </div>
          </div>
          <div class="news-list" id="two">
           <div class="news-list-item" v-for="item in news">
            <div class="item-wrapper">
              <div class="news-bg">
                <img v-bind:src="item.picture" />
                <div class="news-footer">
                  <span>2017-10-13</span>
                  <div class="band">
                    <div class="band-text">
                      <span>安邮新闻</span><span>消息</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- news title and summary -->
              <div class="title-summary">
                <a class="item-title">Suremail安全邮件网页端2.0</a>
                <a class="item-summary">本次版本发布在网页端。优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能。</a>
                <a class="item-more">更多详情</a>
              </div>
            </div>
           </div>
          </div>
          <div class="news-list" id="three">
           <div class="news-list-item" v-for="item in news">
            <div class="item-wrapper">
              <div class="news-bg">
                <img v-bind:src="item.picture" />
                <div class="news-footer">
                  <span>2017-10-14</span>
                  <div class="band">
                    <div class="band-text">
                      <span>安邮新闻</span><span>消息</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- news title and summary -->
              <div class="title-summary">
                <a class="item-title">Suremail安全邮件网页端2.0</a>
                <a class="item-summary">本次版本发布在网页端。优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能。</a>
                <a class="item-more">更多详情</a>
              </div>
            </div>
           </div>
          </div>
          <div class="news-list" id="four">
           <div class="news-list-item" v-for="item in news">
            <div class="item-wrapper">
              <div class="news-bg">
                <img v-bind:src="item.picture" />
                <div class="news-footer">
                  <span>2017-10-15</span>
                  <div class="band">
                    <div class="band-text">
                      <span>安邮新闻</span><span>消息</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- news title and summary -->
              <div class="title-summary">
                <a class="item-title">Suremail安全邮件网页端2.0</a>
                <a class="item-summary">本次版本发布在网页端。优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能。</a>
                <a class="item-more">更多详情</a>
              </div>
            </div>
           </div>
          </div>
          <router-link to="/components/news" class="news-more">more</router-link>
          <div class="slider-container" id="nav_slide">
            <label for="i1" class="dot" id="dot1"></label>
            <label for="i2" class="dot" id="dot2"></label>
            <label for="i3" class="dot" id="dot3"></label>
            <label for="i4" class="dot" id="dot4"></label>
          </div>
       </div>
      </div>
    </div>
    <!-- 业务动态 -->
    <div class="business">
      <div class="business-container">
        <div class="business-title">
          <img class="business-title-content" v-bind:src="business" />
        </div>
        <router-link to="/components/information"  class="business-more">more</router-link>
        <div class="business-wrapper">
          <div class="business-item">
            <img v-bind:src="info[0].picture" />
          </div>
          <div class="business-item">
            <div class="business-item-wrapper">
              <div class="business-item-title">
                <span>Suremail安全邮件网页端2.0</span><br>
                <span>Suremail Secure Mail Web End 2.0</span>
              </div>
              <div class="business-item-summary">
                <span>本次版本发布在网页端优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能</span><br>
                <span>This release is optimized for e-mail and personal address book functionality on the web side.Encrypted mail, digital signature function.</span>
              </div>
              <a class="business-item-more">MORE</a>
            </div>

          </div>
          <div class="business-item">
            <img v-bind:src="info[1].picture" /></div>
          <div class="business-item">
             <div class="business-item-wrapper">
              <div class="business-item-title">
                <span>Suremail安全邮件网页端2.0</span><br>
                <span>Suremail Secure Mail Web End 2.0</span>
              </div>
              <div class="business-item-summary">
                <span>本次版本发布在网页端优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能</span><br>
                <span>This release is optimized for e-mail and personal address book functionality on the web side.Encrypted mail, digital signature function.</span>
              </div>
              <a class="business-item-more">MORE</a>
            </div>
          </div>
          <div class="business-item">
            <img v-bind:src="info[2].picture" />
          </div>
          <div class="business-item">
             <div class="business-item-wrapper">
              <div class="business-item-title">
                <span>Suremail安全邮件网页端2.0</span><br>
                <span>Suremail Secure Mail Web End 2.0</span>
              </div>
              <div class="business-item-summary">
                <span>本次版本发布在网页端优化了电子邮件收发和个人通讯录功能。加密邮件、数字签名功能</span><br>
                <span>This release is optimized for e-mail and personal address book functionality on the web side.Encrypted mail, digital signature function.</span>
              </div>
              <a class="business-item-more">MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 客服 -->
    <div class="email">
      <div class="email-container">
        <div class="email-title">
          <img v-bind:src="emtitle" />
        </div>
        <div class="email-desc">
          <img v-bind:src="emdesc" />
        </div>
        <div class="email-submit">
          <Input  placeholder="support@suremail.cn" style="width: 300px"></Input>
          <Button type="primary">Send</Button>
        </div>
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
    watch: {
      '$route' (to, from) {
        console.log('route switched')
      }
    },
    beforeRouteLeave (to, from, next) {
      let position = window.scrollY
      this.$store.commit('SAVE_POSITION', position)
      console.log(position)
      next()
      // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      // if (answer) {
      //   next()
      // } else {
      //   next(false)
      // }
    },
    mounted () {
      this.$nextTick(function () {
        // 返回页面取出来
        let position = this.$store.state.position
        window.scroll(0, position)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider-img{
  width: 100%;
  height: 100%;
}

/*介绍*/
.intro{
  width:100%;
  height:380px;
  border:1px;
  padding-top: 50px;
}

.intro>img{
  display: block;
  margin: 0 auto;
}

/*新闻*/
.news{
  height: 800px;
  background-color:#edebeb;
  padding-top: 70px;

}
.news-container{
  width:1200px;
  margin: 0 auto;
}
.news-title{
  margin-bottom: 80px;
}
.news-title>img{
  display: block;
  margin: 0 auto;
}
.news-slider{
  text-align: right;
  margin-top: 40px;
  padding-right: 15px;

  position:relative;
}
.news-content input{
  display: none;
}
.slider-container{
  display: inline-block;
  float: right;
  padding-top: 5px;
}
.slider-container>.dot {
  float: left;
  display: inline-block;
}
.slider-container>.dot{
  width: 12px;
  height: 12px;
  border-radius: 5px;
  margin-right: 10px;
  border: solid 1px #9e9fa0;
  background-color: transparent;

  cursor: pointer;
}
.news-more{
    width: 60px;
    height: 24px;
    border: solid 1px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #7c7d7d;
    line-height: 20px;
    margin-left: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    float: right;
    margin-right: 60px;
}
.news-more:hover{
    background-color: #7c7d7d;
    color:#fff;
    border:solid 1px #7c7d7d;
}
.news-list{
  height: 450px;
  margin-top:70px;
  display: flex;
  position: absolute;
  z-index: -1;
}
 #nav_slide .dot:hover {
  background: #795548;
  border:none;
}

#i1:checked ~ #nav_slide #dot1 {
    background: #795548;
}
#i2:checked ~ #nav_slide #dot2 {
  background: #795548;
}

#i3:checked ~ #nav_slide #dot3 {
  background: #795548;
}

#i4:checked ~ #nav_slide #dot4 {
  background: #795548;
}
/*#i1:checked+#nav_slide #dot1{
  background: #795548;
}
#i2:checked+#nav_slide #dot2{
  background: #795548;
}
#i3:checked+#nav_slide #dot3{
  background: #795548;
}
#i4:checked+#nav_slide #dot4{
  background: #795548;
}*/

#i1:checked ~ #one,
#i2:checked ~ #two,
#i3:checked ~ #three,
#i4:checked ~ #four {
  z-index: 9;
  animation: scroll 1s ease-in-out;
}

#i1:checked ~ #nav_slide #dot1 {
  background: #795548;
}

#i2:checked ~ #nav_slide #dot2 {
  background: #795548;
}

#i3:checked ~ #nav_slide #dot3 {
  background: #795548;
}

#i4:checked ~ #nav_slide #dot4 {
  background: #795548;
}

@keyframes scroll {
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
.news-list-item{
  flex: 1;
}
.news-bg{
  width:260px;
  height:280px;
  overflow: hidden;
}
.news-bg>img{
  transition:all .3s ease-in;
}
.news-bg:hover img{
  transform: scale(1.2);
  transition:all 1s ease-in;
  filter:brightness(.5);
}
.news-bg:nth-child(1){
  margin-left:25px;
}
.news-footer{
  background-color: #525252;
  height: 35px;
  width: 100%;
  position: relative;
  bottom: 35px;
}
.news-footer>span{
  color:#fff;
  font-size: 16px;
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
}
.news-footer>.band{
  width:55%;
  border-bottom: solid 38px #f39800;
  border-left: solid 10px transparent;
  position: relative;
  bottom: 32px;
  left:117px;
  transition: all .2s ease-in-out;
}

.band-text{
  width:auto;
  height:auto;
}
.band-text>span:nth-child(1){
  position: absolute;
  left:10%;
  top:10px;
  font-size:15px;
  color: #525252;
  font-family: "黑体";
  display: inline-block;
}
.band-text>span:nth-child(2){
  position: absolute;
  left:56%;
  top:10px;
  font-size:15px;
  color: #fff;
  font-family: "黑体";
  display: inline-block;
}
.title-summary{
  margin-top:23px;
  width: 260px;
  margin-left: 24px;
}
.item-title{
  display: block;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 14px;
  color:#555556;
}
.item-title:hover,.item-summary:hover{
  color:deepskyblue;
}
.item-summary{
  display: block;
  text-decoration: none;
  color:#6a6b6c;
}
.item-more{
  display: block;
  text-decoration: none;
  font-size:14px;
  color:#969696;
  margin-top: 24px;
  border:solid 1px #9e9fa0;
  width:80px;
  text-align: center;
  border-radius: 10px;
  font-family: "黑体";
  transition: all .2s ease-in-out;
}
.item-more:hover{
  background-color: #9e9fa0;
  color:#fff;
  border:solid 1px #9e9fa0;
}
/*业务动态*/
.business{
  height: 1250px;
  width:100%;
  padding-top:70px;
}
.business-container{
  width: 1200px;
  margin:0 auto;
}
.business-title>img{
  display: block;
  margin: 0 auto;
}
.business-more{
  display: block;
  text-decoration: none;
  width:58px;
  height: 22px;
  line-height: 20px;
  text-align: center;
  float: right;
  font-size: 16px;
  color:#7c7d7d;
  border:solid 1px #7c7d7d;
  margin-top: 40px;
  margin-bottom: 60px;
  margin-right:35px;
  transition: all .3s ease-in-out;
}
.business-more:hover{
  background-color: #7c7d7d;
  color: #fff;
}
.business-wrapper{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:1200px;
  height:1000px;
  margin:0 auto;
  padding-left:30px;
}
.business-item-wrapper{
  width: 100%;
  height:260px;
  margin-top:20px;
  padding-top:20px;
  box-shadow: none;
  transition: all .2s ease-in-out;
}
.business-item-wrapper:hover{
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);
  /*transition: all 0.5s cubic-bezier(.25,.8,.25,1);*/
}
.business-item{
  width:550px;
  height:290px;
}

.business-item:nth-child(2n){
  height: 300px;
}
.business-item>img{
  width:550px;
  height:290px;
  background-size: cover;
}
.business-item:nth-child(2) .business-item-more{
  display: block;
  font-size:14px;
  color:#f39800;
  float: right;
  width:100%;
  text-align: right;
  padding-right:60px;
  margin-top: 10px;
}
.business-item:nth-child(4) .business-item-more,
.business-item:nth-child(6) .business-item-more
{
  display: block;
  font-size:14px;
  color:#f39800;
  float:left;
  width:100%;
  text-align: left;
  padding-left:60px;
  margin-top: 10px;
}

.business-item:nth-child(2) .business-item-title{
  width:200px;
  border-top:solid 2px #1f64a2;
  border-bottom:solid 2px #1f64a2;
  text-align: right;
  margin-right: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  float: right;
}
.business-item:nth-child(4) .business-item-title,
.business-item:nth-child(6) .business-item-title{
  width:200px;
  border-top:solid 2px #1f64a2;
  border-bottom:solid 2px #1f64a2;
  text-align: left;
  margin-left: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  float: left;
}
.business-item:nth-child(4) .business-item-summary,
.business-item:nth-child(6) .business-item-summary{
   float: left;
  margin-top: 20px;
  width:360px;
  margin-left: 60px;
  text-align: left;
}

.business-item-title>span:nth-child(1){
  font-size:16px;
  color:#555556;
  font-family: "黑体";
}
.business-item-title>span:nth-child(2){
  font-size:12px;
  color:#868787;
  text-align: right;
}
.business-item-summary{
  float: right;
  margin-top: 20px;
  width:360px;
  margin-right: 60px;
  text-align: right;
}
.business-item-summary>span:nth-child(1){
  font-size:14px;
  color:#555556;
  font-family: "黑体";
}
.business-item-summary>span:nth-child(2){
  display: block;
  font-size:12px;
  color:#868686;
  font-family: "黑体";
}
/*客服邮箱*/
.email{
  width: 100%;
  height: 315px;
  background-color: #f3f1f1;
  padding-top: 60px;
  padding-bottom: 79px;
}
.email-title{
  margin-bottom: 30px;
}
.email-title>img{
  display: block;
  margin: 0 auto;
}
.email-desc{
  width:100%;
  margin-bottom: 30px;
}
.email-desc>img{
  display: block;
  margin: 0 auto;
}
.email-submit{
  width: 375px;
  margin: 0 auto;
}

</style>
