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
            <div class="content-item item1">
                <div class="content-item-wrapper">
                    <div class="item-pic">
                        <img :src="item1" />
                    </div>
                    <div class="item-desc">
                        <div class="item-title">
                            <span>政务安全邮PC客户端Windows版</span>
                            <br>
                            <span>Business Security Post PC Client for Windows</span>
                        </div>
                        <div class="item-summary">
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                        </div>
                        <div class="down-button">下载</div>
                    </div>
                </div>

            </div>
            <div class="content-item item2">
                <div class="content-item-wrapper">

                    <div class="item-desc">
                        <div class="item-title">
                            <span>政务安全邮手机客户端ios版</span>
                            <br>
                            <span>Business Security Post PC Client for Windows</span>
                        </div>
                        <div class="item-summary">
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                        </div>
                        <div class="down-button">下载</div>
                    </div>
                    <div class="item-pic">
                        <img :src="item2" />
                    </div>
                </div>

            </div>
            <div class="content-item item3">
                <div class="content-item-wrapper">
                    <div class="item-pic">
                        <img :src="item3" />
                    </div>
                    <div class="item-desc">
                        <div class="item-title">
                            <span>政务安全邮手机客户端安卓版</span>
                            <br>
                            <span>Business Security Post PC Client for Windows</span>
                        </div>
                        <div class="item-summary">
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                        </div>
                        <div class="down-button">下载</div>
                    </div>
                </div>

            </div>
            <div class="content-item item4">
                <div class="content-item-wrapper">

                    <div class="item-desc">
                        <div class="item-title">
                            <span>邮箱申请表单</span>
                            <br>
                            <span>Mailbox application form</span>
                        </div>
                        <div class="item-summary">
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                            政务安全邮客户端的介绍政务安全邮客户端的介绍
                        </div>
                        <div class="btn-desc">安全电子邮箱个人业务开通申请单</div>
                        <div class="down-button">下载</div>
                        <div class="btn-desc">安全电子邮箱业务开通申请单</div>
                        <div class="down-button">下载</div>
                    </div>
                    <div class="item-pic">
                        <img :src="item4" />
                    </div>
                </div>

            </div>
          </div>


        </div>
    </div>
</template>

<script>
    import downbanner from '../assets/img/down/banner.png'
    // import more from '../assets/img/down/more.png'
    // import title from '../assets/img/down/title.png'
    // import public1 from '../assets/img/down/public.png'
    import p1 from '../assets/img/down/xz0.png'
    import p2 from '../assets/img/down/cy0.png'
    import p3 from '../assets/img/down/bd0.png'
    import pic1 from '../assets/img/down/xz.png'
    import pic2 from '../assets/img/down/cy.png'
    import pic3 from '../assets/img/down/bd.png'
    import pic11 from '../assets/img/down/xz1.png'
    import pic22 from '../assets/img/down/cy1.png'
    import pic33 from '../assets/img/down/bd1.png'
    import item1 from '../assets/img/down/1.png'
    import item2 from '../assets/img/down/2.png'
    import item3 from '../assets/img/down/3.png'
    import item4 from '../assets/img/down/4.png'
    export default {
      name: 'download',
      data () {
        return {
          downbanner: downbanner,
          // more: more,
          // title: title,
          // public: public1,
          p1: p1,
          p2: p2,
          p3: p3,
          pic1: pic1,
          pic2: pic2,
          pic3: pic3,
          pic11: pic11,
          pic22: pic22,
          pic33: pic33,
          item1: item1,
          item2: item2,
          item3: item3,
          item4: item4
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
.content>.item1{
    width: 100%;
    height: 624px;
    background-color:#f3f1f1;
    padding-top: 95px;
}
.content>.item2{
    width: 100%;
    height: 950px;
    padding-top:150px;
}
.content>.item3{
    width: 100%;
    height: 836px;
    background-color:#f3f1f1;
    padding-top:112px;
}
.content>.item4{
    width: 100%;
    height:982px;
    padding-top:265px;
}
.item3 .item-pic{
    padding-left: 150px;
}
.content-item-wrapper{
    width:1100px;
    margin:0 auto;
}
.item-pic{
    margin-right: 130px;
    width: 530px;
    float: left;
}
.item1 .item-desc{
    /*border:solid;*/
    width:430px;
    height:400px;
    float: right;
    margin-top: 20px;
}


.item2 .item-desc{
    /*border:solid;*/
    width:430px;
    height:400px;
    float: right;
    margin-top:230px;
}
.item3 .item-desc{
    /*border:solid;*/
    width:430px;
    height:400px;
    float: right;
    margin-top:150px;
}
.item4 .item-desc{
    /*border:solid;*/
    width:430px;
    height:400px;
    float: right;
    margin-top:50px;
}
.item4 .item-desc{
    margin-right:140px;
}
.item4 .item-pic{
    margin-right: 0;
}
.item-title{
    margin-bottom: 40px;
}
.item-title>span:nth-child(1){
    font-size:18px;
    color:#1f64a2;
    font-family: "黑体";
}
.item-title>span:nth-child(2){
    font-size:14px;
    color:#949596;
    font-family: "黑体";
}
.item-summary{
     font-size:16px;
    color:#abaaaa;
    font-family: "黑体";
    line-height: 30px;
    text-align: left;
}
.down-button
{
    width: 100px;
    height: 30px;
    line-height: 30px;
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
.down-button:hover{
    box-shadow: 3px 3px 10px grey;
}
.content>.item2 .item-pic>img{
    float: right;
}
.content>.item2 .item-desc{
    float: left;
}
.content>.item4 .item-pic>img{
    float: right;
}
.content>.item4 .item-desc{
    float: left;

}
.item4 .item-summary{
    margin-bottom:30px;
}
.item4 .down-button{
    margin-top:5px;
    margin-bottom:10px;
}
.content>.item3{
    width: 100%;
    height: 836px;
    background-color:#f3f1f1;
}
.btn-desc{
    font-size:16px;
    color:#636465;
    font-family: "黑体";
}
@keyframes pulse
{
  0% {box-shadow: 3 3 3px rgba(0,0,0,0.12),0 0 45px rgba(0,0,0,0.24);}
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
