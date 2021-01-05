/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainEven = () => {
  const doesRandomNumberIsEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  const randomNum = Math.floor(100 * Math.random());
  console.log(`${'Question: '}${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const result = doesRandomNumberIsEven(randomNum);
  return { result, userAnswer };
};
export default playBrainEven;
