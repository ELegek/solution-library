const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})