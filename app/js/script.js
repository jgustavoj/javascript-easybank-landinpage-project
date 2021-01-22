//This function adds/removes "open" class into hamburger menu on Click
const btnHamburger = document.querySelector("#btnHamburger");
//This function adds/removes "open" class into header menu on Click
//This was done in order to work with the overaly better
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  console.log("clicked!");

  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open"); // Close hamburger meny
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open"); // Open hamburger menu
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
