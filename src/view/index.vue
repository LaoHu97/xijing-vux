<template>
  <div class="main">
    <x-header :left-options="{showBack: false}" class="top_header">
      <div slot="overwrite-title" class="xheader_icon">
        <img :src="hraderImg" alt="">
      </div>
    </x-header>
    <div class="nav_main">
      <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item :label="item.menu_url" v-for="item in navList" :key="item.id" @click.native="navClick(item.forward_url)">
          <img slot="icon" class="nav_main_icon" :src="item.menu_ico">
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  import {
    querySmallApp
  } from '../api/index'
  import {
    Grid,
    GridItem,
    querystring,
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
        navList: [],
        bottomTitle: '',
        hraderImg: require('../assets/logo.png')
      }
    },
    methods: {
      navClick (item) {
        if (!item) {
          return this.$vux.toast.text('配置错误，地址为空')
        }
        if (item === 'http://map.com') {
          this.$router.push({
            path: '/map'
          })
        } else if (item === 'http://img01.com') {
          this.$router.push({
            path: '/img01'
          })
        } else if (item === 'http://img02.com') {
          this.$router.push({
            path: '/img02'
          })
        } else {
          window.location.href = item
        }
      },
      getNavList () {
        let para = {
          mid: querystring.parse().mid,
          appid: querystring.parse().appid,
          page: 1,
          numPerPage: 20,
          menu_type: querystring.parse().menutype
        }
        querySmallApp(para).then((res) => {
          this.navList = res.data.miniMenuList
          this.bottomTitle = res.data.miniMenuList[0].appname
          document.title = res.data.miniMenuList[0].appname
        })
      }
    },
    mounted () {
      this.getNavList()
    },
    created () {
      if (querystring.parse().menutype === '1') {
        this.hraderImg = require('../assets/logo.png')
      } else if (querystring.parse().menutype === '2') {
        this.hraderImg = require('../assets/logo2.png')
      } else if (querystring.parse().menutype === '3') {
        this.hraderImg = require('../assets/logo1.png')
      } else if (querystring.parse().menutype === '4') {
        this.hraderImg = require('../assets/logo3.png')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .main .nav_main {
    margin: 10px;
    border-radius: 8px;
  }
  .main .nav_main .weui-grids:before{
    border-top: none
  }
  .main .nav_main .weui-grid:after{
    border-bottom: none
  }
  .nav_bottom_title{
    font-size: 12px;
    text-align: center;
    color: #333;
  }
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
  .nav_main_icon{
    border-radius: 12px;
  }
</style>
<style>
  .main .nav_main .weui-grid__icon {
    width: 58px!important;
    height: 58px!important;
  }
  .weui-grid{
    padding: 20px 0px!important;
  }
</style>
