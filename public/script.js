document.addEventListener("DOMContentLoaded", () => {
  const images = window.carouselImages;
  let index = 0;
  const carouselImg = document.getElementById("carousel-img");

  carouselImg.addEventListener("click", () => {
    index = (index + 1) % images.length;
    carouselImg.src = "/" + images[index];
  });
});
