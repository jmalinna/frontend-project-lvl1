import play from '../index.js';
import createRandomNum from '../random-num.js';

const brainCalc = () => {
  let answer;

  const operations = ['+', '-', '*'];
  const num1 = createRandomNum();
  const num2 = createRandomNum();
  const randomIndex = createRandomNum(0, operations.length);
  const randomOperation = operations[randomIndex];

  const question = `${num1} ${randomOperation} ${num2}`;

  switch (randomOperation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: '${randomOperation}'!`);
  }

  answer = answer.toString();
  return { answer, question };
};

const playBrainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  play(brainCalc, gameDescription);
};
export default playBrainCalc;
