import play from '../index.js';
import randomNum from '../random-num.js';

const brainCalc = () => {
  let result;

  const operations = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  // eslint-disable-next-line template-curly-spacing
  const question = `${'Question: '}${num1} ${randomOperation} ${num2}`;

  switch (randomOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
  }
  return { result, question };
};
const playBrainCalc = () => {
  play(brainCalc, 'What is the result of the expression?');
};
export default playBrainCalc;
