//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  scanQRCode: function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }

  
})
