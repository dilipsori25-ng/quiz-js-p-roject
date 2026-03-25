let questions = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "OS"],
    answer: "Markup Language"
  },
  {
    question: "What is CSS used for?",
    options: ["Styling", "Logic", "Database", "Server"],
    answer: "Styling"
  },
  {
    question: "Which keyword is used in JS?",
    options: ["var", "int", "string", "float"],
    answer: "var"
  },
  {
    question: "Which company made JS?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is for comments?",
    options: ["//", "##", "**", "--"],
    answer: "//"
  },
  {
    question: "What is DOM?",
    options: ["Data Object Model", "Document Object Model", "Digital Output Mode", "None"],
    answer: "Document Object Model"
  },
  {
    question: "Which is not JS data type?",
    options: ["String", "Number", "Boolean", "Float"],
    answer: "Float"
  },
  {
    question: "Which method prints in console?",
    options: ["print()", "console.log()", "write()", "log()"],
    answer: "console.log()"
  },
  {
    question: "JS runs in?",
    options: ["Browser", "Server", "Both", "None"],
    answer: "Both"
  },
  {
    question: "Which is correct variable?",
    options: ["1name", "name1", "@name", "#name"],
    answer: "name1"
  }
];
 

let index = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);

let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let scoreEl = document.getElementById("score");

let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

function showQuestion() {
  let q = questions[index];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(function(opt) {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.style.display = "block";
    btn.style.margin = "10px auto";

    // highlight selected answer
    if (answers[index] === opt) {
      btn.style.backgroundColor = "green";
    }

    btn.onclick = function() {
      answers[index] = opt;
      showQuestion();
    };

    optionsEl.appendChild(btn);
  });
}

// NEXT button
nextBtn.onclick = function() {
  if (index < questions.length - 1) {
    index++;
    showQuestion();
  } else {
    showResult();
  }
};

// PREVIOUS button
prevBtn.onclick = function() {
  if (index > 0) {
    index--;
    showQuestion();
  }
};

function showResult() {
  score = 0;

  questions.forEach(function(q, i) {
    if (answers[i] === q.answer) {
      score++;
    }
  });

  questionEl.innerText = "Quiz Finished 🎉";
  optionsEl.innerHTML = "";
  scoreEl.innerText = "Your Score: " + score + "/10";
}

showQuestion();