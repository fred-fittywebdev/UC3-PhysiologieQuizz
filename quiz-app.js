// quiz-app.js

let currentQuiz = null;
let currentQuestionIndex = 0;
let isRandomQuiz = false;
let timer = null;
let timeLeft = 600; // 10 minutes en secondes
let userAnswers = [];

const quizSelectionButtons = document.querySelectorAll(".quiz-button");
const quizContent = document.getElementById("quiz-content");
const submitButton = document.getElementById("submit-quiz");
const timerDisplay = document.getElementById("time");
const resultsContainer = document.getElementById("results");

// Initialisation de l'application
function initApp() {
	quizSelectionButtons.forEach((button) => {
		button.addEventListener("click", () => selectQuiz(button.dataset.quiz));
	});
	submitButton.addEventListener("click", submitQuiz);
}

// Sélection d'un quiz
function selectQuiz(quizNumber) {
	if (quizNumber === "random") {
		currentQuiz = generateRandomQuiz();
	} else {
		currentQuiz = quizData[`quiz${quizNumber}`];
	}
	currentQuestionIndex = 0;
	userAnswers = new Array(currentQuiz.questions.length).fill(null);
	resetQuiz();
	displayAllQuestions();
	startTimer();
	submitButton.style.display = "block";
}

function generateRandomQuiz() {
	const shuffled = [...randomQuizData].sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 10);
	return {
		title: "Quiz Aléatoire",
		questions: selected,
	};
}

// Réinitialisation du quiz
function resetQuiz() {
	clearInterval(timer);
	timeLeft = 600;
	quizContent.style.display = "block";
	resultsContainer.style.display = "none";
}

// Affichage de toutes les questions
function displayAllQuestions() {
	let html = `<h2>${currentQuiz.title}</h2>`;
	currentQuiz.questions.forEach((question, index) => {
		html += `<div class="question">
      <h3>Question ${index + 1}</h3>
      <p>${question.question}</p>`;
		question.options.forEach((option, optionIndex) => {
			html += `
        <div class="option">
          <input type="radio" id="q${index}o${optionIndex}" name="q${index}" value="${optionIndex}" ${
				userAnswers[index] === optionIndex ? "checked" : ""
			}>
          <label for="q${index}o${optionIndex}">${option}</label>
        </div>
      `;
		});
		html += `</div>`;
	});
	quizContent.innerHTML = html;

	// Ajouter des écouteurs d'événements pour les réponses de l'utilisateur
	document.querySelectorAll('input[type="radio"]').forEach((radio) => {
		radio.addEventListener("change", (e) => {
			const [_, questionIndex, optionIndex] =
				e.target.id.match(/q(\d+)o(\d+)/);
			userAnswers[questionIndex] = parseInt(optionIndex);
		});
	});
}

// Démarrage du chronomètre
function startTimer() {
	updateTimerDisplay();
	timer = setInterval(() => {
		timeLeft--;
		updateTimerDisplay();
		if (timeLeft <= 0) {
			clearInterval(timer);
			submitQuiz();
		}
	}, 1000);
}

// Mise à jour de l'affichage du chronomètre
function updateTimerDisplay() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")}`;
}

function updateUserStats(score, totalQuestions) {
	// Récupérer les stats existantes ou créer un nouvel objet si aucune stat n'existe
	let userStats = JSON.parse(localStorage.getItem("userStats")) || {
		totalQuizzes: 0,
		totalQuestions: 0,
		correctAnswers: 0,
	};

	// Mettre à jour les stats
	userStats.totalQuizzes++;
	userStats.totalQuestions += totalQuestions;
	userStats.correctAnswers += score;

	// Sauvegarder les stats mises à jour
	localStorage.setItem("userStats", JSON.stringify(userStats));
}

// Soumission du quiz
function submitQuiz() {
	clearInterval(timer);
	let score = 0;
	let feedback = "";

	currentQuiz.questions.forEach((question, index) => {
		const userAnswer = userAnswers[index];
		if (userAnswer === question.correctAnswer) {
			score++;
			feedback += `<p class="correct">Question ${index + 1}: Correct</p>`;
		} else {
			feedback += `
        <p class="incorrect">Question ${index + 1}: Incorrect</p>
        <p>Bonne réponse: ${question.options[question.correctAnswer]}</p>
        <p><em>Référence: ${question.reference}</em></p>
      `;
		}
	});

	resultsContainer.querySelector(
		"#score"
	).textContent = `Score: ${score}/${currentQuiz.questions.length}`;
	resultsContainer.querySelector("#feedback").innerHTML = feedback;
	resultsContainer.style.display = "block";
	quizContent.style.display = "none";
	submitButton.style.display = "none";
}

document.getElementById("restart-quiz").addEventListener("click", function () {
	location.reload();
});

// Initialisation de l'application au chargement de la page
window.addEventListener("load", initApp);
