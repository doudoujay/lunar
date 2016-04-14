/**
 * Created by jay on 16/4/14.
 */

var timestamp=Math.round(new Date().getTime()/1000);
var nonceStr = 'lunar';
var jsapi_ticket = 'kgt8ON7yVITDhtdwci0qeW1KthWBEhS6CdyxtdQhM2EJysCI2QauFgA9rrUEkU0QVBVbtJofQBJTMF3mr6c2cA';
var url = 'http://cn.dengyuecang.com/m/';



string = 'jsapi_ticket='+jsapi_ticket+'&nonceStr'+nonceStr+'&timestamp'+timestamp+'&url'+url;

wx_sign = hex_md5(string);

wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx39bcc3b4179b8af6', // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: wx_sign,// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.ready(function () {
    console.log('wechat success')
});

wx.error(function (res) {
    console.log(res)
});

wx.onMenuShareTimeline({
    title: '登月舱|探索不一样的高中生活', // 分享标题
    link: 'dengyuecang.com', // 分享链接
    imgUrl: 'http://cn.dengyuecang.com/images/index/logo.png', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});

wx.onMenuShareAppMessage({
    title: '登月舱|探索不一样的高中生活', // 分享标题
    desc: '登月舱大法好', // 分享描述
    link: 'dengyuecang.com', // 分享链接
    imgUrl: 'http://cn.dengyuecang.com/images/index/logo.png', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});