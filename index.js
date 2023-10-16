let btnOpen = document.getElementById("open-menu");
let btnClose = document.getElementById("close-menu");
let mobileMenu = document.getElementById("mobile-menu");

btnOpen.addEventListener("click", () => {
  mobileMenu.classList.remove("disabled");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.add("disabled");
});
