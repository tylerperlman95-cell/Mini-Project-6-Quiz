const quizForm = document.getElementById("quiz-form");
const scoreDisplay = document.getElementById("score");
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    // Correct answers
    const answers = {
        q1: "b", // Wartortle
        q2: "c", // Charmeleon
        q3: "a", // Ivysaur
        q4: "b", // Luxray
        q5: "b"  // Vaporeon
    };
    // Check each answer
    for (let question in answers) {
        const selectedAnswer = document.querySelector(
            'input[name="' + question + '"]:checked'
        );
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }
    // Display the final score
    scoreDisplay.textContent =
        "Your Total Score: " + score + " / 5";
    // Show a message based on the score
    if (score === 5) {
        scoreDisplay.textContent += " — Perfect score! Great job, Trainer!";
    } else if (score >= 3) {
        scoreDisplay.textContent += " — Good job, Trainer!";
    } else {
        scoreDisplay.textContent += " — Keep practicing, Trainer!";
    }
});

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", function() {
    quizForm.reset();

    scoreDisplay.textContent =
        "Submit your answers to see your score!";
});


