window.onload = function (ev) {
	var oe = ev || window.event;
	var browserHeight = document.documentElement.clientHeight;
	var browserWidth = document.documentElement.clientWidth;
	$('.active').css('transition', '0s');
	$('.active_d').css('height', browserHeight + 'px');
	if (browserWidth < 1350) {
		$('.active_d').css('backgroundSize', '1350px');
	}else {
		$('.active_d').css('backgroundSize', '100%');
	}


	window.onresize = function(ev) {
		var oe = ev || window.event;
		browserHeight = document.documentElement.clientHeight;
		browserWidth = document.documentElement.clientWidth;

		$('.active_d').css('height', browserHeight + 'px');
		if (browserWidth < 1350) {
			$('.active_d').css('height', browserHeight + 'px');
			$('.active_d').css('backgroundSize', '1350px');
		}else {
			$('.active_d').css('height', browserHeight + 'px');
			$('.active_d').css('backgroundSize', '100%');
		}
	}
	// 滚轮
	var num = 0;
	var onoff = true;

	$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
	    if (onoff) {
	    	 if (delta > 0) {
		        num++;
		        onoff = false;
		        if (num > 0) {
		        	num = 0;
		        	$('.active').css('top', num*100 + '%');
		        }
		        onoff = false;
		        setTimeout(function() {
		        	$('.active').css('transition', '0.3s');
		        	$('.active').css('top', num*100 + '%');
		        	onoff = true;
				},300);
		    } 
		}
		if (onoff) {
			if (delta < 0) {
		        num--;
		        if (num < -8) {
		        	num = -8;
		        	$('.active').css('top', num*100 + '%');
		        }
		        onoff = false;
		        setTimeout(function() {
		        	$('.active').css('transition', '0.3s');
		        	$('.active').css('top', num*100 + '%');
		        	onoff = true;
				},300);
		    }
		}
	});
	
	
	
//	var oBg6 = document.getElementsByClassName('bg_6')[0];
//	var oBg_6one = oBg6.getElementsByClassName('bg_6_conter_one')[0];
//	
//	var oCl = oBg_6one.getElementsByClassName('cl')[0];
//	var oCr = oBg_6one.getElementsByClassName('cr')[0];
//	
//	
//	oBg_6one.onmouseenter = function () {
//	   oCl.style.position =  "absolute";
//	   oCl.style.clip = "rect(0px,128px,128px,64px)";
//	}

    
    
}



