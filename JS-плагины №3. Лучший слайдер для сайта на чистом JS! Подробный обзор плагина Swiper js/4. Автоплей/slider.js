const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})