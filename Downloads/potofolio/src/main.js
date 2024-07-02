//  스크롤 내렸을 때 헤더 검정으로

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

//사용자가 페이지를 스크롤할 때 감지하기 위해 어떤 JavaScript 이벤트를 사용해야 할까요?
console.log(header.offsetHeight);
document.addEventListener("scroll", () => {
  // 페이지의 현재 스크롤 위치를 어떻게 가져올 수 있을까요?
  if (window.scrollY > headerHeight / 2) {
    // 헤더의 색은 어떻게 변경할수 있을까?
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
});

const home = document.querySelector("#home");
const homeHeight = home.offsetHeight;

//사용자가 페이지를 스크롤할 때 감지하기 위해 어떤 JavaScript 이벤트를 사용해야 할까요?
console.log(header.offsetHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(1 - window.scrollY / homeHeight);
});
