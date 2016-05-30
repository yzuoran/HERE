var pla = ismobile(1);
var screenW , screenH;
if (pla == 1) {
	screenW =  window.innerWidth;
    screenH =  window.innerHeight;
}else{
	screenW = parseInt(window.screen.width);
    screenH = parseInt(window.screen.height);
}
// $("html , body").css({
// 	"width":screenW + "px",
// 	"height":screenH -64 + "px"
// });
function ismobile(test){
    var u = navigator.userAgent, app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
     if(window.location.href.indexOf("?mobile")<0){
      try{
       if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
        return '0';
       }else{
        return '1';
       }
      }catch(e){}
     }
    }else if( u.indexOf('iPad') > -1){
        return '0';
    }else{
        return '1';
    }
};

/*
-webkit-transform:rotate(90deg);
  -moz-transform:rotate(90deg);
  -o-transform:rotate(90deg);
  -ms-transform:rotate(90deg);
  transform:rotate(90deg);
*/