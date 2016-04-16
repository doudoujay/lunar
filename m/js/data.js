/**
 * Created by jay on 16/4/5.
 */

var countNum;

AVOSQueryInit = function () {
    AV.initialize('a29q0Xknz8C9zfdbOogwFI7g-gzGzoHsz', 'Feao8RVGHW3KwnldWQSeoUFL');
};


AVOSAddCount = function () {
    var Count = AV.Object.extend('count');
    var count = new Count();
    var query = new AV.Query(Count);

    query.get('56ff30437db2a20059fe9ef3').then(function (count) {

        count.set('count_times', countNum+1);
        count.save();

    }, function (error) {
        // 失败了
    });

};


submitForm = function (name, tel, comment) {
    var web_feeback = AV.Object.extend("web_feedback");
    var feedback = new web_feeback();
    feedback.save({
        name:name,
        tel:tel,
        comment:comment
    }, {
        success: function(object) {
            alert("感谢您对阿舱对支持！");
        }
    });

};


AVOSGetCount = function () {

    var Count = AV.Object.extend('count');
    var count = new Count();
    var query = new AV.Query(Count);

    query.get('56ff30437db2a20059fe9ef3').then(function (count) {

        var times = count.get('count_times');
        countNum = times;

    }, function (error) {
        // 失败了
    });

};

thunmbUp = function () {
    about = HYPE.documents['DYC-M-about'];
    about.getElementById('countText').textContent = countNum + 1;
    about.getElementById('countText_nowechat').textContent = countNum + 1;

    AVOSAddCount()


};
