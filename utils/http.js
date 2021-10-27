// 网络请求
// method:string请求方式 get/post
// url:请求的接口地址
// params:发生的参数
// message:信息弹窗交互
// callback：成功的回调函数
// error：失败的回调函数

function http(method,params,url,message,callback,error){
  if(message){
    wx.showLoading({
      title: message,
    })
  };
  wx.request({
    method:method,
    url: 'http://iwenwiki.com:3002'+url,
    data:params,
    header:{
      'content-type':'application/x-www-form-urlencoded'//post默认值
    },
    success:res=>{
      console.log(res.data);
      if(res.data.status==200){
        wx.showToast({
          title: '数据加载完毕！',
        })
        // 返回数据
        callback(res.data);
      }else{
        error('没有数据！')
      }
    },
    fail:err=>{
      error(err);
    },
    complete:function(){
      wx.hideLoading();
    }
  })


}

module.exports=http;

