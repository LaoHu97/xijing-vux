<template>
  <div class="main">
    <x-header :left-options="{showBack: false}" class="top_header">
      <div slot="overwrite-title" class="xheader_icon">
        <img src="../assets/logo.png" alt="">
      </div>
    </x-header>
    <div class="nav_main">
      <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item :label="item.menu_url" v-for="item in navList" :key="item.id" @click.native="navClick(item.forward_url)">
          <img slot="icon" class="nav_main_icon" :src="item.menu_ico">
        </grid-item>
      </grid>
    </div>
    <div class="nav_bottom_title">{{bottomTitle}}</div>
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
        bottomTitle: ''
      }
    },
    methods: {
      navClick (item) {
        if (!item) {
          return this.$vux.toast.text('配置错误，地址为空')
        }
        window.location.href = item
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

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  }
  .xheader_icon img{
    width: 100%;
  }
  .top_header{
    padding: 10px 0;
    border-bottom: 1px solid #999;
    background: linear-gradient(#fff, #ADCEF7);
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
</style>
