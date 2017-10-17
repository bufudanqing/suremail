<template>
    <div class="join-container">
        <div class="join-banner">
            <img v-bind:src="joinbanner" />
        </div>
        <div class="main">
            <div class="side">
                <img :src="more" />
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
          more: '/static/img/joinus/more.png'
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
    height: auto;
    width: 100%;
}
.side>img{
   width: 100%;
   height: 100%; 
}
</style>