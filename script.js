// get main sections from the page
const videoSection = document.getElementById("videoSection");
const quizSection = document.getElementById("quizSection");
const questionResultSection = document.getElementById("questionResultSection");
const finalResultSection = document.getElementById("finalResultSection");

// get buttons, text areas, and boxes from the page
const goToQuizBtn = document.getElementById("goToQuizBtn");
const questionCounter = document.getElementById("questionCounter");
const starsDisplay = document.getElementById("starsDisplay");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const hintBtn = document.getElementById("hintBtn");
const hintText = document.getElementById("hintText");
const messageText = document.getElementById("messageText");
const questionStarsResult = document.getElementById("questionStarsResult");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const finalStarsText = document.getElementById("finalStarsText");
const finalSummaryText = document.getElementById("finalSummaryText");

// variables to track quiz progress
let currentQuestionIndex = 0;
let currentStars = 3;
let wrongAttempts = 0;
let hintUsed = false;
let totalStars = 0;
let earnedStarsList = [];

// when user clicks this button, hide video and show quiz
goToQuizBtn.addEventListener("click", () => {
    videoSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadQuestion();
});

// load current question and reset its status
function loadQuestion() {
    const currentQuestion = stageQuestions[currentQuestionIndex];

    // reset values for new question
    currentStars = 3;
    wrongAttempts = 0;
    hintUsed = false;
    hintText.classList.add("hidden");
    hintText.textContent = "";
    messageText.textContent = "";
    messageText.className = "message-text";

    // show question number and question text
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${stageQuestions.length}`;
    questionText.textContent = currentQuestion.question;
    updateStarsDisplay();

    // clear old options before adding new ones
    optionsBox.innerHTML = "";

    // create a button for each answer option
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.textContent = option;

        // check answer when option is clicked
        button.addEventListener("click", () => checkAnswer(index));
        optionsBox.appendChild(button);
    });

    // enable hint button again for new question
    hintBtn.disabled = false;
}

// update stars display on the screen
function updateStarsDisplay() {
    let starsText = "";

    // filled stars
    for (let i = 0; i < currentStars; i++) {
        starsText += "⭐ ";
    }

    // empty stars
    for (let i = currentStars; i < 3; i++) {
        starsText += "☆ ";
    }

    starsDisplay.textContent = starsText.trim();
}

// show hint when user clicks hint button
hintBtn.addEventListener("click", () => {
    const currentQuestion = stageQuestions[currentQuestionIndex];

    // only allow hint one time
    if (!hintUsed) {
        hintUsed = true;

        // remove one star if hint is used
        currentStars = Math.max(1, currentStars - 1);
        updateStarsDisplay();

        // show hint text
        hintText.textContent = "Hint: " + currentQuestion.hint;
        hintText.classList.remove("hidden");

        // disable hint button after use
        hintBtn.disabled = true;
    }
});

// check if selected answer is correct or wrong
function checkAnswer(selectedIndex) {
    const currentQuestion = stageQuestions[currentQuestionIndex];

    // if answer is correct
    if (selectedIndex === currentQuestion.correct) {
        messageText.textContent = "Great job! ✅";
        messageText.className = "message-text correct-msg";

        // wait a little, then show question result
        setTimeout(() => {
            showQuestionResult();
        }, 700);

    } else {
        // if answer is wrong
        wrongAttempts++;
        messageText.textContent = "Oops! Try again ❌";
        messageText.className = "message-text wrong-msg";

        // after 2 wrong attempts, remove one star
        if (wrongAttempts === 2) {
            currentStars = Math.max(1, currentStars - 1);
            updateStarsDisplay();
        }
    }
}

// show result after finishing one question
function showQuestionResult() {
    quizSection.classList.add("hidden");
    questionResultSection.classList.remove("hidden");

    // save earned stars for this question
    earnedStarsList.push(currentStars);
    totalStars += currentStars;

    // show stars earned in this question
    questionStarsResult.textContent = `You got ${currentStars} star(s) in this question ⭐`;
}

// when user clicks next, move to next question or final result
nextQuestionBtn.addEventListener("click", () => {
    questionResultSection.classList.add("hidden");
    currentQuestionIndex++;

    // if there are more questions, load next one
    if (currentQuestionIndex < stageQuestions.length) {
        quizSection.classList.remove("hidden");
        loadQuestion();
    } else {
        // if quiz is finished, show final result
        showFinalResult();
    }
});

// show final result for the whole stage
function showFinalResult() {
    finalResultSection.classList.remove("hidden");

    // show total stars collected
    finalStarsText.textContent = `Total Stars in this stage: ${totalStars} ⭐`;

    // show stars earned in each question
    finalSummaryText.textContent = `Stars by question: ${earnedStarsList.join(" , ")}`;
}