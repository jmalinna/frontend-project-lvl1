import play from '../index.js';
import randomNum from '../random-num.js';

const createProgression = (num1, num2) => {
  let progression;
  if (num1 < num2) {
    progression = [num1, num2];
    for (let n = 3; n <= 10; n += 1) {
      const nextNum = num1 + ((num2 - num1) * (n - 1));
      progression.push(nextNum);
    }
  } else {
    progression = [num2, num1];
    for (let n = 3; n <= 10; n += 1) {
      const nextNum = num2 + ((num1 - num2) * (n - 1));
      progression.push(nextNum);
    }
  }
  return progression;
};

const brainProgression = () => {
  const sign = /,/g;
  const num1 = randomNum();
  const num2 = randomNum();

  const progression = createProgression(num1, num2);

  const changedNum = progression.splice(Math.floor(10 * Math.random()), 1, '..');
  const result = changedNum.toString();
  const progString = progression.toString();
  const newString = progString.replace(sign, ' ');

  const question = `${'Question: '}${newString}`;
  return { result, question };
};
const playBrainProgression = () => {
  play(brainProgression, 'What number is missing in the progression?');
};
export default playBrainProgression;
