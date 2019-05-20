export default function renderForm(questions) {
  return questions
    .map((item, id) => {
      const answers = item.choices.reduce(
        (acc, el, index) =>
          acc +
          `
          <div class="">
              <li class="field">
                  <div class="ui radio">
                      <label>
                          <input type="radio" name="question${id}" value="${index}" >
                          ${el}</input>
                      </label>
                  </div>
              </li>
          </div>`,
        ""
      );
      return `
          <section class="ui segment">
          <div class="ui form">
              <div class="grouped fields">
                  <h3 class="ui header">${id + 1}. ${item.question}</h3>  
                  <ul class="">
                      ${answers}
                  </ul>
              </div>
          </div>
          </section>    
      `;
    })
    .join("");
}
