//This function adds/removes "open" class into header menu on Click
//This was done in order to work with the overaly better
const header = document.querySelector(".header");

//This function adds/removes "open" class into hamburger menu on Click
const btnHamburger = document.querySelector("#btnHamburger");

const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", () => {
  console.log("clicked!");
  if (header.classList.contains("open")) {
    header.classList.remove("open"); // Close hamburger memu
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    header.classList.add("open"); // Open hamburger menu
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
