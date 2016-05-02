$(function(){
  console.log("We are loaded!");

  $(".posts ul").slick({
  	adaptiveHeight: true,
  	autoplay: true,
  	autoplaySpeed: 1000,
  	dots: true,
  	draggable: false,
  	mobileFirst: true
  });
});
