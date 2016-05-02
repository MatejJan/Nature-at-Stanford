$(function(){
	console.log("We are loaded!");

	var posts = $(".posts ul")

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

	// Pauses carousel upon hovering on arrows
	$(".slick-arrow").hover(
		function() {
			posts.slick("slickPause");
		},
		function() {
			posts.slick("slickPlay");
		}
	);

	// Pauses carousel upon hovering on content
	$(".post-content").hover(
		function() {
			posts.slick("slickPause");
		},
		function() {
			posts.slick("slickPlay");
		}
	);

	// Pauses carousel upon hovering on dots
	$(".slick-dots li").hover(
		function() {
			posts.slick("slickPause");
		},
		function() {
			posts.slick("slickPlay");
		}
	);

	// Stops autoplay upon arrow click
	$(".slick-arrow").click(function() {
		posts.slick("slickSetOption", {option: "autoplay", value: false, refresh: false});
	});

	// Stops autoplay upon content click
	$(".post-content").click(function() {
		posts.slick("slickSetOption", {option: "autoplay", value: false, refresh: false});
	});

	// Stops autoplay upon dots click
	$(".slick-dots li").click(function() {
		posts.slick("slickSetOption", {option: "autoplay", value: false, refresh: false});
	});
});
