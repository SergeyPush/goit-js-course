import QuizData from "./quizdata.js";

const questionssection = document.querySelector(".questions");
const headerTitle = document.querySelector(".title");
const { title, questions } = QuizData;

const data = questions
  .map((item, id) => {
    const answers = item.choices.reduce(
      (acc, el) =>
        acc +
        `
        <div class="">
            <li class="field">
                <div class="ui radio">
                    <label>
                        <input type="radio" name="question${id}" value="${id}" />
                        ${el}
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

headerTitle.textContent = title;
questionssection.innerHTML = data;

// Необходимо динамически создать разметку формы по этим данным. Каркас формы + кнопка "Проверить" пусть изначально будут в HTML-документе.
// При сабмите формы проверь на сколько вопросов пользователь ответил верно и выведи (можно под формой) сообщение об успехе или неудаче. Успешным прохождение теста считается при 80% или более верных ответов.
// Кнопка "Проверить" должна быть не активна (disabled) до тех пор, пока пользователь не ответит на все вопросы.
