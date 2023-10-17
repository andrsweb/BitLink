
document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.swiper-container', 1, '.swiper-pagination')
})

const initSwiper = (selector, view, pag) => {
	const swiper = new Swiper(selector, {
		// Optional parameters
		loop: true,
		slidesPerView: view,
		grabCursor: true,

		// If we need pagination
		pagination: {
			el: pag,
			clickable: true
		}
	});

	if(!swiper) return
}