/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainCalc = (name) => {
  let i = 0;
  let result;
  let userAnswer;
  let randomOperation;
  let num1;
  let num2;

  console.log('What is the result of the expression?');

  while (i < 3) {
    const operations = ['+', '-', '*'];
    num1 = Math.floor(100 * Math.random());
    num2 = Math.floor(100 * Math.random());
    randomOperation = operations[Math.floor(Math.random() * operations.length)];
    // eslint-disable-next-line template-curly-spacing
    console.log(`${'Question: '}${num1} ${randomOperation} ${num2}`);
    userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);
    if (randomOperation === '+') {
      result = num1 + num2;
    } else if (randomOperation === '-') {
      result = num1 - num2;
    } else {
      result = num1 * num2;
    }
    if (result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${name}!`);
    }
  }
};
export default playBrainCalc;
