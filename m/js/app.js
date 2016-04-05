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
}

//Replay

playWelcome = function () {
    welcome = HYPE.documents['DYC-M-welcome']
    welcome.startTimelineNamed('main', welcome.kDirectionForward)
}
playDowhat = function () {
    dowhat = HYPE.documents['DYC-M-dowhat']
    dowhat.startTimelineNamed('main', dowhat.kDirectionForward)
}
playSpace = function () {
    space = HYPE.documents['DYC-M-space']
    space.startTimelineNamed('main', space.kDirectionForward)
}
playAbout = function () {
    about = HYPE.documents['DYC-M-about']
    if (about.currentTimeInTimelineNamed('click-button') == 0) {
        about.startTimelineNamed('main', about.kDirectionForward)
    }

}




