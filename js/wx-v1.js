/**
 * Created by jay on 16/4/14.
 */


timestamp = Math.round(new Date().getTime() / 1000);
var nonceStr = 'lunar';
var jsapi_ticket = 'kgt8ON7yVITDhtdwci0qeW1KthWBEhS6CdyxtdQhM2E169419ofH5NU04wq4myeMwtgwX7g8q1cyD8QEOTDAoA';
var url = 'http://cn.dengyuecang.com/m';
var appId = 'wx39bcc3b4179b8af6';


string = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + url;

wx_sign = hex_sha1(string);


//data_friend = {
//    'img': 'http://cn.dengyuecang.com/images/index/logo.png',   // 选填，默认为空或者当前页面第一张图片
//    'link': '链接',
//    'desc': '描述',
//    'title': '标题'
//};
//
//$(document).ready(function() {
//    wechat('friend',data_friend)
//});
