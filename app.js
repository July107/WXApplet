App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
    // 进入小程序---获取之前是否授权头像
    wx.getSetting({
      // withSubscriptions: true,
      success:res=>{
        console.log(res.authSetting);
        if(res.authSetting['scope.userInfo']){
          console.log('之前已经授权！');
          wx.getUserInfo({
            success:res=>{
              console.log(res.userInfo);
              this.globalData.userInfo=res.userInfo;

              // 获取的api的方法都是异步的，直接进入小程序--立马获取头像昵称，以为执行的api是异步的，获取不到全局变量，--如果进入首页，然后其他页面获取头像，这样全局变量是可以的
              // 进入小程序，当前页面立马获取头像昵称，异步，函数形式返回
              if(this.userCallback){
                this.userCallback(res.userCallback);
              }

            }
          })
        }else{
          console.log('之前没有授权！');
        }
      }

    })


  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    cityName:'',//切换城市的名字
    userInfo:null,//用户头像
  }
})

