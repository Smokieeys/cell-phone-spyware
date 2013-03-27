jQuery(document).ready(function($) {

	//scrollbar 
	(function($){
        $(window).load(function(){
            $(".scrollable").mCustomScrollbar();
        });
    })(jQuery);


	//login
	$('#login').click(function() {
		showLoginForm();
	});

	$('#login-input').on('focus', function() {
		if ($(this).val() == 'Login')
			$(this).val('');
	});
	$('#login-input').on('blur', function() {
		if(!$(this).val())
			$(this).val('Login');
	});

	$('#password-input').on('focus', function() {
		if ($(this).val() == 'Password') {
			$(this).prop('type', 'password');
			$(this).val('');
		}		
	});
	$('#password-input').on('blur', function() {
		if(!$(this).val()) {
			$(this).val('Password').prop('type', 'text');
		}
			
	});

	$('#overlay').click(function(event) {
		hideLoginForm();
	});

	function showLoginForm() {
		$('#overlay').fadeIn(600);		
		$('#login-form').fadeIn(300);
	}

	function hideLoginForm() {
		$('#login-form').fadeOut(300);
		$('#overlay').fadeOut(600);		
	}


	//FAQs
	$('.question').click(function(event) {			
		$('.active').removeClass('active');
		$(this).parent().addClass('active');	
	});

	$('#faqs-nav a').click(function(event) {			
		$('#faqs-list .active').removeClass('active');
		$($(this).attr('href')).addClass('active');	
	});

	$('.slider .slide .slide-content').css('display','none');
	$('.slider .slide.active .slide-content').css('display','block');


	//home slider
	//viewport
	var viewport = $('.slider .viewport');
	var step = 939;
	var currentSlide = 0;
	var nextSlide = 1;
	var prevSlide = -1;
	var autoslide = true;
	var totalSlides = $('.slider .slide').size();
	var animate = true;

	viewport.css('width', totalSlides*step+'px');
	//pagination control
	$('.slider .pagination li').click(function(event) {
		autoslide = false;
		if (animate) {			
			if ($(this).attr('slide') != currentSlide) {
				$('.pagination li.active').removeClass('active');
				$(this).addClass('active');
				
				animate = false;
				currentSlide = $(this).attr('slide');
				$('.slider .slide .slide-content').fadeOut(500);
				$('.slide.active').removeClass('active');
				$('#slide-'+currentSlide).addClass('active');		
				viewport.animate({left:-(step*currentSlide)+'px'},600,function(){
					$('.slide.active .slide-content').fadeIn(500);
					nextSlide = currentSlide+1;
					prevSlide = currentSlide-1;
					animate = true;
				});
			}			
		}		
	});

	//controls
	//prev
	$('.prev').click(function(event) {
		autoslide = false;
		if (animate) {						
			if (prevSlide>-1) {
				animate = false;
				$('.slide.active .slide-content').fadeOut(500);
				$('.slide.active').removeClass('active');
				$('#slide-'+prevSlide).addClass('active');
				$('.pagination li.active').removeClass('active');
				$('.pagination li').eq(prevSlide).addClass('active');
				viewport.animate({left:-(step*prevSlide)+'px'},600,function(){
					$('.slide.active .slide-content').fadeIn(500);
					currentSlide--;
					nextSlide = currentSlide+1;
					prevSlide = currentSlide-1;
					animate = true;
				});
			}
			else{
				animate = false;
				$('.slide.active .slide-content').fadeOut(500);
				$('.slide.active').removeClass('active');
				$('#slide-'+(totalSlides-1)).addClass('active');
				$('.pagination li.active').removeClass('active');
				$('.pagination li[slide=3]').addClass('active');
				viewport.animate({left:-((totalSlides-1)*step)+'px'},600,function(){
					$('.slide.active .slide-content').fadeIn(500);
					currentSlide++;
					nextSlide = currentSlide+1;
					prevSlide = currentSlide-1;
					animate = true;
				});
			}
		}
	});
	$('.next').click(function(event) {
		if (animate) {
			autoslide = false;			
			if (nextSlide<totalSlides) {
				animate = false;
				$('.slide.active .slide-content').fadeOut(500);
				$('.slide.active').removeClass('active');
				$('#slide-'+nextSlide).addClass('active');
				$('.pagination li.active').removeClass('active');
				$('.pagination li').eq(nextSlide).addClass('active');
				viewport.animate({left:-(step*nextSlide)+'px'},600,function(){
					$('.slide.active .slide-content').fadeIn(500);
					currentSlide++;
					nextSlide = currentSlide+1;
					prevSlide = currentSlide-1;
					animate = true;
				});
			}
			else{
				animate = false;
				$('.slide.active .slide-content').fadeOut(500);
				$('.slide.active').removeClass('active');
				$('#slide-0').addClass('active');
				$('.pagination li.active').removeClass('active');
				$('.pagination li[slide=0]').addClass('active');
				viewport.animate({left:0+'px'},600,function(){
					$('.slide.active .slide-content').fadeIn(500);
					currentSlide++;
					nextSlide = currentSlide+1;
					prevSlide = currentSlide-1;
					animate = true;
				});
			}
		}
	});



	//autoslide
	setInterval(function(){
		if (autoslide) {			
			if (nextSlide == totalSlides) {
				nextSlide = 0;
				currentSlide = -1;
			}
			$('.slide.active .slide-content').fadeOut(500);
			$('.slide.active').removeClass('active');
			$('#slide-'+nextSlide).addClass('active');
			viewport.animate({left:-(step*nextSlide)+'px'},600,function(){
				$('.slide.active .slide-content').fadeIn(500);
				nextSlide++;
				currentSlide++;
				$('.pagination li.active').removeClass('active');
				$('.pagination li').eq(currentSlide).addClass('active');
			});
		}		
	},4000);

	//compatibilities
	$('.compatibilities .menu li').click(function(event) {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.items').css('display', 'none');
		$('#group-'+$(this).attr('group')).css('display', 'block');
	});

	$(".fancybox").fancybox({		
		openEffect: 'none',
	    closeEffect: 'none',
	    padding: 0, //<-- notice I added a comma here ;)
	    helpers : {
	     media : {}
	    }	
	});
	//feedback
	if ($('#about').html()) {
		$('.capA').html(capA);
		$('.capB').html(capB);

		$('#about input, #about textarea').keyup(function(event) {
			$(this).removeClass('invalid');
		});
	}
	
	
});