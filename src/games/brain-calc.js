import play from '../index.js';
import questionWord from '../question-word.js';
import randomNum from '../random-num.js';

const brainCalc = () => {
  let answer;

  const operations = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${questionWord}${num1} ${randomOperation} ${num2}`;

  switch (randomOperation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      // no default
  }
  return { answer, question };
};
const playBrainCalc = () => {
  const description = 'What is the result of the expression?';
  play(brainCalc, description);
};
export default playBrainCalc;
