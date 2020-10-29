const app = require('../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {index:1, text:'科技' },
      { index:2, text:'财经'},
      { index:3, text:'娱乐' },
      {index:4, text:'新闻' }
    ],
    button:[
      {index:1, text:'手机' },
      { index:2, text:'互联网'},
      { index:3, text:'电脑' }
    ],
    newsList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const token = wx.getStorageSync('token')
    // console.log(token)
    if (token == '' || token == undefined) {
      wx.navigateTo({
        url: '../login/index',
        success(res){
          console.log(res)
        }
      })
    }
    const that = this
    app({
      url:'get_news',
      data:{
        'time':'2020-10-27',
        'type':'所有'
      },
      success:function(res){
        const list = res.data.data.list
          that.setData({
            newsList:list
          })
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  // search(){
  //   console.log("搜索")
  // },
  search(){
    console.log(this.data.newsList)
    const token = wx.getStorageSync('token')
    app({
      url:'mycoll',
      data:{
      },
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  newsInfo:(e)=>{
    var id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../game/index?id='+id,
    })
  },

  onShow: function () {
  },
})