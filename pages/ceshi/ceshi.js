// pages/szjh/szjh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fu: '∨',
    la: true,
    bg: 'bg1',
    index: null,
    cishu: [
      { shu: "①", zi: "每周训练次数"},
      { shu: "②", zi: "你的活跃度"},
      { shu: "③", zi: "开始日期"}
    ],
    day: [
      { Day: "2-3天" },
      { Day: "3-4天" },
      { Day: "4-5天" },
      { Day: "5-6天" }
    ]
  },
  xiala(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index 
    if (this.data.la === true) {
      this.setData({
        la: !this.data.la,
        bg: 'bg2',
        fu: '∧',
        index: index
      })
    } else {
      this.setData({
        la: !this.data.la,
        bg: 'bg1',
        fu: '∨',
        index: index
      })
    }
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