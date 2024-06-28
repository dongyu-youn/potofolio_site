// 헤더검정으로
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

console.log(window.scrollY);
//가지고 놀기
document.addEventListener("scroll", () => {
  // 현재의 높이가 헤더의 높이보다 클경우
  console.log(window.scrollY);
  console.log(headerHeight);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

//홈화면 투명하게 처리
//변수선언
const home = document.querySelector(".home");
home.addEventListener("scroll", () => {});
