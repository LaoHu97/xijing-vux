<template>
  <div class="main">
    <!-- <x-header :left-options="{showBack: false}" class="top_header">
      <div slot="overwrite-title" class="xheader_icon">
        <img :src="hraderImg" alt="">
      </div>
    </x-header> -->
    <div class="nav_main">
      <img src="../assets/471605433974899869-(1).png" alt="二维码" width="100%">
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
      document.title = '合作联系'
    }
  }
</script>
<style scoped>
  /* .main {
    height: 100%;
    background: url('../assets/back01.png');
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
    background-position:50%;
  } */
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
  .nav_bottom_title{
    font-size: 12px;
    text-align: center;
    color: #333;
  }
</style>
