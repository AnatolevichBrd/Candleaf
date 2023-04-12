
let header = document.querySelector("header");
let upButton = document.querySelector('.top__button--hidden');

function headerShadowAndUpButton() {
	if (window.pageYOffset > header.offsetTop) {
		header.classList.add("--header-shadow");
	} else {
		header.classList.remove("--header-shadow");
	}
	if (window.pageYOffset > 1200) {
		upButton.classList.add('shown')
	} else {
		upButton.classList.remove('shown');
	}
}

upButton.onclick = function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

window.onscroll = function () { headerShadowAndUpButton() };












