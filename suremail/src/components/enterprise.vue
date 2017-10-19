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
          // 绘制图标
          myChart.setOption({
            // title: { text: '安邮成功案例' },
            tooltip: {
              backgroundColor: '#fff',
              textStyle: {color: '#000'}
            },
            series: [{
              type: 'map',
              mapType: 'china',
              itemStyle: {
                normal: {
                  areaColor: '#4F6A82',
                  borderColor: '#090C0F'
                }
              },
              data: [
                {name: '北京', selected: true}
              ],
              label: {
                normal: {
                  // 显示省份名称
                  show: true,
                  color: '#fff'
                },
                emphasis: {
                  show: true
                }
              }
            }]

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
  border:solid;
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