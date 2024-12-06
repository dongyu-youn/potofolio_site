const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight / 2) {
    header.style.opacity = 1;
  } else {
    header.classList.remove("black");
  }
});

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
console.log(headerHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrow = document.querySelector(".arrow-up");

console.log(headerHeight);
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 1;
  }
});

//.header__toggle 클래스 요소를 hamburgur 변수에, .header__menu 클래스 요소를 header__menu 변수에 저장합니다.
//hamburgur 요소에 클릭 이벤트 리스너를 추가하여, 클릭 시 header__menu 요소의 클래스 리스트에 active 클래스를 토글합니다.
//header__menu 요소에 클릭 이벤트 리스너를 추가하여, 클릭 시 header__menu 요소의 클래스 리스트에서 active 클래스를 제거합니다.

const hamburgur = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");

hamburgur.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

headerMenu.addEventListener("click", () => {
  headerMenu.classList.remove("active");
});

//.categories 클래스 요소를 categories 변수에, .project 클래스가 붙은 모든 요소들을 projects 변수에 저장합니다.
//categories 요소에 클릭 이벤트 리스너를 추가합니다. 클릭 시 이벤트 객체 e에서 클릭된 타겟 요소의 data-category 값을 가져옵니다.
//projects 배열의 각 요소를 순회하며:
//현재 요소의 data-type 값을 가져옵니다.
//filter 값이 "all"이거나 현재 요소의 data-type 값과 같으면, 현재 요소의 style.display를 "block"으로 설정합니다.
//그렇지 않으면, 현재 요소의 style.display를 "none"으로 설정합니다.
//현재 활성화된 .category--selected 클래스를 가진 요소를 찾아 그 클래스 리스트에서 category--selected 클래스를 제거합니다.
//클릭된 타겟 요소에 category--selected 클래스를 추가합니다.

const categories = document.querySelector(".categories");
const project = document.querySelectorAll(".project");
console.log(project);
project.forEach((v) => console.log(v.dataset.type));

categories.addEventListener("click", (e) => {
  console.log(e.target.dataset.category);
  const filter = e.target.dataset.category;

  project.forEach((v) => {
    if (filter == "all" || filter == v.dataset.type) {
      v.style.display = "block";
    } else {
      v.style.display = "none";
    }
  });

  const selected = document.querySelector(".category--selected");
  console.log(e.target);
  e.target.classList.remove("category--selected");
  e.target.classList.add("category--selected");
});
