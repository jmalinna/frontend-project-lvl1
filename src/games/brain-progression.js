import play from '../index.js';
import createRandomNum from '../random-num.js';

const createProgression = (randomNum, progressionStep, progressionLength) => {
  const progression = [randomNum];

  for (let i = 0; i < progressionLength; i += 1) {
    const num = progression[i] + progressionStep;
    progression.push(num);
  }

  return progression;
};

const brainProgression = () => {
  const num = createRandomNum();
  const progressionLength = createRandomNum(5, 10);
  const progressionStep = createRandomNum(0, 50);

  let progression = createProgression(num, progressionStep, progressionLength);
  const randomIndex = createRandomNum(0, progression.length);
  const answer = progression[randomIndex].toString();

  progression[randomIndex] = '..';
  progression = progression.join(' ');

  const question = progression;

  return { answer, question };
};

const gameDescription = 'What number is missing in the progression?';
const playBrainProgression = () => {
  play(brainProgression, gameDescription);
};
export default playBrainProgression;
