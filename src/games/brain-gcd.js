/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainGcd = (name) => {
  let i = 0;
  let result;
  let userAnswer;
  let num1;
  let num2;

  console.log('Find the greatest common divisor of given numbers.');

  while (i < 3) {
    num1 = Math.floor(100 * Math.random());
    num2 = Math.floor(100 * Math.random());

    console.log(`${'Question: '}${num1} ${num2}`);
    userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);

    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
      result = num1 + num2;
    }

    if (result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainGcd;
