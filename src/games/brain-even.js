/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const doesRandomNumberIsEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playBrainEven = (name) => {
  let i = 0;
  let result;
  let randomNum;
  let userAnswer;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (i < 3) {
    randomNum = Math.floor(100 * Math.random());
    console.log(`${'Question: '}${randomNum}`);
    userAnswer = readlineSync.question('Your answer: ');

    result = doesRandomNumberIsEven(randomNum);
    if (result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${name}!`);
    }
  }
};
export default playBrainEven;