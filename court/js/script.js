$(document).ready(function () {
	$("#hero-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 700,
		animateIn: 'fadeIn',
		animateOut: "fadeOut",
		// nav: true,
		dots: false,
		//  navText: ['<i class="icon-navLeft"></i> <span>01. Автострахование</span> ','<span> 02. Корпоративное стразование</span> <i class="icon-navRigthBlack"></i>']
	});
	$("#links-carousel").owlCarousel({
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
		navText: [' <span class="links__prev"></span> ', '<span class="links__next"></span>'],
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
	$("#map-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		margin: 30,
		smartSpeed: 700,
		// animateIn: 'fadeIn',
		// animateOut: "fadeOut",
		nav: false,
		dots: false,
		// navText: [' <span class="links__prev"></span> ', '<span class="links__next"></span>'],
		// navText: ['<i class="icon-more-arrow">', ' <i class="icon-more-arrow"></i>'],
	});
	//БУРГКР
	$(document).ready(function () {
		$('.header__burger').click(function (event) {
			$('.header__burger,.header__bottom').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});
});