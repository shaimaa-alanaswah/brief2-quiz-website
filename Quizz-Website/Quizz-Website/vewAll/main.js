
    const questions = [
            {
                question: "What does CSS stand for?",
                choices: ["a) Cascading Style Sheet", "b) Computer Style Sheet", "c) Colorful Style Sheet"],
                correctAnswer: "a"
            },
            {
                question: "Which CSS property is used to control the text size?",
                choices: ["a) text-size", "b) font-size", "c) text-style"],
                correctAnswer: "b"
            },
            {
                question: "What is the correct CSS syntax for making all the  &lt;p&gt; elements bold?",
                choices: ["a) p {font-weight: bold;}", "b) p style='text-weight: bold;'>", "c) p {style: bold;}"],
                correctAnswer: "a"
            },
            {
                question: "Which CSS property is used to change the background color of an element?",
                choices: ["a) background-color", "b) color", "c) bg-color"],
                correctAnswer: "a"
            },
            {
                question: "What is the CSS box model used for?",
                choices: ["a) Defining the layout of a webpage", "b) Styling text", "c) Adding images"],
                correctAnswer: "a"
            }
        ];

    const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));

    let score = 0;
    JSON.parse(localStorage.getItem(""));
    const container = document.getElementById("container");

    questions.forEach(function (question, index) {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul class="choices">
                ${question.choices
                    .map(
                        (choice, choiceIndex) => `
                            <li class="choice">
                                <label class="${userAnswers[index] === String.fromCharCode(97 + choiceIndex) ? 'selected' : ''} ${question.correctAnswer === String.fromCharCode(97 + choiceIndex) ? 'correct' : 'false'}  ">
                                    <input type="radio" name="question${index}" value="${String.fromCharCode(97 + choiceIndex)}" ${userAnswers[index] === String.fromCharCode(97 + choiceIndex) ? 'checked' : ''} disabled>
                                    ${choice}
                                </label>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        `;
        container.style.border ="1px 0px";
        container.appendChild(questionElement);
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    const scoreElement = document.createElement("div");
    const LastElement = document.createElement("div");
    scoreElement.classList.add("score");
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
    scoreElement.classList.add("myScore")
    LastElement.appendChild(scoreElement);

    const returnHome = document.createElement("button");
    returnHome.classList.add("Kabseh");
    returnHome.textContent=`Return To Home`;
    returnHome.type = "button"
    LastElement.appendChild(returnHome);
    LastElement.classList.add("last-element");
    container.appendChild(LastElement);
    returnHome.onclick = function(){
        window.location.href="../homepage.html"
    }

    const correctLabels = document.querySelectorAll('.correct');
    const result= document.getElementById("result");
    correctLabels.forEach(label => {
        label.classList.add('selected');
    if(score>3){
        container.style.backgroundColor="#fff";
        result.classList.add("result-pass");
 
        result.textContent=`Good Jop You Pass ! your Result is ${score}/${questions.length}`
    }else{
        container.style.backgroundColor="#fff"
        result.classList.add("result-fail");
        result.append(``)
        result.innerHTML=`You Failed ! your Result is ${score}/${questions.length}`
        
    }
    });
