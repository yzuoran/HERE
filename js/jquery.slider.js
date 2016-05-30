;(function($){
	$.fn.slider = function(object){
		var object = object || {};
		var $sld = $(this),
			$pgs = $(this).find(".progress"),
			$dot = $(this).find(".dot");
		var slider = {
			init : object.init || object.min || 0,
			min : object.min || 0,
			max : object.max || 100,
			step : object.step || 1,
			slide : object.slide || null,
			stop : object.stop || null
		},
		len = slider.max - slider.min;
		var pos = {
			startPos : 0,
			movePos : 0,
			per : 0,
			val : 0
		};
		var ele = {
			startPos : $pgs.offset().left,
			eleW : $sld.width()
		};
		var sliderInit = function(e){
			pos.per = (slider.init-slider.min)*100/len;
			pos.per = (pos.per > 100)?100 : pos.per;
			pos.per = (pos.per < 0)?0 : pos.per;
			pos.val = parseInt(pos.per*len/100,10)+slider.min;
			pos.val = pos.val - pos.val%slider.step;
			pos.per = ((pos.val-slider.min)/len)*100;
			$pgs.css('width',pos.per + '%');
			$dot.css('left',pos.per + '%');
		}
		sliderInit();
		var sliderStart = function(e){
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			pos.startPos = touch.pageX;
			return false;
		};
		var sliderMove = function(e){
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			pos.movePos = touch.pageX - ele.startPos;
			pos.per = pos.movePos*100/ele.eleW;
			pos.per = (pos.per > 100)?100 : pos.per;
			pos.per = (pos.per < 0)?0 : pos.per;
			pos.val = parseInt(pos.per*len/100,10)+slider.min;
			pos.val = pos.val - pos.val%slider.step;
			pos.per = ((pos.val-slider.min)/len)*100;
			try{
				e.data.callback(pos.per , pos.val);
			}catch(error){
				return false;
			}
			return false;
		};
		var sliderEnd = function(e){
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			pos.startPos = touch.pageX;
			try{
				e.data.callback(pos.per , pos.val);
			}catch(error){
				return false;
			}
			return false;
		};
		$dot.bind("touchstart" , sliderStart);
		$dot.bind("touchmove" ,  {callback : slider.slide} , sliderMove);
		$dot.bind("touchend" , {callback : slider.stop} , sliderEnd);
	}
})(jQuery);