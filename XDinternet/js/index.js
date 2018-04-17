function waitshow(){
    var row_box=g('row_box');
    var row_box_list=row_box.getElementsByClassName("co_style");
    var timer;
    var i=0;
    timer=setInterval(function(){
        row_box_list[i].className+=" co_style_active";
        i++;
        if(i==row_box_list.length){
            clearInterval(timer);
        }
    },500);
}
function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
             
            }
        }
addLoadListener(browserRedirect);
addLoadListener(waitshow);
