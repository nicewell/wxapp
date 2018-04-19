// pages/board/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:'',
    msgData:[
              {
                'name':'lisi',
                'des':'我天不下雨'
              },
              {
                'name':'wangwu',
                'des':'我天不打雷'
              },
              {
                'name':'zhanglang',
                'des':'我天不黑'
              },
              {
                'name':'laowang',
                'des':'我夜不归宿'
              }
            ]
  },
  /**
   * 事件绑定
   */
  getMsg: function(ev){
    // console.log(ev.detail.value);
    var str = ev.detail.value;
    this.setData({
      inputVal: str
    });
  },
  addMsg: function(ev){
    var arr = this.data.msgData;
    arr.push({'name':'duang','des':this.data.inputVal});
    this.setData({
      msgData:arr,
      inputVal:''
    });
    this.setStorage('msgData',this.data.msgData);
  },
  delMsg: function(ev){
    // console.log(ev);
    var _index = ev.target.dataset.index
    var arr = this.data.msgData;
    arr.splice(_index,1);
    this.setData({
      msgData:arr
    });
    this.setStorage('msgData',this.data.msgData);
  },
  setStorage: function(key,val){
    wx.setStorage({
      key:key,
      data:val
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'msgData',
      success: function(res) {
        console.log(res.data);
        _this.setData({
          msgData:res.data
        });
      }
    });
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
  
  }
})