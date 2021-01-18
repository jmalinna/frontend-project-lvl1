import play from '../index.js';
import randomNum from '../random-num.js';

const brainCalc = () => {
  let result;

  const operations = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randomOperation = operations[Math.round(Math.random() * operations.length)];

  const question = `${'Question: '}${num1} ${randomOperation} ${num2}`;

  switch (randomOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      // no default
  }
  return { result, question };
};
const playBrainCalc = () => {
  const description = 'What is the result of the expression?';
  play(brainCalc, description);
};
export default playBrainCalc;
