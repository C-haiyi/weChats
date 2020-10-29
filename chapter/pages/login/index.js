const app = require('../utils/util')
Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  checkreg(){
    wx.navigateTo({
      url: '../reg/index',
    })
  },
  // 登录

  checklogin() {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        duration: 1000
      })
    } else {
      app({
        url: 'login',
        data: {
          username: this.data.phone,
          pw: this.data.password
        },
        success(res) {
          if (res.data.data == '用户名或者密码错误') {
            wx.showLoading({
              title: '用户名或者密码错误，请重新输入！',
            })
          } else {
            wx.setStorageSync('token', res.data.data)
            wx.reLaunch({
              url: '../index/index',
            })
          }
        }
      })
    }
  }
})