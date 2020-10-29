module.exports = function(e){
  // wx.showLoading({
  //   title: '加载中',
  // })
const token = wx.getStorageSync('token')
  wx.request({
    
    url: 'http://localhost:116/api/'+e.url,
    data:e.data,
    header:{
      "content-type":"application/x-www-form-urlencoded",
      token:token.token
    },
    method:'POST',
    success(res){
      e.success(res)
    },
    fail(err){
      e.fail(err)
    },
    complete(){
      wx.hideLoading({
        success: (res) => {},
      })
    }
  })
}