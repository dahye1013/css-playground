import {
  $quiz,
  $answers,
  $question,
  a_text,
  b_text,
  c_text,
  d_text,
  $submitBtn,
} from './domSelector.js';
import quizDatas from './dummyQuiz.js';
import { quizResultTemplate } from './template.js';

let currentQuiz = 0;
let score = 0;

const App = () => {
  const loadQuiz = () => {
    const { question, a, b, c, d } = quizDatas[currentQuiz];
    $question.innerText = question;
    a_text.innerText = a;
    b_text.innerText = b;
    c_text.innerText = c;
    d_text.innerText = d;
  };

  const deselectAnswers = () => {
    $answers.forEach($answer => ($answer.checked = false));
  };

  const getSelected = () => {
    let answer;
    $answers.forEach($answer => {
      if ($answer.checked) {
        answer = $answer.id;
      }
    });
    return answer;
  };

  $submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    const isQuizDone = currentQuiz === quizDatas.length;
    const isQuizCorrect = answer === quizDatas[currentQuiz].correct;

    if (!answer) return;
    if (isQuizCorrect) {
      score += 1;
    }

    currentQuiz += 1;

    const keepQuiz = () => {
      deselectAnswers();
      loadQuiz();
    };

    const showQuizResult = () => ($quiz.innerHTML = quizResultTemplate(score, quizDatas.length));

    isQuizDone ? showQuizResult() : keepQuiz();
  });

  loadQuiz();
};

App();
