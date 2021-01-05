/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainGcd = () => {
  let result;
  let userAnswer;

  let num1 = Math.floor(100 * Math.random());
  let num2 = Math.floor(100 * Math.random());

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
  return { result, userAnswer };
};
export default playBrainGcd;
