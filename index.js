const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navbar = document.querySelector(".wrapper");
const navmenu = document.querySelector(".nav");

open.addEventListener("click", () => {
  navmenu.classList.add("nav_active");
  close.style.display = "flex";
  document.body.style.overflow = "hidden";
  open.style.display = "none"
});

close.addEventListener("click", () => {
  navmenu.classList.remove("nav_active");
  document.body.style.overflow = "auto";
  open.style.display = "flex"
  close.style.display = "none"
});
