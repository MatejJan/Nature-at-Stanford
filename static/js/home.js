$(function(){

	$('.slick-content-wrapper').slick();


	// Get parent element of all the posts.
	var $posts = $(".posts");

	// Whether autoplay should be off
	var stopAutoplay = false;

	// Slick main
	$posts.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		draggable: false,
		mobileFirst: true,
		fade: true,
		speed: 500,
		pauseOnHover: false,
		arrows: false
	});

	var getVideoClass = function($element) {
		cssClasses = $element.attr('class').split(' ');
		for (var i=0; i<cssClasses.length;i++) {
			if (cssClasses[i].indexOf('video') > -1) {
				return cssClasses[i]
			}
		}
		return null;
	};


	var slideIndex = 0;
	var videoClass = getVideoClass($('.posts .post').eq(slideIndex));

	var switchVideo = function(newVideoClass){
		// Put the new video underneath the current one.
		$('.background-video .' + newVideoClass).css('z-index', '1');

		// Fade the current video to 0.
		$('.background-video .' + videoClass).css('opacity', '0');

		var oldVideoClass = videoClass

		setTimeout(function(){
			$('.background-video .' + oldVideoClass).css('z-index', '0').css('opacity', '1');
			$('.background-video .' + newVideoClass).css('z-index', '2');
		}, 2100);

		videoClass = newVideoClass;
	};

	$('.background-video .' + videoClass).css('opacity', '1').css('zIndex', '2');
	setTimeout(function(){
		$('.background-video video').css('opacity', '1');
	}, 2100);

	$posts.on('afterChange', function(event, slick, currentSlide){
		var newVideoClass = getVideoClass($('.posts .post').eq(currentSlide));
		switchVideo(newVideoClass);
	});

	$('.portfolio-box').magnificPopup({
	  type: 'ajax',
	  alignTop: true,
	  overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});


	// $('.portfolio-box').magnificPopup({
	// 	type: 'inline',

	// 	fixedContentPos: false,
	// 	fixedBgPos: true,

	// 	overflowY: 'auto',

	// 	closeBtnInside: true,
	// 	preloader: false,
		
	// 	midClick: true,
	// 	removalDelay: 300,
	// 	mainClass: 'my-mfp-slide-bottom'
	// });

});