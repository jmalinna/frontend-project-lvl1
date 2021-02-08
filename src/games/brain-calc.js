import play from '../index.js';
import createRandomNum from '../random-num.js';

const calculateExpression = (num1, num2, operation) => {
  let answer;
  switch (operation) {
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
      throw new Error(`Unknown operation: '${operation}'!`);
  }

  return answer;
};

const brainCalc = () => {
  const operations = ['+', '-', '*'];
  const num1 = createRandomNum();
  const num2 = createRandomNum();
  const randomIndex = createRandomNum(0, operations.length);
  const randomOperation = operations[randomIndex];

  const question = `${num1} ${randomOperation} ${num2}`;
  const answer = (calculateExpression(num1, num2, randomOperation)).toString();

  return { answer, question };
};

const gameDescription = 'What is the result of the expression?';
const playBrainCalc = () => {
  play(brainCalc, gameDescription);
};
export default playBrainCalc;
