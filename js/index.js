$(document).ready(function(){
	if (!window.localStorage.getItem("warn")) {
		alert("欢迎使用HERE显示屏O(∩_∩)O,请默认不要锁定屏幕,将手机横置即可查看大屏效果.");
		window.localStorage.setItem("warn" , 1);
	}
	$("html , body").css({
		"width":screenW + "px",
		"height":screenH -64 + "px"
	});
	var show = document.getElementById('show'),
		ctx = show.getContext('2d');
	show.width = screenW;
	show.height = screenH*0.3;

	control.textObj.val(control.text);
	control.sizeObj.val(control.size);
	control.colorObj.val(utils.numToRGB(control.color));
	control.weightObj.val(control.weight);
	control.speedObj.val(control.speed);
	if (control.blink == 1) {
		control.blinkObj.addClass("checked");
	}
	control.textObj.bind("change" , function(e){
		control.text = $("#text").val();
		window.localStorage.setItem("ftext" , control.text);
	});
	control.styleObj.eq(control.style-1).addClass("checked");
	
	var xPos = show.width/2;
	drawMask(8 , control.style, 4 , ctx);
	showCanvas(show , ctx , xPos ,control);

	window.addEventListener('orientationchange', function(event){

    if ( window.orientation == 180 || window.orientation==0 ) {
    	$("#control").css({
			"transform" : "none"
		});
		window.cancelAnimationFrame(ani);
		showCanvas(show , ctx , xPos ,control);
    }

    if( window.orientation == 90 || window.orientation == -90 ) {
		var xScale = screenH/screenW;
		$("#control").css({
			"transform-origin" : "0 0",
			"transform" : "scale("+xScale+","+xScale*1.1+")",
			"z-index" : 999
		});
		window.cancelAnimationFrame(ani);
		showCanvas(show , ctx , xPos ,control);
    }

});
});