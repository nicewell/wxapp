var URI = 'https://www.apiopen.top/satinGodApi';
function wxRequest(ops,callback){
  var ops = ops || {};
  wx.request({
    url: URI,
    data: ops,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res.data);
      callback && callback(res.data);
    }
  })
}
module.exports = {
  wxRequest: wxRequest
};