import play from '../index.js';
import createRandomNum from '../random-num.js';

const createProgression = (randomNum1, randomNum2) => {
  let progression;
  const num1 = randomNum1;
  const num2 = randomNum2;

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
  const num1 = createRandomNum();
  const num2 = createRandomNum();

  const progression = createProgression(num1, num2);
  const progressionCount = 10;

  // returns an array with removed element
  const replaceRandomNumToDots = progression.splice(createRandomNum(progressionCount), 1, '..');
  const answer = replaceRandomNumToDots.toString();
  const replaceCommasToGaps = progression.toString().replace(sign, ' ');

  const question = replaceCommasToGaps;

  return { answer, question };
};
const playBrainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  play(brainProgression, gameDescription);
};
export default playBrainProgression;
