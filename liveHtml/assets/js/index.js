$(document).ready(function () {
	// let lockedSlide, lockedSlideIndex;
	// let arrSlides = Array.from(document.querySelectorAll('.slide'));
	let currentSlide, nextSlide, prevSlide;
	$('.slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	// $('.slide').on('click', function () {
	// 	$(this).toggleClass('locked');
	// 	$('.slide').not(this).removeClass('locked')
	// 	lockedSlide = $(this);
	// 	lockedSlideIndex = arrSlides.findIndex(el => el.classList.contains('locked'))
	// 	console.log(lockedSlide, 'весь locked slide')
	// 	console.log(lockedSlideIndex, 'index locked slide');
	// });

	// $('.slick-next').on('click', function () {
	// 	console.log(arrSlides);
	// })
	function setForFocus() {
		nextSlide = currentSlide.next();
		prevSlide = currentSlide.prev();
		if (prevSlide.length == 0)
			prevSlide = null;
		if (nextSlide.length == 0)
			nextSlide = null;
	}

	$('.slide').on('click', function () {
		if ($(this).hasClass('locked')) {
			$(this).toggleClass('locked');
			currentSlide = nextSlide = prevSlide = null;
		} else {
			if (typeof currentSlide !== "undefined" &&
				currentSlide !== null)
				currentSlide.toggleClass('locked');
			$(this).toggleClass('locked');
			currentSlide = $(this);
			setForFocus();
		}

	});

	$('.slick-next').on('click', function () {
		if (typeof currentSlide !== "undefined" &&
			currentSlide !== null &&
			typeof nextSlide !== "undefined" &&
			nextSlide !== null) {
			let next_text = Number(nextSlide.text());
			let cur_text = Number(currentSlide.text());
			currentSlide.text(next_text);
			console.log(currentSlide.text(next_text));
			nextSlide.text(cur_text);
			currentSlide.toggleClass('locked');
			nextSlide.toggleClass('locked');
			currentSlide = nextSlide;
			setForFocus();
		}
	});

	$('.slick-prev').on('click', function () {
		if (typeof currentSlide !== "undefined" &&
			currentSlide !== null &&
			typeof prevSlide !== "undefined" &&
			prevSlide !== null) {
			let prev_text = Number(prevSlide.text());
			let cur_text = Number(currentSlide.text());
			console.log(currentSlide);
			currentSlide.text(prev_text);
			prevSlide.text(cur_text);
			console.log(currentSlide);
			currentSlide.toggleClass('locked');
			prevSlide.toggleClass('locked');
			currentSlide = prevSlide;
			setForFocus();
		}
	});

	// пример в консоле
	// const btn = document.querySelector('#test')

	// const arr = [1, 2, 3, 44, 5, 6, 7, 8, 9, 10]
	// const active = 44
	// const elemIndex = arr.findIndex(el => el === active)
	// console.log(arr, 'начальный массив');
	// console.log(active, 'выбранный нами элемент с классом locked');
	// console.log(elemIndex, 'Позиция найденного элемента');
	// btn.addEventListener('click', function () {
	// 	const newArr = arr.map(el => {
	// 		return el - 1
	// 	})
	// 	newArr.splice(elemIndex, 0, active)
	// 	console.log(newArr);
	// })
});

