// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 事件绑定函数
   */
  getVal: function(ev){
    var val = ev.detail.value;
    this.setData({
      inputVal: val,
      val:val
    });
  },
  resetVal: function(){
    this.setData({
      result: ''
    });
  },
  getResult: function(){
    var val = this.data.val;
    var This = this;
    app.GetHttpData(val,function(result){
      This.setData({
        inputVal: '',
        result: result
      });
    });
    console.log(this.data.result);
  },
  turnBoard: function(){
    wx.navigateTo({
      url: '../board/board'
    });
  }
})