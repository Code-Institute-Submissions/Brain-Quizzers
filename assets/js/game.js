/* Fetching categories from API */

const categorySelection = $('#category');
const question = document.getElementById('question');
let choices = Array.from(document.getElementsByClassName('choices'));
let questionCounter = 0;
let score = 0;
let availableQuestions = [];
let displayedQuestion = {};
let acceptingAnswers = false;
let i = 0;

let questions = [];

const pointsCorrectAnswer = 5;
const maximumQuestions = 10;

fetch("https://opentdb.com/api_category.php").then(res => res.json()).then(data => {
    const categories = data.trivia_categories;

    categories.forEach(category => {
        let optionField = `<option value="${category.id}">${category.name}</option>`;
        categorySelection.append(optionField);
    });

});

/* Fetching questions from API */ 


fetch(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`).then(res => res.json()).then(fetchedQuestions => {
     questions = fetchedQuestions.results.map(fetchedQuestion => {
        const formattedQuestion = {
            question : fetchedQuestion.question,
        };

    const answerChoices = [ ... fetchedQuestion.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * 3 ) + 1;
    answerChoices.splice(formattedQuestion.answer -1, 0, fetchedQuestion.correct_answer);

    answerChoices.forEach((choice, index) => {
        formattedQuestion["choice", (index + 1)] = choice ;
    });

    return formattedQuestion;
    })
    startGame();
})
.catch((err) => {
    console.error(err);
});

startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = questions[i];
        console.log(availableQuestions);
        fetchNewQuestion();
    };

fetchNewQuestion = () => {
    questionCounter++;
    i++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    displayedQuestion = availableQuestions[questionIndex];

    console.log(availableQuestions);
    question.innerText = availableQuestions.question;

    choices.forEach(choice => {
        for(var j = 1 ; j < 5 ; j++) {
        availableAnswers = availableQuestions[j];
        console.log(availableAnswers);
        
        };
    });
};