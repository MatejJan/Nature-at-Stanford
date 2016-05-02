$(function(){
	var posts = $(".posts ul") // get parent element of all the posts
	var stopAutoplay = false; // whether autoplay should be off

	// Slick main
	posts.slick({
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		draggable: false,
		mobileFirst: true,
		fade: true,
		speed: 1500,
		pauseOnHover: false,
	});

	// Pauses carousel when user hovers on content, dots, or arrows
	$(".slick-arrow, .post-content, .slick-dots li").hover(
		function() {
			posts.slick("slickPause");
		},
		function() {
			if (!stopAutoplay) posts.slick("slickPlay");
		}
	);

	// Stops autoplay when user clicks on content, dots, or arrows
	$(".slick-arrow, .post-content, .slick-dots li").click(function() { stopAutoplay = true; });
});
