const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y >= 600) {
    topBtn.classList.add("open");
  } else {
    topBtn.classList.remove("open");
  }
});

const menuBar = document.querySelector(".Menu_bar");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
