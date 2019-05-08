import publications from "./publications.js";

const title = document.querySelector(".title");
const content = document.querySelector(".content");
const counter = document.querySelector(".counter");
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");

let articleCounter = 0;
let maxValue = publications.length - 1;

const onNextClick = () => {
  if (articleCounter < maxValue) {
    articleCounter += 1;
  }
};

const onPrevClick = () => {
  if (articleCounter > 0) {
    articleCounter -= 1;
  }
};

const render = () => {
  title.textContent = publications[articleCounter].title;
  content.textContent = publications[articleCounter].text;
  counter.textContent = `${articleCounter + 1}/${maxValue + 1}`;
};

document.addEventListener("DOMContentLoaded", render());

nextButton.addEventListener("click", function() {
  onNextClick();
  render();
});

prevButton.addEventListener("click", function() {
  onPrevClick();
  render();
});
