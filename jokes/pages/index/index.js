//index.js
//获取应用实例
const app = getApp();
const common = require('../../utils/common.js');

Page({
  data: {
   type:1,
   data:[],
   pageNum:1,
   reachBottom: false
  },
  onLoad: function () {
    var ops = { type: this.data.type, page: this.data.pageNum};
    common.wxRequest(ops,this.getData);
  },
  getData: function(res){
    console.log(res.data);
    var data = res.data;
    if(this.data.reachBottom){
      data = this.data.data.concat(res.data);
    }
    // var data = this.data.data.concat(res.data);
    this.setData({
      data: data,
      reachBottom:false
    });
  },
  // 上拉刷新
  onPullDownRefresh:function(){
    var ops = { type: this.data.type, page: 0 };
    common.wxRequest(ops, this.getData);
  },
  // 下拉触底
  onReachBottom:function(){
    this.setData({
      reachBottom: true
    });
    var ops = { type: this.data.type, page: ++this.data.pageNum };
    common.wxRequest(ops, this.getData);
  },
  onShareAppMessage: function (res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来围观素段子啦~',
      path: '/pages/index/index?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
});
