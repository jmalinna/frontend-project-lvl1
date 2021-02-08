import play from '../index.js';
import createRandomNum from '../random-num.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = createRandomNum();
  const question = num;

  const answer = isEven(num) ? 'yes' : 'no';

  return { answer, question };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const playBrainEven = () => {
  play(brainEven, gameDescription);
};
export default playBrainEven;
