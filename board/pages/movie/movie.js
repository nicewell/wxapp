// pages/movie/movie.js
wx.showLoading({
  title: '加载中',
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      '/assets/imgs/slider-01.jpg'
    ],
    // 指示点
    indicatorDots: true,
    // 指示点颜色
    // indicatorColor:"rgba(0, 0, 0, .3)",
    // 指示点选中颜色
    // indicatorActiveColor:"#000000",
    // current: 0,
    autoplay: true,
    interval: 5000,
    duration: 500,
    // 是否采用衔接滑动
    // circular:false,
    // vertical:false,
    // previousMargin:"0px"
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
  /**
   * 获取电影数据
   */
  loadMovies: function(){
    var This = this;
    wx.request({
      // url: 'https://api.douban.com/v2/movie/in_theaters',
      // https://github.com/zce/weapp-demo/blob/master/README.md
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        // 'content-type': 'application/json'
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects);
        var movies = res.data.subjects;
        This.processMovies(movies);
        This.setData({
          movies: movies
        });
        wx.hideLoading();
      }
    });
  },
  processMovies: function (movies){
    // var movies = this.data.movies;
    for (var i = 0; i < movies.length; i++) {
      var strCasts = '';
      var strDirectors = '';
      var strGenres = '';
      for (var j = 0; j < movies[i].casts.length; j++) {
        strCasts += ' / ' + movies[i].casts[j].name;
      }
      for (var j = 0; j < movies[i].directors.length; j++) {
        strDirectors += ' / ' + movies[i].directors[j].name;
      }
      for (var j = 0; j < movies[i].genres.length; j++) {
        strGenres += ' / ' + movies[i].genres[j];
      }
      movies[i].castsName = strCasts.slice(3);
      movies[i].sirectorsName = strDirectors.slice(3);
      movies[i].genresName = strGenres.slice(3);
    }
  }
})