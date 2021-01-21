import play from '../index.js';
import createRandomNum from '../random-num.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  const num = createRandomNum();
  const question = num;

  const answer = isEven(num) ? 'yes' : 'no';
  return { answer, question };
};

const playBrainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(brainEven, gameDescription);
};
export default playBrainEven;
