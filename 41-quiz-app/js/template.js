export const quizResultTemplate = (score, totalQuiz) =>
  /* html */
  `<h2>You answered correctly at ${score}/${totalQuiz} </h2>
<button onclick="location.reload()">Reload</button>
`;
