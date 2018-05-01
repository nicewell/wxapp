// pages/movie/detail.js
var common = require('./common.js');
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
    console.log(options);
    this.setData({ id: options.id});
    this.loadMovieItem(options.id);
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
  loadMovieItem: function(id){
    var This = this;
    wx.request({
      url: common.apiUrl('subject/'+id),
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res.data);
        var movie = res.data;
        // console.log(common.processArr(movie.casts,'name'))
        // console.log(common.processArr(movie.countries))
        This.setData({
          movie: movie,
          videoTit:movie.trailers[0].title,
          videoSrc:movie.trailers[0].resource_url,
          poster:movie.trailers[0].medium,
          src:movie.images.medium,
          average:movie.rating.average,
          title:movie.title,
          directors:common.processArr(movie.directors,'name'),
          casts:common.processArr(movie.casts,'name'),
          pubdates:movie.pubdate,
          countries:common.processArr(movie.countries),
          summary:movie.summary
        });
      }
    });
  }
})