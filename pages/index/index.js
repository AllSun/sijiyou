Page({
    data: {
      navBarHeight: 0,
      statusBarHeight: 0,
      menuButtonInfo: null
    },
    onLoad() {
      const systemInfo = wx.getSystemInfoSync();
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  
      const navBarHeight = systemInfo.statusBarHeight +
                           (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
                           menuButtonInfo.height;
  
      this.setData({
        navBarHeight,
        statusBarHeight: systemInfo.statusBarHeight,
        menuButtonInfo
      });
    }
  })
  