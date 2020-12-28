#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const doesNumberIsPrime = (number) => {
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const main = () => {
  let i = 0;
  let result;
  let randomNumber;
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (i < 3) {
    randomNumber = Math.floor(100 * Math.random());
    console.log(`${'Question: '}${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (randomNumber === 2 || randomNumber === 3) {
      result = 'yes';
    } else if (randomNumber <= 1) {
      result = 'no';
    }
    result = doesNumberIsPrime(randomNumber);
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

main();
