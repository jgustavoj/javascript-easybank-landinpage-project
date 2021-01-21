//This function adds/removes "open" class into hamburger menu on Click

const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener("click", () => {
  console.log("click hamburger");
  btnHamburger.classList.contains("open")
    ? btnHamburger.classList.remove("open")
    : btnHamburger.classList.add("open");
});
