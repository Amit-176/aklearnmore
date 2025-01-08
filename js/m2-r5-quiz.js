const practiceSets = {
  1: [
    {
      question: "1. What is the largest heading for an HTML element?",
      options: ["H6", "head", "H1", "heading"],
      correct: 2,
    },
    {
      question:
        "2. Which of the following is the correct HTML tag for line break?",
      options: ["Break", "br", "hr", "tr"],
      correct: 1,
    },
    {
      question: "3. To run HTML language programs …… software is used.",
      options: ["Google Chrome", "Notepad", "Both A and B", "Wordpad"],
      correct: 2,
    },
    {
      question: "4. What is http in a website name?",
      options: ["Top level domain", "website name", "the protocol", "the host"],
      correct: 2,
    },
    {
      question: "5. What is the full name of CSS?",
      options: [
        "Cascading Style Sheets",
        "Colourful style sheet",
        "compare style sheets",
        "none of these",
      ],
      correct: 0,
    },
    {
      question:
        "6. Which of the following tag is used to linked information should be placed inside?",
      options: ["head", "div", "html", "body"],
      correct: 0,
    },
    {
      question: "7. Which property assigns an image to a list item?",
      options: ["list-style-image", "list-style-type", "list-style", "list"],
      correct: 0,
    },
    {
      question: "8. Which of the following is not a pair tag?",
      options: ["p", "u", "i", "img"],
      correct: 3,
    },
    {
      question:
        "9. To create a combo box (drop down box), which tag will you use?",
      options: ["<select>", "list", "<input type='dropdown'>", "all of above"],
      correct: 0,
    },
    {
      question: "10. Which tag creates a check box for a form in HTML?",
      options: [
        "<checkbox>",
        "<input type='checkbox'>",
        "<input=checkbox>",
        "<input checkbox>",
      ],
      correct: 1,
    },
    {
      question:
        "11. The special formatting codes in an HTML document used to present content are?",
      options: ["tags", "attributes", "values", "none of the above"],
      correct: 0,
    },
    {
      question: "12. In an HTML document, the tags:",
      options: [
        "Should be written in upper case",
        "Should be written in lower case",
        "Should be written in proper case",
        "Both in upper case or lowercase",
      ],
      correct: 3,
    },
    {
      question: "13. Which of the following is not a style tag?",
      options: ["b", "tt", "i", "all of the above"],
      correct: 3,
    },
    {
      question: "14. How can you make a bulleted list?",
      options: ["list", "nl", "ul", "ol"],
      correct: 2,
    },
    {
      question: "15. What is the correct HTML for adding a background color?",
      options: [
        "<body color='yellow'>",
        "<background>yellow</background>",
        "<body background='yellow'>",
        "<body bgcolor='yellow'>",
      ],
      correct: 3,
    },
    {
      question: "16. HTML tags are surrounded by ___ brackets.",
      options: ["Angle", "Round", "Square", "Curly"],
      correct: 0,
    },
    {
      question:
        "17. What will be the output of the following JavaScript code?\n\n<script>\nvar js = 10;\njs *= 5;\ndocument.getElementById('demo').innerHTML = js;\n</script>",
      options: ["10", "50", "5", "Error"],
      correct: 1,
    },
    {
      question: "18. Which of the following is not a JavaScript data type?",
      options: [
        "Null type",
        "Undefined type",
        "Number type",
        "All of the mentioned",
      ],
      correct: 3,
    },
    {
      question: "19. Why is a JavaScript Engine needed?",
      options: [
        "Both Compiling & Interpreting the JavaScript",
        "Parsing the JavaScript",
        "Interpreting the JavaScript",
        "Compiling the JavaScript",
      ],
      correct: 0,
    },
    {
      question: "20. Which of the following is not an error in JavaScript?",
      options: [
        "Missing of Bracket",
        "Division by zero",
        "Syntax error",
        "Missing of semicolons",
      ],
      correct: 1,
    },
  ],
  2: [
    {
      question:
        "1. int a=4;\nint b=1;\nint c=0;\nIf(a==b)\n    document.write(a);\nelse if(a==c)\n    document.write(a);\nelse\n    document.write(c);",
      options: ["4", "1", "error", "0"],
      correct: 3,
    },
    {
      question: "2. JavaScript is the programming language of the ___",
      options: ["Desktop", "mobile", "web", "server"],
      correct: 2,
    },
    {
      question: "3. In which HTML element, we put the JavaScript code?",
      options: [
        "<javascript>...</javascript>",
        "<js>...</js>",
        "<css>...</css>",
        "<script>...</script>",
      ],
      correct: 3,
    },
    {
      question: "4. JavaScript ignores?",
      options: ["newlines", "tabs", "spaces", "all of above"],
      correct: 3,
    },
    {
      question:
        "5. What is the correct syntax for referring to an external script called ‘xyz.js’?",
      options: [
        "<script href='xyz.js'>",
        "<script name='xyz.js'>",
        "<script src='xyz.js'>",
        "<script link='xyz.js'>",
      ],
      correct: 2,
    },
    {
      question: "6. How do you create a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "function = myFunction",
      ],
      correct: 1,
    },
    {
      question:
        "7. Which of the following will create a variable in JavaScript?",
      options: [
        "var varName;",
        "variable varName;",
        "let varName;",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: "8. What does ‘NaN’ represent in JavaScript?",
      options: ["Not a Name", "Not a Number", "Not a Null", "No value"],
      correct: 1,
    },
    {
      question: "9. What is the correct way to write a comment in JavaScript?",
      options: [
        "/* this is a comment */",
        "// this is a comment",
        "# this is a comment",
        "Both 1 and 2",
      ],
      correct: 3,
    },
    {
      question:
        "10. Which of the following methods can be used to add an item to the end of an array in JavaScript?",
      options: ["push()", "pop()", "unshift()", "shift()"],
      correct: 0,
    },
    {
      question:
        "11. Which of the following is a correct way to declare a JavaScript array?",
      options: [
        "var arr = [1, 2, 3]",
        "var arr = {1, 2, 3}",
        "arr = (1, 2, 3)",
        "All of the above",
      ],
      correct: 0,
    },
    {
      question: "12. In JavaScript, how do you convert a string to an integer?",
      options: [
        "parseInt('string')",
        "Integer('string')",
        "convertToInt('string')",
        "parse('string')",
      ],
      correct: 0,
    },
    {
      question:
        "13. How do you write a function in JavaScript that returns the sum of two numbers?",
      options: [
        "function sum(a, b) { return a + b }",
        "function sum(a, b) { a + b }",
        "function sum(a, b) { return a; b }",
        "function sum(a, b) { return a - b }",
      ],
      correct: 0,
    },
    {
      question: "14. Which of the following is a valid JavaScript object?",
      options: [
        "{name: 'John', age: 30}",
        "['name', 'John', 'age', 30]",
        "(name: 'John', age: 30)",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question:
        "15. What will the following code output?\n\nconsole.log(5 + '5');",
      options: ["55", "10", "Error", "NaN"],
      correct: 0,
    },
    {
      question: "16. What does ‘this’ refer to in JavaScript?",
      options: [
        "The current function",
        "The current object",
        "The parent object",
        "The global object",
      ],
      correct: 1,
    },
    {
      question:
        "17. How do you declare a variable in JavaScript that cannot be reassigned?",
      options: ["var", "let", "const", "reassign"],
      correct: 2,
    },
    {
      question: "18. How do you write a regular expression in JavaScript?",
      options: ["/ab+c/", "ab+c", "new RegExp('ab+c')", "All of the above"],
      correct: 3,
    },
    {
      question: "19. What does the JavaScript ‘alert()’ method do?",
      options: [
        "Shows an alert box",
        "Writes to the console",
        "Shows a pop-up dialog box",
        "Displays a message in the status bar",
      ],
      correct: 2,
    },
    {
      question:
        "20. What is the correct way to create an object in JavaScript?",
      options: [
        "var person = {name: 'John', age: 30}",
        "var person = 'name: John, age: 30'",
        "var person = new Object('name', 'John', 'age', 30)",
        "All of the above",
      ],
      correct: 0,
    },
  ],
  3: [
    {
      question: "1. What is web hosting?",
      options: [
        "Buying a domain name",
        "Making your website accessible on the internet",
        "Coding a website",
        "Designing graphics for a website",
      ],
      correct: 1,
    },
    {
      question: "2. What does FTP stand for in web publishing?",
      options: [
        "File Transfer Protocol",
        "Fast Transfer Process",
        "File Testing Protocol",
        "File Text Protocol",
      ],
      correct: 0,
    },
    {
      question: "3. Which input type is used for passwords?",
      options: ["text", "password", "secure", "secret"],
      correct: 1,
    },
    {
      question: "4. Which HTML tag is used to create a form?",
      options: ["<form>", "<input>", "<textarea>", "<fieldset>"],
      correct: 0,
    },
    {
      question: "5. What is the default method for sending form data in HTML?",
      options: ["POST", "GET", "PUT", "SEND"],
      correct: 1,
    },
    {
      question:
        "6. Which HTML tag is used to define an input field for user text?",
      options: ["<input>", "<textarea>", "<form>", "<text>"],
      correct: 0,
    },
    {
      question:
        "7. What is the HTML attribute used to specify the action in a form?",
      options: ["action", "method", "type", "enctype"],
      correct: 0,
    },
    {
      question:
        "8. Which tag is used to display the title of a document in the browser window?",
      options: ["<head>", "<title>", "<h1>", "<meta>"],
      correct: 1,
    },
    {
      question: "9. What is the main function of CSS?",
      options: [
        "Structure content",
        "Provide layout and design",
        "Enhance interactivity",
        "Provide navigation",
      ],
      correct: 1,
    },
    {
      question: "10. What is a container used for grouping elements in HTML?",
      options: ["<div>", "<span>", "<section>", "<article>"],
      correct: 0,
    },
    {
      question: "11. What is the correct HTML tag for the largest heading?",
      options: ["<h1>", "<h2>", "<h3>", "<h4>"],
      correct: 0,
    },
    {
      question: "12. Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      correct: 0,
    },
    {
      question: "13. What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
      correct: 0,
    },
    {
      question: "14. What is the purpose of the <meta> tag in HTML?",
      options: [
        "To provide metadata about an HTML document",
        "To create hyperlinks",
        "To add images",
        "To define paragraphs",
      ],
      correct: 0,
    },
    {
      question:
        "15. Which of the following is the correct way to apply an external style sheet to a web page?",
      options: [
        "<link rel='stylesheet' type='text/css' href='styles.css'>",
        "<style href='styles.css'>",
        "<link href='styles.css'>",
        "<style src='styles.css'>",
      ],
      correct: 0,
    },
    {
      question: "16. How can you open a link in a new tab using HTML?",
      options: [
        "<a href='url' target='_blank'>",
        "<a href='url' target='_new'>",
        "<a href='url' target='_tab'>",
        "<a href='url' target='new'>",
      ],
      correct: 0,
    },
    {
      question: "17. What is the correct HTML tag to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<ulist>"],
      correct: 0,
    },
    {
      question: "18. What is the purpose of the <iframe> tag?",
      options: [
        "To display a frame around content",
        "To create a scrollable area",
        "To embed another webpage inside the current page",
        "To define a section within a page",
      ],
      correct: 2,
    },
    {
      question: "19. How do you include JavaScript in an HTML document?",
      options: [
        "<script src='script.js'>",
        "<javascript>script.js</javascript>",
        "<js>script.js</js>",
        "<script file='script.js'>",
      ],
      correct: 0,
    },
    {
      question: "20. How do you add a comment in HTML?",
      options: [
        "<!-- This is a comment -->",
        "// This is a comment",
        "# This is a comment",
        "/* This is a comment */",
      ],
      correct: 0,
    },
  ],
};
let currentQuestionIndex = 0;
let score = 0;
let quizData = [];
let selectedAnswers = [];
let timer;
let timeRemaining = 60 * 20; //time in seconds 1200

// Load the selected practice set based on URL parameter
function loadPracticeSet() {
  const urlParams = new URLSearchParams(window.location.search);
  const setNumber = urlParams.get("set");

  // Debugging line to see all URL parameters
  //console.log("URL Parameters:", Array.from(urlParams.entries()));

  // Check if setNumber is retrieved correctly
  //console.log(`Set Number: ${setNumber}`); // Should log the set number or null

  if (practiceSets[setNumber]) {
    quizData = practiceSets[setNumber];
    selectedAnswers = new Array(quizData.length); // Initialize selected answers based on quiz data length
    loadQuestion();
    startTimer();
  } else {
    console.error("Invalid practice set number or no set provided.");
  }
}

// Generate navigation buttons for questions
function generateQuestionNav() {
  const navContainer = document.getElementById("question-nav");
  navContainer.innerHTML = "";
  quizData.forEach((_, index) => {
    const navButton = document.createElement("button");
    navButton.textContent = index + 1;
    navButton.classList.add("nav-btn");

    // Add classes based on whether the question is attempted
    if (selectedAnswers[index] === undefined) {
      navButton.classList.add("unattempted");
    } else {
      navButton.classList.add("attempted");
    }

    if (index === currentQuestionIndex) {
      navButton.classList.add("active");
    }

    navButton.onclick = () => loadQuestionByIndex(index);
    navContainer.appendChild(navButton);
  });
}

// Load a specific question by index
function loadQuestionByIndex(index) {
  currentQuestionIndex = index;
  loadQuestion();
}

// Load the current question and update UI
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  document.getElementById("opt1-label").textContent =
    currentQuestion.options[0];
  document.getElementById("opt2-label").textContent =
    currentQuestion.options[1];
  document.getElementById("opt3-label").textContent =
    currentQuestion.options[2];
  document.getElementById("opt4-label").textContent =
    currentQuestion.options[3];

  const inputs = document.querySelectorAll('input[name="option"]');
  inputs.forEach((input) => (input.checked = false));
  if (selectedAnswers[currentQuestionIndex] !== undefined) {
    inputs[selectedAnswers[currentQuestionIndex]].checked = true;
  }

  // Show/hide navigation buttons based on current question index
  document
    .getElementById("prev-btn")
    .classList.toggle("hidden", currentQuestionIndex === 0);
  document
    .getElementById("next-btn")
    .classList.toggle("hidden", currentQuestionIndex === quizData.length - 1);
  document
    .getElementById("submit-btn")
    .classList.toggle("hidden", currentQuestionIndex < quizData.length - 1);

  generateQuestionNav(); // Generate the question navigation
}

// Move to the next question
function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

// Move to the previous question
function previousQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

// Show the result after quiz completion
function showResult() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }

  score = selectedAnswers.reduce((acc, answer, index) => {
    return answer === quizData[index].correct ? acc + 1 : acc;
  }, 0);

  document.getElementById(
    "score"
  ).textContent = `You scored ${score} out of ${quizData.length}.`;

  // Hide quiz container and show result
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("nav-container").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  displayReview(); // Display the review of answers
  clearInterval(timer);
  document.getElementById("timer").textContent = "00:00";
}

// Display a review of the quiz answers
function displayReview() {
  const reviewContainer = document.getElementById("review");
  reviewContainer.innerHTML = "";
  quizData.forEach((question, index) => {
    const isCorrect = selectedAnswers[index] === question.correct;
    const reviewItem = document.createElement("div");

    reviewItem.classList.add(
      "review-item",
      isCorrect ? "correct-review" : "incorrect-review"
    );

    reviewItem.innerHTML = `
      <p>${question.question}</p>
      <p>Your answer: ${
        selectedAnswers[index] !== undefined
          ? question.options[selectedAnswers[index]]
          : "Not attempted"
      }</p>
      <p>Correct answer: ${question.options[question.correct]}</p>
    `;

    reviewContainer.appendChild(reviewItem);
  });
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = new Array(quizData.length);
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("nav-container").classList.remove("hidden");
  loadQuestion();
  clearInterval(timer);
  timeRemaining = 60 * 20;
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      document.getElementById("timer").textContent = formatTime(timeRemaining);
    } else {
      clearInterval(timer);
      alert("Time's up!");
      showResult();
    }
  }, 1000);
}

// Format time in mm:ss format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
}

// Initialize the quiz on page load
document.addEventListener("DOMContentLoaded", loadPracticeSet);
