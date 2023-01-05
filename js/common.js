/* 검색창 제어 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

/* 올해가 몇 년도인지 계산 */
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

/* 해상도 */
let viewportSize = document.documentElement.clientWidth;

if (1305 > viewportSize) {
  let modal = document.createElement("div");
  modal.className = "modal";

  let text = document.createTextNode(
    "해상도를 1300px 이상의 환경에서 실행해 주세요!"
  );
  modal.appendChild(text);
  document.body.appendChild(modal);

  document.body.classList.add("remove");
}
