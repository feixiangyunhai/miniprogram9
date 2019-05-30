// pages/adimn/admin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../image/shou/shou1.jpg',
      '../image/shou/shou2.jpg',
      '../image/shou/shou4.jpg'
    ]
  },
  jihua() {
    wx.navigateTo({
      url: '../rmjhgk/rmjhgk'
    })
  },
  xunlian() {
    wx.navigateTo({
      url: '../dsxl/dsxl'
    })
  },
  sijiao() {
    wx.navigateTo({
      url: '../sijiao/sijiao'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})