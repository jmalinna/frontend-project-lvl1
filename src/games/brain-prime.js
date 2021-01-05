/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainPrime = () => {
  let result;

  const doesNumberIsPrime = (num) => {
    for (let i2 = 2; i2 <= Math.floor(num / 2); i2 += 1) {
      if (num % i2 === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const randomNum = Math.floor(100 * Math.random());
  console.log(`${'Question: '}${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (randomNum === 2 || randomNum === 3) {
    result = 'yes';
  } else if (randomNum <= 1) {
    result = 'no';
  }
  result = doesNumberIsPrime(randomNum);
  return { result, userAnswer };
};
export default playBrainPrime;
