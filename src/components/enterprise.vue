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
          <div id="map" >

          </div>
        </div>
        <div class="intro">
           <div class="title">
               总体情况
           </div>
           <div class="message">
             安邮中心运营的政务安全邮箱中央级平台目前服务于17个中央政务部门及 4省15 市的共计69个政务单位，
             支撑运营 74 个政务域名的电子邮箱，用户规模近 10 万。
           </div>
           <div class="title">
               中央平台
           </div>
           <div class="message">
             中共中央对外联络部、中国人民政治协商会议全国委员会办公厅、全国人大、
             国家发展改革委、住房和城乡建设部、国家应对气候变化战略研究和国际合
             作中心、国家信息中心、国家电子政务外网、全国公共文化发展中心、
             中国国际交流协会、当代世界研究中心、中国和平发展基金会、
             中共民间组织国际交流促进会、中国人民争取和平与裁军协会、
             国家发展和改革委员会药品价格评审中心、
             国家发展和改革委员会宏观经济研究院、投资项目在线审批监管平台、
             信用中国、一带一路官网等。

           </div>
           <div class="title">
               省级地方平台
           </div>
           <div class="message">
             四川省安全邮箱系统：承载了四川省政府、省旅游局、省外侨办、省水利厅等20余家单位使用，平台满足5万用户规模能力；
            <br>湖南省安全邮箱系统：承载了湖南省政府、省国资委、省商务厅等10余家单位使用，平台满足5万用户规模能力；
            <br>云南省安全邮箱系统：承载了云南省委统战部、省人社厅等10家单位使用，平台满足5万用户规模能力；
            <br>广西自治区安全邮箱系统：承载了广西审计厅、广西国土局、广西经济信息中心等10余家单位使用，平台满足5万用户规模能力。

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
      },
      mounted () {
        this.drawMap()
      },
      methods: {
        drawMap () {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('map'))
          var myData = [{name: '北京', value: [116.46, 39.92]}, {name: '上海', value: [121.48, 31.22]}, {name: '石家庄', value: [114.48, 38.03]}, {name: '唐山', value: [118.02, 39.63]}
          ]
          myChart.setOption({
            tooltip: {
              backgroundColor: '#fff',
              textStyle: {color: '#000'}
            },
            geo: {
              map: 'china',
              itemStyle: {
                normal: {
                  areaColor: '#4F6A82',
                  borderColor: '#090C0F'
                },
                emphasis: {
                  areaColor: '#2a333d'
                }
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff'
                }
              }

            },
            series: [
              {
                name: '销量',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: myData
              }
            ]

          })
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
#map{
  width: 1200px;
  height:600px;
  /*border:solid;*/
  margin:0 auto;
}
.intro{
  width: 1194px;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 150px;
  margin:0 auto;
}
.intro .title{
  font-size: 18px;
  color: #1265c3;
  font-family: "思源黑体","黑体";
  margin-bottom: 15px;
}
.intro .message{
  font-size: 16px;
  color: #999;
  font-family: "思源黑体","黑体";
  margin-bottom: 50px;
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
