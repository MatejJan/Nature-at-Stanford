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
		pauseOnDotsHover: true,
		pauseOnHover: false
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
});
