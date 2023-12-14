const questions = [
  {
    question: "Which country drinks the most amount of coffee per person?",
    answer: [
      { text: "Finland", correct: true },
      { text: "Italy", correct: false },
      { text: "Colombo", correct: false },
    ],
  },
  {
    question: "What color is an airplane’s famous black box?",
    answer: [
      { text: "blue", correct: false },
      { text: "orange", correct: true },
      { text: "pink", correct: false },
    ],
  },
  {
    question: "Who is considered the founder of modern computer science?",
    answer: [
      { text: "Alan turing", correct: true },
      { text: "Steve Jobs", correct: false },
      { text: "Bill Gates", correct: false },
    ],
  },
  {
    question: "in Ancient Rome, how many days of the week were there?",
    answer: [
      { text: "Two", correct: false },
      { text: "Four", correct: false },
      { text: "Eight", correct: true },
    ],
  },
];
let total = 0;
let error = 0;
const score = document.getElementById("score");
const mistake = document.getElementById("mistake")
const questionElement = document.getElementById("question__container");

for (let index = 0; index < questions.length; index++) {
  let header = document.createElement("h1");
  header.textContent = questions[index].question;
  const Resetbutton = document.createElement('button')
  Resetbutton.innerText = "Reset",
  questionElement.appendChild(header);

  for (let j = 0; j < questions[index].answer.length; j++) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = questions[index].answer[j].text;
    questionElement.appendChild(button);

    button.addEventListener("click", () =>
      checkAnswer(button,questions[index].answer[j])
    );
  }

}

function checkAnswer(button,answer) {
  if (answer.correct === true) {
    total = total + 1;
    score.textContent = `your total score:  ${total}`;
  alert('correct')
  button.classList.add("correct")
  } else {
    alert("incorrect");
    error = error +1;
mistake.textContent =  `Mistake: ${error}`
    button.classList.add('incorrect')
  }

}
