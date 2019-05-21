// Imports and variables declaration
import QuizData from "./quizdata.js";
import renderForm from "./quizForm.js";

const questionssection = document.querySelector(".questions");
const headerTitle = document.querySelector(".title");
const submitButton = document.querySelector("button");
const form = document.querySelector(".questionnaries-form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalTextContent");
const modalHeader = document.querySelector(".modalHeader");
const closeModal = document.querySelector(".close");
const { title, questions } = QuizData;

const data = {};
let correctAnswers = 0;
let incorrectAnswers = 0;
let questionNumber = 0;
let numberOfQuestions = questions.length;
let testResult;

//Render initial data
const formEntry = renderForm(questions);
headerTitle.textContent = title;
questionssection.innerHTML = formEntry;

// Two event listeners
submitButton.addEventListener("click", onButtonSubmit);
form.addEventListener("click", handleFormClick);

//Function that listens to input change. Blocks Check button
function handleFormClick(event) {
  const target = event.target;
  if (target.tagName === "INPUT") {
    const formData = new FormData(form);

    formData.forEach((value, name) => {
      data[name] = value;

      const answers = Object.values(data);
      questionNumber = answers.length;

      if (numberOfQuestions !== questionNumber) {
        submitButton.disabled = true;
      } else {
        submitButton.disabled = false;
      }
    });
  }
}

// Handles Submit button
function onButtonSubmit(event) {
  event.preventDefault();

  closeModal.addEventListener("click", onCloseModal);
  compareResults(data);
  modal.style.display = "block";
}

//Closes modal display
function onCloseModal() {
  modal.style.display = "none";
}

// Compares actual results with initial test data
function compareResults(data) {
  const answers = Object.values(data);
  correctAnswers = 0;
  incorrectAnswers = 0;

  answers.forEach((item, i) => {
    if (Number(item) === questions[i].answer) {
      correctAnswers += 1;
    } else {
      incorrectAnswers += 1;
    }
  });

  // Convert Answers to percents
  const toPercentage = item => {
    return Math.floor((item / questionNumber) * 100);
  };

  if (toPercentage(correctAnswers) < 80) {
    testResult = "Тест не пройден";
    document.querySelector(".modal-header").style.backgroundColor = "tomato";
  } else {
    testResult = "Тест пройден";
    document.querySelector(".modal-header").style.backgroundColor = "limeGreen";
  }

  modalHeader.textContent = testResult;
  modalContent.textContent = `Правильных ответов: ${toPercentage(
    correctAnswers
  )}% \nНеправильных ответов: ${toPercentage(incorrectAnswers)}%
    `;
}
