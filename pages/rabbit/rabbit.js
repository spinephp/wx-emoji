// pages/rabbit/rabbit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
      ["😀","😃","😄","😁","😆","😅","😂","🤣","☺️","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","😏","😒"],
      ["😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","😢","😭","😤","😠","😡","🤬","🤯","😳","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬"],
      ["🙄","😯","😦","😧","😮","😲","😴","🤤","😪","😵","🤐","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠"]
    ],
  imgsCurrent:0,
  imgsArr:{
    id:0,
    name:"Grinning Face",
    introduction:"A face with a big open (grinning) mouth, showing teeth. Differs only slightly from the Smiling Face With Open Mouth And Smiling Eyes by the fact that these eyes are small circles, instead of the emoji-style smiling eyes.",
    stand:"Grinning Face was approved as part of Unicode 6.1 in 2012 and added to Emoji 1.0 in 2015.",
    alias: ["快乐的脸","笑脸"],
    code:"U+1F600",
    shortcode:":grinning:",
    related:[{id:4,name:"aaa"},
    {id:9,name:"bbb"},
    {id:30,name:"ccc"},
    {id:60,name:"ddd"}]
  },
    //是否显示面板指示点
    indicatorDots: true,
    //自动播放
    autoplay: false,
    //切换时间间隔
    interval: 2000,
    //滑动时长
    duration: 1000,
    //存放滑动视图的current
    current: 0,
    //分页标签class条件判断的值
    tabArr: {
      tabCurrentIndex: 0
    }
  },
  //事件处理函数
  // 触摸复制按键，复制当前表情到裁剪板
  copyEmoji: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.imgs[self.data.current][self.data.imgsCurrent],
      success: function (res) {
        // self.setData({copyTip:true}),  
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }  
    })
  },
  //触摸表情图象触发事件
  imgHandle: function (e) {
    //每个分页标签都设置了data-index,触摸触发事件获取此数值
    //用此数值替换滑动视图的current
    //用此数值替换分页标签class判断的值
    var index = e.target.dataset.index
    if(index!=this.data.imgsArr.id){

      var currentIndex = index % 32
      var pageCurrent = index >> 5
      this.setData({
        current: pageCurrent,
        imgsCurrent: currentIndex,
        "imgArr.id": index
      })
    }
  },
  //通过滑块视图的current改变触发事件
  swiperChange: function (e) {
    //获取视图滑块当前的current
    //用此数值替换分页标签的current的值
    console.log(e.detail.current)
    var swiperCurrent = e.detail.current;
    this.setData({
      'tabArr.tabCurrentIndex': swiperCurrent
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
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