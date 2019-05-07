import publications from "./publications.js";

class Reader {
  constructor(publications) {
    this.pubs = publications;
    this.startCount = 0;
    this.maxCount = publications.length;
  }

  getCurrentPublication() {
    console.log(this.pubs[this.startCount]);
    return this.pubs[this.startCount];
  }

  getNextPublication() {
    this.startCount += 1;
    console.log(this.startCount);
  }

  gerPreviousPublication() {
    this.startCount -= 1;
    console.log(this.pubs[this.startCount]);
    return this.pubs[this.startCount];
  }
}

const pubs = new Reader(publications);

const title = document.querySelector(".card-title");
title.textContent = pubs.getCurrentPublication().title;

const content = document.querySelector(".content");
content.textContent = pubs.getCurrentPublication().text;

const counter = document.querySelector(".counter");
counter.textContent = `${pubs.startCount + 1}/${pubs.maxCount}`;

const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");

prevButton.addEventListener("click", pubs.gerPreviousPublication.bind(pubs));
prevButton.addEventListener("click", function() {
  return (counter.textContent = pubs.startCount);
});

nextButton.addEventListener("click", pubs.getNextPublication.bind(pubs));
