// pages/movie/search.js
var common = require('./common.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false
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
  getVal: function(e){
    var val = e.detail.value;
    this.setData({
      val:val
    });
  },
  loadMovies: function(e){
    var queryMsg = e.currentTarget.dataset.val;
    var This = this;
    wx.showLoading({
      title: '查询中',
    });
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/search?q=' + queryMsg,
      header: {
        // 'content-type': 'application/json'
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects);
        var movies = res.data.subjects;
        common.processMovies(movies);
        This.setData({
          movies: movies,
          loading:false,
          val: ''
        });
        wx.hideLoading();
      }
    });
  }
})