/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const playBrainProgression = (name) => {
  let i = 0;
  let progression;
  let userAnswer;
  let num1;
  let num2;
  let nextNum;
  let result;
  const sign = /,/g;

  console.log('What number is missing in the progression?');

  while (i < 3) {
    num1 = Math.floor(100 * Math.random());
    num2 = Math.floor(100 * Math.random());

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
    result = changedNum.toString();
    const progString = progression.toString();
    const newString = progString.replace(sign, ' ');
    console.log(`${'Question: '}${newString}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainProgression;
