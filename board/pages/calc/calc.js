// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'0',
    val0:'0',
    val1:'1',
    val2:'2',
    val3:'3',
    val4:'4',
    val5:'5',
    val6:'6',
    val7:'7',
    val8:'8',
    val9:'9',
    val00:'.',
    val01:'+',
    val02:'-',
    val03:'*',
    val04:'÷',
    val05:'=',
    val06: 'c',
    lastIsOperator:false
  },
  setNum: function(ev){
    var val = ev.target.dataset.val;
    console.log(val);
    var result = this.data.result==0?'':this.data.result;
    var str = result + val;
    this.setData({result:str});
  },
  getNum: function(){
  	var result;

  	console.log(this.data.result);

    // this.setData({result:result});
  },
  clearNum:function(){
  	var str = this.data.result;
  	str = str.substring(0,str.length-1);
    this.setData({result:str});
  }
})