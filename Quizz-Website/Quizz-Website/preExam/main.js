
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const startButton = document.getElementById("startButton");

    if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        window.location.href = "../login/login.html";
    } else {
        // If authenticated, show the page content
        container.style.display = "block";
        startButton.addEventListener("click", startQuiz);
    }

    function isAuthenticated() {
        // Implement your authentication logic here
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        return !!isLoggedIn;
    }

    function startQuiz() {
        // Your quiz start logic goes here
        window.location.href = "../quizz/quizz.html";
    }

});
const quizName = localStorage.getItem("quizName");
console.log(quizName)
// Displaying quiz name on the page
const quizNameElement = document.getElementById("quizName");
if (quizNameElement) {
    quizNameElement.textContent = `Quiz Name: ${quizName}`;
}
