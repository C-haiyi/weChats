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

  // 登录

  checkreg() {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        duration: 1000
      })
    } else {
      app({
        url: 'reg',
        data: {
          username: this.data.phone,
          pw: this.data.password
        },
        success(res) {
         console.log(res)
         if(res.data.status == 'success'){
           wx.showLoading({
             title: '注册成功',
             duration:3000
           })
           wx.navigateTo({
             url: '../login/index',
           })
         }
        },onfail(){
          wx.showLoading({
            title: '注册失败',
            duration:3000
          })
        }
      })
    }
  },
})