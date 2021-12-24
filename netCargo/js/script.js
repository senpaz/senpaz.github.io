$(document).ready(function () {
	$("#hero-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 700,
		animateIn: 'fadeIn',
		animateOut: "fadeOut",
		// nav: true,
		dots: false,
		//  navText: ['<i class="icon-navLeft"></i> <span>01. Автострахование</span> ','<span> 02. Корпоративное стразование</span> <i class="icon-navRigthBlack"></i>']
	});
	$("#advent-carousel").owlCarousel({
		items: 3,
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 30,
		smartSpeed: 700,
		// animateIn: 'fadeIn',
		// animateOut: "fadeOut",
		nav: true,
		dots: false,
		navText: [' <span>&larr;</span> ', '<span> &rarr;</span>'],
		responsive: {
			0: {
				items: 1,
				margin: 15,
			},
			576: {
				items: 1,
				margin: 15,
			},
			768: {
				margin: 20,
				items: 2,
			},
			992: {
				margin: 25,
				items: 2,
			},
			1200: {
				margin: 30,
				items: 3,
			},
			1440: {
				margin: 30,
				items: 3,
			},
		},
	});
	$("#catalog-carousel").owlCarousel({
		items: 3,
		loop: true,
		autoplay: false,
		autoplayTimeout: 4000,
		margin: 30,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: [' <span>&larr;</span> ', '<span> &rarr;</span>'],
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
				margin: 25,
				items: 3,
			},
			1440: {
				margin: 25,
				items: 3,
			},
		},
	});
	$("#news-carousel").owlCarousel({
		items: 3,
		loop: true,
		autoplay: false,
		autoplayTimeout: 4000,
		margin: 30,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: [' <span>&larr;</span> ', '<span> &rarr;</span>'],
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
				margin: 25,
				items: 3,
			},
			1440: {
				margin: 25,
				items: 3,
			},
		},
	});
	$("#certificates-carousel").owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		margin: 40,
		smartSpeed: 1000,
		nav: true,
		dots: false,
		navText: [' <span>&larr;</span> ', '<span> &rarr;</span>'],
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
				margin: 20,
				items: 3,
			},
			1200: {
				margin: 30,
				items: 4,
			},
			1440: {
				margin: 30,
				items: 5,
			},
		},
	});
	$("#product-menu-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		items: 3,
		center: true,
		autoplay: true,
		smartSpeed: 700,
		autoplayTimeout: 5000,
		// navText: ["<i class='icon-left'></i>", "<i class='icon-right'></i>"],
		responsive: {
			1460: {
				items: 3,
				nav: true,
			},
			1280: {
				items: 3,
				nav: true,
			},
			991: {
				items: 2,
				navigatiion: false,
				center: false,
			},
			767: {
				items: 2,
				nav: false,
				center: false,
			},
			575: {
				items: 1,
				nav: false,
			},
			450: {
				items: 1,
				nav: false,
			},
			320: {
				items: 1,
				nav: false,
			},
		}
	});

	//burger
	const menu = document.querySelector('.header__list'),
		menuItem = document.querySelectorAll('.header__link'),
		hamburger = document.querySelector('.header__burger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			menu.classList.toggle('active');
		});
	});
	//modal

	$('[data-modal=consultation]').on('click', function (e) {
		e.preventDefault();
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order, #Uzb').fadeOut('slow');
	});

	$('.catalog__btn-popup').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('#order .modal__descr').text($('.catalog-item-title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
			let TextContent = $(this).parent().parent().children('.catalog-item-title').text();
			$('#name-product').val(`${TextContent}`)

		});
	});
	$('.catalog__btn-popup2').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('#order .modal__descr').text($('.catalog-item-title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
			let TextContent = $('.catalog-item-title').text();
			$('#name-product').val(`${TextContent}`);
			console.log($('#name-product').val());
		});
	});

	//spoilers
	$('.spoilers__title').click(function (event) {
		if ($('.spoilers').hasClass('one')) {
			$('.spoilers__title').not($(this)).removeClass('active');
			$('.spoilers__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300)
	});
	$('.spoilers2__title').click(function (event) {
		if ($('.spoilers2').hasClass('one')) {
			$('.spoilers2__title').not($(this)).removeClass('active');
			$('.spoilers2__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$("[data-fancybox]").fancybox({
		loop: true,
		protect: false
	});
	AOS.init();


	$('.telegram-form').on('submit', function (event) {

		event.stopPropagation();
		event.preventDefault();

		let form = this,
			submit = $('.submit', form),
			data = new FormData();


		$('.submit', form).val('Отправка...');

		data.append('name', $('[name="name"]', form).val());
		data.append('phone', $('[name="phone"]', form).val());
		data.append('product', $('[name="product"]', form).val());

		$.ajax({
			type: 'POST',
			url: 'ajax.php',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false,
			xhr: function () {
				let myXhr = $.ajaxSettings.xhr();

				if (myXhr.upload) {

					myXhr.upload.addEventListener('progress', function (e) {
						if (e.lengthComputable) {
							let percentage = (e.loaded / e.total) * 100;
							percentage = percentage.toFixed(0);
							$('.submit', form)
								.html(percentage + '%');
						}
					}, false);
				}

				console.log(myXhr);
				return myXhr;
			},
			error: function (jqXHR, textStatus) {
				// Тут выводим ошибку
				console.log('no');
			},
			complete: function () {
				// Тут можем что-то делать ПОСЛЕ успешной отправки формы
				$(this).find("input").val("");
				$('#consultation, #order').fadeOut();
				$(".overlay , #thanks").fadeIn('slow');

				form.reset();
				console.log("ВСЕ ПРОШЛО УСПЕШНО");
			}
		});
		console.log('gggh');
		return false;
	});
});


