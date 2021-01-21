import play from '../index.js';
import createRandomNum from '../random-num.js';

const brainCalc = () => {
  let answer;

  const operations = ['+', '-', '*'];
  const operationsCount = operations.length;
  const num1 = createRandomNum();
  const num2 = createRandomNum();
  const randomOperation = operations[createRandomNum(operationsCount)];

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
      // no default
  }

  answer = answer.toString();
  return { answer, question };
};
const playBrainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  play(brainCalc, gameDescription);
};
export default playBrainCalc;
