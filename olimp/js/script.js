$("#hero-carousel").owlCarousel({
	items: 1,
	loop: true,
	autoplay: false,
	autoplayTimeout: 5000,
	smartSpeed: 700,
	animateIn: 'fadeIn',
	animateOut: "fadeOut",
	nav: false,
	dots: false,
	//  navText: ['<i class="icon-navLeft"></i> <span>01. Автострахование</span> ','<span> 02. Корпоративное стразование</span> <i class="icon-navRigthBlack"></i>']
});
$("#olimp-carousel").owlCarousel({
	items: 4,
	loop: true,
	autoplay: true,
	autoplayTimeout: 5000,
	margin: 30,
	smartSpeed: 700,
	// animateIn: 'fadeIn',
	// animateOut: "fadeOut",
	nav: true,
	dots: false,
	navText: ['<i class="icon-arrow-left"></i> ', ' <i class="icon-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
			margin: 15,
		},
		576: {
			items: 2,
			margin: 15,
		},
		768: {
			margin: 20,
			items: 2,
		},
		992: {
			margin: 25,
			items: 3,
		},
		1200: {
			margin: 30,
			items: 4,
		},
		1440: {
			margin: 30,
			items: 4,
		},
	},
});
$("#news-carousel").owlCarousel({
	items: 1,
	loop: true,
	autoplay: false,
	autoplayTimeout: 5000,
	smartSpeed: 700,
	// animateIn: 'fadeIn',
	// animateOut: "fadeOut",
	nav: true,
	dots: false,
	navText: ['<i class="icon-arrow-left"></i> ', ' <i class="icon-arrow-right"></i>']
});