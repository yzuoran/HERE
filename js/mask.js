function drawMask(radius , type , divide , ctx){
	if (type == 1) {
		return;
	}
	ctx.clearRect(0,0,show.width,show.height);
	var radius = radius || 5,
		type = type || 2,
		divide = divide || 2.5;
	var wNum = Math.ceil(show.width/(radius+divide)),
		hNum = Math.ceil(show.height/(radius+divide));
	if (type == 2) {
		for (var i = 0 , x = radius; i < wNum; i++) {
			for (var j = 0 , y = radius; j < hNum; j++) {
				//注意这里要关闭路径,不需要打开路径
				ctx.arc(x , y , radius , 0 , Math.PI*2 , false);
				ctx.closePath();
				y += 2*radius+divide;
			}
			x += 2*radius+divide;
		}
		ctx.clip();
	}else{
		for (var i = 0 , x = 0; i < wNum; i++) {
			for (var j = 0 , y = 0; j < hNum; j++) {
				ctx.rect(x , y , 2*radius , 2*radius);
				y += 2*radius+divide;
			}
			x += 2*radius+divide;
		}
		ctx.clip();
	}
}