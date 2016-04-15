/**
 * Created by jay on 16/4/14.
 */


timestamp = Math.round(new Date().getTime() / 1000);
var nonceStr = 'lunar';
var jsapi_ticket = 'kgt8ON7yVITDhtdwci0qeW1KthWBEhS6CdyxtdQhM2FWMsjEwRyb7mjtD7UnhkwakGj0yxtM83XtOzBxEFHO8Q';
var url = 'http://cn.dengyuecang.com/m';


var string = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + url;

var wx_sign = hex_sha1(string);
var appId =  'wx39bcc3b4179b8af6';


var data = {
    app: '',
    img: function() {
        return 'http://appled.cc/candy-theme-flat/images/share.jpg'
    },
    link: 'http://sofish.github.io/wechat.js/',
    desc: '用于处理微信分享的等小功能的 js 库',
    title: 'wechat.js'
};

var callback = function(res) {
    alert(JSON.stringify(res));
};

wechat('friend', data, callback);     // 朋友
wechat('timeline', data, callback);   // 朋友圈
wechat('weibo', data, callback);      // 微博