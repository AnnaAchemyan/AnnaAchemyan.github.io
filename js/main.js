const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu2");
const menuItem = document.querySelectorAll(".item1");
const bgOpacity = document.querySelector(".bg_opacity");
const hamb = document.querySelector(".nav2");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
  bgOpacity.classList.toggle("color_opacity");
  hamb.classList.toggle("hambright");
}






