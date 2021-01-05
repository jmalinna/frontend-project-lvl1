/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainCalc = () => {
  let result;

  const operations = ['+', '-', '*'];
  const num1 = Math.floor(100 * Math.random());
  const num2 = Math.floor(100 * Math.random());
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  // eslint-disable-next-line template-curly-spacing
  console.log(`${'Question: '}${num1} ${randomOperation} ${num2}`);
  let userAnswer = readlineSync.question('Your answer: ');
  userAnswer = Number(userAnswer);

  if (randomOperation === '+') {
    result = num1 + num2;
  } else if (randomOperation === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  return { result, userAnswer };
};
export default playBrainCalc;
