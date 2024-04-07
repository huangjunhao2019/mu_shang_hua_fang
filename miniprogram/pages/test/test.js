// pages/test/test.js
import instance from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  async handler(){
    //   //第一种调用方式，.then的方式进行调用
    // instance.request({
    //     url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
    //     method: 'GET',

    // })
    // .then((res) => {
    //     console.log(res)
    // })
    //第二种调用方式，通过await和async的方式进行调用
     const res = await instance.request({
        url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
        method: 'GET',
        })
        console.log(res)
  },
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})