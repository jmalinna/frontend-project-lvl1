import play from '../index.js';
import randomNum from '../random-num.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  const num = randomNum();
  const question = num;

  const answer = isEven(num) ? 'yes' : 'no';
  return { answer, question };
};
const playBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(brainEven, description);
};
export default playBrainEven;
