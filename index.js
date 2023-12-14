const questions = [
    {
      question: "what is my name?",
      answer: [
        { text: "rikesh", correct: true },
        { text: "nishan", correct: false },
        { text: "bimal", correct: false },
      ],
    },
    {
      question: "what is the color of the sky??",
      answer: [
        { text: "blue", correct: true },
        { text: "orange", correct: false },
        { text: "pink", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question__container");
  
  for (let index = 0; index < questions.length; index++) {
    let header = document.createElement("h1");
    header.textContent = questions[index].question;
    questionElement.appendChild(header);
  
    for (let j = 0; j < questions[index].answer.length; j++) {
      let button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = questions[index].answer[j].text;
      questionElement.appendChild(button);
  
      // Pass a reference to the checkAnswer function, not the result of its invocation
      button.addEventListener("click", () => checkAnswer(questions[index].answer[j]));
    }
  }
  
  function checkAnswer(answer) {
    if (answer.correct === true) {
      alert("correct");
    } else {
      alert("incorrect");
    }
  }
  