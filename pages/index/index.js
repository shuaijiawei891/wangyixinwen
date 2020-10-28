//index.js
//获取应用实例
const app = getApp()
const utilsobj = require("../../utils/index.js");
Page({
  data: {
   newsarr:[],
   cilckxiangqing(url){
    // var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url:'../xiangqing/xiangqing?xqurl='+ url 
    })
    console.log(url); 
  },
  shoucang(shoucang){ 
    //判断有没有新闻对象 有就不重复收藏
    var find = app.globalData.shoucang.find(obj =>{
      return obj['docid'] === shoucang['docid'];
    });
    if(find === undefined){
      app.globalData.shoucang.push(shoucang);
    }
    
    
  }, 
  },
  //事件处理函数
  onLoad: function () {
   wx.request({
     url: "http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html",
     //this.setdata指向大对象
     success: (res)=>{
       console.log(res.data.T1348647853363);
       var arr = res.data.T1348647853363;
       arr.map(function(obj){
         //把ptime对象的数据放入工具utils的变量obj中再调用checkLastTime方法把运算过的数据放回去
        obj['ptime'] = utilsobj.checkLastTime(obj['ptime']);
        obj['replyCount'] = utilsobj.millionStr(obj['replyCount']);
       }) 
       
       this.setData({
         newsarr: res.data.T1348647853363
       })
     }
   })
  },
 
})
