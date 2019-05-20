import QuizData from "./quizdata.js";
import renderForm from "./QuizForm.js";

const questionssection = document.querySelector(".questions");
const headerTitle = document.querySelector(".title");
const submitButton = document.querySelector("button");
const form = document.querySelector(".questionnaries-form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalTextContent");
const modalHeader = document.querySelector(".modalHeader");
const closeModal = document.querySelector(".close");
const { title, questions } = QuizData;

let correctAnswers = 0;
let incorrectAnswers = 0;
let questionNumber = 0;
let numberOfQuestions = questions.length;

const formEntry = renderForm(questions);

headerTitle.textContent = title;
questionssection.innerHTML = formEntry;

submitButton.addEventListener("click", onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();
  console.dir(form.elements);
  const data = {};
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    data[name] = value !== null ? value : -1;
  });

  closeModal.addEventListener("click", onCloseModal);
  compareResults(data);
  // modal.style.display = "block";
}

function onCloseModal() {
  modal.style.display = "none";
}

function compareResults(data) {
  const answers = Object.values(data);
  console.log(answers);

  correctAnswers = 0;
  incorrectAnswers = 0;
  console.log(numberOfQuestions);

  questionNumber = answers.length;
  console.log(questionNumber);

  answers.forEach((item, i) => {
    if (Number(item) === questions[i].answer) {
      correctAnswers += 1;
    } else {
      incorrectAnswers += 1;
    }
  });

  const toPercentage = item => {
    return Math.floor((item / questionNumber) * 100);
  };

  let testResult;

  if (toPercentage(correctAnswers) < 80) {
    testResult = "Тест не пройден";
    document.querySelector(".modal-header").style.backgroundColor = "red";
  } else {
    testResult = "Тест пройден";
  }

  modalHeader.textContent = testResult;
  modalContent.textContent = `Правильных ответов: ${toPercentage(
    correctAnswers
  )} \nНеправильных ответов: ${toPercentage(incorrectAnswers)}
    `;
}

// Необходимо динамически создать разметку формы по этим данным. Каркас формы + кнопка "Проверить" пусть изначально будут в HTML-документе.
// При сабмите формы проверь на сколько вопросов пользователь ответил верно и выведи (можно под формой) сообщение об успехе или неудаче. Успешным прохождение теста считается при 80% или более верных ответов.
// Кнопка "Проверить" должна быть не активна (disabled) до тех пор, пока пользователь не ответит на все вопросы.
