import play from '../index.js';
import createRandomNum from '../random-num.js';

const createProgression = (randomNum1, randomNum2) => {
  const num1 = randomNum1;
  const num2 = randomNum2;

  const progression = [num1, num2];
  const progressionStep = num2 - num1;
  const progressionLength = createRandomNum(5, 10);

  for (let i = 1; i < progressionLength; i += 1) {
    const num = progression[i] + progressionStep;
    progression.push(num);
  }

  return progression;
};

const brainProgression = () => {
  const num1 = createRandomNum();
  const num2 = createRandomNum();

  let progression = createProgression(num1, num2);
  const randomIndex = createRandomNum(0, progression.length);
  const answer = progression[randomIndex].toString();

  progression[randomIndex] = '..';
  progression = progression.join(' ');

  const question = progression;

  return { answer, question };
};

const playBrainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  play(brainProgression, gameDescription);
};
export default playBrainProgression;
