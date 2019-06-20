const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
let intervals;

startButton.addEventListener("click", handleStartButton);
stopButton.addEventListener("click", handleStopButton);

function handleStartButton() {
  intervals = setInterval(intervalHandler, 1000, colors);
  stopButton.disabled = false;
  startButton.disabled = true;
}

function handleStopButton() {
  clearInterval(intervals);
  startButton.disabled = false;
  stopButton.disabled = true;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function intervalHandler(colors) {
  const colorId = randomIntegerFromInterval(0, colors.length);
  document.body.style.backgroundColor = colors[colorId];
}
