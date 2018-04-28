// pages/movie/recommendation.js
var common = require('./common.js');
// common.showLoading('电影推荐');
wx.showLoading({
  title: '电影推荐...',
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovies();
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
  loadMovies: function() {
    var This = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      header: {
        // 'content-type': 'application/json'
        'Content-Type': 'json'
      },
      success: function(res) {
        console.log(res.data.subjects);
        var movies = res.data.subjects;
        common.processMovies(movies);
        This.setData({
          movies: movies
        });
        // common.hideLoading();
        wx.hideLoading();
      }
    })
  }
})