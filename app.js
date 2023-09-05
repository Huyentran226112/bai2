$(document).ready(function () {
	$(".tanner-main").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
		],
	});
	$('.menu-mobile').on('click',function(){
		$('.menu-mobile-menu').toggle('slow')
	});
});
