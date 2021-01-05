/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainProgression = () => {
  let progression;
  let nextNum;
  const sign = /,/g;

  const num1 = Math.floor(100 * Math.random());
  const num2 = Math.floor(100 * Math.random());

  if (num1 < num2) {
    progression = [num1, num2];
    for (let n = 3; n <= 10; n += 1) {
      nextNum = num1 + ((num2 - num1) * (n - 1));
      progression.push(nextNum);
    }
  } else {
    progression = [num2, num1];
    for (let n = 3; n <= 10; n += 1) {
      nextNum = num2 + ((num1 - num2) * (n - 1));
      progression.push(nextNum);
    }
  }

  const changedNum = progression.splice(Math.floor(10 * Math.random()), 1, '..');
  const result = changedNum.toString();
  const progString = progression.toString();
  const newString = progString.replace(sign, ' ');

  console.log(`${'Question: '}${newString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { result, userAnswer };
};
export default playBrainProgression;
