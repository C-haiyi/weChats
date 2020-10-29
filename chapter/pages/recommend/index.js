// pages/recommend/index.js
const app = require('../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectList:[]
  },

  onLoad: function (options) {
    const that = this
    const token = wx.getStorageSync('token')
    const newsid = token.user._id
    app({
      url:'/mycoll',
      data:{
        newsid:newsid
      },
      success:function(res){
      // console.log(res.data.data) 
      const list = res.data.data

        that.setData({
        collectList:list
      })
      // console.log(list)
      }
    })
  },

})