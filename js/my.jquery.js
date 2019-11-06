$(document).ready(function(){
	//Start Code
		//navbar-manu-collapse active
			$(document).ready(function(){
				$('.icon').click(function(){
					$('.icon').toggleClass('active');
				})
			})
		//Active Sticky Nav
			$(document).on('scroll', function(){
				if($(this).scrollTop() > 25) {
					$('.navbar').addClass('sticky');
				} else {
						$('.navbar').removeClass('sticky');
				};
			});
		//Active Typeit.js
			new TypeIt('.t-writer', {
	 			strings: ['Welcome', 'Web Design', 'Wordpress','Edunational Website', 'Ecommerce Website', 'PSD to HTML Expart'],
				loop: true,
				breakLines: false,
				speed: 200,
				deleteSpeed: null,
			}).go();


// $('.video-bg').mb_YTPlayer({
// 		showControls:false,
// 		autoPlay:true,
// 		loop:true,
// 		mute:true,
// 		startAt:0,
// 		opacity:1,
// 		quality:'default'
// 	});



			
		//progress bar
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},4000);
			});
		//Magnific Popup Active 
			$(document).ready(function(){
				
				$('.demo').magnificPopup({
					type : 'image',
					gallery : {
						enabled : true
					}
					
				});
				
			});
		//Owl Carausel Active
			$('.carousel-team').owlCarousel({
				loop:true,
				autoplay: true,
				autoplayTimeout: 4200,
				autoplayHoverPause: true,
				nav:false,
				dots: true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
		//Active Smoth Scroll
			var scroll = new SmoothScroll('a[href*="#"]', {
				speed: 500
			});
		//Active totop jquer plugin
			$('.totop').tottTop({
				scrollTop : 0
			});
		// Preloader
		  $(window).on('load', function () {
		    if ($('.holder').length) {
		      $('.holder').delay(100).fadeOut('slow', function () {
		        $(this).remove();
		      });
		    }
		  });


		  //Wow js active
		  new WOW().init();





});

	




