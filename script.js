"use strict";

//Video JS
const franceVideoText = document.querySelector(".title_video");
var franceVideoPlayer = videojs("france-video");
franceVideoPlayer.on("play", function () {
	franceVideoText.style.display = "none";
});
franceVideoPlayer.on("ended", function () {
	franceVideoText.style.display = "";
	franceVideoPlayer.load();
});
var solutionVideoPlayer = videojs("solution_video");
solutionVideoPlayer.on("ended", function () {
	solutionVideoPlayer.load();
});
// swiper JS
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	centeredSlides: false,
	spaceBetween: 24,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	breakpoints: {
		769: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
});
var studiesSwiper = new Swiper(".case_studios_swiper", {
	slidesPerView: 1,
	spaceBetween: 128,

	slidesPerGroupSkip: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 1,
		},
	},
});

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger_lines");
const menuMobile = document.querySelector(".ul_header");
hamburger.addEventListener("click", function () {
	if (menuMobile.classList.contains("active_hamburger")) {
		document.querySelector("body").style.overflow = "";
		hamburgerLines[0].classList.remove("rotate_hamburger_top");
		hamburgerLines[1].classList.remove("rotate_hamburger_bottom");
		menuMobile.classList.remove("active_hamburger");
	} else {
		document.querySelector("body").style.overflow = "hidden";
		hamburgerLines[0].classList.add("rotate_hamburger_top");
		hamburgerLines[1].classList.add("rotate_hamburger_bottom");
		menuMobile.classList.add("active_hamburger");
	}
});
