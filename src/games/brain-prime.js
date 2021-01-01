/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainPrime = (name) => {
  let i = 0;
  let result;
  let randomNum;
  let userAnswer;

  const doesNumberIsPrime = (num) => {
    for (let i2 = 2; i2 <= Math.floor(num / 2); i2 += 1) {
      if (num % i2 === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (i < 3) {
    randomNum = Math.floor(100 * Math.random());
    console.log(`${'Question: '}${randomNum}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (randomNum === 2 || randomNum === 3) {
      result = 'yes';
    } else if (randomNum <= 1) {
      result = 'no';
    }
    result = doesNumberIsPrime(randomNum);
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
export default playBrainPrime;
