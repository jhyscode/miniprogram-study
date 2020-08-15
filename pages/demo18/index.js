// pages/demo18/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    swiperList:[]
  },

  // 页面开始加载，就会触发
  onLoad:function(options) {
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList:result.data.message
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
  
})