$(function(){
	// for "buy now" & "features"
	var buttons_open_descr = $('.button_descr');
	var descrs = $('.tr_description');
	var i = 0;
	
	for (var i = 0; i < descrs.size(); i++)
	{		
		var d = $(descrs[i]);
		$(d).addClass('descr' + i).parent('tr').attr("style", "display: none;");
		var b = $(buttons_open_descr[i]);
		$(b).addClass('butt_open_descr' + i);
	}
	$('span[class*="butt_open_descr"]').bind('click', function(){		
		var num = $(this).attr('class').substring(28, $(this).attr('class').length + 1);
		if ($(".descr".concat(num)).parent('tr').attr("style") == "display: none;" || $(".descr".concat(num)).parent('tr').attr("style") == "DISPLAY: none"){
			
			$(".descr".concat(num)).parent('tr').attr("style", "text-align: center;");
			//$(".descr".concat(num)).parent('tr').attr('style', 'height:' + $(".descr".concat(num)).height() + "px");
		}
		else if ($(".descr".concat(num)).parent('tr').attr("style") == "text-align: center;" || $(".descr".concat(num)).parent('tr').attr("style") == "TEXT-ALIGN: center"){
			$(".descr".concat(num)).parent('tr').attr("style", "display: none;");			
			//$(".descr".concat(num)).parent('tr').attr('style', 'height: 0px');
		}
	});	
});

$(document).ready(function() {	
	var count_image_zoom = $('a[id*="_zoom"]').size();
	var i;
	for(i = 0; i < count_image_zoom+1; i++){
		$("a#image_" + (i+1) + "_zoom").fancybox();
	}
		
	$('span.lypa').hide();
	
	$('.quick_center_image a').bind('mouseover', function(){
		$(this).children('span.lypa').show();
	}).bind('mouseout', function(){
		$(this).children('span.lypa').hide();
	});
});
