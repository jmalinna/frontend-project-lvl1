import play from '../index.js';
import randomNum from '../random-num.js';

const brainGcd = () => {
  let result;
  let num1 = randomNum();
  let num2 = randomNum();

  const question = `${'Question: '}${num1} ${num2}`;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
    result = num1 + num2;
  }
  return { result, question };
};
const playBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  play(brainGcd, description);
};
export default playBrainGcd;
