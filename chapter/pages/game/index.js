// pages/game/index.js
const app = require('../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    love:'../../images/love_collect.png',
    unlove:'../../images/love.png',
    newsinfo:[],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  button:(e)=>{
    console.log(e)
  },
  onColletionTap(){
    var flag = !this.data.flag
    if(flag){
      //显示收藏成功，图片变成红色
       this.getcolectTap1()
       wx.showLoading({
         title: '已收藏',
         duration:500
       })
    }else{
      //显示取消收藏成功，图片变成灰色
       this.getcolectTap2()
       wx.showLoading({
        title: '已取消',
        duration:500
      })
    }
  },
  //添加收藏
    getcolectTap1(){
      var flag = !this.data.flag
      var newsid =this.data.id
      var that = this
      app({
        url:'collect',
        data:{
          newsid:newsid,
          type:'1'
        },
        success:function(res){
          console.log(res)
         that.setData({
           flag:flag
         })
        }
      })
    },
    //取消收藏
    getcolectTap2(){
      var flag = !this.data.flag
      var newsid =this.data.id
      var that = this
      app({
        url:'collect',
        data:{
          newsid:newsid,
          type:'2'
        },
        success:function(res){
          console.log(res)
         that.setData({
           flag:flag
         })
        }
      })
    },
  onLoad: function (options) {
    const that = this
    this.data.id = options.id
    app({
      url:'newsinfo',
      data:{
        newsid:options.id
      },
      success:function(res){
       const newsinfo = res.data.data
       that.setData({
         newsinfo:newsinfo
       })
      }
    })
    app({
      url:'checkcollect',
      data:{
        newsid:options.id
      },
      success:function(res){
        console.log(res)
       if(res.data.msg == '已收藏'){
        that.setData({
           flag:true
         })
       }else{
        that.setData({
          flag:false
        })
       }
      }
    })
  },
})