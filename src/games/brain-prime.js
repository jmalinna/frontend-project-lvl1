import play from '../index.js';
import randomNum from '../random-num.js';

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
  const num = randomNum();
  const question = num;

  const answer = isPrime(num) ? 'yes' : 'no';

  return { answer, question };
};
const playBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(brainPrime, description);
};
export default playBrainPrime;
