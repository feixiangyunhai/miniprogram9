// pages/dsxl/dsxl.js
var datas = require("../../data/datas.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailData:null
  },
  xun(e) {
    var index = e.currentTarget.dataset.index 
    console.log(index)
    console.log(e)
    wx.navigateTo({
      url: '/pages/ranzhi/ranzhi?index='+index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detailData = datas.short_time_exer
    this.setData({
      detailData: detailData[0]
    })
    wx.getStorage({
      key: 'index',
      success: function(res) {
        console.log(res)
      },
    })
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