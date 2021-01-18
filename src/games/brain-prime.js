import play from '../index.js';
import randomNum from '../random-num.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    const notPrime = num % i === 0;
    if (notPrime) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  let answer;
  const num = randomNum();

  const question = `${'Question: '}${num}`;

  if (num === 2 || num === 3) {
    answer = 'yes';
  } else if (num <= 1) {
    answer = 'no';
  }
  answer = isPrime(num);
  return { answer, question };
};
const playBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(brainPrime, description);
};
export default playBrainPrime;
