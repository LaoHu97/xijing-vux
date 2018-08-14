<template>
  <div class="main">
    <!-- <x-header :left-options="{showBack: false}" class="top_header">
      <div slot="overwrite-title" class="xheader_icon">
        <img :src="hraderImg" alt="">
      </div>
    </x-header> -->
    <p class="top_text">后勤服务电话</p>
    <div class="nav_main">
      <img src="../assets/未标题-1.png" alt="服务电话" width="100%">
    </div>
  </div>
</template>
<script>
  import {
    Grid,
    GridItem,
    XHeader
  } from 'vux'
  export default {
    components: {
      Grid,
      GridItem,
      XHeader
    },
    data () {
      return {
        bottomTitle: '西京后勤',
        hraderImg: require('../assets/logo.png')
      }
    },
    created () {
      document.title = '服务电话'
    }
  }
</script>
<style scoped>
  .xheader_icon{
    margin: 5px 0;
    text-align: center;
  }
  .xheader_icon img{
    width: 100%;
    max-width: 258px;
  }
  .top_header{
    padding: 10px 0;
    border-bottom: 1px solid #999;
    background: linear-gradient(#fff, #C9EDF8);
  }
  .main {
    height: 100%;
    background: url('../assets/back01.png');
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
    background-position:50%;
  }
  .nav_bottom_title{
    font-size: 12px;
    text-align: center;
    color: #333;
  }
  .top_text{
    text-align: center;
    padding: 15px 0;
    font-weight: bolder;
    font-size: 20px;
  }
</style>
