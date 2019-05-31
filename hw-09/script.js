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
      src=${item.preview}
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
