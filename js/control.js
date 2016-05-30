var control = {
	textObj : $("#text"),
	sizeObj : $(".sizeset"),
	colorObj : $(".colorset"),
	weightObj : $(".weightset"),
	speedObj : $(".speedset"),
	blinkObj : $("#blink .check"),
	styleObj : $("#style .check"),
	text : window.localStorage.getItem("ftext") || "请输入内容",
	size : window.localStorage.getItem("fsize") || 80,
	color : window.localStorage.getItem("fcolor") || 10079283,
	weight : window.localStorage.getItem("fweight") || 200,
	speed : window.localStorage.getItem("fspeed") || 10,
	blink : window.localStorage.getItem("fblink") || 0,
	style : window.localStorage.getItem("fstyle") || 1,	//1:正常;2:圆形;3:矩形
};
window.localStorage.setItem("ftext" , control.text);
window.localStorage.setItem("fsize" , control.size);
window.localStorage.setItem("fcolor" , control.color);
window.localStorage.setItem("fweight" , control.weight);
window.localStorage.setItem("fspeed" , control.speed);
window.localStorage.setItem("fblink" , control.blink);
window.localStorage.setItem("fstyle" , control.style);
// control.textObj.val(control.text);
// control.sizeObj.val(control.size);
// control.colorObj.val(utils.numToRGB(control.color));
// control.weightObj.val(control.weight);
// control.speedObj.val(control.speed);
// if (control.blink == 1) {
// 	control.blinkObj.addClass("checked");
// }
// control.textObj.bind("change" , function(e){
// 	control.text = $("#text").val();
// 	window.localStorage.setItem("ftext" , control.text);
// });
// control.styleObj.eq(control.style-1).addClass("checked");
var sizePro = {
		sizeInit : control.size,
		sizeMin : 80,
		sizeMax : 160,
	};
sizePro.sizeLen = sizePro.sizeMax - sizePro.sizeMin;
var colorPro = {
		colorInit : control.color,
		colorMin : 0,
		colorMax : 16777215
	};
colorPro.colorLen = colorPro.colorMax - colorPro.colorMin;
var weightPro = {
		weightInit : control.weight,
		weightMin : 100,
		weightMax : 300,
		weightStep :100
	};
weightPro.weightLen = weightPro.weightMax - weightPro.weightMin;
var speedPro = {
		speedInit : control.speed,
		speedMin : 0,
		speedMax : 30,
		speedStep : 1
	};
speedPro.speedLen = speedPro.speedMax - speedPro.speedMin;

$(".sizeSlide").slider({
	init : sizePro.sizeInit,
	min : sizePro.sizeMin,
	max : sizePro.sizeMax,
	slide : function(per , val){
		$('.sizePgs').css('width',per + '%');
		$('.sizeDot').css('left',per + '%');
		control.sizeObj.val(val);
		control.size = val;
	},
	stop : function(per , val){
		control.sizeObj.val(val);
		control.size = val;
		window.localStorage.setItem("fsize" , control.size);
	}
});
$(".colorSlide").slider({
	init : colorPro.colorInit,
	min : colorPro.colorMin,
	max : colorPro.colorMax,
	slide : function(per , val){
		$('.colorPgs').css('width',per + '%');
		$('.colorDot').css('left',per + '%');
		var rgb = utils.numToRGB(val);
		control.colorObj.val(rgb);
		control.color = val;
	},
	stop : function(per , val){
		var rgb = utils.numToRGB(val);
		control.colorObj.val(rgb);
		control.color = val;
		window.localStorage.setItem("fcolor" , val);
	}
});
$(".weightSlide").slider({
	init : weightPro.weightInit,
	min : weightPro.weightMin,
	max : weightPro.weightMax,
	step : weightPro.weightStep,
	slide : function(per , val){
		$('.weightPgs').css('width',per + '%');
		$('.weightDot').css('left',per + '%');
		control.weightObj.val(val);
		control.weight = val;
	},
	stop : function(per , val){
		control.weightObj.val(val);
		control.weight = val;
		window.localStorage.setItem("fweight" , control.weight);
	}
});
$(".speedSlide").slider({
	init : speedPro.speedInit,
	min : speedPro.speedMin,
	max : speedPro.speedMax,
	step : speedPro.speedStep,
	slide : function(per , val){
		$('.speedPgs').css('width',per + '%');
		$('.speedDot').css('left',per + '%');
		control.speedObj.val(val);
		control.speed = val;
	},
	stop : function(per , val){
		control.speedObj.val(val);
		control.speed = val;
		window.localStorage.setItem("fspeed" , control.speed);
	}
});
control.sizeObj.bind("change" , function(e){
	control.size = parseInt($(".sizeset").val(),10);
	control.size = (control.size > sizePro.sizeMax)?sizePro.sizeMax:control.size;
	control.size = (control.size < sizePro.sizeMin)?sizePro.sizeMin:control.size;
	$(".sizeset").val(control.size);
	var per = (control.size - sizePro.sizeMin)*100/sizePro.sizeLen;
	$('.sizePgs').css('width',per + '%');
	$('.sizeDot').css('left',per + '%');
	window.localStorage.setItem("fsize" , control.size);
});
control.colorObj.bind("change" , function(e){
	control.color = parseInt("0x" + $(".colorset").val().slice(1),16);
	control.color = (control.color > colorPro.colorMax)?colorPro.colorMax:control.color;
	control.color = (control.color < colorPro.colorMin)?colorPro.colorMin:control.color;
	$(".colorset").val(utils.numToRGB(control.color));
	var per = (control.color - colorPro.colorMin)*100/colorPro.colorLen;
	$('.colorPgs').css('width',per + '%');
	$('.colorDot').css('left',per + '%');
	window.localStorage.setItem("fcolor" , control.color);
});
control.weightObj.bind("change" , function(e){
	control.weight = parseInt($(".weightset").val(),10);
	control.weight = (control.weight > weightPro.weightMax)?weightPro.weightMax:control.weight;
	control.weight = (control.weight < weightPro.weightMin)?weightPro.weightMin:control.weight;
	$(".weightset").val(control.weight);
	var per = (control.weight - weightPro.weightMin)*100/weightPro.weightLen;
	$('.weightPgs').css('width',per + '%');
	$('.weightDot').css('left',per + '%');
	window.localStorage.setItem("fweight" , control.weight);
});
control.speedObj.bind("change" , function(e){
	control.speed = parseInt($(".speedset").val(),10);
	control.speed = (control.speed > speedPro.speedMax)?speedPro.speedMax:control.speed;
	control.speed = (control.speed < speedPro.speedMin)?speedPro.speedMin:control.speed;
	$(".speedset").val(control.speed);
	var per = (control.speed - speedPro.speedMin)*100/speedPro.speedLen;
	$('.speedPgs').css('width',per + '%');
	$('.speedDot').css('left',per + '%');
	window.localStorage.setItem("fspeed" , control.speed);
});
control.blinkObj.bind("touchstart" , function(e){
	if ($(this).hasClass("checked")) {
		$(this).removeClass("checked");
		control.blink = 0;
	}else{
		$(this).addClass("checked");
		control.blink = 1;
	}
	window.localStorage.setItem("fblink" , control.blink);
	return false;
});
control.styleObj.bind("touchstart" , function(e){
	if (!$(this).hasClass("checked")) {
		control.style = $(this).parent().index()+1;
		$(this).addClass("checked");
		$(this).parent().siblings().find(".checked").removeClass("checked");	
	}
	window.localStorage.setItem("fstyle" , control.style);
	window.location.reload();
	return false;
});
$("#sample li").bind("touchstart",function(e){
	var sampleVal = $(this).text();
	$("#text").val(sampleVal);
	control.text = sampleVal;
	window.localStorage.setItem("ftext" , control.text);
});
