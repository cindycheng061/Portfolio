const hamburgerbutton = document.querySelector(".hamburger_button");
const mobileNav = document.querySelector(".mobileheader_nav");

hamburgerbutton.addEventListener("click", () => {
  mobileNav.classList.toggle("display-none");
  // alert("holy moley it is working");
});
