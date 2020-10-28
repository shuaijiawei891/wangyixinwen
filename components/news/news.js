// components/news/news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    obj:{
      type : Object
    },
    cilckxiangqing:{
      type:Function
    },
    shoucang:{
      type:Function
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cilckxiangqing:function(e){
      this.properties.cilckxiangqing(e.currentTarget.dataset.url)
    },
    shoucang :function(e){
      this.properties.shoucang(e.target.dataset.obj);
    }
  }
})
