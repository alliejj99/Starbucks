const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

/* 오른쪽 팝업(badge 요소)관련 내용 */
// _.throttle(함수, 시간, 옵션)
// 스크롤 이벤트의 갯수를 시간으로 한정함
const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      // 오른쪽 팝업 요소 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 오른쪽 팝업 요소 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

/* FADE_IN */
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7마다 나타나도록
    opacity: 1,
  });
});

/* SWIPER */
// new Swiper(요소, 옵션);
new Swiper(".notice-line .swiper", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});
new Swiper(".promotion .swiper", {
  // direction: "horizontal", // 기본값이라 생략 가능
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 첫 번째 슬라이드가 가운데에 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택
    clickable: true, // 사용자의 페이지 번호 요소 제어 기능 사용 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

/* PROMOTION */
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // 앞의 할당된 boolean값의 반댓값을 반환
  if (isHidePromotion) {
    // 숨김처리!
    promotionEl.classList.add("hide");
  } else {
    // 보임처리!
    promotionEl.classList.remove("hide");
  }
});
