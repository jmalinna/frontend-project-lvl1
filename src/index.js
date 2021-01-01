/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';
import playBrainCalc from './games/brain-calc.js';
import playBrainEven from './games/brain-even.js';
import playBrainGcd from './games/brain-gcd.js';
import playBrainPrime from './games/brain-prime.js';
import playBrainProgression from './games/brain-progression.js';

const play = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  switch (game) {
    case 'brain-calc':
      playBrainCalc(name);
      break;
    case 'brain-even':
      playBrainEven(name);
      break;
    case 'brain-gcd':
      playBrainGcd(name);
      break;
    case 'brain-prime':
      playBrainPrime(name);
      break;
    case 'brain-progression':
      playBrainProgression(name);
      break;
    default:
      playBrainCalc(name);
  }
  console.log(`Congratulations, ${name}!`);
};
export default play;
