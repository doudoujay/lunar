/**
 * Created by jay on 16/3/31.
 */


//isWechat

isWeiXin = function (){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
};

//Replay

playWelcome = function () {
    welcome = HYPE.documents['DYC-M-welcome'];
    welcome.startTimelineNamed('main', welcome.kDirectionForward)
};
playDowhat = function () {
    dowhat = HYPE.documents['DYC-M-dowhat'];
    dowhat.startTimelineNamed('main', dowhat.kDirectionForward)
};
playPage2 = function () {
    page2 = HYPE.documents['lunar-page2'];
    page2.startTimelineNamed('main', page2.kDirectionForward)
};
playPage3 = function () {
    page3 = HYPE.documents['lunar-page3'];
    page3.startTimelineNamed('main', page3.kDirectionForward)
};
playPage4 = function () {
    page4 = HYPE.documents['lunar-page4'];
    page4.startTimelineNamed('main', page4.kDirectionForward)
};
playAbout = function () {
    about = HYPE.documents['DYC-M-about'];
    if (about.currentTimeInTimelineNamed('click-button') == 0) {
        about.startTimelineNamed('main', about.kDirectionForward)
    }

};



