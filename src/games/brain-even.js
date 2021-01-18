import play from '../index.js';
import randomNum from '../random-num.js';

const isEven = (num) => {
  const evenNum = num % 2 === 0;
  return evenNum ? 'yes' : 'no';
};

const brainEven = () => {
  const num = randomNum();
  const question = `${'Question: '}${num}`;

  const answer = isEven(num);
  return { answer, question };
};
const playBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(brainEven, description);
};
export default playBrainEven;
