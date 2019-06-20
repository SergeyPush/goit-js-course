import CountdownTimer from "./timer.js";

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 1, 2019")
});

document.addEventListener("DOMContentLoaded", handleLoadContent);

function handleLoadContent() {
  timer1.start();
}
