<template>
    <div class="more-container">
        <div class="more-banner">
            <img v-bind:src="morebanner" />
        </div>
        <div class="main">
          <div class="more-title">
            <img :src="title" />
          </div>
          <div class="more-desc">
            北京国信安邮科技有限公司成立于2016年6月，国家信息中心为了持续推进政务电子邮件保障工作而与国内电子邮件、商用密码等骨干企业联合成立的事企合作平台
          </div>
          <div class="about">
            <div class="img-wrapper">
                <img :src="anyou" />
            </div>
            <div class="about-desc">
                <div class="about-desc-title">
                    <img :src="abouttitle" />
                </div>
                <div class="about-content">
                    国家电子政务外网安全邮箱运营中心（简称“安邮中心”）是由国家信息中心（国家电子政务外网管理中心）牵头，联合国内顶级邮件、密码、网盘等产品厂商以及国家专业安全保障服务单位共同成立。安邮中心依托国家电子政务外网，面向党政机关、社会团体、研究机构、企事业单位提供可靠的“政务邮”安全电子邮箱服务，面向民生领域提供智慧城市“智慧邮”的大数据应用支撑与消息极速传递服务，面向行业提供基于安全邮箱的多样化综合应用与优质延伸服务。
                </div>
                <a class="about-more">
                    了解更多<Icon type="arrow-right-c"></Icon>
                </a>
            </div>
          </div>
           <div class="v-ad">
              此处视频
          </div>
          <div class="partner">
            <div class="partner-title">
                <img :src="partner" />
            </div>
            <div class="logo">
                <img :src="logo" />
            </div>
            <div class="partner-desc">
                国家信息技术安全研究中心（以下简称“中心”），是经中央编制委员会批准组建的从事信息安全核心技术研究、为国家信息安全保障服务的科研单位。
中心成立于2005年，主要承担信息技术产品/系统的安全性分析与研究；承担国家基础信息网络和重要信息系统的信息安全保障任务；研发具有自主知识产权的信息安全技术。中心履行国家信息安全保障和科研攻关双重职能。中心是国家确定的信息安全风险评估专控队伍，是公安部指定的信息安全等级保护测评单位，是《国家网络与信息安全事件应急预案》列入的应急响应技术支撑团队，是国家发改委、公安部和国家保密局联合发文明确的国家电子政务工程建设项目非涉密系统信息安全专业测评机构，是国家IC卡芯片安全检测中心。中心设有总体技术研究、系统安全检测、网络渗透检测、产品安全检测、在线监测、可控技术研究、产品研发、信息安全发展研究、上海基地等业务实体和密码安全分析、硬件解剖分析联合实验室。中心拥有一支涉及多学科、多领域实力雄厚的技术队伍，形成了较强的科研攻关和技术服务能力。      在国家主管部门的关怀指导下，中心圆满完成了国家下达的每年“两会”、党的“十八大”、北京奥运会、上海世博会、建国60周年庆典、广州亚运会等国家重大活动的信息安全保障任务，为国家基础信息网络和重要信息系统及社会各界提供了数千次、多种形式的信息安全技术服务。

            </div>
            <a class="know-more">了解更多</a>
          </div>

        </div>
        <div class="contact-us">
            <div class="contactus-title">
                <img :src="contact" />
            </div>
            <div class="contact-info">
                <div class="contact-img">
                    <img :src="info" />
                </div>
                <div class="info-form">
                    <input class="email" placeholder="Email address or username" />
                    <textarea class="message" placeholder="Message"></textarea>
                    <Button class="send" type="success" long>Send</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import morebanner from '../assets/img/more/banner.png'
    // import more from '../assets/img/more/more.png'
    import title from '../assets/img/more/title.png'
    import anyou from '../assets/img/more/anyou.png'
    import abouttitle from '../assets/img/more/title1.png'
    import partner from '../assets/img/more/partner.png'
    import logo from '../assets/img/more/logo.png'
    import contact from '../assets/img/more/contact.png'
    import info from '../assets/img/more/info.png'
    export default {
      name: 'joinus',
      data () {
        return {
          morebanner: morebanner,
          // more: more,
          title: title,
          anyou: anyou,
          abouttitle: abouttitle,
          partner: partner,
          logo: logo,
          contact: contact,
          info: info
        }
      }
    }
</script>

<style scoped>
.more-banner>img{
  width: 100%;
  height: 100%;
}
.main{
  /*height:3800px;*/
  height: auto;
  width:1200px;
  padding-top:78px;
  margin: 0 auto;
}
.more-title>img{
  display: block;
  margin:0 auto;
}
.more-desc{
  width: 900px;
  text-align: center;
  margin:0 auto;
  font-size: 16px;
  color:#8f8f90;
  margin-top: 50px;
  margin-bottom: 65px;
  font-family: "黑体";

}
.about{
  width: 1150px;
  height: 545px;
  /*border:solid;*/
  margin: 0 auto;
}
.img-wrapper{
    width: 790px;
    height: 545px;
    float: left;
}
.img-wrapper>img{
    width: 100%;
    height: 100%;
}
.about-desc{
    width: 577px;
    height: 420px;
    position: relative;
    top:62px;
    left:640px;
    z-index:1;
    background-color: rgba(255,255,255,.9);
    /*border:solid 1px red;*/
}
.about-desc-title{
    position: absolute;
    top:50px;
    left:50px;
}
.about-content{
    position: absolute;
    top:150px;
    left:50px;
    width:500px;
    height: 300px;
    font-family: "黑体";
    font-size: 16px;
    color:#495865;
    text-align: left;
    line-height:30px;
}
.about-more{
    display: block;
    text-decoration: none;
    position: absolute;
    bottom:10px;
    right:30px;
    font-size: 14px;
    color: #1f64a2;
    font-family: "黑体";
    font-weight: 600;
}
.partner{
    padding-top: 105px;
    height: 905px;
    /*border:solid;*/
    width: 100%;
}
.partner-title>img{
    display: block;
    margin: 0 auto;
}
.logo{
    width: 100%;
    margin-top: 70px;
    margin-bottom: 55px;
}
.logo>img{
    display: block;
    margin: 0 auto;
}
.partner-desc{
    width: 1000px;
    font-size: 18px;
    color: #070707;
    /* font-family: "黑体"; */
    line-height:30px;
    text-align: center;
    margin: 0 auto;
}
.know-more{
    display: block;
    text-decoration: none;
    width: 130px;
    height:30px;
    margin: 0 auto;
    background-color: #1f64a2;
    color:#fff;
    border-radius:20px;
    margin-top: 60px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
}
.v-ad{
    width: 100%;
    height: 644px;
    text-align: center;
}
/*联系我们*/
.contact-us{
    background-color: #e7e8e9;
    width: 100%;
    height: 528px;
    padding-top: 70px;
}
.contactus-title>img{
    display: block;
    margin:0 auto;
}
.contact-info{
    width: 1000px;
    height: 400px;
    padding-top: 55px;
    margin:0 auto;
    /*border:solid;*/
}
.contact-img{
    width: 420px;
    float: left;
}
.contact-img>img{
    display: inline-block;
}
.info-form{
    width:434px;
    height:250px;
    float:right;
    margin-top: 20px;
}
.email{
    width: 434px;
    height: 35px;
    border:none;
    border-radius:1px;
    background-color: #f5f5f5;
    margin-bottom: 12px;
    text-indent:12px;
    font-size:18px;
    color:#999999;
    font-family: "Plain";
}
.message{
    padding-top: 10px;
    width: 434px;
    height:100px;
    border:none;
    border-radius:1px;
    background-color: #f5f5f5;
    margin-bottom: 28px;
    text-indent:12px;
    font-size:18px;
    color:#999999;
    font-family: "Plain";
}
.email:focus{
    border:none;
    box-shadow: none;
    -webkit-box-shadow: none;
    outline-offset:0;
}
:focus {
    outline: -webkit-focus-ring-color auto 0px;
}
.send{
    height: 45px;
    background-color: #226eb2;
    font-size:20px;
    border:none;
    box-shadow: 0 0 10px grey;
    background-image: url(/static/img/more/button.png);
    transition: all .3s ease-in-out;
}
.send:hover{
    box-shadow: 0 0 20px grey;
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
