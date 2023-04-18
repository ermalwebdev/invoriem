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
		800: {
			slidesPerView: 2,
		},
	},
});
var studiesSwiper = new Swiper(".case_studios_swiper", {
	slidesPerView: 1.1,
	spaceBetween: 128,
	slidesPerGroupSkip: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// hamburger menu
const mobileMenu = document.querySelector(".ul_header");
const openCloseMenu = document.querySelector(".hamburger_btn");
const hamburgerLines = document.querySelectorAll(".hamburger_lines ");
openCloseMenu.addEventListener("click", function () {
	if (mobileMenu.classList.contains("ul_mobile")) {
		document.querySelector("html").style.overflow = "scroll";
		hamburgerLines[0].classList.remove("hamburger_active_line_top");
		hamburgerLines[1].classList.remove("hamburger_active_line_bottom");
		mobileMenu.classList.remove("ul_mobile");
	} else {
		document.querySelector("html").style.overflow = "hidden";
		hamburgerLines[0].classList.add("hamburger_active_line_top");
		hamburgerLines[1].classList.add("hamburger_active_line_bottom");
		mobileMenu.classList.add("ul_mobile");
	}
});
