var utils = {};
utils.numToRGB = function(num){
	if (num < 0 || num > 16777215) {
		num = 0;
	}
	return '#' + ('000000' + (num | 0).toString(16)).substr(-6);
};
if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
                return window.setTimeout(callback,1000/60);
            })
        };
if (!window.cancelRequestAnimationFrame) {
    window.cancelRequestAnimationFrame = (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout);
};