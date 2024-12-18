let images = document.querySelectorAll(".images img");
let imagesContainer = document.querySelector(".images");
let slider = document.querySelector(".slider");
let nav_left = document.querySelector(".nav_left");
let nav_right = document.querySelector(".nav_right");

let index = 0;
let image_width = images[0].clientWidth;
let total_img = images.length;

function slider_nav() {
  const move = -index * image_width;
  imagesContainer.style.transform = `translateX(${move}px)`;
  imagesContainer.style.transition = "transform 0.5s ease";
}

nav_right.addEventListener("click", () => {
  if (index < total_img - 1) {
    index++;
    slider_nav();
  } else {
    index = 0;
    slider_nav();
  }
});

nav_left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider_nav();
  } else {
    index = total_img - 1;
    slider_nav();
  }
});

// subtask2

let gal_images = document.querySelectorAll(".gal_images");
let image_modal = document.getElementById("image_modal");
let close_tab = document.querySelector(".close");
let full_image = document.querySelector(".full_image");

gal_images.forEach((gal_images) => {
  gal_images.addEventListener("click", () => {
    let full_img_src = gal_images.getAttribute("data-expand");

    full_image.src = full_img_src;
    image_modal.style.display = "block";
  });
});

close_tab.addEventListener("click", () => {
  image_modal.style.display = "none";
});
