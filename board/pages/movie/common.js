//封装一个方法判断数组和对象
function isType(obj) {
  var type = Object.prototype.toString.call(obj);
  if (type == '[object Array]') {
    return 'Array';
  } else if (type == '[object Object]') {
    return "Object"
  } else {
    return 'param is no object type';
  }
}
// console.log(isType({"key":"vale"})); //Object
// console.log(isType(["1","2"])); //Array

function processArr(arr,key){
  var arr = arr;
  var key = key?key:'';
  var str = '';
  if (arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (isType(arr[i])=='Object') {
        str += ' / '+ arr[i][key];
      }else{
        str += ' / '+ arr[i];
      }
    }
  }
  return str.slice(3);
}
function processMovies(movies){
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
function showLoading(str){
  console.log(str);
  wx.showLoading({
    title: str.length ? str:'加载中',
  });
}
function hideLoading(){
  wx.hideLoading();
}
function showDetail(e) {
  var id = e.currentTarget.dataset.id;
  wx.navigateTo({
    url: './detail?id='+id,
  });
}
// module.exports.processMovies = processMovies;
module.exports = {
  processArr : processArr,
  processMovies : processMovies,
  showLoading: showLoading,
  hideLoading: hideLoading,
  showDetail: showDetail
};