<template>
  <div class="main">
    <div class="search_main">
      <flexbox>
        <flexbox-item :span="9" class="search_input">
          <x-input placeholder="请输入位置名称关键字" v-model="search_input_value" placeholder-align="left">
            <img slot="label" style="padding-right:3px;display:block;" src="../assets/search.png" width="18" height="18">
          </x-input>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-button type="primary" mini class="search_btn" @click.native="searchClick">搜索</x-button>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="nav_main" v-if="items.length">
      <div class="nav_list" v-for="(item, index) in items" :key="index" @click="clickNav(item)">
        <img :src="item.image" class="suo" alt="缩略图">
        <span>{{item.content}}</span>
        <img src="../assets/jiantou.png" class="ico" alt="ico">
      </div>
    </div>
    <div class="nav_none" v-else>
      <icon type="search" is-msg></icon>
      <p>没有搜索到相关地点</p>
    </div>
  </div>
</template>
<script>
  import {
    queryMiniNavig
  } from '../api/index'
  import { Flexbox, FlexboxItem, querystring, XInput, XButton, Icon } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XInput,
      XButton,
      Icon
    },
    data () {
      return {
        search_input_value: '',
        items: []
      }
    },
    methods: {
      searchClick () {
        this.getQueryNav()
      },
      getQueryNav () {
        let para = {
          content: this.search_input_value,
          mid: querystring.parse().mid,
          appid: querystring.parse().appid
        }
        queryMiniNavig(para).then(res => {
          this.items = res.data.miniNavigList
        })
      },
      clickNav (item) {
        this.$wechat.openLocation({
          latitude: Number(item.latitude), // 纬度，浮点数，范围为90 ~ -90
          longitude: Number(item.longitude), // 经度，浮点数，范围为180 ~ -180。
          name: item.content, // 位置名
          scale: 18 // 地图缩放级别,整形值,范围从1~28。默认为最大
        })
      }
    },
    mounted () {
      this.getQueryNav()
    }
  }
</script>
<style scoped>
  .nav_main{
    border-top: 1px solid #EBEEF5;
  }
  .nav_list{
    border-bottom: 1px solid #DCDFE6;
    height: 65px;
  }
  .nav_list .suo{
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin: 10px;
    float: left;
  }
  .nav_list .ico{
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin: 20px;
    float: right;
  }
  .nav_list span{
    line-height: 65px;
  }
  .nav_list:active{
    background: #EBEEF5;
  }
  .search_main{
    padding: 25px 10px;
  }
  .search_input{
    border: 1px solid #EBEEF5;
    border-radius: 200px;
  }
  .search_input .vux-x-input{
    padding: 3px 15px;
  }
  .search_btn{
    float: right;
  }
  .nav_none{
    text-align: center;
    color: #B2B2B2;
    margin-top: 50px;
  }
</style>
