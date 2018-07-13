// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import { addCardConfig } from './api/index'

import { AjaxPlugin, ToastPlugin, WechatPlugin, querystring } from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

let para = {
  mid: querystring.parse().mid,
  url: window.location.href.split('#')[0]
}
addCardConfig(para).then(res => {
  Vue.wechat.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: res.data.configinfo.appId, // 必填，公众号的唯一标识
    timestamp: res.data.configinfo.timestamp, // 必填，生成签名的时间戳
    nonceStr: res.data.configinfo.noncestr, // 必填，生成签名的随机串
    signature: res.data.configinfo.configSign, // 必填，签名
    jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表
  })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
