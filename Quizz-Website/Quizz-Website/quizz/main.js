
// if (!isAuthenticated()) {
//     window.location.href = "../login/login.html";
// } 
// function isAuthenticated() {
//     // Implement your authentication logic here
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     return !!isLoggedIn;
// }
const html = [
{
question: "What does HTML stand for?",
choices: [
"a) Hyper Text Markup Language",
"b) Hyperlink and Text Markup Language",
"c) High Text Machine Language",
],
correctAnswer: "a",
},
{
question: "What is the correct HTML element for the largest heading?",
choices: ["a) &lt;head&gt;", "b) &lt;h1&gt;", "c) &lt;heading&gt;"],
correctAnswer: "b",
},
{
question: "Which HTML tag is used to define an unordered list?",
choices: ["a) &lt;ol&gt;", "b) &lt;ul&gt;", "c) &lt;li&gt;"],
correctAnswer: "b",
},

{
question: "Which HTML tag is used to define a hyperlink?",
choices: ["a) &lt;url&gt;", "b) &lt;link&gt;", "c) &lt;a&gt;"],
correctAnswer: "c",
},
{
question:
"Which HTML element is used to display a scalar measurement within a range?",
choices: [
"a) &lt;range&gt;",
"b) &lt;input type='slider'&gt;",
"c) &lt;input type='range'&gt;",
],
correctAnswer: "c",
},
];
const css = [
{
question: "What does CSS stand for?",
choices: [
"a) Cascading Style Sheet",
"b) Computer Style Sheet",
"c) Colorful Style Sheet",
],
correctAnswer: "a",
},
{
question: "Which CSS property is used to control the text size?",
choices: ["a) text-size", "b) font-size", "c) text-style"],
correctAnswer: "b",
},
{
question:
"What is the correct CSS syntax for making all the <p> elements bold?",
choices: [
"a) p {font-weight: bold;}",
"b) p style='text-weight: bold;'>",
"c) p {style: bold;}",
],
correctAnswer: "a",
},
{
question:
"Which CSS property is used to change the background color of an element?",
choices: ["a) background-color", "b) color", "c) bg-color"],
correctAnswer: "a",
},
{
question: "What is the CSS box model used for?",
choices: [
"a) Defining the layout of a webpage",
"b) Styling text",
"c) Adding images",
],
correctAnswer: "a",
},
];
const JavaScript = [
{
question: "What is JavaScript primarily used for?",
choices: [
"a) Styling web pages",
"b) Enhancing the structure of HTML",
"c) Adding interactivity to websites",
],
correctAnswer: "c",
},
{
question: "How do you declare a variable in JavaScript?",
choices: ["a) var myVar;", "b) variable myVar;", "c) v myVar;"],
correctAnswer: "a",
},
{
question:
"Which statement is used to execute a block of code repeatedly?",
choices: ["a) if statement", "b) for loop", "c) switch statement"],
correctAnswer: "b",
},
{
question: "What is the result of '2' + 2 in JavaScript?",
choices: ["a) 4", "b) '22'", "c) '4'"],
correctAnswer: "c",
},
{
question:
"Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
choices: ["a) push()", "b) pop()", "c) join()"],
correctAnswer: "a",
},
];

if (localStorage.getItem("quizName") == "HTML") {
console.log(html);
questions = html;
}

if (localStorage.getItem("quizName") == "CSS") {
console.log(css);
questions = css;
}
if (localStorage.getItem("quizName") == "Java Script") {
console.log(JavaScript);
questions = JavaScript;
}










const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const timerElement = document.getElementById("timer");

let currentQuestion = 0;
let userAnswers = new Array(questions.length);
let timerSeconds = 15;
let timerInterval;

function showQuestion(index) {
timerSeconds = 15; // Reset timer for each question
updateTimer();
clearInterval(timerInterval);
timerInterval = setInterval(updateTimer, 1000);

const question = questions[index];
const questionHTML = `
    <h3>${question.question}</h3>
    <div>
        ${question.choices.map(choice => `
            <label>
                <input type="radio" name="answer" value="${choice.split(")")[0]}"> ${choice}
            </label>
        `).join("")}
    </div>
`;
questionContainer.innerHTML = questionHTML;

if (index === questions.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline";
} else {
    nextButton.style.display = "inline";
    submitButton.style.display = "none";
}
}

function updateTimer() {
timerElement.textContent = `${timerSeconds}s`;
if (timerSeconds === 0) {
    clearInterval(timerInterval);
    handleNext();
}
timerSeconds--;
}

function saveUserAnswers() {
localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

}

function loadUserAnswers() {
const savedAnswers = localStorage.getItem("userAnswers");
if (savedAnswers) {
    userAnswers = JSON.parse(savedAnswers);
}
}

function handleNext() {
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
userAnswers[currentQuestion] = selectedAnswer ? selectedAnswer.value : null;
saveUserAnswers();
clearInterval(timerInterval);
currentQuestion++;

if (currentQuestion < questions.length) {
showQuestion(currentQuestion);
nextButton.disabled = true; // Disable the button after moving to the next question
} else {
nextButton.style.display = "none";
submitButton.style.display = "inline";

// Check if it's the last question and the timer has reached 0
if (currentQuestion === questions.length - 1 && timerSeconds === 0) {
    // Redirect to the next page
    window.location.href = "next_page.html"; // Replace "next_page.html" with the URL of your next page
}
}
}
function updateTimer() {
timerElement.textContent = `${timerSeconds}s`;
if (timerSeconds === 0) {
  if (currentQuestion === questions.length - 1) {
      // Automatically click the Submit button when the time runs out on the last question
      submitButton.click();
  } else {
      clearInterval(timerInterval);
      handleNext();
  }
}
timerSeconds--;
}

showQuestion(currentQuestion);
loadUserAnswers();

nextButton.addEventListener("click", handleNext);

submitButton.addEventListener("click", () => {
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
userAnswers[currentQuestion] = selectedAnswer ? selectedAnswer.value : null;
saveUserAnswers();

// You can process the userAnswers array here (e.g., display them or send to a server)
window.location.href="../vewAll/vewAll.html";
});

// Enable the Next button when an answer is selected
questionContainer.addEventListener("change", () => {
nextButton.disabled = false;
});  