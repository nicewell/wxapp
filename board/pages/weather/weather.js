// pages/weather/weather.js
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
    this.getPos();
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
   * 获取位置信息
   */
  getPos: function(){
    var This = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log(latitude,longitude);
        // 打开地图
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // });
        This.loadCity(latitude,longitude);
      }
    });
  },
  loadCity: function(latitude,longitude){
    var This = this;
    wx.request({
      url: 'http://api.map.baidu.com/geocoder/v2/?ak=GOx3xUV7P9jTauYfCuoUZhVfX8tDxLki&location='+latitude+','+longitude+'&output=json',
      data: {
          x: '' ,
          y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var result = res.data.result.addressComponent;
        console.log(result);
        var city = result.city;
        var district = result.district;
        This.setData({
          city:city,
          district:district
        });
        This.loadWeather(This.data.city);
      }
    });
  },
  loadWeather:function(location){
    var This = this;
    wx.request({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='+location+'&output=json&ak=GOx3xUV7P9jTauYfCuoUZhVfX8tDxLki',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var result = res.data;
        var temperature = result.results[0].weather_data[0].temperature;
        var weather = result.results[0].weather_data[0].weather;
        var wind = result.results[0].weather_data[0].wind;
        console.log(result.results[0]);
        This.setData({
          temp:temperature,
          weather:weather,
          wind:wind
        });
      }
    });
  }
})