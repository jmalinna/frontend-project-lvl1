import play from '../index.js';
import randomNum from '../random-num.js';

const doesNumberIsPrime = (num) => {
  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    const isPrime = num % i === 0;
    if (isPrime) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  let result;
  const num = randomNum();

  const question = `${'Question: '}${num}`;

  if (num === 2 || num === 3) {
    result = 'yes';
  } else if (num <= 1) {
    result = 'no';
  }
  result = doesNumberIsPrime(num);
  return { result, question };
};
const playBrainPrime = () => {
  play(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default playBrainPrime;
