"use strict";
import galleryItems from "./gallery-items.js";

const imagesList = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay img");
const closeModal = document.querySelector('[data-action="close-modal"]');
const objectImages = galleryItems.reduce(
  (acc, item) =>
    acc +
    `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
      src=""
      data-source=${item.original}
      alt=${item.description}
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>
  
  `,
  ""
);

imagesList.insertAdjacentHTML("afterbegin", objectImages);

const images = document.querySelectorAll("img.gallery__image");
const lazyLoad = target => {
  const options = {
    rootMargin: "50px 0px -200px 0px",
    threshold: 0.9
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.dir(entry.target);
        const img = entry.target;
        const imageUrl = img.dataset.source;
        img.src = imageUrl;
        obs.disconnect();
      }
    });
  });

  observer.observe(target);
};

images.forEach(img => lazyLoad(img));

imagesList.addEventListener("click", handleGalleryClick);
overlay.addEventListener("click", handleBackdrop);

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  overlayImg.src = event.target.dataset.source;
  overlayImg.alt = event.target.alt;
  overlay.classList.add("is-visible");
  closeModal.addEventListener("click", handleCloseModal);
  window.addEventListener("keydown", handleKeyPress);
}

function handleCloseModal() {
  overlay.classList.remove("is-visible");
  overlayImg.src = "";
  overlayImg.alt = "";
  window.removeEventListener("keydown", handleKeyPress);
}

function handleBackdrop(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  handleCloseModal();
}

function handleKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  handleCloseModal();
}
