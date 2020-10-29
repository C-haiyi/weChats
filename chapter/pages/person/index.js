const app = require('../utils/util')
Page({
  data: {
    login: false
  },
  collect: () => {
    wx.navigateTo({
      url: '../recommend/index',
    })
  },
  onLoad: function (options) {
    var that =this
    const token = wx.getStorageSync('token')
    // console.log(token)
    if (token == '' || token == undefined) {
      this.login = false;
      that.setData({
        login: this.login
      })
    } else {
      this.login = true;
      that.setData({
        login: this.login
      })
    }
  },
  checklogin() {
    wx.navigateTo({
      url: '../login/index',
    })
  },
  exit(e) {
    var that = this
    wx.clearStorageSync()
    const token = wx.getStorageSync('token')
    if (token == '' || token == undefined) {
      this.login = false;
      that.setData({
        login: this.login
      })
    }
  },
  reg(){
    wx.navigateTo({
      url: '../reg/index',
    })
  }
})