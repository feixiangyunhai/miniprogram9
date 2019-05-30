// pages/ranzhi/ranzhi.js
var datas = require("../../data/datas.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: null,
    zi: "添加此训练"
  },
    tianjia() {
      wx.showToast({
        title: '添加成功',
      })
      if (this.data.zi = '查看我的训练'){
        console.log(1)
        wx.switchTab({
          url: '/pages/my/my',
        })
      }
      this.setData({
        zi: '查看我的训练'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var idx = options.index
    var detailData = datas.short_time_exer
    this.setData({
      detailData: detailData[1][idx]
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