const checkboxs = document.querySelectorAll('.asaid__content-content label')
const reset = document.querySelectorAll('.reset')
const asaidColor = document.querySelector('#asaid__color_list')
const body = document.querySelector('body')
//active checkbox
checkboxs.forEach(el => {
	const ckech = el.querySelector('input[type=checkbox]')
	const newCheckbox = document.createElement('div')
	newCheckbox.classList.add('newCheckbox')
	ckech.style.display = 'none'
	el.before(newCheckbox)
	newCheckedClick(newCheckbox, ckech, el)
	addActiveLabelClass(el, ckech, newCheckbox)
	console.log(ckech.hasAttribute('checked'));
	if (ckech.hasAttribute('checked')) {
		el.classList.add('active')
		newCheckbox.innerHTML = '<i class="icon-done"></i>'
	}
})
// all functions
function newCheckedClick(newCheckbox, ckech, el) {
	newCheckbox.addEventListener('click', () => {
		ckech.checked = !ckech.checked
		if (ckech.checked === true) {
			el.classList.add('active')
			newCheckbox.innerHTML = '<i class="icon-done"></i>'
		} else {
			el.classList.remove('active')
			newCheckbox.innerHTML = ''
		}
	})
}
function addActiveLabelClass(el, ckech, newCheckbox) {
	el.addEventListener('click', elem => {
		if (ckech.checked === true) {
			el.classList.add('active')
			newCheckbox.innerHTML = '<i class="icon-done"></i>'

		} else {
			el.classList.remove('active')
			newCheckbox.innerHTML = ''
		}
	})
}
//Colors 
const colors = [
	{ color: '#FF6060', title: 'Красный' },
	{ color: '#FFDC60', title: 'Желтый' },
	{ color: '#72E191', title: 'Зеленый' },
	{ color: '#6070FF', title: 'Синий' },
	{ color: '#A660FF', title: 'Фиолетовый' },
	{ color: '#FF60AC', title: 'Розовый' },
	{ color: '#EEC3AB', title: 'Бежевый' },
	{ color: '#FFFFFF', title: 'Белый' },
	{ color: '#292929', title: 'Черный' },
	{ color: '#9D9D9D', title: 'Серый' },
]

function asaidColorsBlock() {
	colors.forEach(el => {
		const li = document.createElement('li')
		const span = document.createElement('span')
		const i = document.createElement('i')
		i.classList.add('icon-exit-small')
		li.textContent = el.title
		span.style.backgroundColor = el.color
		asaidColor.append(li)
		li.prepend(span)
		li.append(i)
	})
}
function asaidColorsActive() {
	const li = asaidColor.querySelectorAll('li')
	li.forEach(el => {
		el.addEventListener('click', element => {
			el.classList.add('active')
			if (element.target.classList.contains('icon-exit-small')) {
				el.classList.remove('active')
			}
		})
	})
}
asaidColorsBlock()
asaidColorsActive()



//progress2 plugin //================================================================================================================================================

const progress = document.querySelector('#progress')
if (progress) {
	noUiSlider.create(progress, {
		start: [3000, 23000],
		step: 1000,
		connect: true,
		range: {
			'min': 3000,
			'max': 30000
		}
	});
	const min = document.querySelector('.noUi-handle-lower')
	const max = document.querySelector('.noUi-handle-upper')
	progress.noUiSlider.on('update', function (value, heandler) {
		const minPriceNow = Math.round(value[0])
		const maxPriceNow = Math.round(value[1])
		min.innerHTML = `<div class="asaid__value-price">${minPriceNow}<span>₽</span></div>`
		max.innerHTML = `<div class="asaid__value-price max-price">${maxPriceNow}<span>₽</span></div>`
	})
}

//spoilers

const spoilerTitle = document.querySelectorAll('.asaid__spoilers_title')

spoilerTitle.forEach(el => {
	console.log(el.parentElement);
	el.parentElement.classList.add('active')
	if (el.parentElement.classList.contains('active')) {
		el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px'
	} else {
		el.nextElementSibling.style.maxHeight = 0
	}
	el.addEventListener('click', function (elem) {
		let content;
		if (elem.target.classList.contains('icon-battery')) {
			console.log(elem.target.parentElement.nextElementSibling.scrollHeight + 'px', 'pxxxxxxxxx');
			elem.target.parentElement.parentElement.classList.toggle('active')
			content = elem.target.parentElement.nextElementSibling
		} else {
			elem.target.parentElement.classList.toggle('active')
			content = elem.target.nextElementSibling
		}
		if (elem.target.parentElement.classList.contains('active')) {
			content.style.maxHeight = content.scrollHeight + 'px'
		} else if (elem.target.parentElement.parentElement.classList.contains('active')) {
			content.style.maxHeight = content.scrollHeight + 'px'
		} else {
			content.style.maxHeight = 0
		}
	}, true)
})

//burger

const menuBtn = document.querySelector('.header__burger')
const menu = document.querySelector('#menu')
const menuExit = document.querySelector('.menu__exit')
menuBtn.addEventListener('click', function () {
	// this.classList.toggle('active');
	menu.classList.add('active')
	body.classList.add('lock')
})
menuExit.addEventListener('click', function () {
	menu.classList.remove('active')
	body.classList.remove('lock')

})

//filters

const filters = document.querySelectorAll('.filters')
const asaid = document.querySelector('#asaid')
const apply = document.querySelector('.asaid__apply')
filters.forEach(el => {
	el.addEventListener('click', function () {
		asaid.classList.add('active')
		body.classList.add('lock')
	})
})
apply.addEventListener('click', function (e) {
	e.preventDefault()
	asaid.classList.remove('active')
	body.classList.remove('lock')
})

//reset all form 
reset.forEach(reset => {
	reset.addEventListener('click', function () {
		checkboxs.forEach(el => {
			const ckech = el.querySelector('input[type=checkbox]')
			const newCheckbox = document.querySelectorAll('.newCheckbox')
			ckech.checked = false
			newCheckbox.forEach(el => {
				el.innerHTML = ''
			})
			el.classList.remove('active')
		})
		const li = asaidColor.querySelectorAll('li')
		li.forEach(el => el.classList.remove('active'))
		asaid.classList.remove('active')
		body.classList.remove('lock')
	})
})