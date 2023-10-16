
const isLoggedIn = localStorage.getItem("isLoggedIn");
const name = localStorage.getItem("name");
const loginButtons = document.getElementById("links");
const logoutButton = document.getElementById("logout-button");
const welcomeMessage = document.createElement("h1");

if (isLoggedIn) {
  welcomeMessage.textContent = `Welcome, ${name}!`;
  // Append the welcome message to the page
  document.getElementById("welcome-message").appendChild(welcomeMessage);
  loginButtons.style.display = "none";
  logoutButton.style.display = "flex";
}
else {
  welcomeMessage.textContent = `Welcome To DevGenius!`;
  // Append the welcome message to the page
  document.getElementById("welcome-message").appendChild(welcomeMessage);
  loginButtons.style.display = "flex";
  logoutButton.style.display = "none";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("name");
  window.location.href = "homepage.html";
}
function startQuiz(quizName) {
  localStorage.setItem('quizName', quizName);

  window.location.href = "./preExam.html?quiz=" + quizName;
}

