export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  convertDigits = digit => {
    return digit.toString().length === 1 ? "0" + digit : digit;
  };

  handleTimer = () => {
    const time = Date.parse(this.targetDate) - Date.now();
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    const root = document.querySelector(this.selector);
    root.querySelector("[data-value='days']").textContent = this.convertDigits(
      days
    );
    root.querySelector("[data-value='hours']").textContent = this.convertDigits(
      hours
    );
    root.querySelector("[data-value='mins']").textContent = this.convertDigits(
      mins
    );
    root.querySelector("[data-value='secs']").textContent = this.convertDigits(
      secs
    );
  };

  start() {
    setInterval(this.handleTimer, 1000);
  }
}
