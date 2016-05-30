var showCanvas = function (show,ctx,xPos,control){
	(function drawFrame(){
		ani = window.requestAnimationFrame(drawFrame,show);
		ctx.clearRect(0,0,show.width,show.height);
		var fWeight = "normal";
		if (control.weight == 100) {
			fWeight = 0;
		}else if (control.weight == 300) {
			fWeight = "bold";
		}
		if (control.blink == 1) {
			ctx.fillStyle = utils.numToRGB(Math.floor(Math.random()*16777215));
		}else{
			ctx.fillStyle = utils.numToRGB(control.color);
		}
		ctx.font = "normal "+fWeight+" "+control.size+"px Arial 微软雅黑";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		var txt = control.text;
		var metrics = ctx.measureText(txt).width;
		xPos -= Number(control.speed);
		if (control.style == 2) {
			xPos -= 6;
		}
		xPos < -metrics/2 ? (xPos = show.width+metrics/2):xPos;
		ctx.fillText(txt , xPos , show.height/2);
	}());
}