import play from '../index.js';
import randomNum from '../random-num.js';

const findGreatestCommonDivisor = (number1, number2) => {
  let result;
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
    result = num1 + num2;
  }
  return result;
};

const brainGcd = () => {
  const num1 = randomNum();
  const num2 = randomNum();

  const question = `${num1} ${num2}`;

  const answer = findGreatestCommonDivisor(num1, num2).toString();

  return { answer, question };
};
const playBrainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  play(brainGcd, gameDescription);
};
export default playBrainGcd;
