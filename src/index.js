/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const play = (game, params) => {
  let i = 0;
  let result;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(params.question);

  while (i < 3) {
    result = game(name); // { result, userAnswer }
    if (result.result === result.userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${result.userAnswer}\' is wrong answer ;(. Correct answer was \'${result.result}\'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default play;
