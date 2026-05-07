const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "6%";
    nav.style.background = "white";
    nav.style.padding = "20px";
    nav.style.borderRadius = "20px";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
  }
});