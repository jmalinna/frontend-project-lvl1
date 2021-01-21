import play from '../index.js';
import createRandomNum from '../random-num.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const num = createRandomNum();
  const question = num;

  const answer = isPrime(num) ? 'yes' : 'no';

  return { answer, question };
};
const playBrainPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(brainPrime, gameDescription);
};
export default playBrainPrime;
