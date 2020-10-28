const checkLastTime = (obj) => {
  // obj格式: "2018-09-19 12:01:02"
  // 需要转换成/链接的格式 (所以传入的字符串, 会变成2018/09/19 12:01:02)
  obj = obj.replace("-", "/");
  // 因为new Date()传入一个字符串格式必须是年/月/日 时:分:秒的格式
  // wDate就是你传入的日期的日期对象
  var wDate = new Date(obj);
  // 当前系统时间的日期对象
  var nowDate = new Date();
  // 用当前系统时间的毫秒 - 目标时间的毫秒 除以1000得到秒数
  var seconds = (nowDate.getTime() - wDate.getTime()) / 1000; // 秒数


  if (seconds < 60){ // 小于60秒
    return "刚刚";
  } else if ((Math.floor(seconds / 60)) < 60){
    return Math.floor(seconds / 60) + "分钟前";
  } else if ((Math.floor(seconds / 60 / 60)) < 24) {
    return Math.floor(seconds / 60 / 60) + "小时前";
  } else if (Math.floor(seconds / 60 / 60 / 24) < 30){
    return Math.floor(seconds / 60 / 60 / 24) + "天前";
  } else if (Math.floor(seconds / 60 / 60 / 24 / 30) < 12){
    return Math.floor(seconds / 60 / 60 / 24 / 30) + "月前";
  } else {
    return Math.floor(seconds / 60 / 60 / 24 / 30 / 12) + "年前";
  }
};

const millionStr = numStr =>{
  //unmstr 传入一个跟帖数量 数量过万才会转换字符
  //字符串乘1会变成数值类型的 
  var theNum = numStr * 1;
  if(numStr * 1 >=10000){
    //toFixed() 强制保留几位小数
    return (theNum / 10000).toFixed(1)+"万"
  }
  else{
    return theNum;
  }
}


module.exports = {
  checkLastTime: checkLastTime,
  millionStr:millionStr
}